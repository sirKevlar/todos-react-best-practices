import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import TodoItem from './components/TodoItem'

function App() {

  return (
    <>
      <Container id="test" display="flex" direction="flex-col" align="align-center" justify="justify-center">
          <TodoItem todo={{id:'1', text: "do this thing right away", priority: "🔴", finishBy: "241215"}}/>
          <TodoItem todo={{id:'2', text: "do this thing soon", priority: "🟡", finishBy: "241215"}}/>
          <Button id="button-one" onClick={()=>{console.log('one')}}>one</Button>
          <Button id="button-two" onClick={()=>{console.log('two')}}>two</Button>
          <Button id="button-three" onClick={()=>{console.log('thr')}}>thr</Button>
      </Container>
    </>
  )
}

export default App
