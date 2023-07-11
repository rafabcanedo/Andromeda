import { Explication } from '@/components/Explication'
import Pomodoro from '@/components/Pomodoro'
import Warning from '@/components/Warning'

export default function Home() {
  return (
    <div>
      <Warning />
      <Pomodoro />
      <Explication />
    </div>
  )
}
