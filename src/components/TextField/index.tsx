import { InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = InputHTMLAttributes<HTMLInputElement> & {}

export function TextField({ ...props }: Props) {
  return (
    <input 
      className={twMerge('w-full h-full rounded-lg border bg-base-500 border-base-700 block mx-auto p-4 text-base-100 placeholder-base-300 outline-none focus:border-secondary-dark', props.className)} 
      {...props}
    />
  )
}