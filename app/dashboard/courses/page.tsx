"use client"

export const dynamic = "force-dynamic"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { translations } from "@/lib/translations"
import DashboardLayout from "@/components/dashboard-layout"
import { getCourses, getCoursesByCategory, getLessonsByCourse, getCourseProgress } from "@/lib/supabase-queries"
import type { Course, Lesson } from "@/lib/supabase-queries"
import Link from "next/link"
import { BookOpen, Clock, CheckCircle2, ArrowRight } from "lucide-react"

export default function CoursesPage() {
  const { language, user } = useAuth()
  const searchParams = useSearchParams()
  const category = searchParams.get("category") || "introduction"
  const t = translations[language] || translations["en"]

  const [courses, setCourses] = useState<Course[]>([])
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [progress, setProgress] = useState<{ [key: string]: number }>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCourses = async () => {
      setLoading(true)
      const data = await getCoursesByCategory(category)
      setCourses(data)

      if (data.length > 0) {
        setSelectedCourse(data[0])
        const lessonsData = await getLessonsByCourse(data[0].id)
        setLessons(lessonsData)

        // Carregar progresso
        if (user?.id) {
          const progressData = await getCourseProgress(user.id, data[0].id)
          setProgress((prev) => ({
            ...prev,
            [data[0].id]: progressData.percentage,
          }))
        }
      }

      setLoading(false)
    }

    loadCourses()
  }, [category, user?.id])

  const handleSelectCourse = async (course: Course) => {
    setSelectedCourse(course)
    const lessonsData = await getLessonsByCourse(course.id)
    setLessons(lessonsData)

    if (user?.id) {
      const progressData = await getCourseProgress(user.id, course.id)
      setProgress((prev) => ({
        ...prev,
        [course.id]: progressData.percentage,
      }))
    }
  }

  const getCategoryTitle = () => {
    switch (category) {
      case "introduction":
        return "Comece Aqui"
      case "installation":
        return "Tutorial de Instalação"
      case "advanced":
        return "Painel Avançado"
      case "bonus":
        return "Ferramentas Bónus"
      default:
        return "Cursos"
    }
  }

  return (
    <DashboardLayout activeTab="courses">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{getCategoryTitle()}</h1>
          <p className="text-muted-foreground">
            {selectedCourse?.description}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Carregando cursos...</p>
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum curso disponível nesta categoria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar de Cursos */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {courses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => handleSelectCourse(course)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedCourse?.id === course.id
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                        : "border-border hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {lessons.length} aulas
                        </p>
                      </div>
                      {progress[course.id] === 100 && (
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      )}
                    </div>

                    {progress[course.id] !== undefined && progress[course.id] > 0 && (
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                          <div
                            className="bg-blue-500 h-1 rounded-full"
                            style={{ width: `${progress[course.id]}%` }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {progress[course.id]}% concluído
                        </p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Aulas */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Aulas</h2>

                {lessons.length === 0 ? (
                  <div className="text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <p className="text-muted-foreground">Nenhuma aula disponível.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {lessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        href={`/dashboard/courses/${selectedCourse?.id}/${lesson.id}`}
                        className="block p-4 border border-border rounded-lg hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {lesson.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {lesson.description}
                            </p>

                            <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {lesson.duration_minutes} min
                              </div>
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                Vídeo
                              </div>
                            </div>
                          </div>

                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 mt-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
