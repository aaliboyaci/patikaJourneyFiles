import React, { useState, useEffect } from "react";
import "./styles.css";

function Textpage() {
  const [baconText, setBaconText] = useState("");
  const [paragraphs, setParagraphs] = useState(2); // Default value
  const [includeHTML, setIncludeHTML] = useState("html"); // Default value

  useEffect(() => {
    const apiUrl = `https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&format=${includeHTML}`;

    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => setBaconText(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [paragraphs, includeHTML]);

  const handleParagraphChange = (event) => {
    setParagraphs(event.target.value);
  };

  const handleIncludeHTMLChange = (event) => {
    setIncludeHTML(event.target.value);
  };

  return (
    <div className="container">
      <h1>Text Generator</h1>
      <hr />
      <form className="form-inline">
        <div className="form-group">
          <label>Paragraphs</label>
          <div className="number">
            <input
              type="number"
              value={paragraphs}
              onChange={handleParagraphChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Include HTML</label>
          <div className="select">
            <select
              className="form-control"
              value={includeHTML}
              onChange={handleIncludeHTMLChange}
            >
              <option value="html">Yes</option>
              <option value="text">No</option>
            </select>
          </div>
        </div>
      </form>
      <div>
        <p>{baconText}</p>
      </div>
    </div>
  );
}

export default Textpage;
