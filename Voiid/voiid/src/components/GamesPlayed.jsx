import React from "react";
import { Link } from "react-router-dom";

const games = [
  { name: "Clash of Clans", image: "/images/clash_of_clans.jpg", glowColor: "#FF4500" },
  { name: "Clash Royale", image: "/images/clash_royale.jpg", glowColor: "#4169E1" },
  { name: "Rise of Kingdoms", image: "/images/rise_of_kingdoms.webp", glowColor: "#FFD700" },
  { name: "Wuthering Waves", image: "/images/wuthering_waves.jpg", glowColor: "#00FF7F" },
  { name: "Call of Duty", image: "/images/call_of_duty.jpg", glowColor: "#FF6347" },
  { name: "Minecraft", image: "/images/minecraft.jpg", glowColor: "#32CD32" },
  { name: "Pokémon GO", image: "/images/pokemon_go.jpg", glowColor: "#1E90FF" },
  { name: "Date A Live: Pledge", image: "/images/date_a_live.png", glowColor: "#8A2BE2" },
];

const GameList = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: "10px",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h1 style={{ color: "#f39c12" }}>Games I’ve Conquered 🎮🔥</h1>
        <Link
          to="/"
          style={{
            fontSize: "16px",
            textDecoration: "none",
            color: "#f39c12",
            padding: "8px 15px",
            border: "1px solid #f39c12",
            borderRadius: "4px",
          }}
        >
          ← Back to Home
        </Link>
      </div>

      {/* Personal Statement */}
      <p style={{ fontSize: "23px", color: "#bbb", marginBottom: "20px", textAlign: "center" }}>
        I haven't played many games, as I'm a workaholic who enjoys watching anime, researching, learning,  
        and experimenting with new AI and technology. But here are a few games I've played in my lifetime.
      </p>

      {/* Game List Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {games.map((game, index) => (
          <div
            key={index}
            style={{
              width: "24%", // Ensures 4 cards per row
              maxWidth: "250px",
              height: "350px",
              borderRadius: "12px",
              boxShadow: `0 0 15px ${game.glowColor}`,
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow = `0 0 30px ${game.glowColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = `0 0 15px ${game.glowColor}`;
            }}
          >
            {/* Image Section */}
            <div
              style={{
                width: "100%",
                height: "80%",
                backgroundImage: `url(${game.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Name Section */}
            <div
              style={{
                width: "100%",
                height: "20%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bold",
                padding: "10px 0",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
              }}
            >
              <h2>{game.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
