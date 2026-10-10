import { useState, type ComponentType } from "react"

import { BottomTabBar } from "@/components/bottom-tab-bar"
import { PhoneFrame } from "@/components/phone-frame"
import type { TabId } from "@/lib/tabs"
import { BagsScreen } from "@/screens/bags-screen"
import { ImpactScreen } from "@/screens/impact-screen"
import { ScanScreen } from "@/screens/scan-screen"
import { ShopScreen } from "@/screens/shop-screen"
import { TomorrowScreen } from "@/screens/tomorrow-screen"

const SCREENS: Record<TabId, ComponentType> = {
  scan: ScanScreen,
  tomorrow: TomorrowScreen,
  bags: BagsScreen,
  shop: ShopScreen,
  impact: ImpactScreen,
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("scan")
  const ActiveScreen = SCREENS[activeTab]

  return (
    <PhoneFrame>
      <main className="flex-1 overflow-y-auto">
        <ActiveScreen />
      </main>
      <BottomTabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </PhoneFrame>
  )
}
