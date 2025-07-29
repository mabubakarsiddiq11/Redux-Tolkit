import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../Redux/Features/CounterSlice";

function CounterApp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="h-screen w-2/4 m-auto flex justify-center flex-col">
        <h1 className="text-4xl font-serif font-bold text-center">
          Counter App
        </h1>
        <h4 className="text-3xl text-center font-serif font-bold ">
          Counter Value: {count}
        </h4>
        <button
          className="m-4 p-2 rounded-md bg-slate-700"
          onClick={() => dispatch(increment())}
        >
          Add Value
        </button>
        <button
          className="m-4 p-2 rounded-md bg-slate-700"
          onClick={() => dispatch(decrement())}
        >
          Del Value
        </button>
        <button
          className="m-4 p-2 rounded-md bg-slate-700"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default CounterApp;
