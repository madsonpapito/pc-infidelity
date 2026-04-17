"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { translations } from "@/lib/translations"
import {
  Instagram,
  MessageCircle,
  Heart,
  MessageSquare,
  Sigma as SMS,
  MapPin,
  Globe,
  ChevronRight,
  Lock,
  X,
  BookOpen,
  Zap,

  Home,
} from "lucide-react"

interface SidebarProps {
  open: boolean
  onToggle: () => void
  activeTab: string
}

interface MenuItem {
  id: string
  label: string
  icon: React.ComponentType<any>
  path: string
  blocked: boolean
  section: "Aulas" | "Scanner"
}

export default function Sidebar({ open, onToggle, activeTab }: SidebarProps) {
  const { language } = useAuth()
  const t = translations[language]

  const menuItems: MenuItem[] = [
    // Seção de Aulas
    {
      id: "comece-aqui",
      label: "Comece Aqui",
      icon: Home,
      path: "/dashboard/courses?category=introduction",
      blocked: false,
      section: "Aulas",
    },
    {
      id: "tutorial-instalacao",
      label: "Tutorial de Instalação",
      icon: BookOpen,
      path: "/dashboard/courses?category=installation",
      blocked: false,
      section: "Aulas",
    },
    {
      id: "painel-avancado",
      label: "Painel Avançado",
      icon: Zap,
      path: "/dashboard/courses?category=advanced",
      blocked: false,
      section: "Aulas",
    },

    // Seção de Scanner (Original)
    {
      id: "instagram",
      label: t.instagramScanner,
      icon: Instagram,
      path: "/dashboard/instagram",
      blocked: false,
      section: "Scanner",
    },
    {
      id: "whatsapp",
      label: t.whatsappScanner,
      icon: MessageCircle,
      path: "/dashboard/whatsapp",
      blocked: false,
      section: "Scanner",
    },
    {
      id: "dating",
      label: t.dateAppsScanner,
      icon: Heart,
      path: "/dashboard/dating",
      blocked: false,
      section: "Scanner",
    },
    {
      id: "messenger",
      label: t.messenger,
      icon: MessageSquare,
      path: "#",
      blocked: true,
      section: "Scanner",
    },
    {
      id: "sms",
      label: t.sms,
      icon: SMS,
      path: "#",
      blocked: true,
      section: "Scanner",
    },
    {
      id: "gps",
      label: t.gps,
      icon: MapPin,
      path: "#",
      blocked: true,
      section: "Scanner",
    },
    {
      id: "historical",
      label: t.historicalWeb,
      icon: Globe,
      path: "#",
      blocked: true,
      section: "Scanner",
    },
  ]

  const sections = ["Aulas", "Scanner"] as const

  return (
    <aside
      className={`w-64 md:w-64 bg-slate-950 border-r border-slate-800 transition-all duration-300 flex flex-col overflow-hidden md:relative ${
        open ? "relative" : ""
      }`}
    >
      {/* Logo/Brand Area */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
        <div className="text-2xl font-bold text-primary">Scanner Pro</div>
        <button onClick={onToggle} className="md:hidden p-1 hover:bg-secondary rounded-md" aria-label="Close sidebar">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto p-3">
        {sections.map((section) => (
          <div key={section} className="mb-6">
            <p className="text-xs font-semibold text-slate-400 uppercase px-4 py-2">{section}</p>

            {menuItems
              .filter((item) => item.section === section)
              .map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.id

                return (
                  <div key={item.id}>
                    {item.blocked ? (
                      <button
                        disabled
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-slate-500 opacity-50 cursor-not-allowed mb-2 transition-all text-sm md:text-sm"
                        title={t.featureUnavailable}
                      >
                        <div className="relative flex-shrink-0">
                          <Icon className="w-5 h-5" />
                          <Lock className="w-3 h-3 absolute -bottom-1 -right-1 bg-slate-950 rounded-full p-0.5" />
                        </div>
                        <span className="text-sm font-medium">{item.label}</span>
                        <ChevronRight className="w-4 h-4 ml-auto flex-shrink-0" />
                      </button>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={onToggle}
                        className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all mb-2 text-sm md:text-sm ${
                          isActive
                            ? section === "Aulas"
                              ? "bg-blue-600 text-white"
                              : "bg-slate-700 text-white"
                            : "text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{item.label}</span>
                        <ChevronRight className="w-4 h-4 ml-auto flex-shrink-0" />
                      </Link>
                    )}
                  </div>
                )
              })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-3 text-center text-xs text-slate-500">
        <p>© 2025 Scanner Pro</p>
      </div>
    </aside>
  )
}
