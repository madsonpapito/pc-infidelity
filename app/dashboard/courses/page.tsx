"use client"

export const dynamic = "force-dynamic"

import { Suspense } from "react"
import CoursesContent from "@/components/courses-content"

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="text-center py-12 bg-[#0a0e27]"><p className="text-muted-foreground">Loading courses...</p></div>}>
      <CoursesContent />
    </Suspense>
  )
}
