import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-navbar py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center text-white">
            <a
              className="hover:text-primary font-pop"
              href="https://www.instagram.com/eusoujorgeandrade/"
              target="_blank"
              rel="noreferrer"
            >
              Home
            </a>

            <a
              className="hover:text-primary font-pop"
              href="https://api.whatsapp.com/send?phone=5514997782272&text="
              target="_blank"
              rel="noreferrer"
            >
              Sobre Nós
            </a>
          </div>

          <span className="text-white font-pop">
            &copy; {new Date().getFullYear()} Andrômeda. All rights reserved.
          </span>

          <div>
            <Link href="/donate">
              <button className="relative rounded-lg bg-primary px-4 py-2 font-medium text-white">
                Donate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
