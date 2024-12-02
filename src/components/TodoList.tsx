import { TodoItemProps, TodoListProps } from "../lib/types/types"
import DeleteButton from "./DeleteButton"
import TodoItem from "./TodoItem"

export default function TodoList({todoList, removeTodo, changeTodoStatus}: TodoListProps) {

  return (
    <ul id="todo-list">
        {todoList.map(({id, text, priority, finishBy, status}: TodoItemProps)=>{
            const key = `todoItem${id}`

            return (
              <TodoItem changeTodoStatus={changeTodoStatus} key={key} id={id} status={status} text={text} priority={priority} finishBy={finishBy}>
                <DeleteButton id={id} onClick={()=>{removeTodo(id)}}/>
              </TodoItem>
              )
        })}
    </ul>
  )
}
