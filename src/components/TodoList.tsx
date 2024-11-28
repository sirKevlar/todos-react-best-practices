import { TodoItemProps, TodoListProps } from "../lib/types/types"
import TodoItem from "./TodoItem"

export default function TodoList({todos}: TodoListProps) {
  return (
    <ul>
        {todos.map(({id, text, priority, finishBy}: TodoItemProps)=>{
            return <TodoItem id={id} text={text} priority={priority} finishBy={finishBy} />
        })}
    </ul>
  )
}
