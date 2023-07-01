'use client'
import { useState } from 'react'
import { X } from 'lucide-react'

const Warning = () => {
  const [modal, setModal] = useState(true)

  const handleModal = () => {
    setModal(!modal)
  }
  return (
    <>
      {modal && (
        <div className="flex items-center justify-center px-4 py-3 bg-primary opacity-75">
          <div className="flex flex-row items-center">
            <span className="text-white font-sans">
              🚧 Atenção !! Este site ainda está em construção, confira as
              ferramentas disponíveis 🚧
            </span>
            <button
              className="flex cursor-pointer ml-9 border-none bg-transparent"
              onClick={handleModal}
            >
              <X size={20} color="#FFFFFF" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Warning
