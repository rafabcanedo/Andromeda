'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Copy } from 'lucide-react'

import Image from 'next/image'
import Pix from '../../assets/qrcodepix.png'

export function FormPix() {
  const [inputValue, setInputValue] = useState('rafacanedocontato.sp@gmail.com')

  const CopyInput = () => {
    alert('Código Pix Copiado!')
  }
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 mt-4">
      <div>
        <label className="mb-2 text-sm text-primary font-medium">
          Minha chave Pix
        </label>
        <div className="flex flex-row items-center gap-2">
          <input
            type="text"
            value={inputValue}
            className="py-2 px-3 border bg-orange-50 border-gray-400 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            defaultValue="rafacanedocontato.sp@gmail.com"
            readOnly
            onChange={(e) => setInputValue(e.target.value)}
          />
          <CopyToClipboard text={inputValue}>
            <button onClick={CopyInput}>
              <Copy className="cursor-pointer text-neutral-600 hover:text-stone-700" />
            </button>
          </CopyToClipboard>
        </div>
      </div>

      <div className="flex flex-col mt-4 gap-1">
        <span className="text-primary font-medium text-sm">
          Se preferir, use o QR Code
        </span>

        <div>
          <Image src={Pix} alt="QR Code Pix" width="150" height="150" />
        </div>
      </div>

      <Dialog.Close>
        <button className="px-8 py-2 bg-primary text-white rounded-md mt-8 hover:bg-[#3c354d]">
          Obrigado pela contribuição!🫶
        </button>
      </Dialog.Close>
    </div>
  )
}
