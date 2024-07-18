import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState, useEffect } from "react"


function App() {  
  // creates a todos state variable and a function to update the array
  const [todos, setTodos] = useState([])

  // creates a todoValue state variable and a function to update it 
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    // stores the JSON string in localStorage under the key 'todos', updating it if it already exists
    // JSON.stringify() converts a JavaScript object or value to a JSON string because localStorage can only store strings
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodo(newTodo) {
    // creates a new todo list with the old todos and adds on the new todo at the end of it
    const newTodoList = [newTodo, ...todos]

    persistData(newTodoList)

    // calls the state method to update the todos list to reflect the changes
    // must create a new variable because if the old variable is used the webpage will not change
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    // will create a new todo list through the filter() method which will only allow todos who's index DOES NOT
    // match that of the index of the todo being deleted
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })

    persistData(newTodoList)

    // will set the todo list to the newly created and filtered out todo list from above
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    // obtains the todo item that needs to be edited
    const valueToEdit = todos[index]

    // updates the input element on the page
    setTodoValue(valueToEdit)

    // deletes the todo from the todo list
    handleDeleteTodo(index)
  }

  // the first parameter deals with the page loads
  // leaving the dependency array blank means we listen for page loads instead of any specific variable
  useEffect(() => {
    // checks if local storage exists
    if (!localStorage) {
      return
    }
    
    // accesses the browser's local storage and retrieves the todos using the key 'todos'
    let localTodos = localStorage.getItem('todos')

    // checks if there currently are any local todos
    if (!localTodos) {
      return
    }

    // parses the todos from the local storage
    // converts the JSON string back into a JavaScript object and accesses the todos property of the object
    localTodos = JSON.parse(localTodos).todos

    // changes the todo list to being what was stored prior in local storage
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
