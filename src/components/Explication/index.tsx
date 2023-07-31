import Link from 'next/link'

export function Explication() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center pt-16">
        <h3 className="font-bold text-2xl">O que é Andrômeda?</h3>
        <span className="font-sans text-lg">
          Andrômeda é um projeto que começou na faculdade, durante o trabalho de
          Conclusão de Curso do desenvolvedor. A ideia do projeto era trazer o
          debate <br /> da importancia da produtividade e auxiliar os usuário em
          sua rotina com algumas ferramentas como Pomodoro, Lista de Tarefas,
          etc.
        </span>
      </div>
      <div className="flex flex-col items-center pt-8">
        <h3 className="font-bold text-2xl">Quem desenvolveu Andrômeda?</h3>
        <span className="font-sans text-lg">
          O idealizador e desenvolvedor{' '}
          <a className="text-teal-800 cursor-pointer">Rafael Canedo</a> resolveu
          lançar uma versão mais simples do seu projeto da faculdade. <br /> Seu
          objetivo é mostrar um novo mundo produtivo para novos usuários.
        </span>
      </div>
      <div className="flex flex-col items-center pt-8">
        <h3 className="font-bold text-2xl">Sobre Pomodoro</h3>
        <span className="font-sans text-lg">
          Técnica desenvolvida no final dos anos 1980, o timer consiste em
          trabalhar o foco em qualquer atividade do seu dia a dia.
          <br /> Pomodoro auxilia quem tem dificuldade em terminar suas tarefas
          em um determinado prazo, trabalhando por ciclos de tempo.
        </span>
        <div className="flex flex-col mt-6">
          <span className="font-medium text-lg underline text-slate-900">
            Começando a usar o Pomodoro
          </span>
          <span className="font-sans text-lg">
            Qualquer pessoa pode começar a usar o Pomodoro em Andrômeda,
            seguindo o passo a passo abaixo:{' '}
          </span>
          <ul>
            <li className="font-sans text-lg">• Vá a página do Pomodoro</li>
            <li className="font-sans text-lg">
              • Escolha um tempo de preferencia para a sua atividade
            </li>
            <li className="font-sans text-lg">
              • Quando estiver pronto, clique no botão Começar e trabalhe seu
              foco!
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pt-8">
        <h3 className="font-bold text-2xl">Conclusão</h3>
        <span className="font-sans text-lg">
          Primeiro, vamos falar sobre produtividade que se resume em produzir em
          maior quantidade e qualidade junto a uma boa gestão de tempo.
          <br /> Contando também com um ótimo planejamento de prioridades de
          atividades.
        </span>
      </div>
    </div>
  )
}
