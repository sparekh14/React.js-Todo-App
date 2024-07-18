export default function TodoInput(props) {
    // gets the handleAddTodo attribute passed in from the App.jsx and TodoInput element
    // destructure the todoValue state variable and the setTodoValue state function
    const { handleAddTodo, todoValue, setTodoValue } = props

    return (
        <header>
            {/* Creates an input element of type text who's value when entered is bound to the 
                newTodo variable created above. When the new value is inputted, an event has occurred which 
                is handled by the onChange property of the element and designated by the variable 'e' in the
                lambda function. The data from the event is retrieved by using e.target.value and that data 
                is set to the newTodo variable
            */}
            <input type='text' value={todoValue} onChange={(e) => 
                setTodoValue(e.target.value)
            } placeholder='Enter todo'></input>

            {/* Creates a button element which handles when a new todo is attempting to be added to the
                todo list. The onClick property of the element defines a lambda function which calls the
                handleAddTodo function which was retrieved by the props and defined in the App.jsx file. It is
                passed the newTodo variable which has been updated above through the input element.
            */}
            <button onClick={() => {
                handleAddTodo(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}
