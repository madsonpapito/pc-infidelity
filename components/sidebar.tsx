"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { Home, BookOpen, Zap, Gift, LogOut, ChevronRight, X } from "lucide-react"

interface SidebarProps {
  open: boolean
  onToggle: () => void
  activeTab: string
}

export default function Sidebar({ open, onToggle, activeTab }: SidebarProps) {
  const { signOut } = useAuth()

  // TODO: We could get the user info from Supabase session if stored in auth-context
  const userName = "Madson Papito"
  const userEmail = "madsonpapito@gmail.com"

  const menuItems = [
    { id: "intro", label: "Start Here", icon: PlayCircle, path: "/dashboard" },
    { id: "tutorial", label: "Installation Tutorial", icon: CheckSquare, path: "/dashboard/tutorial" },
    { id: "advanced", label: "Advanced Panel", icon: Settings, path: "/dashboard/scanners" },
    { id: "bonus", label: "Bonus Tools", icon: Star, path: "/dashboard/bonus" },
  ]

  return (
    <aside
      className={`w-64 bg-[#0f0f12] border-r border-white/5 transition-all duration-300 flex flex-col overflow-hidden h-full ${
        open ? "fixed inset-y-0 left-0 z-50" : "hidden md:flex relative"
      }`}
    >
      {/* Logo/Brand Area */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-blue-500">Scanner Pro</span>
          <span className="text-xs text-zinc-400">Members Area</span>
        </div>
        <button onClick={onToggle} className="md:hidden p-1 text-zinc-400 hover:text-white rounded-md">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto px-4 py-8 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id || (activeTab === "" && item.id === "home")

          return (
            <Link
              key={item.id}
              href={item.path}
              onClick={onToggle}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all text-sm font-medium ${
                isActive 
                  ? "bg-white/10 text-white" 
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-zinc-400"}`} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-white/5 bg-[#0f0f12]">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
            M
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{userName}</p>
            <p className="text-xs text-zinc-400 truncate">{userEmail}</p>
          </div>
        </div>
        <button 
          onClick={() => signOut()}
          className="mt-2 w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  )
}
