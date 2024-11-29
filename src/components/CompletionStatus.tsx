import { ProgressBarProps } from "../lib/types/types";

export default function CompletionStatus({ progressPercentage }: ProgressBarProps) {
  return (
    <p className="completion-status">Tasks {progressPercentage}% done!</p>
  )
}
