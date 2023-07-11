import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-navbar py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center text-white">
            <Link
              className="text-black hover:text-indigo-900 font-pop"
              href="/"
            >
              Home
            </Link>

            <Link
              className="text-black hover:text-indigo-900 font-pop"
              href="/pomodoro"
            >
              Pomodoro
            </Link>
          </div>

          <span className="text-black font-pop">
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
