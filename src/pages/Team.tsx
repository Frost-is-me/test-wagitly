import useTranslations from "../hooks/useTranslations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, MoreVertical, Users, Mail, Phone, MapPin } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  status: "active" | "inactive";
}

function Team() {
  const { t } = useTranslations();
  const isArabic = document.documentElement.dir === "rtl";
  const isRTL = isArabic ? "rtl" : "ltr";
  const [search, setSearch] = useState("");

  // Mock data for team members
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Susan Ghadban",
      role: "Project Manager",
      department: "Management",
      email: "susan.ghadban@example.com",
      phone: "+1 (555) 123-4567",
      location: "New York, USA",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Susan",
      status: "active"
    },
    {
      id: 2,
      name: "John Doe",
      role: "Frontend Developer",
      department: "Engineering",
      email: "john.doe@example.com",
      phone: "+1 (555) 234-5678",
      location: "San Francisco, USA",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      status: "active"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "UX Designer",
      department: "Design",
      email: "sarah.j@example.com",
      phone: "+1 (555) 345-6789",
      location: "Austin, USA",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      status: "active"
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Backend Developer",
      department: "Engineering",
      email: "michael.chen@example.com",
      phone: "+1 (555) 456-7890",
      location: "Toronto, Canada",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      status: "inactive"
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "Product Owner",
      department: "Product",
      email: "emma.wilson@example.com",
      phone: "+1 (555) 567-8901",
      location: "London, UK",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      status: "active"
    }
  ];

  const departments = [
    { key: "All", label: t("team.All") },
    { key: "Engineering", label: t("team.Engineering") },
    { key: "Design", label: t("team.Design") },
    { key: "Management", label: t("team.Management") },
    { key: "Product", label: t("team.Product") }
  ];

  const roles = [
    { key: "All", label: t("team.All") },
    { key: "Developer", label: t("team.Developer") },
    { key: "Designer", label: t("team.Designer") },
    { key: "Manager", label: t("team.Manager") },
    { key: "Product Owner", label: t("team.Product Owner") }
  ];

  const FilterdMemebers = teamMembers.filter(member => {
    if (!search.trim()) return true;

    const query = search.toLowerCase();
    return (
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      member.department.toLowerCase().includes(query) ||
      member.email.toLowerCase().includes(query)
    );
  });

  return (
    <div className={`w-full ${isRTL}`}>
      <div className="space-y-6 sm:space-y-8">
        {/* Main Content Area */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{t("dashboard.Team")}</h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                {t("dashboard.Team description")}
              </p>
            </div>
            <Button className="w-full sm:w-auto gap-2 hover:bg-accent order-first sm:order-last">
              <Plus className="h-4 w-4" />
              {t("team.Add Team Member")}
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="dark:hover:border-accent transition-colors shadow-sm">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">{t("team.Total Members")}</p>
                    <p className="text-xl sm:text-2xl font-bold">24</p>
                  </div>
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="dark:hover:border-accent transition-colors shadow-sm">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">{t("team.Active")}</p>
                    <p className="text-xl sm:text-2xl font-bold">20</p>
                  </div>
                  <div className="p-2 sm:p-3 bg-green-500/10 rounded-full">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="dark:hover:border-accent transition-colors shadow-sm">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">{t("team.Departments")}</p>
                    <p className="text-xl sm:text-2xl font-bold">6</p>
                  </div>
                  <div className="p-2 sm:p-3 bg-blue-500/10 rounded-full">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="dark:hover:border-accent transition-colors shadow-sm">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground">{t("team.Roles")}</p>
                    <p className="text-xl sm:text-2xl font-bold">8</p>
                  </div>
                  <div className="p-2 sm:p-3 bg-purple-500/10 rounded-full">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t("team.Search team members...")}
                  className="pl-10 w-full"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 overflow-hidden">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap hidden sm:block">
                  {t("team.Departments")}:
                </span>
                {departments.map((dept) => (
                  <Button
                    key={dept.key}
                    size="sm"
                    className="dark:hover:bg-accent shrink-0"
                    variant={dept.key === "All" ? "default" : "outline"}
                  >
                    {dept.label}
                  </Button>
                ))}
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap hidden sm:block">
                  {t("team.Roles")}:
                </span>
                {roles.map((role) => (
                  <Button
                    key={role.key}
                    className="dark:hover:bg-accent shrink-0"
                    variant={role.key === "All" ? "default" : "outline"}
                    size="sm"
                  >
                    {role.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
            {FilterdMemebers.map((member) => (
              <Card key={member.id} className="group overflow-hidden dark:hover:border-accent transition-all duration-300 hover:shadow-md">
                <CardHeader className="pb-3 p-4 sm:p-5">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <Avatar className="h-10 w-10 sm:h-12 sm:w-12 shrink-0">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="overflow-hidden">
                        <CardTitle className="text-base sm:text-lg truncate">{member.name}</CardTitle>
                        <div className="flex flex-wrap items-center gap-2 mt-0.5">
                          <span className="text-xs sm:text-sm text-muted-foreground truncate">{member.role}</span>
                          <Badge
                            variant={member.status === "active" ? "default" : "secondary"}
                            className={`text-[10px] sm:text-xs h-5 px-1.5 ${
                              member.status === "active"
                                ? "bg-green-500 hover:bg-green-600"
                                : ""
                            }`}
                          >
                            {member.status === "active" ? t("team.Active") : t("team.Inactive")}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>{t("team.Edit")}</DropdownMenuItem>
                        <DropdownMenuItem>{t("team.View Profile")}</DropdownMenuItem>
                        <DropdownMenuItem>{t("team.Message")}</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          {t("team.Remove")}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-5 pt-0">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 text-xs sm:text-sm group">
                      <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground shrink-0" />
                      <span className="text-muted-foreground truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground shrink-0" />
                      <span className="text-muted-foreground truncate">{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground shrink-0" />
                      <span className="text-muted-foreground truncate">{member.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between gap-2">
                      <div className="overflow-hidden">
                        <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{t("team.Department")}</p>
                        <p className="text-xs sm:text-sm font-medium truncate">{member.department}</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs sm:text-sm dark:hover:bg-accent shrink-0">
                        {t("team.View Details")}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State (if needed) */}
          {teamMembers.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <div className="flex flex-col items-center justify-center">
                  <Users className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{t("team.No Workers Added yet...!")}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t("team.Start building your team by adding the first member")}
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    {t("team.Add First Team Member")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

export default Team;