"use client"
import * as React from "react"
import Cookies from "js-cookie"
import Folder from "@/components/folder"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { FileText, Users, Activity, List, Target, Clock, Shield, Server } from "lucide-react"

export default function Files() {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!Number(Cookies.get("status"))) {
      window.location.href = "/event"
    }
  }, [])

  const handleDownload = () => {
    window.location.href = "https://github.com/abinrd/cybercluedo/raw/refs/heads/main/Phase1.zip"
    console.log("Download initiated")
  }

  // Sample data for hover content
  const hoverData = {
    employee_list:
      "Current active personnel: 25 agents, 12 analysts, 8 field operatives. All personnel have Level 2 clearance or higher.",
    mission_brief:
      "Operation Nightfall: Infiltrate enemy communications network. Primary objective: Extract classified data. Secondary: Plant surveillance malware.",
    timeline: "Phase 1: 0800-1200 (Reconnaissance), Phase 2: 1200-1800 (Infiltration), Phase 3: 1800-2400 (Extraction)",
    employee_1:
      "Agent Sarah Chen - Field Operative, Level 3 clearance, 8 years experience, specialized in cyber warfare",
    employee_2: "Dr. Marcus Webb - Senior Analyst, Level 4 clearance, 12 years experience, cryptography expert",
    employee_3: "Agent Lisa Rodriguez - Communications Specialist, Level 2 clearance, 5 years experience",
    employee_4: "Agent David Kim - Surveillance Expert, Level 3 clearance, 10 years experience, drone operations",
    employee_5: "Dr. Emily Foster - Research Director, Level 5 clearance, 15 years experience, AI development",
    employee_6: "Agent Michael Torres - Security Chief, Level 4 clearance, 14 years experience, physical security",
    employee_7: "Agent Rachel Park - Intelligence Analyst, Level 3 clearance, 7 years experience, data analysis",
    auth_log:
      "Recent authentication events: 247 successful logins, 3 failed attempts, 1 suspicious IP blocked at 14:32",
    webserver_log:
      "Server status: 99.8% uptime, 1,247 requests processed, average response time: 120ms, no security breaches detected",
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-sidebar-border">
            <h2 className="text-lg font-semibold text-sidebar-foreground">Control Panel</h2>
          </SidebarHeader>
          <SidebarContent>
            {/* Briefing Section */}
            <SidebarGroup>
              <SidebarGroupLabel>
                <FileText className="mr-2 h-4 w-4" />
                Briefing
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <List className="h-4 w-4" />
                      <span>Employee List</span>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          onMouseEnter={() => setHoveredItem("employee_list")}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          View Personnel
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Target className="h-4 w-4" />
                      <span>Mission Brief</span>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          onMouseEnter={() => setHoveredItem("mission_brief")}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          Current Mission
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Clock className="h-4 w-4" />
                      <span>Timeline</span>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          onMouseEnter={() => setHoveredItem("timeline")}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          Operation Schedule
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Employee Data Section */}
            <SidebarGroup>
              <SidebarGroupLabel>
                <Users className="mr-2 h-4 w-4" />
                Employee Data
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <SidebarMenuItem key={num}>
                      <SidebarMenuButton
                        onMouseEnter={() => setHoveredItem(`employee_${num}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Users className="h-4 w-4" />
                        <span>Employee {num}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* System Logs Section */}
            <SidebarGroup>
              <SidebarGroupLabel>
                <Activity className="mr-2 h-4 w-4" />
                System Logs
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onMouseEnter={() => setHoveredItem("auth_log")}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Shield className="h-4 w-4" />
                      <span>Auth Log</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onMouseEnter={() => setHoveredItem("webserver_log")}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Server className="h-4 w-4" />
                      <span>Webserver Log</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t border-sidebar-border">
            <div className="p-2 text-xs text-sidebar-foreground/70">System Status: Online</div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <div className="flex h-full w-full flex-col">
            {/* Header with sidebar trigger */}
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="h-4 w-px bg-sidebar-border mx-2" />
              <h1 className="text-lg font-semibold">File Management System</h1>
            </header>

            {/* Main content area */}
            <div className="flex-1 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-lg animate-bounce"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-300 rounded-full blur-xl animate-bounce delay-500"></div>
              </div>

              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                  }}
                ></div>
              </div>

              {/* Main content */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-8">
                    Click on the folder to download the files
                  </h2>
                  <div className="cursor-pointer transition-transform hover:scale-105" onClick={handleDownload}>
                    <Folder size={2} color="#FFFF00" className="custom-folder" />
                  </div>
                </div>
              </div>

              {/* Hover data display */}
              {hoveredItem && (
                <div className="absolute top-4 right-4 max-w-md bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg border border-blue-500/30">
                  <p className="text-sm leading-relaxed">{hoverData[hoveredItem as keyof typeof hoverData]}</p>
                </div>
              )}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
