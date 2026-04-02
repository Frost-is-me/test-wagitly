import useTranslations from "../../hooks/useTranslations";
import { useEffect } from "react";
import { 
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  SidebarGroupLabel } from "@/components/ui/sidebar"
  import {
  LayoutDashboard,
  Calendar,
  ClipboardList,
  PlusSquare,
  Users,
  BarChart3,} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
const SideBar = () => {
    const {state, setOpenMobile} = useSidebar()
    const {t, i18n} = useTranslations()
    const isRTL = i18n.language === "ar"
    const isMobile = useIsMobile()

    useEffect(() => {
      if (isMobile) {
        setOpenMobile(false)
      }
    }, [isMobile, setOpenMobile])
    
    const handelMenuClick = () => {
      if (isMobile) {
        setOpenMobile(false)
      }
    }
    
return (

        <Sidebar collapsible="icon" className="bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out" side={`${isRTL ? "right" : "left"}`}>
          <SidebarHeader className={`bg-sidebar ${ state === "expanded" ? "border-b border-sidebar-border" : ""} transition-colors duration-300`}>
            <SidebarGroupLabel className="text-lg font-bold px-4 py-6 text-sidebar-foreground transition-colors duration-300">
                {state === "expanded" ? (
              <>
              {t("dashboard.title")}
              </>
                ) : "" }
            </SidebarGroupLabel> 
          </SidebarHeader>
          <SidebarContent className="bg-sidebar overflow-hidden transition-all duration-300">
            <SidebarMenu className={`${isRTL ? 'mr-1' : 'ml-1'} transition-transform duration-300 `}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-sidebar-foreground hover:bg-brand-orange hover:text-white">
                  <NavLink to="/" className="text-sidebar-foreground font-medium" onClick={handelMenuClick}>
                    <LayoutDashboard />
                    <span>{t("dashboard.Overview")}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-sidebar-foreground hover:bg-brand-orange hover:text-white">
                  <NavLink to="/Calendar" className="text-sidebar-foreground font-medium" onClick={handelMenuClick}>
                    <Calendar />
                    <span>{t("dashboard.Calendar")}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-sidebar-foreground hover:bg-brand-orange hover:text-white">
                  <NavLink to="/CreateService" className="text-sidebar-foreground font-medium" onClick={handelMenuClick}>
                    <PlusSquare />
                    <span>{t("dashboard.Create a Service")}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-sidebar-foreground hover:bg-brand-orange hover:text-white">
                  <NavLink to="/Reservations" className="text-sidebar-foreground font-medium" onClick={handelMenuClick}>
                    <ClipboardList />
                    <span>{t("dashboard.Reservations")}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-sidebar-foreground hover:bg-brand-orange hover:text-white">
                  <NavLink to="/Analytics" className="text-sidebar-foreground font-medium" onClick={handelMenuClick}>
                    <BarChart3 />
                    <span>{t("dashboard.Analytics")}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-sidebar-foreground hover:bg-brand-orange hover:text-white">
                  <NavLink to="/Team" className="text-sidebar-foreground font-medium" onClick={handelMenuClick}>
                    <Users />
                    <span>{t("dashboard.Team")}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

)
}

export default SideBar