export type ContainerProps = {
    id: string
    children: React.ReactNode
    display: "flex" | "grid" | "inline-grid" 
    direction?: "flex-col"
    align?: "align-start" | "align-end" | "align-center" | "align-stretch" | "align-baseline"
    justify?: "justify-start" | "justify-end" | "justify-center" | "justify-between" | "justify-around" | "justify-evenly"
}

export type ButtonProps = {
    id: string
    children: string
    onClick: () => void
}

export type AdvertProps = {
    id: string
    imgUrl: string 
    link: string
}

export type InputProps = {
    type: "text" | "radio" | "checkbox"
    id: string 
    val: string | number 
    setVal: (value: string | number) => void
}