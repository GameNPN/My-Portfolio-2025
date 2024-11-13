import React from 'react'
import { motion } from 'framer-motion'
import navbarData from "@/data/navbar.json"

interface HeaderProps {
  activeTab: string
  handleTabClick: (id: string, index: number) => void
}

export default function Navbar ({ activeTab, handleTabClick }: HeaderProps) {
  return (
    <header className="fixed top-10 left-0 w-full z-50">
      <nav>
        <ul className="relative mx-auto flex w-fit rounded-full bg-white p-2 shadow-xl overflow-x-auto max-w-full">
          {navbarData.map((item, index) => (
            <li
              key={item.id}
              onClick={() => handleTabClick(item.id, index)}
              className={`${
                activeTab === item.id ? "" : "hover:text-white/60"
              } relative z-10 cursor-pointer px-3 py-1.5 text-sm uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base whitespace-nowrap`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <button aria-current={activeTab === item.id ? "page" : undefined}>
                {item.label}
              </button>
              {activeTab === item.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}