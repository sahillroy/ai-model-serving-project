import { useState } from "react";
import { summarizeText } from "../services/api";

function SummaryCard() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    try {
      const response = await summarizeText(text);
      setSummary(response.data.summary);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card">
      <h2>Text Summarizer</h2>

      <textarea
        placeholder="Paste long text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSummarize}>
        Summarize
      </button>

      {summary && (
        <div className="result">
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default SummaryCard;