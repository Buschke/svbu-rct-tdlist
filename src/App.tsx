import React, { FC, useState } from 'react';
import './App.scss'
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList'

const initialTodos: Array<Todo> = [
  { text: 'abc', completed: true },
  { text: 'def', completed: false },
]

const App: FC<{ title: string }> = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' && setTodos([...todos, {text: newTodo, completed: false}])
  }

  return (
    <div className="App p-5 m-5 border-double hover:border-dotted">
      TD List
      <React.Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo}/>
      </React.Fragment>
    </div>
  )
}

export default App;
