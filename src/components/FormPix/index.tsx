'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { useRef } from 'react'
import { Copy } from 'lucide-react'

import Image from 'next/image'
import Pix from '../../assets/qrcodepix.png'

export function FormPix() {
  const inputRef = useRef(null)

  const copyContent = () => {
    alert('Chave Pix Copiado!')
  }

  return (
    <div className="relative">
      <div>
        <label className="mb-2 text-sm text-zinc-400">Minha chave Pix</label>
        <div className="flex flex-row items-center gap-2">
          <input
            type="text"
            ref={inputRef}
            className="py-2 px-3 border bg-orange-50 border-gray-400 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            defaultValue="rafacanedocontato.sp@gmail.com"
            readOnly
          />
          <button onClick={copyContent}>
            <Copy className="cursor-pointer text-neutral-600 hover:text-stone-700" />
          </button>
        </div>
      </div>

      <div>
        <span className="text-zinc-400">Se preferir, use o QR Code</span>

        <div>
          <Image src={Pix} alt="QR Code Pix" width="150" height="150" />
        </div>
      </div>

      <Dialog.Close>
        <button className="px-8 py-2 bg-emerald-800 text-white rounded-md mt-4 hover:bg-emerald-900">
          Obrigado pela contribuição!🫶
        </button>
      </Dialog.Close>
    </div>
  )
}
