import { TodoItemProps } from "../lib/types/types";

export default function TodoItem({children, id, text, priority, finishBy, status, changeTodoStatus }: TodoItemProps) {
    const finishDate = `${finishBy[4]}${finishBy[5]}/${finishBy[2]}${finishBy[3]}/20${finishBy[0]}${finishBy[1]}`

    return (
    <div id={id} className="todo flex justify-between"><p id={`priority${id}`}>{priority}</p><p className={status} onClick={()=>{changeTodoStatus(id)}}>{text} by {finishDate} </p>{children}</div>
  )
}
