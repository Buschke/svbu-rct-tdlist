import { ChangeEvent, FC, FormEvent, useState } from 'react'
//import './AddTodoForm.scss'

interface AddTodoFormProps {
  addTodo: AddTodo
}

const AddTodoForm: FC<AddTodoFormProps> = ({ addTodo }) => {
  const [ newTodo, setNewTodo ] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <div className='AddTodoForm'>AddTodoForm 
      <form>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Add to TODO</button>
      </form>
    </div>
  )
}

export default AddTodoForm