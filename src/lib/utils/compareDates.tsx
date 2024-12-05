import { TodoItemType } from "../types/types"

export const compareDates = (objA: TodoItemType, objB: TodoItemType) => {

    const dateA = objA.finishBy
    const dateB = objB.finishBy

    if(dateA < dateB) return -1
    if(dateA > dateB) return 1
    return 0
}