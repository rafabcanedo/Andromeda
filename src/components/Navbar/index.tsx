'use client'
import Image from 'next/image'
import Logo from '../../assets/LogoNav.png'
import { useState } from 'react'
import { X, AlignJustify } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full px-5 shadow-md h-20">
      <div className="items-center justify-between px-7 md:flex md:px-10">
        <div className="flex items-center">
          <Link href="/">
            <Image src={Logo} alt="Logo MidnightClub" width={55} height={55} />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          {open ? <X /> : <AlignJustify />}
        </div>

        <ul
          className={`absolute left-0 z-[-1] w-full bg-background pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 gap-4 md:gap-4 ${
            open
              ? 'top-20 opacity-100'
              : 'top-[-490px] opacity-0 md:opacity-100'
          }`}
        >
          <div>
            <Link href="/login">
              <button
                className="relative border-2 font-medium border-primary bg-transparent py-2 px-4 rounded-lg text-primary transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-lef before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 cursor-not-allowed"
                disabled
              >
                Login
              </button>
            </Link>
          </div>
          <div>
            <Link href="/donate">
              <button className="relative font-medium bg-primary py-2 px-4 rounded-lg text-white">
                Donate
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  )
}
