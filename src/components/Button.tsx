import { ButtonProps } from "../lib/types/types";

export default function Button({id, children, type, onClick, onSubmit}: ButtonProps) {
  return (
    <button type={type} id={id} onClick={onClick} onSubmit={onSubmit}>{children}</button>
  )
}
