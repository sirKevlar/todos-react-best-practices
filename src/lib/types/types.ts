import React, { FormEventHandler, MouseEventHandler } from "react"


export type AddTodoFormProps = {
    addTodo: (newTodo: TodoItemProps) => void
}
export type AdvertProps = {
    id: string
    imgUrl: string 
    link: string
}
export type ButtonProps = {
    id: string
    children: string
    type: "submit" | "reset" | "button"
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
    onClick: () => void
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
export type TodoItemProps = { 
    children?: React.ReactNode
    id: string 
    text: string 
    priority: string 
    finishBy: string 
}
export type TodoListProps = {
    todoList: TodoItemProps[]
    removeTodo: (id: string) => void
}
export type UserProviderProps = {
    children: React.ReactNode
    setUser: React.SyntheticEvent
}
export type User = {
    firstName: string 
    lastName: string 
    email: string 
    id: string 
    userLevel: string
}