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
    { id: 5, name: "Page 5", checked: false },
    { id: 6, name: "Page 6", checked: false },
  ])

  const handleAllPagesChange = (checked: boolean) => {
    setAllPagesChecked(checked)
    setPages(prevPages => prevPages.map(page => ({ ...page, checked })))
  }

  const handlePageChange = (id: number, checked: boolean) => {

    setPages(prevPages => {
      const updatedPages = prevPages.map(page => 
        page.id === id ? { ...page, checked } : page
      )
      const allChecked = updatedPages.every(page => page.checked)
      setAllPagesChecked(allChecked)
      return updatedPages
    })
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
