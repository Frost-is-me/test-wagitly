import EventCards from "@/components/ui/UpcomingEventsCardCalenadr";
import RenderDates from "@/components/ui/DatesRender";
import MainCalendar from "@/components/ui/MainCalendar";
import useTranslations from "@/hooks/useTranslations";
function Calendar() {
  const {t} = useTranslations()
  const isRTL = document.documentElement.dir === "rtl";

  return (
    <div className={`min-h-screen ${isRTL ? "rtl" : "ltr"}`}> 
      <div className="mb-4 sm:mb-5">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{t("dashboard.Calendar")}</h1>
        <p className="text-muted-foreground mt-1 sm:mt-2 text-sm sm:text-base">
          {t("dashboard.Calendar description")}
        </p>
      </div>
      <div className="flex flex-col md:flex-row min-h-screen">    
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch">
              <MainCalendar />
            <div className="w-full">
              <EventCards />
            </div>
          </div>
          <div className="flex flex-col xl:flex-1 bg-card mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl shadow-lg border-1 hover:border-accent">
            <div className="rounded-2xl overflow-y-auto h-100 ">
              <RenderDates />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calendar;