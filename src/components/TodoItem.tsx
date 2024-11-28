import { TodoItemProps } from "../lib/types/types";
import DeleteButton from "./DeleteButton";

export default function TodoItem({id, text, priority, finishBy}: TodoItemProps) {
    const finishDate = `${finishBy[4]}${finishBy[5]}/${finishBy[2]}${finishBy[3]}/20${finishBy[0]}${finishBy[1]}`
    return (
    <div className="todo flex justify-between"><p>{priority}</p><p>{text} by {finishDate} </p><DeleteButton id={id} onClick={()=>{}}/></div>
  )
}
