import useTranslations from "../hooks/useTranslations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className={`min-h-screen ${isRTL}`}>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{t("dashboard.Team")}</h1>
              <p className="text-muted-foreground mt-1 text-sm sm:text-base">
                {t("dashboard.Team description")}
              </p>
            </div>
            <Button className="gap-2 hover:bg-accent">
              <Plus className="h-4 w-4" />
              {t("team.Add Team Member")}
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="dark:hover:border-accent">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{t("team.Total Members")}</p>
                    <p className="text-2xl font-bold">24</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="dark:hover:border-accent">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{t("team.Active")}</p>
                    <p className="text-2xl font-bold">20</p>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-full">
                    <div className="h-6 w-6 rounded-full bg-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="dark:hover:border-accent">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{t("team.Departments")}</p>
                    <p className="text-2xl font-bold">6</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="dark:hover:border-accent">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{t("team.Roles")}</p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                  <div className="p-3 bg-purple-500/10 rounded-full">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t("team.Search team members...")}
                  className="pl-10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {departments.map((dept) => (
                <Button
                  key={dept.key}
                  size="sm"
                  className="dark:hover:bg-accent"
                  variant={dept.key === "All" ? "default" : "outline"}
                >
                  {dept.label}
                </Button>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {roles.map((role) => (
                <Button
                  key={role.key}
                  className="dark:hover:bg-accent"
                  variant={role.key === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {role.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FilterdMemebers.map((member) => (
              <Card key={member.id} className="overflow-hidden dark:hover:border-accent">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <span>{member.role}</span>
                          <Badge
                            variant={member.status === "active" ? "default" : "secondary"}
                            className={
                              member.status === "active"
                                ? "bg-green-500 hover:bg-green-600"
                                : ""
                            }
                          >
                            {member.status === "active" ? t("team.Active") : t("team.Inactive")}
                          </Badge>
                        </CardDescription>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
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
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{member.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{t("team.Department")}</p>
                        <p className="font-medium">{member.department}</p>
                      </div>
                      <Button variant="outline" size="sm" className="dark:hover:bg-accent">
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