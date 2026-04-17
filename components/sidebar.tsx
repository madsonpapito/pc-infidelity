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
  section: "Lessons" | "Scanner"
}

export default function Sidebar({ open, onToggle, activeTab }: SidebarProps) {
  const { language } = useAuth()
  const t = translations[language]

  const menuItems: MenuItem[] = [
    // Seção de Aulas
    {
      id: "comece-aqui",
      label: t.startHere,
      icon: Home,
      path: "/dashboard/courses?category=introduction",
      blocked: false,
      section: "Lessons",
    },
    {
      id: "tutorial-instalacao",
      label: t.installationTutorial,
      icon: BookOpen,
      path: "/dashboard/courses?category=installation",
      blocked: false,
      section: "Lessons",
    },
    {
      id: "painel-avancado",
      label: t.advancedPanel,
      icon: Zap,
      path: "/dashboard/courses?category=advanced",
      blocked: false,
      section: "Lessons",
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

  const sections = ["Lessons", "Scanner"] as const

  return (
    <aside
      className={`w-64 md:w-64 bg-[#0a0e27] border-r border-[#2a3050] transition-all duration-300 flex flex-col overflow-hidden md:relative ${
        open ? "relative" : ""
      }`}
    >
      {/* Logo/Brand Area */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-[#2a3050] bg-[#1a1f3a]">
        <div className="text-2xl font-bold text-[#2962FF]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>Scanner Pro</div>
        <button onClick={onToggle} className="md:hidden p-1 hover:bg-secondary rounded-md" aria-label="Close sidebar">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto p-3">
        {sections.map((section) => (
          <div key={section} className="mb-6">
            <p className="text-xs font-semibold text-[#AA00FF] uppercase px-4 py-2 tracking-wider" style={{ fontFamily: 'var(--font-manrope)' }}>{section}</p>

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
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-[#6b7280] opacity-50 cursor-not-allowed mb-2 transition-all text-sm md:text-sm"
                        title={t.featureUnavailable}
                      >
                        <div className="relative flex-shrink-0">
                          <Icon className="w-5 h-5" />
                          <Lock className="w-3 h-3 absolute -bottom-1 -right-1 bg-[#1a1f3a] rounded-full p-0.5" />
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
                            ? section === "Lessons"
                              ? "bg-[#2962FF] text-white font-semibold"
                              : "bg-[#AA00FF] text-white font-semibold"
                            : "text-[#a0a9c9] hover:bg-[#1a1f3a] hover:text-white"
                        }`}
                        style={{ fontFamily: 'var(--font-manrope)' }}
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
      <div className="border-t border-[#2a3050] p-3 text-center text-xs text-[#6b7280] bg-[#1a1f3a]" style={{ fontFamily: 'var(--font-manrope)' }}>
        <p>© 2025 Scanner Pro</p>
      </div>
    </aside>
  )
}
