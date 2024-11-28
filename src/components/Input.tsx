import { InputProps } from "../lib/types/types";

export default function Input({id, type, val, setVal}: InputProps) {
  return (
    <input id={id} type={type} value={val} onChange={(e)=>{setVal(e.target.value)}}/>
  )
}
