import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-screen h-fit bg-[rgba(28,39,60,1)] overflow-x-hidden">
      <HomePage />
    </div>
  );
}

export default App;
