import DashboardLayout from "@/components/dashboard-layout"

export default function BonusPage() {
  return (
    <DashboardLayout activeTab="bonus">
      <div className="max-w-4xl mx-auto py-10 space-y-6">
        <h1 className="text-3xl font-bold text-white">Bónus Disponíveis</h1>
        <p className="text-zinc-400">Ferramentas extras e scanners de redes sociais.</p>
      </div>
    </DashboardLayout>
  )
}
