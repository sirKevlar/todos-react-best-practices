import React, { FormEventHandler, MouseEventHandler } from "react"


export type AddTodoFormProps = {
    activeTodos: number
    addTodo: (newTodo: TodoItemType, setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>) => void
    setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>
}
export type AdvertProps = {
    id?: string
    image: string 
    link: string
}
export type AdvertisingProps = {
    adverts: AdvertProps[]
}
export type ButtonProps = {
    id: string
    children: string
    type: "submit" | "reset" | "button"
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    onSubmit?: FormEventHandler<HTMLButtonElement>
}
export type ContainerProps = {
    id: string
    children: React.ReactNode
    display: "flex" | "grid" | "inline-grid" 
    direction?: "flex-col"
    align?: "align-start" | "align-end" | "align-center" | "align-stretch" | "align-baseline"
    justify?: "justify-start" | "justify-end" | "justify-center" | "justify-between" | "justify-around" | "justify-evenly"
}
export type DeleteProps = {
    id: string 
    removeTodo: (id: string, setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>) => void
    setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>
}
export type InputProps = {
    type: "text" | "radio" | "checkbox"
    id: string 
    name: string
    placeholder: string
    val: string | number 
    handleChange: (value: string, name: string) => void
}
export type ProgressBarProps = {
    progressPercentage: string
}
export type RegisterFormProps = {
    children: React.ReactNode
    isModalVisible: boolean 
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    isRegisteredUser: boolean
    setCurrentUser: React.Dispatch<React.SetStateAction<User>> 
}
export type SignInOutProps = {
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    setIsRegisteredUser: React.Dispatch<React.SetStateAction<boolean>> 
}
export type TodoItemProps = { 
    children?: React.ReactNode
    id: string 
    text: string 
    priority: string 
    finishBy: string 
    status: string 
    changeTodoStatus: (id: string, setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>) => void
    setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>
}
export type TodoListProps = {
    todoList: TodoItemType[]
    removeTodo: (id: string, setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>) => void
    changeTodoStatus: (id: string, setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>) => void
    setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>
}
export type UserProviderProps = {
    children: React.ReactNode
    setUser: React.Dispatch<React.SetStateAction<TodoItemType[]>>
}
export type TodoItemType = {
        id: string,
        text: string,
        priority: string,
        finishBy: string,
        status: string,
}
export type ContextArgs = {
    children: React.ReactNode
}
export type ValidTodoInputs = {
    text: string 
    priority: string 
    finishBy: string
}
export type User = {
    displayName: string | null;
    email: string | null;
    uid?: string;
  }
export type DetermineBreakpoint = (width: number) => string
export type GenericBlankFunction = () => void
export type HandleResize = () => React.SyntheticEvent
export type UseScreenFormat = () => string