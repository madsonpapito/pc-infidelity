"use client"

export const dynamic = "force-dynamic"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import DashboardLayout from "@/components/dashboard-layout"
import VideoPlayer from "@/components/video-player"
import {
  getLessonById,
  getCourseById,
  getLessonProgress,
  markLessonComplete,
  getLessonsByCourse,
} from "@/lib/supabase-queries"
import type { Lesson, Course } from "@/lib/supabase-queries"
import Link from "next/link"
import { ArrowLeft, ChevronRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()

  const courseId = params.courseId as string
  const lessonId = params.lessonId as string

  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [course, setCourse] = useState<Course | null>(null)
  const [allLessons, setAllLessons] = useState<Lesson[]>([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)

      // Carregar aula
      const lessonData = await getLessonById(lessonId)
      setLesson(lessonData)

      // Carregar curso
      const courseData = await getCourseById(courseId)
      setCourse(courseData)

      // Carregar todas as aulas do curso
      const lessonsData = await getLessonsByCourse(courseId)
      setAllLessons(lessonsData)

      // Carregar progresso
      if (user?.id && lessonData) {
        const progressData = await getLessonProgress(user.id, lessonData.id)
        setIsCompleted(progressData?.completed || false)
      }

      setLoading(false)
    }

    loadData()
  }, [courseId, lessonId, user?.id])

  const handleCompleteLesson = async () => {
    if (user?.id && lesson) {
      const success = await markLessonComplete(user.id, lesson.id)
      if (success) {
        setIsCompleted(true)
      }
    }
  }

  const currentLessonIndex = allLessons.findIndex((l) => l.id === lessonId)
  const previousLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null

  if (loading) {
	    return (
	      <DashboardLayout activeTab="courses">
	        <div className="text-center py-12">
	          <p className="text-muted-foreground">Loading lesson...</p>
	        </div>
	      </DashboardLayout>
	    )
  }

	  if (!lesson || !course) {
	    return (
	      <DashboardLayout activeTab="courses">
	        <div className="text-center py-12">
	          <p className="text-muted-foreground">Lesson not found.</p>
	          <Link href={`/dashboard/courses?category=${course?.category || "introduction"}`}>
	            <Button className="mt-4">Back to Courses</Button>
	          </Link>
	        </div>
	      </DashboardLayout>
	    )
	  }

  return (
    <DashboardLayout activeTab="courses">
      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href={`/dashboard/courses?category=${course.category}`} className="hover:text-foreground">
            {course.title}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{lesson.title}</span>
        </div>

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{lesson.title}</h1>
          <p className="text-muted-foreground">{lesson.description}</p>

          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
	            <div className="flex items-center gap-1">
	              <Clock className="w-4 h-4" />
	              {lesson.duration_minutes} minutes
	            </div>
          </div>
        </div>

        {/* Video Player */}
        <div className="bg-card rounded-lg p-6 border border-border">
          <VideoPlayer
            videoUrl={lesson.video_url}
            videoType={lesson.video_type as "youtube" | "vimeo" | "direct"}
            title={lesson.title}
            isCompleted={isCompleted}
            onComplete={handleCompleteLesson}
          />
        </div>

        {/* Navegação entre aulas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {previousLesson ? (
            <Link
              href={`/dashboard/courses/${courseId}/${previousLesson.id}`}
              className="p-4 border border-border rounded-lg hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group text-left"
            >
	              <p className="text-sm text-muted-foreground mb-1">← Previous Lesson</p>
              <p className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {previousLesson.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextLesson ? (
            <Link
              href={`/dashboard/courses/${courseId}/${nextLesson.id}`}
              className="p-4 border border-border rounded-lg hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group text-right"
            >
	              <p className="text-sm text-muted-foreground mb-1">Next Lesson →</p>
              <p className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {nextLesson.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>

	        {/* Back Button */}
	        <Link href={`/dashboard/courses?category=${course.category}`}>
	          <Button variant="outline" className="gap-2">
	            <ArrowLeft className="w-4 h-4" />
	            Back to Courses
	          </Button>
	        </Link>
      </div>
    </DashboardLayout>
  )
}
