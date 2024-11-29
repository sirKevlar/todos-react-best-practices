import { ProgressBarProps } from "../lib/types/types";

export default function ProgressBar({progressPercentage}: ProgressBarProps) {
  return (
    <div className="progress-outer"><div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div></div>
  )
}
