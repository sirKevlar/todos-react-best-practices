import { DeleteProps } from "../lib/types/types";

export default function DeleteButton({id, removeTodo, setTodoList}: DeleteProps) {
  return (
    <button id={id} onClick={()=>{removeTodo(id, setTodoList)}} className="delete">❌</button>
  )
}
