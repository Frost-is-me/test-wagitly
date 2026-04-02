import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "../ui/select";
import useTranslations from "../../hooks/useTranslations";
import usePeriodStore, {type Period} from "@/stores/Period";
const DropMenu = () => {

    const {t} = useTranslations()
    const {period, setPeriod} = usePeriodStore()
    return(
        <div className="sm:ms-auto sm:flex rounded-lg me-3 rtl:me-0">
            <Select value={period} onValueChange={(value : Period) => setPeriod(value)}>
                <SelectTrigger
                    className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
                    aria-label="Select a value"
                    >
                    <SelectValue placeholder="Last 3 months" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                    <SelectItem value="7d" className="rounded-lg">
                        {t("dashboard.Last 7 days")}
                    </SelectItem>
                    <SelectItem value="30d" className="rounded-lg">
                        {t("dashboard.Last 30 days")}
                    </SelectItem>
                    <SelectItem value="90d" className="rounded-lg">
                        {t("dashboard.Last 3 months")}
                    </SelectItem>
                    <SelectItem value="360d" className="rounded-lg">
                        {t("dashboard.Last Year")}
                    </SelectItem>
                    <SelectItem value="All" className="rounded-lg">
                        {t("dashboard.All Time")}
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default DropMenu;