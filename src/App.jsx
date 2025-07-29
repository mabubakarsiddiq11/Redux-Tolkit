import "./App.css";
import CounterApp from "./App/CounterApp";
import TodoApp from "./App/TodoApp";
import ApiCard from "./App/ApiCard";
import { useGetAllTodoQuery } from "./RTK-Query/Feature/apiSlice";

function App() {
  const {data, isLoading, error} = useGetAllTodoQuery()
  console.log("Data", data)
  console.log("Loading", isLoading)
  console.log("Error", error)
  return (
    <>
      <h1>Hello Redux-Tolkit</h1>
      {/* <CounterApp /> */}
      {/* <TodoApp/> */}
      {/* <ApiCard/> */}
    </>
  );
}

export default App;
