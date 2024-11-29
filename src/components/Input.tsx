import { InputProps } from "../lib/types/types";

export default function Input({id, name, placeholder, type, val, handleChange}: InputProps) {
  return (
    <input id={id} name={name} placeholder={placeholder} type={type} value={val} onChange={(e)=>{handleChange(e.target.value, e.target.name)}}/>
  )
}
