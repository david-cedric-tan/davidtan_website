"use client";

import { useState, useEffect } from "react";

type TabId = "profile" | "exp" | "projects" | "extra";

const T = {
  bg: "#1B1B1C", nBg: "#000000", nb: "#2A2A2A",
  ac: "#FFA732", tp: "#FFFFFF", ts: "#8DBFC3",
  tm: "#7A7878", sl: "#8DBFC3", bd: "#525050", sf: "#262626",
};

// ── Helpers ───────────────────────────────────────────────────────────────────
const HR = (): React.CSSProperties => ({ height: 1, background: T.bd, margin: "10px 0" });
const HDR = (): React.CSSProperties => ({
  fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
  textTransform: "uppercase" as const, color: T.sl, marginBottom: 8,
});

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 13, lineHeight: 1.75, color: T.ts, paddingLeft: 14, position: "relative", marginBottom: 4 }}>
      <span style={{ position: "absolute", left: 0 }}>·</span>
      {children}
    </div>
  );
}

// ── Profile content (used in left panel desktop + Profile tab mobile) ──────────
function ProfileContent({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {/* Photo + name */}
      <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
        <img src="/img/main_prof.jpg" alt="David Tan" style={{
          width: isMobile ? 84 : 80, height: isMobile ? 84 : 80,
          borderRadius: "50%", objectFit: "cover", objectPosition: "center 15%",
          flexShrink: 0, border: `2px solid ${T.ac}`,
        }} />
        <div>
          <div style={{ fontWeight: 700, fontSize: isMobile ? 16 : 14, color: T.ac, lineHeight: 1.3, marginBottom: 4 }}>
            DAVID CEDRIC CHAN TAN
          </div>
          <div style={{ fontSize: 13, color: T.ts, marginBottom: 3 }}>Software Development &amp; Finance</div>
          <div style={{ fontSize: 13, color: T.tm }}>📍 Sydney, Australia</div>
        </div>
      </div>

      {/* Bio */}
      <div style={{ fontSize: 13, color: T.ts, lineHeight: 1.75, marginBottom: 14 }}>
        Penultimate-year student (BAdvComp&nbsp;/ BCom) building technology-driven
        solutions at the intersection of software engineering and financial markets.
      </div>

      <div style={HR()} />

      {/* Education */}
      <div style={HDR()}>Education</div>
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: T.tp }}>B. Advanced Computing + B. Commerce</span>
          <span style={{ fontSize: 12, color: T.tm }}>2022 – 2027</span>
        </div>
        <div style={{ fontSize: 13, color: T.tm, marginBottom: 2 }}>University of Sydney</div>
        <div style={{ fontSize: 13, color: T.ts }}>Major: Software Development &amp; Finance</div>
      </div>

      <div style={HR()} />

      {/* Key stats */}
      <div style={HDR()}>Key Stats</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 16px", marginBottom: 12 }}>
        {[["Status","Penultimate"],["Grad","Nov 2027"],["Work Auth","AUS · PHL"],["Roles","SWE · Data · Finance"]].map(([k,v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: T.tm }}>{k}</span>
            <span style={{ fontSize: 12, color: T.tp }}>{v}</span>
          </div>
        ))}
      </div>

      <div style={HR()} />

      {/* Languages */}
      <div style={HDR()}>Languages</div>
      <div style={{ fontSize: 13, color: T.tp, lineHeight: 2.1 }}>
        English<br />Mandarin Chinese<br />Tagalog
      </div>

      {/* Skills on mobile (merged into profile tab) */}
      {isMobile && (
        <>
          <div style={HR()} />
          <div style={HDR()}>Skills</div>
          {[
            ["Programming", "Python · Java · SQL · PostgreSQL · R"],
            ["Frameworks",  "Django · Django ORM · Django REST Framework"],
            ["Tools",       "Git · Postman · Jenkins CI/CD · Jira"],
            ["Cloud",       "AWS — EC2 · ALB · ASG · S3 · RDS · CloudWatch"],
          ].map(([lbl, val]) => (
            <div key={lbl} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.sl, marginBottom: 3, letterSpacing: "0.1em" }}>{lbl.toUpperCase()}</div>
              <div style={{ fontSize: 13, color: T.ts, lineHeight: 1.65 }}>{val}</div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

// ── Desktop: right pane — Skills / Contact ────────────────────────────────────
function PaneProfile() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: "100%", gap: 1, background: T.bd }}>
      <div style={{ padding: 20, background: T.bg, overflowY: "auto" }}>
        <div style={HDR()}>Skills</div>
        {[
          ["Programming", "Python · Java · SQL · PostgreSQL · R"],
          ["Frameworks",  "Django · Django ORM · Django REST Framework"],
          ["Tools",       "Git · Postman · Jenkins CI/CD · Jira"],
          ["Cloud",       "AWS — EC2 · ALB · ASG · S3 · RDS · CloudWatch"],
          ["Methodology", "Scrum · Agile"],
        ].map(([lbl, val], i) => (
          <div key={lbl} style={{ marginBottom: 12 }}>
            {i > 0 && <div style={{ height: 1, background: T.bd, margin: "0 0 12px" }} />}
            <div style={{ fontSize: 10, fontWeight: 700, color: T.sl, marginBottom: 4, letterSpacing: "0.1em" }}>{lbl.toUpperCase()}</div>
            <div style={{ fontSize: 13, color: T.ts, lineHeight: 1.7 }}>{val}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: 20, background: T.bg, overflowY: "auto" }}>
        <div style={HDR()}>Contact</div>
        <div style={{ fontSize: 13, color: T.ac, marginBottom: 5 }}>davidcedricctan@gmail.com</div>
        <div style={{ fontSize: 13, color: T.tp, marginBottom: 5 }}>+61 478 505 217</div>
        <a href="https://github.com/david-cedric-tan" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: T.ac, marginBottom: 5, display: "block", textDecoration: "none" }}>github.com/david-cedric-tan</a>
        <a href="https://au.linkedin.com/in/davidcedricctan" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: T.ac, marginBottom: 18, display: "block", textDecoration: "none" }}>linkedin.com/in/davidcedricctan</a>
        <div style={{ height: 1, background: T.bd, marginBottom: 14 }} />
        <div style={HDR()}>Key Coursework</div>
        {["Data Structures & Algorithms","Data & Information Management",
          "Software Dev Capstone Project","Web Information Systems",
          "Business Consulting Practicum","AWS Cloud Computing (In Progress)"].map(c => (
          <Bullet key={c}>{c}</Bullet>
        ))}
      </div>
    </div>
  );
}

// ── Experience ────────────────────────────────────────────────────────────────
function PaneExp() {
  const roles = [
    { co: "PwC Philippines (Isla Lipana & Co.)", loc: "Makati, Philippines",
      role: "Digital Solutions Development Intern", date: "Jan 2026 – Feb 2026",
      bullets: [
        "Translated 90+ MS Access queries into production-ready T-SQL scripts for a large-scale Workday HR payroll migration",
        "Resolved cross-platform compatibility — date conversions (CAST/CONVERT/GETDATE), NULL-handling and CASE conditional logic",
        "Wrote CREATE TABLE scripts for 5 payroll tables with full field-mapping documentation to support deployment",
      ]},
    { co: "BIOTech Futures", loc: "USYD Capstone",
      role: "Backend Software Engineer", date: "Aug 2025 – Nov 2025",
      bullets: [
        "Designed PostgreSQL schema + Django ORM supporting roles, groups, events, resources and audit logging for a production-scale mentoring platform",
        "Implemented RBAC and full CRUD REST APIs — role grant/revoke logic, filtering, pagination, and permissions enforcement",
        "Integrated Azure Blob Storage for secure file uploads; increased test coverage from ~25% to ~72%",
      ]},
    { co: "JB – HiFi Limited", loc: "World Square, Sydney",
      role: "Retail Salesperson", date: "Jul 2023 – Jul 2024",
      bullets: [
        "Delivered tailored tech solutions across 8 product categories, consistently exceeding weekly targets up to AUD $30,000",
        "Maintained Gold Star performance record across all monthly KPIs",
      ]},
  ];
  return (
    <div style={{ padding: 20, background: T.bg, height: "100%", overflowY: "auto" }}>
      <div style={HDR()}>Work Experience</div>
      {roles.map((r, i) => (
        <div key={r.co}>
          {i > 0 && <div style={HR()} />}
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4, marginBottom: 3 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: T.tp }}>{r.co}</span>
            <span style={{ fontSize: 11, color: T.tm }}>{r.loc}</span>
          </div>
          <div style={{ fontSize: 13, color: T.ac, marginBottom: 3 }}>{r.role}</div>
          <div style={{ fontSize: 11, color: T.tm, marginBottom: 8 }}>{r.date}</div>
          {r.bullets.map(b => <Bullet key={b}>{b}</Bullet>)}
        </div>
      ))}
    </div>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────
function PaneProjects() {
  return (
    <div style={{ padding: 20, background: T.bg, height: "100%", overflowY: "auto" }}>
      <div style={HDR()}>Projects</div>
      {[
        { name: "Cloud PDF Processing Platform", tech: "AWS · Python Flask",
          bullets: [
            "Implemented EC2, S3, RDS, ALB and Auto Scaling Groups to deploy a scalable PDF processing platform",
            "Utilised CloudWatch to monitor CPU utilisation and evaluate Auto Scaling behaviour under load",
          ]},
        { name: "Secure Messaging Application", tech: "Java · SQLite · TLS · HTTPS",
          bullets: [
            "Developed an end-to-end encrypted platform with HTTPS, TLS certificates and encryption for secure communication",
            "Configured DuckDNS hosting to enable remote access and cross-network testing by team members",
          ]},
      ].map((p, i) => (
        <div key={p.name}>
          {i > 0 && <div style={HR()} />}
          <div style={{ fontSize: 14, fontWeight: 700, color: T.tp, marginBottom: 3 }}>{p.name}</div>
          <div style={{ fontSize: 13, color: T.ac, marginBottom: 8 }}>{p.tech}</div>
          {p.bullets.map(b => <Bullet key={b}>{b}</Bullet>)}
        </div>
      ))}
    </div>
  );
}

// ── Extracurriculars ──────────────────────────────────────────────────────────
function PaneExtra() {
  return (
    <div style={{ padding: 20, background: T.bg, height: "100%", overflowY: "auto" }}>
      <div style={HDR()}>Extracurriculars</div>
      {[
        { org: "OpenxAI Hack Node Australia", date: "Aug – Sep 2025",
          role: "Hackathon Member",
          bullets: [
            "Co-designed Mood Messenger — an AI social networking solution using emotion detection and gamified virtual economies",
            "Addressed emotional miscommunication in digital interactions to improve community connection in real-time messaging",
          ]},
        { org: "Enactus University of Sydney", date: "Aug 2023 – Jul 2025",
          role: "Research & Development Engineer",
          bullets: [
            "Contributed to sustainability startup development under Enactus USYD",
            "Received the IBM Experience Day Pitching Prize",
            "Participated in the 2024 EY-Enactus Mentorship Program",
          ]},
      ].map((x, i) => (
        <div key={x.org}>
          {i > 0 && <div style={HR()} />}
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4, marginBottom: 3 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: T.tp }}>{x.org}</span>
            <span style={{ fontSize: 11, color: T.tm }}>{x.date}</span>
          </div>
          <div style={{ fontSize: 13, color: T.ac, marginBottom: 8 }}>{x.role}</div>
          {x.bullets.map(b => <Bullet key={b}>{b}</Bullet>)}
        </div>
      ))}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export function BloombergView() {
  const [tab, setTab] = useState<TabId>("profile");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const TABS: { id: TabId; label: string }[] = [
    { id: "profile",  label: isMobile ? "Profile" : "Profile" },
    { id: "exp",      label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "extra",    label: isMobile ? "Extra" : "Extracurriculars" },
  ];

  return (
    <div style={{
      width: "100vw", height: "100dvh",
      background: T.nBg,
      fontFamily: "'JetBrains Mono', monospace",
      color: T.tp,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>

      {/* ── Top bar ── */}
      <div style={{
        background: T.nBg, borderBottom: `1px solid ${T.nb}`,
        padding: "0 16px", display: "flex", alignItems: "center",
        gap: 10, height: isMobile ? 44 : 36, flexShrink: 0,
      }}>
        <span style={{ background: T.ac, color: "#000", padding: "2px 10px", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em" }}>
          BLOOMBERG
        </span>
        {!isMobile && <span style={{ color: T.tm, fontSize: 11 }}>TERMINAL</span>}
        {!isMobile && <div style={{ width: 1, height: 16, background: T.nb }} />}
        {!isMobile && <span style={{ color: T.ts, fontSize: 10 }}>DCT PORTFOLIO SYSTEM</span>}
        <div style={{ flex: 1 }} />
        {!isMobile && <span style={{ color: T.tm, fontSize: 10 }}>MON 02 JUN 2026</span>}
        <span style={{ color: T.ac, fontSize: 10 }}>13:28:44</span>
      </div>

      {/* ── Function tabs (desktop only) ── */}
      {!isMobile && (
        <div style={{
          background: T.nBg, borderBottom: `1px solid ${T.nb}`,
          display: "flex", height: 28, flexShrink: 0,
        }}>
          {["RMAP","CV","EXP","SKL","PROJ"].map(lbl => (
            <span key={lbl} style={{
              padding: "0 14px", fontSize: 10, display: "flex", alignItems: "center",
              color: T.tm, borderRight: `1px solid ${T.nb}`,
            }}>{lbl}</span>
          ))}
          <span style={{
            padding: "0 14px", fontSize: 10, fontWeight: 700,
            display: "flex", alignItems: "center",
            background: T.ac, color: "#000", borderRight: `1px solid ${T.nb}`,
          }}>DES</span>
          <div style={{ flex: 1 }} />
          <span style={{
            padding: "0 14px", fontSize: 10, display: "flex", alignItems: "center",
            color: T.tm, borderLeft: `1px solid ${T.nb}`,
          }}>DS Candidate Search</span>
        </div>
      )}

      {/* ── Ticker row ── */}
      <div style={{
        background: "#111", padding: `0 ${isMobile ? 14 : 16}px`,
        display: "flex", alignItems: "center", gap: isMobile ? 8 : 14,
        height: isMobile ? 40 : 34, flexShrink: 0, flexWrap: "nowrap",
        overflow: "hidden",
      }}>
        <span style={{ color: T.ac, fontWeight: 700, fontSize: isMobile ? 18 : 17, flexShrink: 0 }}>DCT</span>
        <span style={{ color: T.tp, fontSize: isMobile ? 13 : 13, flexShrink: 0 }}>SYD</span>
        {!isMobile && <span style={{ color: T.tp, fontSize: 14, fontWeight: 700 }}>Penultimate Year</span>}
        <span style={{ color: T.ac, fontSize: isMobile ? 11 : 11, flexShrink: 0 }}>
          {isMobile ? "↑ SWE · Data Eng · Finance Intern" : "↑ SWE Intern · Data Engineering Intern · Finance Intern · 2 Projects"}
        </span>
        <div style={{ flex: 1 }} />
        {!isMobile && <>
          <span style={{ color: T.tm, fontSize: 11 }}>University of Sydney</span>
          <span style={{ color: T.tm, fontSize: 11 }}>B. Advanced Computing / B. Commerce</span>
          <span style={{ color: T.tm, fontSize: 11 }}>2022–2027</span>
        </>}
      </div>

      {/* ── Sub-tab bar ── */}
      <div style={{
        background: T.sf, borderBottom: `1px solid ${T.bd}`,
        display: "flex", height: isMobile ? 40 : 32, flexShrink: 0,
        overflowX: "auto", overflowY: "hidden",
      }}>
        {TABS.map(({ id, label }) => (
          <div
            key={id}
            onClick={() => setTab(id)}
            style={{
              padding: `0 ${isMobile ? 16 : 20}px`,
              fontSize: isMobile ? 12 : 11,
              display: "flex", alignItems: "center",
              cursor: "pointer", flexShrink: 0,
              color: tab === id ? T.ac : T.tm,
              fontWeight: tab === id ? 700 : 400,
              borderBottom: tab === id ? `2px solid ${T.ac}` : "2px solid transparent",
              transition: "all 0.15s",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* ── Main content ── */}
      {isMobile ? (
        /* Mobile: single column, profile tab shows ProfileContent */
        <div style={{ flex: 1, background: T.bg, overflowY: "auto", padding: 16 }}>
          {tab === "profile"  && <ProfileContent isMobile={true} />}
          {tab === "exp"      && <PaneExp />}
          {tab === "projects" && <PaneProjects />}
          {tab === "extra"    && <PaneExtra />}
        </div>
      ) : (
        /* Desktop: two-column layout */
        <div style={{
          flex: 1, display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 1, background: T.bd, overflow: "hidden",
        }}>
          {/* Left: always-visible profile */}
          <div style={{ padding: 20, background: T.bg, overflowY: "auto", height: "100%" }}>
            <ProfileContent isMobile={false} />
          </div>
          {/* Right: tab-switched */}
          <div style={{ overflow: "hidden", height: "100%" }}>
            {tab === "profile"  && <PaneProfile />}
            {tab === "exp"      && <PaneExp />}
            {tab === "projects" && <PaneProjects />}
            {tab === "extra"    && <PaneExtra />}
          </div>
        </div>
      )}

      {/* ── Status bar ── */}
      <div style={{
        background: T.nBg, borderTop: `1px solid ${T.nb}`,
        padding: "0 16px", display: "flex", alignItems: "center",
        gap: 20, height: isMobile ? 32 : 22, flexShrink: 0,
      }}>
        <span style={{ fontSize: isMobile ? 11 : 10, color: T.tm }}>DCT SYD Equity</span>
        <span style={{ fontSize: isMobile ? 11 : 10, color: T.ac }}>98) Full CV</span>
        <span style={{ fontSize: isMobile ? 11 : 10, color: T.ts }}>99) Contact</span>
        <div style={{ flex: 1 }} />
        {!isMobile && <span style={{ fontSize: 10, color: T.tm }}>davidcedricctan@gmail.com</span>}
      </div>
    </div>
  );
}
