"use client"

import { useEffect, useRef } from "react"
import { PageListItem } from "./PageListItem"

interface Page {
  id: number
  name: string
  checked: boolean
}

interface PagesListProps {
  pages: Page[]
  onPageChange: (id: number, checked: boolean) => void
}

export function PagesList({ pages, onPageChange }: PagesListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0
    }
  }, [])

  return (
    <>
      <div className="h-px bg-gray-light mx-auto w-340"></div>

      <div 
        ref={scrollContainerRef}
        className="overflow-y-auto max-h-[155px] w-full scrollbar-hide"
      >
        <div className="space-y-3 py-2 pl-22 pr-15">
          {pages.map((page) => (
            <PageListItem
              key={page.id}
              page={page}
              onCheckedChange={onPageChange}
            />
          ))}
        </div>
      </div>

      <div className="h-px bg-gray-light mx-auto w-340 mb-0"></div>
    </>
  )
}

