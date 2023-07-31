import { Explication } from '@/components/Explication'
import { cookies } from 'next/headers'

import Pomodoro from '@/components/Pomodoro'
import Warning from '@/components/Warning'

export default function Home() {
  const myCookie = cookies().getAll()

  console.log('cookies', myCookie)
  return (
    <div>
      <Warning />
      <Pomodoro />
      <Explication />
    </div>
  )
}
