import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [welcome, setWelcome] = useState(null);

  useEffect(() => {
    fetch("http://0.0.0.0:8000/?name=React")
      .then((res) => res.json())
      .then((json) => setWelcome(json));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{welcome && welcome.message}</p>
      </header>
    </div>
  );
}

export default App;
