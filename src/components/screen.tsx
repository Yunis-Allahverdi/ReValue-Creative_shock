import type { ReactNode } from "react"

type ScreenProps = {
  title: string
  children?: ReactNode
}

export function Screen({ title, children }: ScreenProps) {
  return (
    <div className="flex flex-col gap-6 px-6 pt-10 pb-8">
      <h1 className="text-[28px] leading-tight font-bold tracking-tight">{title}</h1>
      {children}
    </div>
  )
}
