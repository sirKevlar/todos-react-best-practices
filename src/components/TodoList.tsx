import { TodoItemType, TodoListProps } from "../lib/types/types"
import DeleteButton from "./DeleteButton"
import TodoItem from "./TodoItem"

export default function TodoList({todoList, removeTodo, changeTodoStatus, setTodoList}: TodoListProps) {

  return (
    <ul id="todo-list">
        {todoList.map(({id, text, priority, finishBy, status}: TodoItemType)=>{
            return (
              <TodoItem changeTodoStatus={changeTodoStatus} setTodoList={setTodoList} key={id} id={id} status={status} text={text} priority={priority} finishBy={finishBy}>
                <DeleteButton id={id} removeTodo={removeTodo} setTodoList={setTodoList}/>
              </TodoItem>
              )
        })}
    </ul>
  )
}
