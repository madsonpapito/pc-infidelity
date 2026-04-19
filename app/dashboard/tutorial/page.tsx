import DashboardLayout from "@/components/dashboard-layout"

export default function TutorialPage() {
  return (
    <DashboardLayout activeTab="tutorial">
      <div className="max-w-4xl mx-auto py-10 space-y-6">
        <h1 className="text-3xl font-bold text-white">Tutorial de Instalação</h1>
        <p className="text-zinc-400">Aqui ficarão os vídeos e as instruções de instalação do TiSpy.</p>
      </div>
    </DashboardLayout>
  )
}
