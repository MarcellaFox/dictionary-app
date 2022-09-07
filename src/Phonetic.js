import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <p>{props.phonetic.text}</p>
      <div className="audio">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <img src="/assets/listen.png" alt="" />
        </a>{" "}
      </div>
    </div>
  );
}
