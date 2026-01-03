"use client"

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
  return (
    <>
      {/* Line above page list */}
      <div className="h-px bg-gray-light mx-auto w-340"></div>

      {/* Pages list */}
      <div className="space-y-3 py-2 pl-22 pr-15 gap-1.5 w-370 flex-none order-0 grow-0">
        {pages.map((page) => (
          <PageListItem
            key={page.id}
            page={page}
            onCheckedChange={onPageChange}
          />
        ))}
      </div>

      {/* Line below page list */}
      <div className="h-px bg-gray-light mx-auto w-340"></div>
    </>
  )
}

