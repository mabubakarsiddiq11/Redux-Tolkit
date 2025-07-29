import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo } from "../Redux/Features/TodoSlice";
import { MdDeleteForever } from "react-icons/md";

function TodoApp() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const addHandle = () => {
    if (input === "") {
      alert("Add This Todo");
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };
  return (
    <div className="mt-10">
      <div className="container mx-auto bg-blue-900 w-[350px] h-[500px] rounded-lg p-4">
        <h1 className="text-3xl font-bold text-center text-yellow-300  mb-4">
          Todo App
        </h1>

        <div className="flex justify-evenly items-center mb-4">
          <input
            value={input}
            className="py-3 w-64 rounded-md text-xl text-center border-2 mx-3"
            type="text"
            placeholder="Todo add"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={addHandle}
            className="bg-yellow-300  rounded-lg py-3 px-4 text-black font-semibold"
          >
            Add
          </button>
        </div>

        <div className="overflow-y-auto max-h-[360px]">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="w-full bg-white my-2 py-2 flex justify-between items-center px-3"
            >
              <h1 className="text-xl font-sans font-semibold text-black px-2">
                {todo.text}
              </h1>
              <button
                className="bg-yellow-300 font-bold text-lg p-2 text-black rounded"
                onClick={() => dispatch(delTodo(todo.id))}
              >
                <MdDeleteForever />
              </button>
              {/* <div className="flex items-center gap-2">
               

              <button className="bg-yellow-300 font-medium text-sm px-3 py-1 text-black rounded">
                  Edit
                </button>
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
