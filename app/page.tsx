"use client"

import { useState } from "react"
import { PageSelectorCard } from "@/components/PageSelectorCard"

interface Page {
  id: number
  name: string
  checked: boolean
}

export default function Home() {
  const [allPagesChecked, setAllPagesChecked] = useState(false)
  const [pages, setPages] = useState<Page[]>([
    { id: 1, name: "Page 1", checked: false },
    { id: 2, name: "Page 2", checked: false },
    { id: 3, name: "Page 3", checked: false },
    { id: 4, name: "Page 4", checked: false },
  ])

  const handleAllPagesChange = (checked: boolean) => {
    setAllPagesChecked(checked)
    setPages(pages.map(page => ({ ...page, checked })))
  }

  const handlePageChange = (id: number, checked: boolean) => {
    const updatedPages = pages.map(page => 
      page.id === id ? { ...page, checked } : page
    )
    setPages(updatedPages)
    // Update "All pages" checkbox based on individual page states
    const allChecked = updatedPages.every(page => page.checked)
    setAllPagesChecked(allChecked)
  }

  const handleDoneClick = () => {
    console.log("Done clicked", { allPagesChecked, pages })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <PageSelectorCard
        allPagesChecked={allPagesChecked}
        pages={pages}
        onAllPagesChange={handleAllPagesChange}
        onPageChange={handlePageChange}
        onDoneClick={handleDoneClick}
      />
    </div>
  )
}
