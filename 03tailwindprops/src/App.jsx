import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="bg-green-400 text-black p-4 rounded-xl">
          Tailwind is working
        </h1>
        <Card username="John" btnText="click me" />
        <Card username="Doe"  />
      </div>
    </>
  );
}

export default App;
