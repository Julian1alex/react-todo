import { Provider } from "react-redux"
import store from "../redux/store"
import React from "react"
import "../styles/base.css";
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
function App() {
  return (
    <Provider store={store}>
      <div id="container">
      <TodoForm />
      <TodoList />
      </div>
    </Provider>
  )
}

export default App


