type Props = {
  value: string
}

export function Badge({ value }: Props) {
  return(
    <span className='text-sm text-center min-w-8 font-bold rounded-full bg-base-400 text-base-200 px-2 py-[0.125rem]'>
      {value}
    </span>
  )
}