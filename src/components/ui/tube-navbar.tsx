"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  activeTab?: string
  onTabChange?: (tab: string) => void
  themeToggle?: {
    icon: LucideIcon
    onClick: () => void
    theme: 'dark' | 'light'
  }
}

export function NavBar({ items, className, activeTab, onTabChange, themeToggle }: NavBarProps) {
  const [active, setActive] = useState(activeTab || items[0].name)
  const isMobile = useIsMobile()

  // Update active state when activeTab prop changes
  useEffect(() => {
    if (activeTab) {
      setActive(activeTab);
    }
  }, [activeTab]);

  const handleTabChange = (name: string) => {
    setActive(name);
    if (onTabChange) {
      onTabChange(name);
    }
  };

  const ThemeIcon = themeToggle?.icon;

  return (
    <div
      className={cn(
        "fixed z-50",
        isMobile 
          ? "bottom-0 left-0 w-full mb-4 px-3" 
          : "top-0 left-1/2 -translate-x-1/2 pt-6",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-2 bg-background/5 border border-neon/30 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg mx-auto max-w-4xl">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = active === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => handleTabChange(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-neon",
                isActive && "bg-darkcard text-neon",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden flex justify-center">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  style={{ backgroundColor: 'rgba(0, 255, 0, 0.05)' }}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full" 
                       style={{ backgroundColor: '#00ff00' }}>
                    <div className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2" 
                         style={{ backgroundColor: 'rgba(0, 255, 0, 0.2)' }} />
                    <div className="absolute w-8 h-6 rounded-full blur-md -top-1" 
                         style={{ backgroundColor: 'rgba(0, 255, 0, 0.2)' }} />
                    <div className="absolute w-4 h-4 rounded-full blur-sm top-0 left-2" 
                         style={{ backgroundColor: 'rgba(0, 255, 0, 0.2)' }} />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
        
        {themeToggle && (
          <button
            onClick={themeToggle.onClick}
            className="relative cursor-pointer text-sm font-semibold ml-2 px-3 py-2 rounded-full transition-colors bg-darkcard/50 text-neon hover:bg-darkcard"
            aria-label="Toggle theme"
          >
            {ThemeIcon && <ThemeIcon size={18} strokeWidth={2.5} />}
          </button>
        )}
      </div>
    </div>
  )
}
