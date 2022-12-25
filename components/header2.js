import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { login, navigation } from "../data/header2";

export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <header>
        <nav class="px-4 lg:px-6 py-6 relative mb-[-96px] z-10">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg lg:px-2">
                <Link href="/" class="flex items-center">
                    <Image
                    src="/images/logo.png"
                    class="mr-3 sm:h-12"
                    alt="Logo"
                    width={200}
                    height={184}
                    />
                </Link>
                <div class="flex items-center sm:hidden">
                    <button
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-100 text-black hover:text-white hover:bg-black focus:outline-none focus:bg-black focus:text-white transition duration-150 ease-in-out"
                    aria-label="Main menu"
                    aria-expanded="false"
                    onClick={() => setOpenMobileMenu(!openMobileMenu)}
                    >
                    <svg
                        class="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>

                    <svg
                        class="hidden h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full sm:flex sm:w-auto">
                    <ul class="flex flex-col mt-4 font-medium sm:flex-row space-x-1 lg:space-x-8 sm:mt-0">
                        <li>
                            <Link href="/" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-white">Works</Link>
                        </li>
                        <li>
                            <Link href="/#AboutUs" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-white">About Us</Link>
                        </li>
                        <li>
                            <Link href="/#Clients" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-white">Clients</Link>
                        </li>
                        <li>
                            <Link href="#Contact" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-white">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

        {openMobileMenu && (
          <div class="md:hidden lg:hidden absolute inset-x-0 px-4 py-2">
            <div class="bg-black px-2 pt-2 pb-3 rounded-md mt-2">
              {navigation.map(({ href, title }) => (
                <a
                  href={href}
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                  key={title}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
    
export default Header;