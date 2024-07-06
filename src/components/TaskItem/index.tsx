import { Trash } from "@phosphor-icons/react"

type Props = {
  id: string 
  isChecked?: boolean 
  value: string 
}

export function TaskItem({ id, isChecked = false, value }: Props) {
  return (
    <div className="flex flex-row justify-between items-center bg-base-500 text-base-100 rounded-lg p-4 border border-base-400">
      <div className="flex gap-x-4">
        <input 
          type="checkbox" 
          checked={isChecked}
          className="bg-red-300 block rounded-lg" 
          value={value}
          id={id}
          />
        <label htmlFor={id}> {value} </label>
      </div>
      <button className="text-base-300 bg-transparent outline-none hover:text-danger transition-colors delay-75">
        <Trash className="end"/>
      </button>
    </div>
  )
}