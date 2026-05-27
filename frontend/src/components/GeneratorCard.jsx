import { useState } from "react";
import { generateText } from "../services/api";

function GeneratorCard() {
  const [prompt, setPrompt] = useState("");
  const [generated, setGenerated] = useState("");

  const handleGenerate = async () => {
    try {
      const response = await generateText(prompt);
      setGenerated(response.data.generated_text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card">
      <h2>AI Text Generator</h2>

      <textarea
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={handleGenerate}>
        Generate
      </button>

      {generated && (
        <div className="result">
          <p>{generated}</p>
        </div>
      )}
    </div>
  );
}

export default GeneratorCard;