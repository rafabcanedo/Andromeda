'use client'
import { useContext } from 'react'
import { CyclesContext } from '@/contexts/CyclesContext'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'

import { NewCyleForm } from './NewCycleForm'
import { Countdown } from './Countdown'

import { Pause, Play } from 'lucide-react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a sua tarefa!'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 min.')
    .max(25, 'O ciclo precisa ser de no máximo 25 min.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export default function Pomodoro() {
  const { createCyclePomodoro, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createCyclePomodoro(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <div className="max-w-5xl h-[calc(100vh-25rem)] m-20 p-10 bg-pomodoro rounded-lg flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(handleCreateNewCycle)}
          action=""
          className="flex flex-col items-center gap-14"
        >
          <FormProvider {...newCycleForm}>
            <NewCyleForm />
          </FormProvider>
          <Countdown />

          {activeCycle ? (
            <button
              type="button"
              onClick={interruptCurrentCycle}
              className="w-1/2 border-0 p-4 rounded-lg flex items-center justify-center gap-2 font-bold cursor-pointer bg-red-600 text-gray-200 hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Interromper
              <Pause size={25} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitDisabled}
              className="w-1/2 border-0 p-4 rounded-lg flex items-center justify-center gap-2 font-bold cursor-pointer bg-primary text-gray-200 hover:bg-[#413954] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Começar
              <Play size={25} />
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

// button disabled 'not disabled:hover' quero que qwuando desabled, nao altere o bg
