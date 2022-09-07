import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <a href={props.synonyms}>
                <li key={index}>{synonym}</li>
              </a>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
