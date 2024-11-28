import { ButtonProps } from "../lib/types/types";

export default function Button({id, children, onClick}: ButtonProps) {
  return (
    <button id={id} onClick={onClick}>{children}</button>
  )
}
