"use client";

import { Component, createRef, useEffect } from "react";
import gsap from "gsap";
import { useStore, type ViewMode } from "@/store/useStore";

const STORAGE_KEY = "personal-website-view-mode";

// ─── Store wrapper (hooks can't live in class components) ────────────────────
function WimbledonToggleWrapper() {
  const { viewMode, setViewMode } = useStore();
  const is3D = viewMode === "3d";

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ViewMode | null;
    if (stored === "3d" || stored === "barebones") setViewMode(stored);
  }, [setViewMode]);

  const handleToggle = () => {
    const next: ViewMode = is3D ? "barebones" : "3d";
    setViewMode(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return <WimbledonToggleClass on={is3D} onToggle={handleToggle} />;
}

// ─── Class component mirrors the CodePen logic (GSAP 3 API) ─────────────────
type Props = { on: boolean; onToggle: () => void };

class WimbledonToggleClass extends Component<Props> {
  private _tl: gsap.core.Timeline | null = null;
  private _hoverTl: gsap.core.Timeline | null = null;
  private _hoverSfx: HTMLAudioElement | null = null;
  private mainBall = createRef<SVGGElement>();
  private ballShadow = createRef<SVGCircleElement>();
  private toggleBg = createRef<SVGGElement>();
  private ballPattern = createRef<SVGPatternElement>();
  private hitRings = createRef<SVGGElement>();

  toggle = () => {
    if (this._tl?.isActive()) return;
    // Stop wind sound if hovering when clicked
    if (this._hoverSfx) {
      this._hoverSfx.pause();
      this._hoverSfx.currentTime = 0;
      this._hoverSfx = null;
    }
    const sfx = new Audio(
      this.props.on ? "/Audio/tennisball2.mp3" : "/Audio/tennisball1.mp3"
    );
    sfx.volume = 1.0;
    sfx.play().catch(() => {});
    this.props.onToggle();
  };

  onHoverStart = () => {
    const mainBall = this.mainBall.current;
    const ballPattern = this.ballPattern.current;
    if (!mainBall || !ballPattern) return;

    // Play wind sound, looping softly while hovering
    this._hoverSfx = new Audio("/Audio/wind_sound.mp3");
    this._hoverSfx.volume = 1.0;
    this._hoverSfx.loop = false;
    this._hoverSfx.play().catch(() => {});

    this._hoverTl?.kill();
    this._hoverTl = gsap.timeline();

    // Rapidly spin the Wimbledon lines (wind rotating the ball)
    this._hoverTl.to(
      ballPattern,
      {
        duration: 1.8,
        attr: { x: "+=276", y: "+=60" }, // 3 full pattern cycles
        ease: "power2.out",
      },
      0
    );

    // Ball lifts and vibrates like it's being blown
    this._hoverTl.to(
      mainBall,
      {
        duration: 0.12,
        y: -5,
        ease: "power2.out",
        yoyo: true,
        repeat: 5,
      },
      0
    );

    // Slight horizontal drift (wind pushing right)
    this._hoverTl.to(
      mainBall,
      {
        duration: 0.6,
        skewX: 8,
        ease: "elastic.out(1, 0.4)",
      },
      0
    );
  };

  onHoverEnd = () => {
    const mainBall = this.mainBall.current;
    if (!mainBall) return;

    // Stop wind sound immediately
    if (this._hoverSfx) {
      this._hoverSfx.pause();
      this._hoverSfx.currentTime = 0;
      this._hoverSfx = null;
    }

    this._hoverTl?.kill();
    this._hoverTl = null;

    // Settle back smoothly
    gsap.to(mainBall, {
      duration: 0.4,
      y: 0,
      skewX: 0,
      ease: "elastic.out(1, 0.5)",
    });
  };

  componentDidMount() {
    const { mainBall, hitRings } = this;
    if (!mainBall.current || !hitRings.current) return;
    const on = this.props.on;
    // Snap to correct position with no animation on first render
    gsap.set(hitRings.current, { x: on ? 23 : -23 });
    gsap.set(mainBall.current, { x: on ? 76 : 1 });
  }

  componentDidUpdate(prevProps: Props) {
    // Only animate when the `on` prop actually flips
    if (prevProps.on === this.props.on) return;

    const mainBall = this.mainBall.current;
    const toggleBg = this.toggleBg.current;
    const ballPattern = this.ballPattern.current;
    const hitRings = this.hitRings.current;
    if (!mainBall || !ballPattern || !hitRings) return;

    const on = this.props.on;
    const xSpin = on ? `+=${Math.random() * 50}` : `-=${Math.random() * 50}`;
    const ySpin = on
      ? `+=${Math.random() * 25 + 15}`
      : `-=${Math.random() * 25 - 15}`;

    // Kill any running timelines
    this._tl?.kill();
    this._hoverTl?.kill();
    this._hoverTl = null;
    this._tl = gsap.timeline({ timeScale: 30 });

    const tl = this._tl;

    tl.set(hitRings, { x: on ? 23 : -23 });

    // ── 1. Wind burst at take-off ────────────────────────────────────────────
    tl.to(
      mainBall,
      { duration: 0.08, skewX: on ? 12 : -12, ease: "power3.out" },
      0
    );
    tl.to(
      mainBall,
      { duration: 0.05, y: -3, ease: "power2.out", yoyo: true, repeat: 2 },
      0
    );
    tl.to(
      ballPattern,
      {
        duration: 0.2,
        attr: { x: `+=${on ? 120 : -120}`, y: `+=${on ? 25 : -25}` },
        ease: "power3.out",
      },
      0
    );

    // ── 2. Ball slide ────────────────────────────────────────────────────────
    tl.to(
      mainBall,
      { duration: 0.35, x: on ? 76 : 1, ease: "power3.out" },
      0.04
    );
    tl.to(toggleBg, { duration: 0.35, ease: "power2.inOut" }, 0.04);

    // ── 3. Impact squash — always from centre to avoid accumulated x drift ──
    tl.to(
      mainBall,
      {
        duration: 0.06,
        scaleX: 0.55,
        scaleY: 1.25,
        skewX: 0,
        y: 0,
        ease: "power3.in",
        transformOrigin: "50% 50%",
      },
      0.3
    );
    // ── 4. Hit rings ─────────────────────────────────────────────────────────
    const rings = hitRings.querySelectorAll(".ballHitRing");
    tl.fromTo(
      rings,
      { strokeWidth: 10, attr: { r: 0 }, opacity: 0.6 },
      {
        duration: 0.25,
        strokeWidth: 0,
        attr: { r: 32 },
        opacity: 0,
        ease: "power2.out",
        stagger: 0.05,
      },
      0.33
    );

    // ── 5. Elastic bounce back ───────────────────────────────────────────────
    tl.to(
      mainBall,
      {
        duration: 0.22,
        scaleX: 1,
        scaleY: 1,
        ease: "elastic.out(1.3, 0.4)",
        transformOrigin: "50% 50%",
      },
      0.36
    );
    // ── 6. Pattern spin settle ───────────────────────────────────────────────
    tl.to(
      ballPattern,
      { duration: 0.35, attr: { x: xSpin, y: ySpin }, ease: "power2.inOut" },
      0.2
    );

    // ── 7. Hard-correct final position — prevents drift on rapid toggling ────
    tl.set(mainBall, {
      x: on ? 76 : 1,
      y: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1,
      transformOrigin: "50% 50%",
    });
  }

  render() {
    return (
      <div
        style={{ width: 110, height: 66, minWidth: 110, flexShrink: 0 }}
        aria-label={
          this.props.on ? "Switch to simple view" : "Switch to 3D view"
        }
      >
        <svg
          viewBox="305 255 200 90"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="110"
          height="66"
          style={{ display: "block", overflow: "visible" }}
        >
          <defs>
            <radialGradient
              id="wt-shineGrad"
              cx={350}
              cy={290}
              r={30}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.01" stopColor="#fff" stopOpacity="0.25" />
              <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
            </radialGradient>

            <radialGradient
              id="wt-ballGrad"
              cx={358}
              cy={298}
              r={30}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.5" stopColor="#FABE2B" stopOpacity={0} />
              <stop offset="0.8" stopColor="#CCE256" stopOpacity="0.15" />
              <stop offset="1" stopColor="#9BB522" stopOpacity="0.65" />
            </radialGradient>

            <filter
              id="wt-dropShadow"
              width="300%"
              height="300%"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur
                id="wt-shadowBlur"
                stdDeviation="3"
                result="coloredBlur"
              />
              <feOffset dx="0" dy="6" result="offsetblur" />
              <feFlood floodColor="#000" floodOpacity="0.18" />
              <feComposite in2="offsetblur" operator="in" />
              <feMerge>
                <feMergeNode />
              </feMerge>
            </filter>

            <pattern
              id="wt-ballPattern"
              ref={this.ballPattern}
              width="92"
              height="92"
              patternTransform="translate(38 -16)"
              patternUnits="userSpaceOnUse"
              viewBox="0 0 92 92"
              x={0}
              y={0}
            >
              <rect width="92" height="92" fill="none" />
              <path
                d="M0,6.9C24.84,6.9,36.21,25.35,36.21,46S23.61,85.1,0,85.1"
                fill="none"
                stroke="#C6D4CF"
                strokeWidth="3.4"
                strokeMiterlimit="10"
              />
              <path
                d="M92,85.1C69.72,85.1,55.79,66.65,55.79,46S71.93,6.9,92,6.9"
                fill="none"
                stroke="#C6D4CF"
                strokeWidth="3.4"
                strokeMiterlimit="10"
              />
            </pattern>

            <filter id="wt-inset">
              <feOffset dx="0" dy="-4" />
              <feGaussianBlur stdDeviation="2.5" result="offset-blur" />
              <feComposite
                operator="out"
                in="SourceGraphic"
                in2="offset-blur"
                result="inverse"
              />
              <feFlood floodColor="black" floodOpacity="0.5" result="color" />
              <feComposite
                operator="in"
                in="color"
                in2="inverse"
                result="shadow"
              />
              <feComposite operator="over" in="shadow" in2="SourceGraphic" />
            </filter>

            {/* Court pill shape reused via <use> */}
            <rect
              id="wt-court"
              x={320}
              y={260}
              width={160}
              height={80}
              rx={40}
              ry={40}
            />
            <clipPath id="wt-courtClip">
              <use xlinkHref="#wt-court" />
            </clipPath>

            {/* Tennis net */}
            <g id="wt-net">
              <line
                x1={2}
                y1={2}
                x2={2}
                y2={102}
                stroke="#FFF"
                strokeDasharray="10 5"
                strokeWidth="1"
              />
              <circle cx={2} cy={2} r={2} fill="#fbb03b" />
              <circle cx={2} cy={102} r={2} fill="#fbb03b" />
            </g>
          </defs>
          {/* Court fill */}
          <use xlinkHref="#wt-court" fill="#186839" stroke="none" />
          {/* Court lines (clipped inside the pill) */}
          <g clipPath="url(#wt-courtClip)">
            <g ref={this.toggleBg} filter="url(#wt-inset)" opacity={0.23}>
              <line x1={400} x2={400} y1={260} y2={340} stroke="#FFF" />
              <line x1={360} x2={360} y1={275} y2={325} stroke="#FFF" />
              <line x1={440} x2={440} y1={275} y2={325} stroke="#FFF" />
              <line x1={360} x2={440} y1={300} y2={300} stroke="#FFF" />
              <line x1={320} x2={480} y1={275} y2={275} stroke="#FFF" />
              <line x1={320} x2={480} y1={325} y2={325} stroke="#FFF" />
            </g>
          </g>
          {/* Court outline */}
          <use
            xlinkHref="#wt-court"
            fill="none"
            stroke="#FFF"
            strokeWidth={3}
          />
          {/* Net post */}
          <use xlinkHref="#wt-net" x={398} y={248} />
          {/* Ball drop shadow — sits tight beneath the ball
          <circle
            ref={this.ballShadow}
            filter="url(#wt-dropShadow)"
            cx={362}
            cy={302}
            r={26}
            fill="#000"
            opacity={0.3}
          /> */}
          {/* 2D label on left, 3D label on right */}
          <text
            x={352}
            y={300}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FFF"
            fontSize={26}
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
            style={{ userSelect: "none" }}
          >
            2D
          </text>
          <text
            x={450}
            y={300}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#FFF"
            fontSize={26}
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
            style={{ userSelect: "none" }}
          >
            3D
          </text>
          {/* Hit rings (expand on click) */}
          <g ref={this.hitRings}>
            <circle
              className="ballHitRing"
              cx={400}
              cy={300}
              r={0}
              fill="none"
              stroke="#FFF"
              strokeWidth={30}
              opacity={1}
            />
            <circle
              className="ballHitRing"
              cx={400}
              cy={300}
              r={0}
              fill="none"
              stroke="#FFF"
              strokeWidth={30}
              opacity={1}
            />
          </g>
          {/* Tennis ball */}
          <g ref={this.mainBall}>
            <circle cx={358} cy={300} r={30} fill="#DDED56" />
            <circle cx={358} cy={300} r={30} fill="url(#wt-ballPattern)" />
            <circle cx={358} cy={300} r={30} fill="url(#wt-ballGrad)" />
            <circle cx={358} cy={300} r={30} fill="url(#wt-shineGrad)" />
          </g>
          {/* Invisible click + hover target over the whole court */}
          <use
            xlinkHref="#wt-court"
            fill="transparent"
            stroke="none"
            onClick={this.toggle}
            onMouseEnter={this.onHoverStart}
            onMouseLeave={this.onHoverEnd}
            style={{ cursor: "pointer" }}
          />
        </svg>
      </div>
    );
  }
}

export function WimbledonToggle() {
  return <WimbledonToggleWrapper />;
}
