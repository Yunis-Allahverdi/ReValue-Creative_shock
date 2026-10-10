import {
  CalendarClock,
  Leaf,
  ScanLine,
  ShoppingBag,
  Store,
  type LucideIcon,
} from "lucide-react"

export type TabId = "scan" | "tomorrow" | "bags" | "shop" | "impact"

export type Tab = {
  id: TabId
  label: string
  icon: LucideIcon
}

export const TABS: Tab[] = [
  { id: "scan", label: "Scan", icon: ScanLine },
  { id: "tomorrow", label: "Tomorrow", icon: CalendarClock },
  { id: "bags", label: "Bags", icon: ShoppingBag },
  { id: "shop", label: "Shop", icon: Store },
  { id: "impact", label: "Impact", icon: Leaf },
]
