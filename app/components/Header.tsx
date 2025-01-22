import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Bellisimo</span>
              <span className="text-3xl font-extrabold text-pink-600">Bellisimo</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/#services" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Services
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button asChild>
              <Link href="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

