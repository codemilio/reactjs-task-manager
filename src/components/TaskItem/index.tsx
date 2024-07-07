import { Trash } from "@phosphor-icons/react"
import { ITask } from "../../utils/types"
import clsx from "clsx"

type Props = ITask & {
  onDeleteTask: (id: string) => void
  onCheckTask: (id: string) => void
}

export function TaskItem({ id, isChecked = false, title, onDeleteTask, onCheckTask }: Props) {
  const handleDelete = () => {
    onDeleteTask(id)
  }

  const handleCheckItem = () => {
    onCheckTask(id)
  }

  return (
    <div className={clsx("flex flex-row justify-between items-center bg-base-500 text-base-100 rounded-lg p-4 border border-base-400", {
      "text-base-300 line-through border-base-500": isChecked
    })}>
      <div className="flex gap-x-4">
        <input 
          type="checkbox" 
          checked={isChecked}
          className="bg-red-300 block rounded-lg" 
          onChange={handleCheckItem}
          value={title}
          id={id}
          />
        <label htmlFor={id}> {title} </label>
      </div>
      <button className="text-base-300 bg-transparent outline-none hover:text-danger transition-colors delay-75" onClick={handleDelete}>
        <Trash className="end"/>
      </button>
    </div>
  )
}