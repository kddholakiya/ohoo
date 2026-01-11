  "use client"

  import React, { useState } from "react"
  import Link from "next/link"
  import { Facebook, Instagram, Linkedin, X } from "lucide-react"
  import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
  import Image from "next/image"
import { useEffect, useRef } from "react"
import LogoWithEyes from "@/components/Logo/logo"

  // CHANGE 1: Added submenu structure to navItems
  const navItems = [
    { 
      href: "#products", 
      label: "Products",
      submenu: [
        { href: "#juice", label: "juice" },
        { href: "#smoothie", label: "smoothie" },
        { href: "#mocktail", label: "mocktail" },
      ]
    },
    { 
      href: "#about", 
      label: "About",
      submenu: [
        { href: "#b-corp", label: "B-Corp" },
        { href: "#innocent-promise", label: "the innocent promise" },
        { href: "#nutrition", label: "nutrition" },
        { href: "#sourcing", label: "sourcing stories" },
        { href: "#farming", label: "farming champions" },
      ]
    },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#contact", label: "Contact" },
  ]

  export default function Navbar() {
    // CHANGE 2: Added state to track which menu item is being hovered
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)

    return (
      <div className="group  relative sticky top-0 z-40 pointer-events-none">
        <header className="w-full border-b-0 backdrop-blur bg-[#E53119] sticky transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:h-2 group-hover:relative border-b-0">
          <div className="absolute right-10 top-0 z-50 transform">
            <Sheet>
              <SheetTrigger asChild>
                <button 
                  aria-label="Open menu" 
                  className="pointer-events-auto flex items-center gap-2 rounded-b-full px-3 py-1 border-none bg-[#E53119] shadow-lg transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] hover:translate-y-1.5 hover:shadow-xl active:scale-[.99]" 
                  style={{ willChange: "transform" }}
                >
                  <span className="flex h-6 w-6 py-5 items-center justify-center rounded-full">
                    <Image src="/menu.png" height={100} width={100} className="invert" alt="ohoo icon" />
                  </span>
                </button>
              </SheetTrigger>

              <SheetContent side="top" hideClose className="bg-[#E53119] text-white p-0 border-b-0">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex flex-col items-center gap-2 py-0 px-4">
                      <div className="rounded-full bg-white/10 p-3">
                        <Image src="/menu.png" height={30} width={30} className="invert bg-transparent" alt="ohoo icon" />
                      </div>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                
                <div className="h-[55vh] w-full flex flex-col items-center">
                  <div className="flex w-full flex-col items-center gap-5 px-6">
                    {/* CHANGE 3: Modified nav items to support hover and submenu display */}
                    {navItems.map((item) => (
                      <div 
                        key={item.href}
                        className="w-full relative"
                        onMouseEnter={() => setHoveredItem(item.label)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Link
                          href={item.href}
                          className="font-caveat flex items-center justify-center text-center text-3xl font-bold uppercase tracking-wide hover:text-white/80 transition-colors"
                        >
                          {item.label}
                        </Link>
                        
                        {/* CHANGE 4: Submenu that appears on hover */}
                        {item.submenu && hoveredItem === item.label && (
                          <div className="mt-2 font-caveat flex flex-wrap justify-center gap-3 w-full">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.href}
                                href={subitem.href}
                                className="text-2xl lowercase text-white hover:text-amber-100  transition-colors px-2"
                              >
                                {subitem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="mt-6 flex w-full items-center justify-center gap-4">
                      <Link href="#" ><Instagram size={33}  className="hover:text-amber-100" /></Link>
                      <Link href="#" ><Facebook  size={33} className="hover:text-amber-100" /></Link>
                      <Link href="#" ><Linkedin  size={33} className="hover:text-amber-100" /></Link>
                    </div>
                  </div>

                  <SheetClose asChild>
                    <button className="absolute -bottom-11 right-10 transform rounded-b-full bg-[#E53119] px-3 py-4 text-white shadow-lg">
                      <X className="size-5" />
                    </button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="absolute left-10 top-2 z-50 transform ">
            <Link href="/" className="flex items-center gap-2">
              <LogoWithEyes height={30} width={90} />
            </Link>
          </div>
        </header>
      </div>
    ) 
  }
