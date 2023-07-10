'use client'
import { CyclesContext } from '@/contexts/CyclesContext'
import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function Hitory() {
  const { cycles } = useContext(CyclesContext)
  return (
    <main className="flex-1 p-14 flex flex-col">
      <h1 className="text-2xl text-zinc-200">Histórico dos meus ciclos</h1>

      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="bg-gray-600 p-4 text-left text-gray-200 text-lg leading-6 rounded-l-lg pl-6">
                Tarefa
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-200 text-lg leading-6">
                Duração
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-200 text-lg leading-6">
                Início
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-200 text-lg leading-6 rounded-r-lg pr-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && <div>Concluído</div>}
                    {cycle.interruptedDate && <div>Interrompido</div>}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <div>Em andamento</div>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
