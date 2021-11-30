import React from "react";
import "./styles.css";
import { useState } from "react";

const musicdata = {
  Rock: [
    {
      name: "Beatles",
      desc: "They dont require any description.",
      rating: "5/5"
    },
    {
      name: "Queen",
      desc: "The legacy of Freddy Mercury continues till date.",
      rating: "5/5"
    },
    {
      name: "The Local Train",
      desc: "Every college student's favourite.",
      rating: "4/5"
    }
  ],
  Indie: [
    {
      name: "Prateek Kuhad",
      desc: "This Indian-origin creates some of the best songs.",
      rating: "4.5/5"
    },
    {
      name: "Raghav Meatlle",
      desc: "A hidden and underrated gem.",
      rating: "4/5"
    },
    { name: "Tame Impala", desc: "Makes you trip", rating: "4.5/5" }
  ],
  Bollywood: [
    {
      name: "Shreya Goshal",
      desc: "One of the best singers of the country.",
      rating: "4/5"
    },
    { name: "Arijit Singh", desc: "Naam toh suna hi hoga.", rating: "4/5" },
    {
      name: "Sonu Nigam",
      desc: "His songs are close to my heart.",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Rock");

  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>
        good<span style={{ color: "#66BFBF" }}>music</span>
      </h1>
      <p style={{ fontSize: "18px" }}>Select a genre to get started!</p>
      <div>
        {Object.keys(musicdata).map((genre) => (
          <button
            onClick={() => clickHandler(genre)}
            style={{
              margin: "10px 30px",
              height: "30px",
              width: "90px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#A0D7D7",
              borderRadius: "5px"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ width: "95%" }} />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicdata[selectedGenre].map((item) => (
            <li
              key={item.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                width: "50%",
                margin: "1rem",
                borderRadius: "0.5rem",
                border: "2px solid #66BFBF"
              }}
            >
              <div style={{ fontSize: "larger", padding: "5px" }}>
                {" "}
                {item.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", padding: "5px" }}>
                {" "}
                {item.desc}{" "}
              </div>
              <div style={{ fontSize: "smaller", padding: "5px" }}>
                {" "}
                {item.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
