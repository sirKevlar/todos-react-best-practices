import { TodoItemProps, TodoListProps } from "../lib/types/types"
import DeleteButton from "./DeleteButton"
import TodoItem from "./TodoItem"

export default function TodoList({todoList, removeTodo}: TodoListProps) {

  return (
    <ul>
        {todoList.map(({id, text, priority, finishBy}: TodoItemProps)=>{
            const key = `todoItem${id}`

            return (
              <TodoItem key={key} id={id} text={text} priority={priority} finishBy={finishBy}>
                <DeleteButton id={id} onClick={()=>{removeTodo(id)}}/>
              </TodoItem>
              )
        })}
    </ul>
  )
}
