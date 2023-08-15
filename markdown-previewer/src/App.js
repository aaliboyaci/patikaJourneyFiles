import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("# Markdown Önizleme");

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App" style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "30px" }}>
        <h2>Markdown Editor</h2>
        <textarea
          rows="10"
          cols="50"
          value={markdown}
          onChange={handleMarkdownChange}
        />
      </div>
      <div>
        <h2>Önizleme</h2>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
