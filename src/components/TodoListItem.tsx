import { FC } from 'react'
import './TodoListItem.scss'

interface TodoListItemProps {
  todo: Todo
  toggleTodo: ToggleTodo
}

const TodoListItem: FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={ todo.completed ? "complete" : undefined }>
        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo)} />
        { todo.text }
      </label>
    </li>
  )
}

export default TodoListItem;
