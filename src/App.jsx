import "./App.css";
import CounterApp from "./App/CounterApp";
import TodoApp from "./App/TodoApp";
import ApiCard from "./App/ApiCard";
import PostsCard from "./RTK-Query/Components/PostsCard";
import { useGetPostsQuery } from "./RTK-Query/Feature/apiSlice";


function App() {
  const {data : posts, isLoading, iserror} = useGetPostsQuery()
  console.log("Data", posts)
  console.log("Loading", isLoading)
  console.log("Error", iserror)
 
 
  return (
    <>
      <h1>Hello Redux-Tolkit</h1>
    <PostsCard posts={posts} isLoading={isLoading} />
      {/* <CounterApp /> */}
      {/* <TodoApp/> */}
      {/* <ApiCard/> */}
    </>
  );
}

export default App;
