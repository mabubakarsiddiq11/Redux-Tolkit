import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos : [{id : nanoid(), text : "Hello Todo"}],

}

 const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state,actions) => {
           const todo = {
            id : nanoid(),
            text : actions.payload
           }
           state.todos.push(todo)
        },
        delTodo : (state,actions) => {
            state.todos = state.todos.filter((todo) => todo.id !== actions.payload)
        }
       
    }

})

export default todoSlice.reducer

export const {addTodo,delTodo} = todoSlice.actions