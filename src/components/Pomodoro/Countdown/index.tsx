import { useEffect, useContext } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '@/contexts/CyclesContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCyclesAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  // Convertendo o número de minutos (escolhido pelo user) em segundos
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCyclesAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCyclesAsFinished,
    setSecondsPassed,
  ])

  // Quanto ja passou desde do inicio do ciclo
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  // Arredendando para menos,caso de numero quebrado
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  // console.log(formState.errors)

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <div className="font-sans text-9xl leading-[8rem] text-gray-300 flex gap-4">
      <span className="bg-primary px-8 rounded-lg">{minutes[0]}</span>
      <span className="bg-primary px-8 rounded-lg">{minutes[1]}</span>
      <span className="px-8 text-[#413954] w-16 overflow-hidden flex justify-center">
        :
      </span>
      <span className="bg-primary px-8 rounded-lg">{seconds[0]}</span>
      <span className="bg-primary px-8 rounded-lg">{seconds[1]}</span>
    </div>
  )
}
