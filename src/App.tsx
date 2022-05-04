import React, { FC, useState } from 'react'
import './App.scss'
import TodoListItem from './components/TodoListItem'

const initialTodos: Array<Todo> = [
  { text: 'abc', completed: true },
  { text: 'def', completed: false },
]

const App: FC<{ title: string }> = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  return (
    <div className="App p-5 m-5 border-double hover:border-dotted">
      TD List
      <React.Fragment>
        <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
        <TodoListItem todo={todos[1]} />
      </React.Fragment>
    </div>
  )
}

export default App;
