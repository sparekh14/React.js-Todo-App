import TodoCard from './TodoCard'

export default function TodoList(props) {
    // represents the todos array passed in through the TodoList element in App.jsx
    const { todos } = props

  return (
    <ul className='main'>
        {/* Maps every element of the todos array which was received as a prop through the TodoList() function
            and returns a TodoCard element with a child element of <p> which encapsulates the todo being displayed.
            The todoIndex is utilized as a unique key that has to be passed into the TodoCard element.
        */}
        {todos.map((todo, todoIndex) => {
            return (
                // passes down the props received as a sub-component to the TodoCard element
                // passes down the index of the current todo for handling deleting and editing of the elements
                <TodoCard {...props} key={todoIndex} index={todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}