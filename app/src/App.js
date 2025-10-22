/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 22/10/2025 - 10:59:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/10/2025
    * - Author          : DHANUSH
    * - Modification    : 
**/
import React, { useState } from "react";

export default function XSpellCheck() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    if (!inputText.trim()) {
      setSuggestion("");
      return;
    }

    const words = inputText.split(/\s+/);

    let foundSuggestion = "";

    for (let word of words) {
      const cleanedWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();

      if (customDictionary.hasOwnProperty(cleanedWord)) {
        foundSuggestion = `Did you mean: ${customDictionary[cleanedWord]}?`;
        break; 
      }
    }

    setSuggestion(foundSuggestion);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>XSpellCheck</h2>

      <textarea
        rows="5"
        cols="50"
        placeholder="Type something here..."
        value={text}
        onChange={handleChange}
      ></textarea>

      {suggestion && <p style={{ marginTop: "10px" }}>{suggestion}</p>}
    </div>
  );
}
