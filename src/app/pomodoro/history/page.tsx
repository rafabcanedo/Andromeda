export default function Hitory() {
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
            <tr>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6 w-1/2 pl-6">
                Tarefa
              </td>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6">
                20 minutos
              </td>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6">
                há 2 meses
              </td>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6 pr-6">
                Concluído
              </td>
            </tr>
            <tr>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6 w-1/2 pl-6">
                Tarefa
              </td>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6">
                20 minutos
              </td>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6">
                há 2 meses
              </td>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6 pr-6">
                Concluído
              </td>
            </tr>
            <tr>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6 w-1/2 pl-6">
                Tarefa
              </td>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6">
                20 minutos
              </td>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6">
                há 2 meses
              </td>
              <td className="bg-gray-400 border-solid border-4 border-gray-700 p-4 text-sm leading-6 pr-6">
                Concluído
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
