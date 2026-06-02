"use client";

import { useState } from "react";
import { Html } from "@react-three/drei";

// ─── Types ────────────────────────────────────────────────────────────────────
type TabId = "profile" | "exp" | "projects" | "extra";

export type BloombergTheme =
  | "bloomberg" | "bloomberg1" | "bloomberg2" | "bloomberg3"
  | "hybrid" | "linen" | "applegray" | "morningdew" | "parchment"
  | "wimbledon" | "catppuccin" | "tokyo" | "nord";

interface BloombergScreenProps {
  themeName?: BloombergTheme;
}

// ─── Theme tokens (same as bloomberg-resume.html) ────────────────────────────
type ThemeTokens = { bg:string;nBg:string;nb:string;ac:string;tp:string;ts:string;tm:string;sl:string;bd:string;sf:string;dark:boolean };
const THEMES: Record<BloombergTheme, ThemeTokens> = {
  bloomberg:  {bg:"#0D0D0D",nBg:"#0D0D0D",nb:"#1E1E1E",ac:"#D04A02",tp:"#fff",ts:"#888",tm:"#444",sl:"#555",bd:"#2A2A2A",sf:"#161616",dark:true},
  bloomberg1: {bg:"#0D0D16",nBg:"#0A0A12",nb:"#1A1A2E",ac:"#F5C518",tp:"#E8E8F0",ts:"#8888A8",tm:"#44445A",sl:"#5DCFFF",bd:"#22223A",sf:"#12121E",dark:true},
  bloomberg2: {bg:"#0D0D0D",nBg:"#0D0D0D",nb:"#1E1E1E",ac:"#F07820",tp:"#fff",ts:"#999",tm:"#555",sl:"#666",bd:"#2A1A10",sf:"#180E08",dark:true},
  bloomberg3: {bg:"#1B1B1C",nBg:"#000000",nb:"#2A2A2A",ac:"#FFA732",tp:"#FFFFFF",ts:"#77A4A8",tm:"#525050",sl:"#77A4A8",bd:"#525050",sf:"#262626",dark:true},
  hybrid:     {bg:"#F7F3EE",nBg:"#0D0D0D",nb:"#222",  ac:"#D04A02",tp:"#1A1A1A",ts:"#7A7068",tm:"#B0A898",sl:"#B0A898",bd:"#DDD5C8",sf:"#EDE8E0",dark:true},
  linen:      {bg:"#F7F3EE",nBg:"#F7F3EE",nb:"#E8E2D8",ac:"#1A1A1A",tp:"#1A1A1A",ts:"#7A7068",tm:"#B0A898",sl:"#C0B8B0",bd:"#DDD5C8",sf:"#EDE8E0",dark:false},
  applegray:  {bg:"#F5F5F7",nBg:"#F5F5F7",nb:"#E5E5EA",ac:"#1D1D1F",tp:"#1D1D1F",ts:"#6E6E73",tm:"#AEAEB2",sl:"#C7C7CC",bd:"#D8D8DC",sf:"#EBEBF0",dark:false},
  morningdew: {bg:"#F4F6F5",nBg:"#F4F6F5",nb:"#E2E8E4",ac:"#2A6E50",tp:"#111",  ts:"#5A7068",tm:"#9AADA3",sl:"#B0C0B8",bd:"#D0DCD5",sf:"#E8EDEA",dark:false},
  parchment:  {bg:"#F8F6F0",nBg:"#F8F6F0",nb:"#EAE6DC",ac:"#8B6914",tp:"#1A1A1A",ts:"#6A6050",tm:"#B8B0A0",sl:"#C0B8A8",bd:"#DDD8CC",sf:"#EEEAE0",dark:false},
  wimbledon:  {bg:"#F3EFE6",nBg:"#F3EFE6",nb:"#DDD5C4",ac:"#1A5C38",tp:"#1A1A1A",ts:"#6B6357",tm:"#B0A898",sl:"#B0A898",bd:"#D4CBBA",sf:"#EDE7DA",dark:false},
  catppuccin: {bg:"#1E1E2E",nBg:"#1E1E2E",nb:"#313244",ac:"#CBA6F7",tp:"#CDD6F4",ts:"#A6ADC8",tm:"#585B70",sl:"#585B70",bd:"#45475A",sf:"#313244",dark:true},
  tokyo:      {bg:"#1A1B2E",nBg:"#1A1B2E",nb:"#24253E",ac:"#7AA2F7",tp:"#C0CAF5",ts:"#787C99",tm:"#565F89",sl:"#565F89",bd:"#32344A",sf:"#24253E",dark:true},
  nord:       {bg:"#2E3440",nBg:"#2E3440",nb:"#3B4252",ac:"#88C0D0",tp:"#ECEFF4",ts:"#D8DEE9",tm:"#4C566A",sl:"#4C566A",bd:"#434C5E",sf:"#3B4252",dark:true},
};

// ─── Tiny helpers ─────────────────────────────────────────────────────────────
const D = (bg: string) => ({ height: 1, background: bg, margin: "7px 0" });
const SL = (c: string, w?: number) => ({
  fontSize: w ?? 7, fontWeight: 700 as const,
  letterSpacing: "0.1em", color: c, marginBottom: 5,
});
const BUL = (c: string) => ({
  fontSize: 7, lineHeight: 1.65, color: c,
  paddingLeft: 9, position: "relative" as const, marginBottom: 2,
});

function Bullet({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div style={BUL(color)}>
      <span style={{ position: "absolute", left: 0 }}>·</span>
      {children}
    </div>
  );
}

// ─── Left panel (always visible) ─────────────────────────────────────────────
function LeftPanel({ t }: { t: ThemeTokens }) {
  const acTxt = t.dark ? "#000" : "#fff";
  return (
    <div style={{ padding: 11, overflow: "hidden", background: t.bg, height: "100%" }}>
      {/* Photo + name */}
      <div style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 9 }}>
        <img
          src="/img/main_prof.jpg"
          alt="David Tan"
          style={{
            width: 46, height: 46, borderRadius: "50%",
            objectFit: "cover", objectPosition: "center top",
            flexShrink: 0, border: `2px solid ${t.ac}`,
          }}
        />
        <div>
          <div style={{ fontWeight: 700, fontSize: 10, color: t.ac, lineHeight: 1.3, marginBottom: 2 }}>
            DAVID CEDRIC CHAN TAN
          </div>
          <div style={{ fontSize: 7.5, color: t.ts, marginBottom: 2 }}>
            Software Development &amp; Finance
          </div>
          <div style={{ fontSize: 7.5, color: t.tm }}>📍 Sydney, Australia</div>
        </div>
      </div>

      {/* Bio */}
      <div style={{ fontSize: 7.5, color: t.ts, lineHeight: 1.65, marginBottom: 9 }}>
        Penultimate-year student (BAdvComp / BCom) building technology-driven solutions
        at the intersection of software engineering and financial markets.
      </div>

      <div style={D(t.bd)} />

      {/* Education */}
      <div style={SL(t.sl)}>EDUCATION</div>
      <div style={{ marginBottom: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 1 }}>
          <span style={{ fontSize: 8, fontWeight: 700, color: t.tp }}>BAdvComp + BCom</span>
          <span style={{ fontSize: 7, color: t.tm }}>2022–2027</span>
        </div>
        <div style={{ fontSize: 7.5, color: t.tm, marginBottom: 1 }}>University of Sydney</div>
        <div style={{ fontSize: 7.5, color: t.ts }}>Major: Software Dev &amp; Finance</div>
      </div>

      <div style={D(t.bd)} />

      {/* Key stats */}
      <div style={SL(t.sl)}>KEY STATS</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 8px", marginBottom: 8 }}>
        {[["Status","Penultimate"],["Grad","Nov 2027"],["Work Auth","AUS · PHL"],["Roles","3 positions"]].map(([k,v])=>(
          <div key={k} style={{ display:"flex", justifyContent:"space-between" }}>
            <span style={{ fontSize:7.5, color:t.tm }}>{k}</span>
            <span style={{ fontSize:7.5, color:t.tp }}>{v}</span>
          </div>
        ))}
      </div>

      <div style={D(t.bd)} />

      {/* Languages */}
      <div style={SL(t.sl)}>LANGUAGES</div>
      <div style={{ fontSize: 7.5, color: t.tp, lineHeight: 1.9 }}>
        English<br />Mandarin Chinese<br />Tagalog
      </div>
    </div>
  );
}

// ─── Right panel — Profile/Skills ────────────────────────────────────────────
function PaneProfile({ t }: { t: ThemeTokens }) {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, height:"100%", background:t.bd }}>
      {/* Skills */}
      <div style={{ padding:11, background:t.bg }}>
        <div style={SL(t.sl)}>SKILLS</div>
        {[
          ["PROGRAMMING", "Python · Java · SQL\nPostgreSQL · R"],
          ["FRAMEWORKS",  "Django · Django ORM\nDjango REST Framework"],
          ["TOOLS",       "Git · Postman\nJenkins CI/CD · Jira"],
          ["CLOUD",       "AWS — EC2 · ALB · ASG\nS3 · RDS · CloudWatch"],
          ["METHODOLOGY", "Scrum · Agile"],
        ].map(([lbl,val],i)=>(
          <div key={lbl} style={{ marginBottom: i<4 ? 6 : 0 }}>
            {i > 0 && <div style={{ height:1, background:t.bd, margin:"0 0 6px" }} />}
            <div style={{ fontSize:7, fontWeight:700, color:t.sl, marginBottom:2 }}>{lbl}</div>
            <div style={{ fontSize:7.5, color:t.ts, lineHeight:1.7 }}>{val.replace(/\n/g,"\n")}</div>
          </div>
        ))}
      </div>
      {/* Contact + Coursework */}
      <div style={{ padding:11, background:t.bg }}>
        <div style={SL(t.sl)}>CONTACT</div>
        <div style={{ fontSize:7.5, color:t.ac, marginBottom:2 }}>davidcedricctan@gmail.com</div>
        <div style={{ fontSize:7.5, color:t.tp, marginBottom:2 }}>+61 478 505 217</div>
        <div style={{ fontSize:7.5, color:t.ac, marginBottom:2 }}>github.com/ANTiDOTE-21</div>
        <div style={{ fontSize:7.5, color:t.ac, marginBottom:9 }}>linkedin.com/in/davidctan</div>
        <div style={{ height:1, background:t.bd, marginBottom:7 }} />
        <div style={SL(t.sl)}>KEY COURSEWORK</div>
        {["Data Structures & Algorithms","Data & Information Management",
          "Sftw Dev Capstone Project","Web Information Systems",
          "Business Consulting Practicum","AWS Cloud Computing (In Progress)"].map(c=>(
          <Bullet key={c} color={t.ts}>{c}</Bullet>
        ))}
      </div>
    </div>
  );
}

// ─── Right panel — Experience ─────────────────────────────────────────────────
function PaneExp({ t }: { t: ThemeTokens }) {
  return (
    <div style={{ padding:11, background:t.bg, height:"100%" }}>
      <div style={SL(t.sl)}>WORK EXPERIENCE</div>

      {/* PwC */}
      <div style={{ marginBottom:9 }}>
        <div style={{ display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontSize:9, fontWeight:700, color:t.tp }}>PwC Philippines (Isla Lipana & Co.)</span>
          <span style={{ fontSize:7, color:t.tm }}>Makati, PHL</span>
        </div>
        <div style={{ fontSize:8, color:t.ac, margin:"1px 0 1px" }}>Digital Solutions Development Intern</div>
        <div style={{ fontSize:7, color:t.tm, marginBottom:4 }}>Jan 2026 – Feb 2026</div>
        <Bullet color={t.ts}>Translated 90+ MS Access queries handling Workday HR data into production-ready T-SQL scripts for a large-scale payroll migration</Bullet>
        <Bullet color={t.ts}>Resolved cross-platform compatibility — date conversions (CAST/CONVERT/GETDATE), NULL-handling (ISNULL) and CASE conditional logic</Bullet>
        <Bullet color={t.ts}>Wrote CREATE TABLE scripts for 5 employee payroll tables with field-mapping docs to support testing and deployment</Bullet>
      </div>

      <div style={D(t.bd)} />

      {/* BIOTech */}
      <div style={{ marginBottom:9 }}>
        <div style={{ display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontSize:9, fontWeight:700, color:t.tp }}>BIOTech Futures</span>
          <span style={{ fontSize:7, color:t.tm }}>USYD Capstone</span>
        </div>
        <div style={{ fontSize:8, color:t.ac, margin:"1px 0 1px" }}>Backend Software Engineer</div>
        <div style={{ fontSize:7, color:t.tm, marginBottom:4 }}>Aug 2025 – Nov 2025</div>
        <Bullet color={t.ts}>Designed PostgreSQL schema + Django ORM supporting roles, groups, events, resources, and audit logging for a production-scale mentoring platform</Bullet>
        <Bullet color={t.ts}>Implemented RBAC and full CRUD REST APIs — role grant/revoke logic, filtering, pagination, and permissions enforcement</Bullet>
        <Bullet color={t.ts}>Integrated Azure Blob Storage; increased test coverage from ~25% to ~72% with Postman collections and coverage reports</Bullet>
      </div>

      <div style={D(t.bd)} />

      {/* JB HiFi */}
      <div>
        <div style={{ display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontSize:9, fontWeight:700, color:t.tp }}>JB – HiFi Limited</span>
          <span style={{ fontSize:7, color:t.tm }}>World Square, Sydney</span>
        </div>
        <div style={{ fontSize:8, color:t.ac, margin:"1px 0 1px" }}>Retail Salesperson</div>
        <div style={{ fontSize:7, color:t.tm, marginBottom:4 }}>Jul 2023 – Jul 2024</div>
        <Bullet color={t.ts}>Delivered tailored tech solutions across 8 product categories, consistently exceeding weekly targets up to AUD $30,000</Bullet>
        <Bullet color={t.ts}>Maintained Gold Star performance record across monthly KPIs</Bullet>
      </div>
    </div>
  );
}

// ─── Right panel — Projects ───────────────────────────────────────────────────
function PaneProjects({ t }: { t: ThemeTokens }) {
  return (
    <div style={{ padding:11, background:t.bg, height:"100%" }}>
      <div style={SL(t.sl)}>PROJECTS</div>
      <div style={{ marginBottom:9 }}>
        <div style={{ fontSize:9, fontWeight:700, color:t.tp, marginBottom:1 }}>Cloud PDF Processing Platform</div>
        <div style={{ fontSize:8, color:t.ac, marginBottom:4 }}>AWS · Python Flask</div>
        <Bullet color={t.ts}>Implemented AWS infrastructure using EC2, S3, RDS, ALB, and Auto Scaling Groups to deploy a scalable PDF processing platform</Bullet>
        <Bullet color={t.ts}>Utilised CloudWatch to monitor CPU utilisation and evaluate Auto Scaling behaviour under varying workloads</Bullet>
      </div>
      <div style={D(t.bd)} />
      <div style={{ marginTop:8 }}>
        <div style={{ fontSize:9, fontWeight:700, color:t.tp, marginBottom:1 }}>Secure Messaging Application</div>
        <div style={{ fontSize:8, color:t.ac, marginBottom:4 }}>Java · SQLite · TLS · HTTPS</div>
        <Bullet color={t.ts}>Developed an end-to-end encrypted platform with HTTPS, TLS certificates and encryption for secure communication</Bullet>
        <Bullet color={t.ts}>Configured DuckDNS hosting to enable remote access and cross-network testing by team members</Bullet>
      </div>
    </div>
  );
}

// ─── Right panel — Extracurriculars ──────────────────────────────────────────
function PaneExtra({ t }: { t: ThemeTokens }) {
  return (
    <div style={{ padding:11, background:t.bg, height:"100%" }}>
      <div style={SL(t.sl)}>EXTRACURRICULARS</div>
      <div style={{ marginBottom:9 }}>
        <div style={{ display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontSize:9, fontWeight:700, color:t.tp }}>OpenxAI Hack Node Australia</span>
          <span style={{ fontSize:7, color:t.tm }}>Aug–Sep 2025</span>
        </div>
        <div style={{ fontSize:8, color:t.ac, margin:"1px 0 4px" }}>Hackathon Member</div>
        <Bullet color={t.ts}>Co-designed and pitched Mood Messenger — an AI-powered social networking solution using emotion detection and gamified virtual economies</Bullet>
        <Bullet color={t.ts}>Addressed emotional miscommunication in digital interactions to improve community connection in real-time messaging</Bullet>
      </div>
      <div style={D(t.bd)} />
      <div style={{ marginTop:8 }}>
        <div style={{ display:"flex", justifyContent:"space-between" }}>
          <span style={{ fontSize:9, fontWeight:700, color:t.tp }}>Enactus University of Sydney</span>
          <span style={{ fontSize:7, color:t.tm }}>Aug 2023–Jul 2025</span>
        </div>
        <div style={{ fontSize:8, color:t.ac, margin:"1px 0 4px" }}>Research &amp; Development Engineer</div>
        <Bullet color={t.ts}>Contributed to sustainability startup development under Enactus USYD</Bullet>
        <Bullet color={t.ts}>Received the IBM Experience Day Pitching Prize</Bullet>
        <Bullet color={t.ts}>Participated in the 2024 EY-Enactus Mentorship Program</Bullet>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function BloombergScreen({ themeName = "bloomberg3" }: BloombergScreenProps) {
  const [tab, setTab] = useState<TabId>("profile");
  const t = THEMES[themeName];
  const acTxt = t.dark ? "#000" : "#fff";

  const TABS: { id: TabId; label: string }[] = [
    { id: "profile",  label: "Profile" },
    { id: "exp",      label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "extra",    label: "Extracurriculars" },
  ];

  return (
    <Html
      position={[0, 0.12, -1.76]}
      transform
      occlude="blending"
      scale={0.0028}
    >
      <div
        style={{
          width: 820, height: 464,
          background: t.bg,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: t.tp,
          overflow: "hidden",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          userSelect: "none",
        }}
      >
        {/* ── Top bar ── */}
        <div style={{ background:t.nBg, borderBottom:`1px solid ${t.nb}`, padding:"0 8px", display:"flex", alignItems:"center", gap:8, height:22, flexShrink:0 }}>
          <span style={{ background:t.ac, color:acTxt, padding:"1px 6px", fontSize:9, fontWeight:700 }}>BLOOMBERG</span>
          <span style={{ color:t.tm, fontSize:9 }}>TERMINAL</span>
          <div style={{ flex:1 }} />
          <span style={{ color:t.tm, fontSize:9 }}>MON 02 JUN 2026</span>
          <span style={{ color:t.ac, fontSize:9 }}>13:28:44</span>
        </div>

        {/* ── Function tab bar ── */}
        <div style={{ background:t.nBg, borderBottom:`1px solid ${t.nb}`, display:"flex", height:22, flexShrink:0 }}>
          {["RMAP","CV","EXP","SKL","PROJ"].map((lbl,i)=>(
            <span key={lbl} style={{ padding:"0 10px", fontSize:9, display:"flex", alignItems:"center", color:t.tm, borderRight:`1px solid ${t.nb}` }}>{lbl}</span>
          ))}
          <span style={{ padding:"0 10px", fontSize:9, display:"flex", alignItems:"center", fontWeight:700, background:t.ac, color:acTxt, borderRight:`1px solid ${t.nb}` }}>DES</span>
          <div style={{ flex:1 }} />
          <span style={{ padding:"0 10px", fontSize:9, display:"flex", alignItems:"center", color:t.tm, borderLeft:`1px solid ${t.nb}` }}>DS Candidate Search</span>
        </div>

        {/* ── Ticker row ── */}
        <div style={{ background:t.dark?"#111":t.sf, padding:"0 10px", display:"flex", alignItems:"center", gap:10, height:26, flexShrink:0 }}>
          <span style={{ color:t.ac, fontWeight:700, fontSize:13 }}>DCT</span>
          <span style={{ color:t.tp, fontSize:10 }}>SYD</span>
          <span style={{ color:t.tp, fontSize:11, fontWeight:700 }}>Penultimate Year</span>
          <span style={{ color:t.ac, fontSize:9 }}>↑ 3 Roles · 2 Projects · 2 Extracurriculars</span>
          <div style={{ flex:1 }} />
          <span style={{ color:t.tm, fontSize:9 }}>University of Sydney</span>
          <span style={{ color:t.tm, fontSize:9, marginLeft:8 }}>BAdvComp / BCom</span>
          <span style={{ color:t.tm, fontSize:9, marginLeft:8 }}>2022–2027</span>
        </div>

        {/* ── Sub-tab bar (clickable) ── */}
        <div style={{ background:t.sf, borderBottom:`1px solid ${t.bd}`, display:"flex", height:24, flexShrink:0 }}>
          {TABS.map(({ id, label }) => (
            <div
              key={id}
              onClick={() => setTab(id)}
              style={{
                padding: "0 14px",
                fontSize: 9,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color: tab === id ? t.ac : t.tm,
                fontWeight: tab === id ? 700 : 400,
                borderBottom: tab === id ? `2px solid ${t.ac}` : "2px solid transparent",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* ── Main layout ── */}
        <div style={{ flex:1, display:"grid", gridTemplateColumns:"2fr 3fr", gap:1, background:t.bd, overflow:"hidden" }}>
          <LeftPanel t={t} />
          <div style={{ overflow:"hidden" }}>
            {tab === "profile"  && <PaneProfile  t={t} />}
            {tab === "exp"      && <PaneExp      t={t} />}
            {tab === "projects" && <PaneProjects t={t} />}
            {tab === "extra"    && <PaneExtra    t={t} />}
          </div>
        </div>

        {/* ── Status bar ── */}
        <div style={{ background:t.nBg, borderTop:`1px solid ${t.nb}`, padding:"0 10px", display:"flex", alignItems:"center", gap:16, height:18, flexShrink:0 }}>
          <span style={{ color:t.tm, fontSize:8 }}>DCT SYD Equity</span>
          <span style={{ color:t.ac, fontSize:8 }}>98) Full CV</span>
          <span style={{ color:t.ts, fontSize:8 }}>99) Contact</span>
          <div style={{ flex:1 }} />
          <span style={{ color:t.tm, fontSize:8 }}>davidcedricctan@gmail.com</span>
        </div>
      </div>
    </Html>
  );
}
