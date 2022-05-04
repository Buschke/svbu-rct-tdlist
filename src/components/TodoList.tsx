import { FC } from 'react'
import TodoListItem from './TodoListItem'
//import './TodoList.scss'

interface TodoListItemProps {
  todos: Array<Todo>
  toggleTodo: ToggleTodo
}

const TodoList: FC<TodoListItemProps> = ({ todos, toggleTodo }) => {
  return (<ul>
    {todos.map(todo => {
      return <TodoListItem todo={todo} toggleTodo={toggleTodo} />
    })}
  </ul>
  )
}

export default TodoList