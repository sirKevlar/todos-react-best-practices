import { TodoItemType } from "../types/types";
import { compareDates } from "./compareDates";


export const addTodo = (newTodo: TodoItemType, setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>) => {
    setTodoList((curr)=>{
      const sortedTodos = [...curr, newTodo].sort(compareDates)
      return sortedTodos
    })
  }

export const removeTodo = (id: string, setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>> ): void => {
    setTodoList((curr: TodoItemType[]) => {
        const newList = curr.filter((todoItem: TodoItemType)=>{
          return todoItem.id !== id
        })
        return newList
      })
}

export const changeTodoStatus = (id: string, setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>> ) => {
    setTodoList((curr: TodoItemType[])=>{
      const newList = curr.map((todoItem: TodoItemType)=>{
          if(todoItem.id === id) {
            todoItem.status = todoItem.status === 'complete' ? 'incomplete' : 'complete'
        }
        return todoItem
      })
      return newList
    })
  }