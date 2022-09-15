import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  // console.log(props);
  return (
    <div className="Meaning">
      {props.meaning.synonyms ? (
        <Synonyms synonyms={props.meaning.synonyms} />
      ) : null}

      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definition-container">
            <p className="definition">{definition.definition}</p>
            {definition.example ? (
              <p className="example">"{definition.example}"</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
