import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../Redux/FeatureSlice/fetchSlice";

function ApiCard() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);
  console.log("todos", todos);

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>Hello Todos</h1>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        todos.map((user) => {
          console.log("User", user);
          return <h1 key={user.id}>user : {user.title}</h1>;
        })
      )}
    </div>
  );
}

export default ApiCard;
