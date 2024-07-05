import { TaskItem } from "./components/TaskItem";
import { PlusCircle } from '@phosphor-icons/react'

export function App() {
  return (
    <main className="flex flex-col w-screen h-screen bg-base-600">
      <header className="w-screen h-52 bg-base-700 flex items-center">
        <h1 className="font-bold text-4xl m-auto">
          <span className="text-primary">Task</span>
          <span className="text-primary-dark">Manager</span>
        </h1>
      </header>
      <div className="w-2/3 flex mt-[calc(-0px-1.5rem)] mx-auto gap-x-4">
        <input 
          className="w-full h-14 rounded-lg border bg-base-500 border-base-700 block mx-auto p-4 text-base-100 placeholder-base-300 outline-none focus:border-secondary-dark" 
          placeholder="Adicione uma nova tarefa"
        />
        <button className="flex items-center justify-center gap-2 h-14 bg-secondary-dark focus:outline-none hover:bg-secondary p-4 rounded-lg text-sm font-bold text-base-100 transition-colors delay-75">
          Criar
          <PlusCircle size={20} />
        </button>
      </div>

      <div className="w-2/3 mx-auto mt-16">
        <div className="flex justify-between font-bold">
          <span className="text-primary"> Tarefas criada </span>
          <span className="text-secondary"> Concluídas </span>
        </div>
        <div className="flex flex-col mt-4">
          <TaskItem id="teste" value="indo algum saldhsa asjhd kjhahsdjha kjhkjdhsj hdjshakjs hkjshdkjsdhahkjashdkhk h kjahsdjhakj"/>
        </div>
      </div>
    </main>
  )
}

