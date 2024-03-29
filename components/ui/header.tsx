import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Indie Gamejame">
              <img src="/images/logo.svg" alt="Indie Gamejam" width="32" height="32" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#roadmap"
                  className="font-medium text-cyan-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Расписание
                </a>
              </li>
              <li>
                {/*todo login*/}
                <a href="/" className="btn-sm text-black bg-cyan-500 hover:bg-cyan-600 ml-3">
                  Регистрация
                </a>
              </li>
                <li>
                    <Link href="#faq" className="font-medium text-cyan-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    FAQ
                    </Link>
                </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
