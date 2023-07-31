import { CyclesContext } from '@/contexts/CyclesContext'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export function NewCyleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="w-full flex items-center justify-center gap-2 text-gray-400 text-lg font-bold flex-wrap">
      {/* <label htmlFor="task">Vou trabalhar em</label>
      <input
        id="task"
        list="task-suggestions"
        placeholder="Nome do seu projeto"
        disabled={!!activeCycle}
        className="appearance-none bg-transparent h-5 border-0 border-b-2 border-primary font-bold text-lg p-2 text-gray-700 flex-1 focus:shadow-none focus:outline-none focus:border-zinc-700"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Estudos" />
      </datalist> */}

      <label htmlFor="minutesAmount">
        Vou trabalhar em minha atividade durante
      </label>
      <input
        type="number"
        id="minutesAmount"
        className="bg-transparent h-5 border-0 border-b-2 border-primary font-bold text-lg p-2 text-teal-600 w-16 focus:shadow-none focus:outline-none focus:border-zinc-700"
        placeholder="00"
        step={5}
        min={5}
        max={25}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </div>
  )
}
