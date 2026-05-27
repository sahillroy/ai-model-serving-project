import "./App.css";

import Navbar from "./components/Navbar";
import SentimentCard from "./components/SentimentCard";
import SummaryCard from "./components/SummaryCard";
import GeneratorCard from "./components/GeneratorCard";

function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="grid">

        <SentimentCard />

        <SummaryCard />

        <GeneratorCard />

      </div>

    </div>
  );
}

export default App;