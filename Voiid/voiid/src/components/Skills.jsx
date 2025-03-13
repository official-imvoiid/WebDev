import { Link } from "react-router-dom";

const SkillSet = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
          borderBottom: "2px solid #f39c12",
          paddingBottom: "10px",
        }}
      >
        <h1 style={{ color: "#fff", margin: 0 }}>My Skill Set ⚡💻</h1>
        <Link
          to="/"
          style={{
            fontSize: "16px",
            textDecoration: "none",
            color: "#f39c12",
            padding: "8px 15px",
            border: "1px solid #f39c12",
            borderRadius: "4px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#f39c12")}
          onMouseOut={(e) => (e.target.style.background = "transparent")}
        >
          ← Back to Home
        </Link>
      </div>

      {/* Introduction */}
      <p style={{ fontSize: "18px", color: "#ddd", lineHeight: "1.6" }}>
        A passionate cybersecurity expert and developer, constantly evolving in 
        ethical hacking, open-source contributions, and full-stack development. 
        Skilled in troubleshooting, debugging, and crafting secure digital solutions 
        with a hacker’s mindset and an engineer’s precision.
      </p>

      {/* Skill List */}
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "#f39c12" }}>Core Skills:</h3>
        <ul style={{ listStyle: "none", padding: 0, color: "#fff", fontSize: "16px" }}>
          <li>⚙️ Kali Linux & Cybersecurity</li>
          <li>🐍 Python Development</li>
          <li>🌐 Web Development (HTML, CSS, JavaScript, React, Node.js)</li>
          <li>🚀 Open-Source Contribution</li>
          <li>🔍 Debugging & Troubleshooting</li>
          <li>📖 Active Learning & Research</li>
          <li>📡 Penetration Testing & Ethical Hacking</li>
          <li>🔧 Automation & Scripting (Bash, PowerShell)</li>
          <li>🔑 Cryptography & Secure Coding</li>
          <li>🎬 Video Editing & Content Management</li>
          <li>📢 Leadership & Team Collaboration</li>
          <li>🎯 Problem-Solving & Critical Thinking</li>
          <li>💡 UX/UI Design Fundamentals</li>
          <li>📝 Communication & Documentation</li>
          <li>🔄 Active Learning & Adaptability</li>
          <li>🗣️ Effective Communication Skills</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillSet;
