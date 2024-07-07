import { useState } from "react"
import { TaskItem } from "./components/TaskItem"
import { PlusCircle } from '@phosphor-icons/react'
import { TextField } from "./components/TextField"
import { Badge } from "./components/Badge"
import { ITask } from "./utils/types"

export function App() {

  const [taskList, setTaskList] = useState<ITask[]>([
    {
      title: 'Minha tarefa',
      time: 1111,
      isChecked: false
    },
    {
      title: 'Minha tarefa',
      time: 1111,
      isChecked: true
    },
    {
      title: 'Minha tarefa',
      time: 1111,
      isChecked: true
    },
    {
      title: 'Minha tarefa',
      time: 1111,
      isChecked: true
    },
    {
      title: 'Minha tarefa',
      time: 1111,
      isChecked: true
    },
  ])
  
  const [newTask, setNewTask] = useState<ITask>({
    title: '',
    time: 0
  })


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const newValue = value.replace(/\D/g, '')
    const limitedValue = newValue.slice(0, 2)
    e.target.value = limitedValue
  }

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select()
  }

  const handleCreateItem = () => {
    setTaskList((prev) => [...prev, newTask])
  }
  
  return (
    <main className="flex flex-col w-screen h-screen bg-base-600">
      <header className="w-screen h-52 bg-base-700 flex items-center">
        <h1 className="font-bold text-4xl m-auto">
          <TextField 
            className="bg-transparent text-primary-dark w-11 focus:outline-none overflow-y-hidden" 
            type="number" max={24} min={0} 
            maxLength={2}
            placeholder="00"
            defaultValue="00"
            onChange={handleInputChange}
            onClick={handleClick}
          />
          <span className="text-primary">:</span>
          <TextField 
            className="bg-transparent text-primary-dark w-11 focus:outline-none"
            type="number" max={60} min={0}
            maxLength={2}
            placeholder="00"
            defaultValue="00"
            onChange={handleInputChange}
            onClick={handleClick}
          />
          <span className="text-primary">:</span>
          <TextField 
            className="bg-transparent text-primary-dark w-16 focus:outline-none"
            type="number" max={60} min={0}
            maxLength={2}
            placeholder="ss"
            defaultValue="00"
            onChange={handleInputChange}
            onClick={handleClick}
            readOnly
          />
        </h1>
      </header>
      <div className="w-2/3 h-14 flex mt-[calc(-0px-1.75rem)] mx-auto gap-x-4">
        <TextField placeholder="Adicione uma nova tarefa..."/>
        <button 
          className="flex h-full items-center justify-center gap-2 bg-secondary-dark focus:outline-none hover:bg-secondary p-4 rounded-lg text-sm font-bold text-base-100 transition-colors delay-75"
          onClick={handleCreateItem}
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </div>

      <div className="flex flex-col w-2/3 mx-auto gap-y-4 mt-14">
        <div className="flex justify-between font-bold">
          <span className="flex gap-x-2 text-primary"> 
            Tarefas criadas 
            <Badge value="5"/>
          </span>
          <span className="flex gap-x-3 text-secondary"> 
            Concluídas 
            <Badge value="0 de 5"/>
          </span>
        </div>
        <div className="flex flex-col gap-y-2">
          {taskList.map(data => <TaskItem {...data} id="123"/>)}
        </div>
        <div className="flex justify-between font-bold">
          <span className="text-primary"> Tempo estimado </span>
          <span className="text-secondary"> Percorrido </span>
        </div>
      </div>
    </main>
  )
}

