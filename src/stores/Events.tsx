import axios from "axios";
import { create } from "zustand";

interface Event {
    id: number;
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    status: string;
}
interface EventStore {
  events: Event[]
  loading: boolean
  FetchEvents: () => Promise<void>
}

const EventsTime = create<EventStore>((set) => ({
    events: [],
    loading: false,
    FetchEvents: async () => {
        set({loading: true})
        const dummyEvents: Event[] = [
      { id: 1, title: "Team Meeting", date: "2026/06/15", startTime: "09:00", endTime: "10:00", status: "reserved" },
      { id: 2, title: "Client Presentation", date: "2026/06/15", startTime: "14:00", endTime: "15:30", status: "pending" },
      { id: 3, title: "Project Review", date: "2026/06/16", startTime: "11:00", endTime: "12:00", status: "done" },
      { id: 4, title: "Budget Planning", date: "2026/06/17", startTime: "10:00", endTime: "11:30", status: "reserved" },
      { id: 5, title: "Training Session", date: "2026/06/18", startTime: "13:00", endTime: "14:30", status: "pending" },
      { id: 6, title: "Team Lunch", date: "2026/06/19", startTime: "12:00", endTime: "13:00", status: "reserved" },
      { id: 7, title: "Product Demo", date: "2026/06/20", startTime: "15:00", endTime: "16:00", status: "pending" },
    ]
        try{
            await axios.get("api/event")
            const today = new Date()
            const upcomingEvents = dummyEvents
            .filter((event : Event) => {

                const eventDate = new Date(event.date.replace(/\//g, "-"))
                const eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate())
                const todayDay = new Date(today.getFullYear(), today.getMonth(), today.getDate())
                const isUpcoming = eventDay >= todayDay
                const isValid = ["reserved", "pending", "done"].includes(event.status)
                return isUpcoming && isValid
            })
            .sort((a: Event, b: Event) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .slice(0,10)
            set({events: upcomingEvents})
        } catch(error) {
            console.log("faild at fetching the data", error)
        } finally{
            set({loading: false})
        }
        
        
    }
}))

export default EventsTime