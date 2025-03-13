import React from "react";
import { Link } from "react-router-dom";

const genres = {
  "Rock & Alternative": [
    { id: "kXYiU_JCYtU", title: "Linkin Park - Numb" },
    { id: "hT_nvWreIhg", title: "Linkin Park - In The End" },
    { id: "LmcgmbRf5Ts", title: "Evanescence - Bring Me To Life" },
    { id: "eWQuMIEzMqo", title: "Breaking Benjamin - The Diary of Jane" },
  ],
  "Electronic & EDM": [
    { id: "PPutRXXWe-Q", title: "Alan Walker - Faded" },
    { id: "p-N_y1bZtRw", title: "Marshmello - Alone" },
    { id: "4znadTr4z6U", title: "TheFatRat - Unity" },
  ],
  "Rap & Hip-Hop": [
    { id: "y2zCKOUjZG8", title: "Eminem - Rap God" },
    { id: "lRN598t1l1o", title: "NF - The Search" },
    { id: "WzHyamdBZ2Y", title: "Dax - Dear God" }, 
  ],
  "Pop & Chill": [
    { id: "45UxL7uzor4", title: "Coldplay - Yellow" },
    { id: "Bq6IuZIJhuI", title: "Ed Sheeran - Perfect" },
  ],
};

const MusicList = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
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
          marginBottom: "20px",
        }}
      >
        <h1 style={{ color: "#f39c12" }}>My Music Gene 🎵</h1>
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
      <p
        style={{
          fontSize: "18px",
          color: "#bbb",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Music isn't just background noise—it's a pulse that syncs with my code, my thoughts, my creative flow.  
        I don’t listen to music casually; I immerse myself in it, absorbing every beat, every lyric.  
        Here’s a glimpse into my personal soundscape. 🎶
      </p>

      {/* Music by Genre */}
      {Object.entries(genres).map(([genre, songs]) => (
        <div key={genre} style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#f39c12", borderBottom: "2px solid #f39c12", paddingBottom: "5px" }}>
            {genre}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
              marginTop: "10px",
            }}
          >
            {songs.map((song, index) => (
              <div key={index} style={{ width: "100%", aspectRatio: "1/1" }}>
                {/* YouTube Embedded Player */}
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${song.id}`}
                  title={song.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "10px" }}
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicList;
