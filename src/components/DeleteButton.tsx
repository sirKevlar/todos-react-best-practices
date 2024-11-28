import { DeleteProps } from "../lib/types/types";

export default function DeleteButton({id, onClick}: DeleteProps) {
  return (
    <button id={id} onClick={onClick}>❌</button>
  )
}
