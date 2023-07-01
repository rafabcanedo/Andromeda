'use client'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import Perfil from '../../assets/perfil.jpg'
import { X } from 'lucide-react'
import { FormPix } from '@/components/FormPix'

export default function Donate() {
  return (
    <main className="m-0 w-full">
      <div className="flex min-h-screen w-full flex-wrap items-center justify-center p-2">
        <div className="w-[390px] rounded-lg bg-form px-20 py-20">
          <div className="flex w-full max-w-xs flex-col gap-4 bg-form">
            <div className="flex items-center justify-center">
              <h3 className="font-bold text-primary text-2xl underline">
                Donate
              </h3>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src={Perfil}
                alt="Foto Perfil"
                width="100"
                height="100"
                className="rounded-full"
              />
            </div>

            <div>
              <span>
                Sinta-se à vontade para doar algum valor simbólico para ajudar
                no desenvolvimento do projeto. <br /> Obrigado pelo apoio 💛
              </span>
            </div>

            <Dialog.Root>
              <Dialog.Trigger
                type="submit"
                className="px-8 py-2 bg-primary text-white rounded-md mt-4 hover:bg-hoverprimary"
              >
                Faça sua Doação
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

                <Dialog.Content className="absolute p-10 bg-primary rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
                    <X size={24} arial-label="Fechar" />
                  </Dialog.Close>

                  <Dialog.Title className="text-3xl leading-tight text-slate-300">
                    Minha chave Pix
                  </Dialog.Title>

                  <FormPix />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </main>
  )
}
