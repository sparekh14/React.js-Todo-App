export default function TodoCard(props) {
    // retrieves the children elements of the TodoCard element utilized in TodoList.jsx
    // retrieves the handleDeleteTodo() function that was passed down as a prop from the App.jsx -> TodoList.jsx
    // retrieves the handleEditTodo() function that was passed down as a prop from the App.jsx -> TodoList.jsx
    // retrieves the index of current todo being deleted or edited
    const { children, handleDeleteTodo, handleEditTodo, index } = props

    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                    <i className='fa-solid fa-pen-to-square'></i>
                </button>
                
                <button onClick={() => {
                    handleDeleteTodo(index) 
                }}>
                    <i className='fa-solid fa-trash' ></i>
                </button>
            </div>
        </li> 
    )
}