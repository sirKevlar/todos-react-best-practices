import { TodoItemProps } from "../lib/types/types";

export default function TodoItem({children, id, text, priority, finishBy, status, changeTodoStatus, setTodoList }: TodoItemProps) {
    const finishDate = `${finishBy[4]}${finishBy[5]}/${finishBy[2]}${finishBy[3]}/20${finishBy[0]}${finishBy[1]}`

    return (
    <div id={id} className="todo flex justify-between"><p id={`priority${id}`}>{priority}</p><p className={`todo-text ${status}`} onClick={()=>{changeTodoStatus(id, setTodoList)}}>{text} by {finishDate} </p>{children}</div>
  )
}
