import './App.css'
import Button from './components/Button'
import Container from './components/Container'

function App() {

  return (
    <>
      <Container id="test" display="flex" direction="flex-col" align="align-center" justify="justify-center">
          <Button id="button-one" onClick={()=>{console.log('one')}}>one</Button>
          <Button id="button-two" onClick={()=>{console.log('two')}}>two</Button>
          <Button id="button-three" onClick={()=>{console.log('thr')}}>thr</Button>
      </Container>
    </>
  )
}

export default App
