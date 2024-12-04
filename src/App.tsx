import { useMemo, useState } from 'react';
import './App.css';
import Container from './components/Container';
import {
  CURRENT_ADVERTS,
  GUEST_USER,
  INITIAL_TODOS,
} from './lib/constants/constants';
import { User } from './lib/types/types';
import { UserContext } from './contexts/UserContext';
import Graphic from './components/Graphic';
import Advertising from './components/Advertising';
import useScreenFormat from './lib/hooks/useScreenFormat';
import Logo from './components/Logo';
import CompletionStatus from './components/CompletionStatus';
import ProgressBar from './components/ProgressBar';
import TodoList from './components/TodoList';
import { addTodo, changeTodoStatus, removeTodo } from './lib/utils/events';
import AddTodoForm from './components/AddTodoForm';
import RegisterForm from './components/RegisterForm';
import SignInOut from './components/SignInOut';

function App() {
  const [todoList, setTodoList] = useState(INITIAL_TODOS);
  const [isRegisteredUser, setIsRegisteredUser] = useState(false)
  const [currentUser, setCurrentUser] = useState<User>(GUEST_USER);
  const [adverts] = useState(CURRENT_ADVERTS);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const screenType = useScreenFormat();

  const progressPercentage = useMemo(() => {
    const completedTodos = todoList.filter((todo) => {
      return todo.status === 'complete';
    });
    return Math.round((completedTodos.length / todoList.length) * 100);
  }, [todoList]);
  

  if (screenType === 'desktop') {
    
    return (
        <UserContext.Provider value={currentUser}>
          <RegisterForm
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            isRegisteredUser={isRegisteredUser}
            setCurrentUser={setCurrentUser}
          >
            <Container
              id='background'
              display='flex'
              align='align-center'
              justify='justify-between'
            >
              <Graphic />
              <Advertising adverts={adverts} />
              <h2 id="welcome-message">Hey there {currentUser.displayName} 👋</h2>
            </Container>
            <Container id='body' display='grid'>
              <Container id='header' display='grid'>
                <Container
                  id='header-top'
                  display='flex'
                  align='align-center'
                  justify='justify-between'
                >
                  <Logo />
                  <CompletionStatus
                    progressPercentage={`${progressPercentage}`}
                  />
                </Container>
                <ProgressBar progressPercentage={`${progressPercentage}`} />
              </Container>
              <Container id='main-content' display='grid'>
                <TodoList
                  todoList={todoList}
                  removeTodo={removeTodo}
                  changeTodoStatus={changeTodoStatus}
                  setTodoList={setTodoList}
                />
                <Container
                  id='client-input'
                  display='flex'
                  direction='flex-col'
                  align='align-center'
                  justify='justify-between'
                >
                  <AddTodoForm
                    addTodo={addTodo}
                    setTodoList={setTodoList}
                    activeTodos={todoList.length}
                  />
                  <SignInOut
                    setIsModalVisible={setIsModalVisible}
                    setIsRegisteredUser={setIsRegisteredUser}
                  />
                </Container>
              </Container>
            </Container>
          </RegisterForm>
        </UserContext.Provider>
    );
  }
  if (screenType === 'tablet') return <h1>Tablet View Not Supported Yet</h1>;
  if (screenType === 'mobile') return <h1>Mobile View Not Supported Yet</h1>;
}

export default App;
