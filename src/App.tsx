import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import TodoList from './components/TodoList'
import Logo from './components/Logo'
import ProgressBar from './components/ProgressBar'
import CompletionStatus from './components/CompletionStatus'
import AddTodoForm from './components/AddTodoForm'
import { GUEST_USER, INITIAL_TODOS } from './lib/constants/constants'
import { TodoItemProps, User } from './lib/types/types'
import { UserContext } from './contexts/User'

function App() {
  const [todoList, setTodoList] = useState(INITIAL_TODOS)
  const [currentUser] = useState<User>(GUEST_USER)
  const addTodo = (newTodo: TodoItemProps) => {
    setTodoList((curr)=>{
      return [...curr, newTodo]
    })
  }
  const removeTodo = (id: string) => {
    setTodoList((curr)=>{
      const newList = curr.filter((todoItem)=>{
        return todoItem.id !== id
      })
      return newList
    })
  } 

  return (
    <UserContext.Provider value={currentUser}>
      <Container id="test" display="flex" direction="flex-col" align="align-center" justify="justify-center">
          <Logo/>
          <CompletionStatus progressPercentage='50'/>
          <ProgressBar progressPercentage='50'/>
          <AddTodoForm addTodo={addTodo}/>
          <TodoList todoList={todoList} removeTodo={removeTodo}/>
          <Button type="button" id="button-one" onClick={()=>{console.log('one')}}>one</Button>
          <Button type="button" id="button-two" onClick={()=>{console.log('two')}}>two</Button>
          <Button type="button" id="button-three" onClick={()=>{console.log('thr')}}>thr</Button>
      </Container>
    </UserContext.Provider>
  )
}

export default App
