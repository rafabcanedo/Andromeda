'use client'
import { Play } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function Pomodoro() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateCiclePomodoro(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(handleCreateCiclePomodoro)}
        action=""
        className="flex flex-col items-center gap-14"
      >
        <div className="w-full flex items-center justify-center gap-2 text-gray-400 text-lg font-bold flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            id="task"
            list="task-suggestions"
            placeholder="Nome do seu projeto"
            className="appearance-none bg-transparent h-5 border-0 border-b-2 border-indigo-200 font-bold text-lg p-2 text-gray-700 flex-1 focus:shadow-none focus:border-green-400"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Estudos" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <input
            type="number"
            id="minutesAmount"
            className="bg-transparent h-5 border-0 border-b-2 border-indigo-200 font-bold text-lg p-2 text-gray-700 w-16 focus:shadow-none focus:border-green-400"
            placeholder="00"
            step={5}
            min={5}
            max={25}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </div>

        <div className="font-sans text-9xl leading-[8rem] text-gray-300 flex gap-4">
          <span className="bg-gray-700 px-8 rounded-lg">0</span>
          <span className="bg-gray-700 px-8 rounded-lg">0</span>
          <span className="px-8 text-green-600 w-16 overflow-hidden flex justify-center">
            :
          </span>
          <span className="bg-gray-700 px-8 rounded-lg">0</span>
          <span className="bg-gray-700 px-8 rounded-lg">0</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="w-full border-0 p-4 rounded-lg flex items-center justify-center gap-2 font-bold cursor-pointer bg-green-700 text-gray-200 hover:bg-green-800 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Começar
          <Play size={25} />
        </button>
      </form>
    </div>
  )
}

// button disabled 'not disabled:hover' quero que qwuando desabled, nao altere o bg
