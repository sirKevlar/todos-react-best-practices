import { ContainerProps } from "../lib/types/types";

export default function Container({id, display, direction, align, justify, children}: ContainerProps) {
  return (
    <div id={id} className={`${display} ${direction ? direction : null} ${align ? align : null} ${justify ? justify : null}`}>{children}</div>
  )
}
