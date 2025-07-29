import { useState } from "react";
import "./App.css";
import CounterApp from "./App/CounterApp";
import TodoApp from "./App/TodoApp";
import ApiCard from "./App/ApiCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello Redux-Tolkit</h1>
      {/* <CounterApp /> */}
      <TodoApp/>
      {/* <ApiCard/> */}
    </>
  );
}

export default App;
