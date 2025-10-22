/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 22/10/2025 - 10:06:58
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 22/10/2025
 * - Author          : DHANUSH
 * - Modification    :
 **/
import "./App.css";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const customDicionary = {
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
    let found = false;

    for (let word of words) {
      const lowerWord = word.toLowerCase();
      if (customDicionary[lowerWord]) {
        setSuggestion(`Did you mean: ${customDicionary[lowerWord]}`);
        found = true;
        break;
      }
    }

    if (!found) {
      setSuggestion("");
    }
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          placeholder="Type something here..."
          rows="5"
          cols="50"
          value={text}
          onChange={handleChange}
        ></textarea>

        {suggestion && <p style={{ marginTop: "10px" }}>{suggestion}</p>}
      </div>
    </div>
  );
}

export default App;
