import type { ReactNode } from "react"

/**
 * Fills the viewport on real phones. From the `sm` breakpoint up it renders
 * as a centered 390x844 device frame, shrinking only if the window is shorter.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh items-center justify-center sm:p-6">
      <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-background sm:h-[844px] sm:max-h-[calc(100dvh-3rem)] sm:w-[390px] sm:rounded-[48px] sm:shadow-soft-lg sm:ring-1 sm:ring-black/5">
        {children}
      </div>
    </div>
  )
}
