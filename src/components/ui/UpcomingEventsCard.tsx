import { Card, CardContent } from "@/components/ui/card";
import useTranslations from "@/hooks/useTranslations";
import EventsTime from "@/stores/Events";
import { useEffect } from "react";

export default function EventCards() {
  const isArabic = document.documentElement.dir === "rtl";
  const isRTL = document.documentElement.dir = isArabic ? "rtl" : "ltr";
  const {t} = useTranslations()
  const {FetchEvents, loading, events} = EventsTime()
  useEffect(() => {
    FetchEvents()
  }, [FetchEvents])
  
  const formatEventTime = (event: any) => {
    return `${event.date} • ${event.startTime} - ${event.endTime}`
  }
   if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Card className="w-full bg-card hover:border-accent">
      <CardContent className="h-64 sm:h-80 space-y-3 overflow-y-auto p-4 sm:p-6">
        <h1 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3 sm:mb-4">{t("dashboard.Upcoming Events")}</h1>
        {events.map((event) => (
        <>
        <div className="relative">
          <div
            key={event.id}
            className={"rounded-xl p-3 pl-6 border-1 rtl:pr-5 bg-muted hover:border-accent"}
          >
            <h3 className="text-sm font-medium">{event.title}</h3>
            <p className="text-xs">{formatEventTime(event)}</p>
          </div>
          <div className="absolute start-3 rtl:start-2 top-3.5 h-8 w-1 rounded-full bg-muted-foreground" style={{top: isRTL ? "0.9rem" : ""}}/>
        </div>
        </>
        ))}
      </CardContent>
    </Card>
  );
}