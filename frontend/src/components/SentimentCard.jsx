import { useState } from "react";
import { analyzeSentiment } from "../services/api";

function SentimentCard() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    try {
      const response = await analyzeSentiment(text);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card">
      <h2>Sentiment Analysis</h2>

      <textarea
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAnalyze}>
        Analyze
      </button>

      {result && (
        <div className="result">
          <p>Label: {result.label}</p>
          <p>Score: {result.score}</p>
        </div>
      )}
    </div>
  );
}

export default SentimentCard;