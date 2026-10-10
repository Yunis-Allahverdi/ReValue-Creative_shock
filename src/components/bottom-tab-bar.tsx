import { Button } from "@/components/ui/button"
import { TABS, type TabId } from "@/lib/tabs"
import { cn } from "@/lib/utils"

type BottomTabBarProps = {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export function BottomTabBar({ activeTab, onTabChange }: BottomTabBarProps) {
  return (
    <nav
      aria-label="Main"
      className="border-t border-border/70 bg-background px-2 pt-2 pb-[max(env(safe-area-inset-bottom),0.75rem)]"
    >
      <ul className="grid grid-cols-5">
        {TABS.map(({ id, label, icon: Icon }) => {
          const isActive = id === activeTab
          return (
            <li key={id}>
              <Button
                variant="ghost"
                aria-current={isActive ? "page" : undefined}
                onClick={() => onTabChange(id)}
                className={cn(
                  "h-auto w-full flex-col gap-1 rounded-xl px-0 py-1.5 text-[11px] font-semibold text-muted-foreground hover:bg-transparent hover:text-foreground",
                  isActive && "text-primary hover:text-primary"
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-14 items-center justify-center rounded-full transition-colors",
                    isActive && "bg-primary/10"
                  )}
                >
                  <Icon className="size-[22px]" strokeWidth={isActive ? 2.25 : 1.75} />
                </span>
                {label}
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
