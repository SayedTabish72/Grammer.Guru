import './App.css'
import React, { useState } from "react";
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';

const CharCounter = () => {
  const [userChar, setUserChar] = useState(0);
  const maxChars = 150;

  const updateCounter = (event) => {
    const value = event.target.value;
    setUserChar(value.length);
  };

  const copyText = () => {
    const textarea = document.getElementById("textarea");
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };

  return (
    <div className="container">
      <h2>Grammar-Guru Paraphraser</h2>
      <p>
      Real-time paraphraser checks your English text for grammatical, spelling, and punctuation issues.
      </p>
      <GrammarlyEditorPlugin clientId="client_H4GvrasAvdAEJDnoto8A9P">
      <textarea
        id="textarea"
        className="textarea"
        placeholder="Type or paste your article here"
        maxLength={maxChars}
        onChange={updateCounter}
      ></textarea>
      </GrammarlyEditorPlugin>
      <button onClick={copyText}>Copy Text</button>

      <div className="counter-container">
        <p>
          Total character: <span id="total-counter">{userChar}</span>
        </p>
        <p>
          Remaining:{" "}
          <span className="remaining-counter">{maxChars - userChar}</span>
        </p>
      </div>
    </div>
  );
};

export default CharCounter;