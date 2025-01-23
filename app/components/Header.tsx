"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
              <span className="sr-only">Bellisimo</span>
              <img src="/name1.png" alt="Bellisimo" className="text-3xl font-extrabold text-pink-600" />
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
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/#services"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                  <Link
                    href="/about"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                  <Button asChild className="mt-4">
                    <Link href="/book" onClick={closeMenu}>
                      Book Now
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

