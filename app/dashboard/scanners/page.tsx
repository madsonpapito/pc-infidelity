import DashboardLayout from "@/components/dashboard-layout"

export default function ScannersPage() {
  return (
    <DashboardLayout activeTab="scanners">
      <div className="max-w-4xl mx-auto py-10 space-y-6">
        <h1 className="text-3xl font-bold text-white">Painel Avançado (Scanners)</h1>
        <p className="text-zinc-400">Menu para os scanners atuais de Instagram, WhatsApp, etc.</p>
      </div>
    </DashboardLayout>
  )
}
