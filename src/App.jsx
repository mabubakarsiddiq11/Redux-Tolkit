import "./App.css";
import CounterApp from "./App/CounterApp";
import TodoApp from "./App/TodoApp";
import ApiCard from "./App/ApiCard";
import { useGetAllTodoQuery, useGetTodoQuery } from "./RTK-Query/Feature/apiSlice";

function App() {
  const {data : todos, isLoading, iserror} = useGetAllTodoQuery()
  console.log("Data", todos)
  console.log("Loading", isLoading)
  console.log("Error", iserror)
  // const getID = ()=>{
  //   useGetTodoQuery(todos.id)
  //   console.log("Hit this id")

  // }
  return (
    <>
      <h1>Hello Redux-Tolkit</h1>
     {
      isLoading ? 
      <h1>Loading </h1> :  <div>
      <h2>Todos</h2>
      <ul
      //  onClick={getID}
       >
        {todos?.map((data) => (
          <li  key={data.id}>
            {data.todo}
          </li>
        ))}
      </ul>
    </div>
     }
      {/* <CounterApp /> */}
      {/* <TodoApp/> */}
      {/* <ApiCard/> */}
    </>
  );
}

export default App;
