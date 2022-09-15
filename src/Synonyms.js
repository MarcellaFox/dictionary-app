import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  let [synonymDefinitions, setSynonymDefinitions] = useState({});

  useEffect(() => {
    props.synonyms.forEach((synonym) => {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${synonym}`;
      if (synonym.includes(" ")) {
        setSynonymDefinitions((old) => {
          return { ...old, [synonym]: null };
        });
      } else {
        axios.get(apiUrl).then((response) => {
          let definition =
            response.data[0].meanings[0].definitions[0].definition;
          setSynonymDefinitions((old) => {
            return { ...old, [synonym]: definition };
          });
        });
      }
    });
  }, [props.synonyms]);

  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li
                className="synonym-button"
                data-tooltip={synonymDefinitions[synonym]}
                key={index}
              >
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
