import { useState } from "react";

const phases = [
  {
    id: "01", label: "Foundation", weeks: "Weeks 1-2", color: "#b8ff3f",
    colorDim: "rgba(184,255,63,0.12)", colorBorder: "rgba(184,255,63,0.3)",
    goal: "Build Tyler's brain, define his personality, and create the core teaching loop.",
    tracks: [
      { title: "Tyler's System Prompt & Personality", desc: "Define character traits, teaching methodology, boundary enforcement, session flow structure." },
      { title: "Knowledge Base (Economics Curriculum)", desc: "Curate university-level economics content, textbooks, common misconceptions, real-world examples." },
      { title: "Conversation Memory Architecture", desc: "Design session memory so Tyler remembers student progress, weaknesses, and homework across sessions." },
    ],
    deliverables: ["Tested system prompt", "Curated economics content", "Session memory schema"],
    risk: { label: "Teaching quality inconsistency", mitigation: "Extensive prompt testing across student levels." },
    stack: [
      { role: "LLM", value: "Claude API / GPT-4" },
      { role: "Database", value: "Supabase (PostgreSQL)" },
      { role: "Auth", value: "Supabase Auth" },
      { role: "Framework", value: "Next.js + React" },
    ],
  },
  {
    id: "02", label: "Avatar & Voice", weeks: "Weeks 2-3", color: "#00e5ff",
    colorDim: "rgba(0,229,255,0.1)", colorBorder: "rgba(0,229,255,0.3)",
    goal: "Give Tyler a face and voice - make the AI professor feel real.",
    tracks: [
      { title: "Avatar Generation", desc: "Integrate HeyGen Streaming Avatar API for real-time talking head with lip sync." },
      { title: "Voice Synthesis", desc: "Create Tyler's custom voice using ElevenLabs API with natural expressiveness." },
      { title: "Audio-Visual Sync", desc: "Build the pipeline connecting LLM response to voice generation to avatar animation in real time." },
      { title: "Character Design", desc: "Define Tyler's visual appearance, clothing, background setting." },
    ],
    deliverables: ["Working avatar with lip-synced speech", "Custom Tyler voice", "Real-time conversation loop"],
    risk: { label: "Latency in avatar rendering", mitigation: "Streaming responses and audio pre-buffering." },
    stack: [
      { role: "Avatar", value: "HeyGen Streaming Avatar API" },
      { role: "Voice", value: "ElevenLabs API" },
      { role: "Streaming", value: "WebSocket" },
      { role: "Frontend", value: "React" },
    ],
  },
  {
    id: "03", label: "Full Teaching", weeks: "Weeks 3-4", color: "#ff4d2e",
    colorDim: "rgba(255,77,46,0.1)", colorBorder: "rgba(255,77,46,0.3)",
    goal: "Build the complete student session - from onboarding to homework assignment.",
    tracks: [
      { title: "Student Onboarding", desc: "First-time flow where Tyler asks about level, goals, and struggles." },
      { title: "Live Presentation Engine", desc: "Generate slides, diagrams, and visual aids in real time during teaching." },
      { title: "Comprehension Checks", desc: "Tyler asks targeted questions and adapts based on correct/incorrect answers." },
      { title: "Homework & Progress Tracking", desc: "Assign personalized exercises, track completion, adjust future lessons." },
    ],
    deliverables: ["End-to-end student session", "Real-time slide generation", "Student progress dashboard"],
    risk: { label: "Student engagement drop-off", mitigation: "Adaptive pacing and interactive questioning." },
    stack: [
      { role: "Slides", value: "Reveal.js / React components" },
      { role: "Storage", value: "Supabase PostgreSQL" },
      { role: "Hosting", value: "Vercel" },
      { role: "Analytics", value: "PostHog" },
    ],
  },
  {
    id: "04", label: "Demo & Pitch", weeks: "Week 4+", color: "#bf5fff",
    colorDim: "rgba(191,95,255,0.1)", colorBorder: "rgba(191,95,255,0.3)",
    goal: "Polish the MVP, record the demo, and prepare for investor conversations.",
    tracks: [
      { title: "UI Polish & Landing Page", desc: "Professional landing page with Start a Session with Tyler CTA." },
      { title: "Demo Video", desc: "Record a 3-minute video showing a complete student session." },
      { title: "Pitch Deck", desc: "10-slide investor deck covering problem, solution, market, competition, team." },
      { title: "Beta Testing", desc: "Onboard first 5 real students for feedback." },
    ],
    deliverables: ["Live demo URL", "3-min demo video", "10-slide pitch deck", "First 5 beta testers"],
    risk: { label: "Positioning against funded competitors", mitigation: "Clear differentiation on immersive professor experience." },
    stack: [
      { role: "Video", value: "Screen recording + editing" },
      { role: "Deck", value: "Figma / Keynote" },
      { role: "Hosting", value: "Vercel" },
      { role: "Domain", value: "ai-world.com" },
    ],
  },
];

const whyCards = [
  { icon: "◈", title: "Full-Presence Teaching", desc: "Not a chatbot. A professor with face, voice, slides, and personality showing up like a Zoom call." },
  { icon: "◇", title: "Character & Respect", desc: "Students interact with dignity. Tyler has boundaries, building real educational discipline." },
  { icon: "◉", title: "Multilingual Intelligence", desc: "Teaches in your native language. Not translations - genuine bilingual instruction." },
  { icon: "◫", title: "Adaptive Personalization", desc: "Identifies weaknesses in real time. Never repeats the same failed explanation." },
];

const competitors = [
  { name: "Khanmigo", funding: "$22M", label: "Text chatbot" },
  { name: "Squirrel AI", funding: "$194M", label: "Algorithm, no interaction" },
  { name: "SigIQ", funding: "$9.5M", label: "Exam-focused" },
  { name: "eSelf AI", funding: "$27M acquired", label: "Generic avatars" },
];

export default function AIWorldPipeline() {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedTracks, setExpandedTracks] = useState<Record<string, boolean>>({});
  const phase = phases[activePhase];

  const toggleTrack = (i: number) =>
    setExpandedTracks((p) => ({ ...p, [`${activePhase}-${i}`]: !p[`${activePhase}-${i}`] }));

  return (
    <div style={{
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      background: "#080a0e", color: "#c8cdd6", minHeight: "100vh", overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .phase-tab { cursor: pointer; transition: all 0.2s; }
        .phase-tab:hover { background: rgba(255,255,255,0.04) !important; }
        .track-item { cursor: pointer; transition: all 0.2s; }
        .track-item:hover { background: rgba(255,255,255,0.03) !important; }
        .comp-card { transition: all 0.2s; }
        .comp-card:hover { transform: translateY(-2px); }
        .why-card { transition: all 0.25s; }
        .why-card:hover { transform: translateY(-3px); }
        @keyframes fadeIn { from { opacity:0; transform: translateY(6px); } to { opacity:1; transform:translateY(0); } }
        .fade-in { animation: fadeIn 0.3s ease forwards; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .blink { animation: pulse 2s infinite; }
      `}</style>

      {/* Header */}
      <div style={{ borderBottom: "1px solid #1a1f2a", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ color: "#00e5ff", fontSize: "11px", letterSpacing: "3px" }}>AI.WORLD</span>
          <span style={{ color: "#2a2f3a" }}>|</span>
          <span style={{ fontSize: "11px", color: "#4a5060", letterSpacing: "2px" }}>MVP PIPELINE v1.0</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div className="blink" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#b8ff3f" }}></div>
          <span style={{ fontSize: "10px", color: "#4a5060", letterSpacing: "2px" }}>ACTIVE BUILD</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "60px 40px 50px", borderBottom: "1px solid #1a1f2a" }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#4a5060", marginBottom: "16px" }}>// PRODUCT OVERVIEW</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: "1.1", marginBottom: "16px", letterSpacing: "-1px" }}>
          <span style={{ color: "#00e5ff" }}>AI Professor</span><br />
          <span style={{ color: "#e8eaf0" }}>Platform</span>
        </h1>
        <p style={{ fontSize: "14px", color: "#606878", letterSpacing: "1px", marginBottom: "48px", maxWidth: "500px" }}>
          ai.world - turning static classrooms into intelligent education
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "#1a1f2a", border: "1px solid #1a1f2a", borderRadius: "8px", overflow: "hidden", maxWidth: "700px" }}>
          {[
            { val: "1M+", label: "Students reachable" },
            { val: "< $1", label: "Cost per session" },
            { val: "24/7", label: "Availability" },
            { val: "4 wks", label: "Time to MVP" },
          ].map((m, i) => (
            <div key={i} style={{ background: "#0d1017", padding: "20px 16px", textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#e8eaf0", marginBottom: "6px" }}>{m.val}</div>
              <div style={{ fontSize: "10px", color: "#4a5060", letterSpacing: "2px" }}>{m.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phase Tabs */}
      <div style={{ padding: "32px 40px 0", borderBottom: "1px solid #1a1f2a" }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#4a5060", marginBottom: "20px" }}>// BUILD PHASES</div>
        <div style={{ display: "flex", gap: "4px", overflowX: "auto" }}>
          {phases.map((p, i) => (
            <button key={i} className="phase-tab" onClick={() => setActivePhase(i)} style={{
              background: activePhase === i ? p.colorDim : "transparent",
              border: `1px solid ${activePhase === i ? p.colorBorder : "#1a1f2a"}`,
              borderBottom: activePhase === i ? `1px solid ${p.color}` : "1px solid #1a1f2a",
              borderRadius: "6px 6px 0 0",
              padding: "10px 20px",
              cursor: "pointer",
              color: activePhase === i ? p.color : "#4a5060",
              fontSize: "11px",
              letterSpacing: "2px",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}>
              <span style={{ opacity: 0.6 }}>PHASE {p.id}</span>
              <span style={{ margin: "0 8px", opacity: 0.3 }}>-</span>
              {p.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Phase Content */}
      <div key={activePhase} className="fade-in" style={{ padding: "40px", borderBottom: "1px solid #1a1f2a" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
              <span style={{ fontSize: "32px", fontWeight: 700, color: phase.color }}>PHASE {phase.id}</span>
              <span style={{ fontSize: "11px", color: "#4a5060", letterSpacing: "2px", marginTop: "6px" }}>{phase.weeks.toUpperCase()}</span>
            </div>
            <div style={{ fontSize: "13px", color: "#8a9aaa", maxWidth: "600px", lineHeight: "1.6" }}>{phase.goal}</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {/* Work Tracks */}
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#4a5060", marginBottom: "12px" }}>WORK TRACKS</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {phase.tracks.map((t, i) => {
                const key = `${activePhase}-${i}`;
                const open = expandedTracks[key];
                return (
                  <div key={i} className="track-item" onClick={() => toggleTrack(i)} style={{
                    background: open ? phase.colorDim : "#0d1017",
                    border: `1px solid ${open ? phase.colorBorder : "#1a1f2a"}`,
                    borderRadius: "6px", padding: "14px 16px", transition: "all 0.2s",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ color: phase.color, fontSize: "14px", display: "inline-block", transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>&#9658;</span>
                      <div style={{ fontSize: "12px", color: open ? phase.color : "#c8cdd6", fontWeight: 500, letterSpacing: "0.5px" }}>
                        <span style={{ color: "#4a5060", marginRight: "8px" }}>{String(i + 1).padStart(2, "0")}.</span>
                        {t.title}
                      </div>
                    </div>
                    {open && (
                      <div style={{ marginTop: "10px", paddingLeft: "24px", fontSize: "11px", color: "#7a8898", lineHeight: "1.6" }}>
                        - {t.desc}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ background: "#0d1017", border: "1px solid #1a1f2a", borderRadius: "8px", padding: "20px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#4a5060", marginBottom: "14px" }}>DELIVERABLES</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {phase.deliverables.map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "#39ff8a", fontSize: "13px", marginTop: "1px", flexShrink: 0 }}>&#10003;</span>
                    <span style={{ fontSize: "12px", color: "#a0aab8", lineHeight: "1.4" }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,60,60,0.06)", border: "1px solid rgba(255,60,60,0.2)", borderRadius: "8px", padding: "16px 20px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#ff4d4d", marginBottom: "10px" }}>&#9888; KEY RISK</div>
              <div style={{ fontSize: "12px", color: "#e8eaf0", fontWeight: 500, marginBottom: "6px" }}>{phase.risk.label}</div>
              <div style={{ fontSize: "11px", color: "#606878", lineHeight: "1.5" }}>Mitigation: {phase.risk.mitigation}</div>
            </div>

            <div style={{ background: "#0d1017", border: "1px solid #1a1f2a", borderRadius: "8px", padding: "20px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#4a5060", marginBottom: "14px" }}>TECH STACK</div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {phase.stack.map((s, i) => (
                    <tr key={i} style={{ borderBottom: i < phase.stack.length - 1 ? "1px solid #141820" : "none" }}>
                      <td style={{ padding: "8px 0", fontSize: "10px", color: "#4a5060", letterSpacing: "2px", width: "90px" }}>{s.role.toUpperCase()}</td>
                      <td style={{ padding: "8px 0", fontSize: "11px", color: phase.color }}>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Why Different */}
      <div style={{ padding: "48px 40px", borderBottom: "1px solid #1a1f2a" }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#4a5060", marginBottom: "8px" }}>// DIFFERENTIATION</div>
        <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#e8eaf0", marginBottom: "32px" }}>Why This Is Different</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {whyCards.map((c, i) => (
            <div key={i} className="why-card" style={{ background: "#0d1017", border: "1px solid #1a1f2a", borderRadius: "8px", padding: "24px 20px" }}>
              <div style={{ fontSize: "20px", color: "#00e5ff", marginBottom: "14px" }}>{c.icon}</div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#e8eaf0", marginBottom: "10px" }}>{c.title}</div>
              <div style={{ fontSize: "11px", color: "#4a5060", lineHeight: "1.7" }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Competition */}
      <div style={{ padding: "48px 40px", borderBottom: "1px solid #1a1f2a" }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#4a5060", marginBottom: "8px" }}>// LANDSCAPE</div>
        <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#e8eaf0", marginBottom: "28px" }}>Competition</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {competitors.map((c, i) => (
            <div key={i} className="comp-card" style={{ background: "#0d1017", border: "1px solid #1a1f2a", borderRadius: "8px", padding: "20px" }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#e8eaf0", marginBottom: "6px" }}>{c.name}</div>
              <div style={{ fontSize: "10px", color: "#b8ff3f", letterSpacing: "2px", marginBottom: "10px" }}>{c.funding}</div>
              <div style={{ display: "inline-block", background: "rgba(255,77,46,0.1)", border: "1px solid rgba(255,77,46,0.2)", borderRadius: "4px", padding: "4px 8px", fontSize: "10px", color: "#ff6050", letterSpacing: "1px" }}>{c.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: "48px 40px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#4a5060", marginBottom: "8px" }}>// EXECUTION TIMELINE</div>
        <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#e8eaf0", marginBottom: "32px" }}>4-Week Build</h2>
        <div style={{ position: "relative" }}>
          <div style={{ height: "2px", background: "#1a1f2a", borderRadius: "2px", margin: "20px 0 0" }}></div>
          <div style={{ position: "absolute", top: "20px", left: "0", height: "2px", width: `${((activePhase + 1) / 4) * 100}%`, background: "linear-gradient(to right, #b8ff3f, #00e5ff, #ff4d2e, #bf5fff)", transition: "width 0.5s ease", borderRadius: "2px" }}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginTop: "-8px" }}>
            {phases.map((p, i) => (
              <div key={i} onClick={() => setActivePhase(i)} style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: i === 0 ? "flex-start" : i === 3 ? "flex-end" : "center" }}>
                <div style={{
                  width: "16px", height: "16px", borderRadius: "50%",
                  background: i <= activePhase ? p.color : "#1a1f2a",
                  border: `2px solid ${i <= activePhase ? p.color : "#2a2f3a"}`,
                  transition: "all 0.3s",
                  boxShadow: i <= activePhase ? `0 0 12px ${p.color}66` : "none",
                  alignSelf: "center",
                }}></div>
                <div style={{ marginTop: "12px", textAlign: i === 0 ? "left" : i === 3 ? "right" : "center" }}>
                  <div style={{ fontSize: "10px", color: i <= activePhase ? p.color : "#4a5060", letterSpacing: "2px", marginBottom: "4px" }}>PHASE {p.id}</div>
                  <div style={{ fontSize: "11px", color: i === activePhase ? "#e8eaf0" : "#606878", fontWeight: i === activePhase ? 600 : 400 }}>{p.label}</div>
                  <div style={{ fontSize: "10px", color: "#3a4050", marginTop: "2px" }}>{p.weeks}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1a1f2a", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "10px", color: "#2a3040", letterSpacing: "2px" }}>AI.WORLD 2025</span>
        <span style={{ fontSize: "10px", color: "#2a3040", letterSpacing: "2px" }}>TYLER - AI PROFESSOR PLATFORM</span>
      </div>
    </div>
  );
}
