import { ButtonProps } from "../lib/types/types";

export default function Button({id, children, type, disabled = false, onClick, onSubmit}: ButtonProps) {
  return (
    <button disabled={disabled} type={type} id={id} className='primary-button' onClick={onClick} onSubmit={onSubmit}>{children}</button>
  )
}
