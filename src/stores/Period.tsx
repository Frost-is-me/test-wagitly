import {create} from "zustand"

export type Period = "7d" | "30d" | "90d" | "360d" | "All"

interface PeriodStore {
    period: Period
    setPeriod: (peroid : Period) => void
}

const usePeriodStore = create<PeriodStore>((set) => ({
    period: "90d",
    setPeriod: (period : Period) => set({period})
}))

export default usePeriodStore