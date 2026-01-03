"use client"

import { AllPagesSection } from "./AllPagesSection"
import { PagesList } from "./PagesList"
import { DoneButton } from "./DoneButton"

interface Page {
  id: number
  name: string
  checked: boolean
}

interface PageSelectorCardProps {
  allPagesChecked: boolean
  pages: Page[]
  onAllPagesChange: (checked: boolean) => void
  onPageChange: (id: number, checked: boolean) => void
  onDoneClick: () => void
}

export function PageSelectorCard({
  allPagesChecked,
  pages,
  onAllPagesChange,
  onPageChange,
  onDoneClick,
}: PageSelectorCardProps) {
  return (
    <div
      className="relative flex flex-col items-start py-2.5 px-0 box-border bg-white border border-gray-light rounded-6 w-370 h-326 shadow-card"
    >
      <div className="w-full space-y-4">
        <AllPagesSection
          checked={allPagesChecked}
          onCheckedChange={onAllPagesChange}
        />

        <PagesList
          pages={pages}
          onPageChange={onPageChange}
        />

        <DoneButton onClick={onDoneClick} />
      </div>
    </div>
  )
}

