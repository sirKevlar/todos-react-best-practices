import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([{id:'1', text: "do this thing right away", priority: "🔴", finishBy: "241215"},{id:'2', text: "do this thing soon", priority: "🟡", finishBy: "241215"},{id:'3', text: "do this thing inabit", priority: "🟢", finishBy: "241225"}])

  return (
    <>
      <Container id="test" display="flex" direction="flex-col" align="align-center" justify="justify-center">
          <TodoList todos={todos}/>
          <Button id="button-one" onClick={()=>{console.log('one')}}>one</Button>
          <Button id="button-two" onClick={()=>{console.log('two')}}>two</Button>
          <Button id="button-three" onClick={()=>{console.log('thr')}}>thr</Button>
      </Container>
    </>
  )
}

export default App
