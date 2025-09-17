"use client"
import * as React from "react"
import Cookies from "js-cookie"
import Folder from "@/components/folder"
import { DetailedData } from "@/data/data"   // ✅ import JSX data
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
import { FileText, Users, Activity, List, Target, Clock, Shield, Server, X } from "lucide-react"

export default function Files() {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!Number(Cookies.get("status"))) {
      window.location.href = "/event"
    }
  }, [])

  const handleDownload = () => {
    window.location.href = "https://github.com/abinrd/cybercluedo/raw/refs/heads/main/Phase1.zip"
    console.log("Download initiated")
  }

  const handleItemClick = (itemKey: string) => {
    setSelectedItem(itemKey)
  }

  const handleCloseDetail = () => {
    setSelectedItem(null)
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader className="border-b border-sidebar-border">
            <h2 className="text-lg font-semibold text-sidebar-foreground">Control Panel</h2>
          </SidebarHeader>
          <SidebarContent>
            {/* Briefing Section */}
            <SidebarGroup>
              <SidebarGroupLabel>
                <FileText className="mr-2 h-4 w-4" /> Briefing
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <List className="h-4 w-4" /> <span>Employee List</span>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          onMouseEnter={() => setHoveredItem("employee_list")}
                          onMouseLeave={() => setHoveredItem(null)}
                          onClick={() => handleItemClick("employee_list")}
                        >
                          View Personnel
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Target className="h-4 w-4" /> <span>Mission Brief</span>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          onMouseEnter={() => setHoveredItem("mission_brief")}
                          onMouseLeave={() => setHoveredItem(null)}
                          onClick={() => handleItemClick("mission_brief")}
                        >
                          Current Mission
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Clock className="h-4 w-4" /> <span>Timeline</span>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          onMouseEnter={() => setHoveredItem("timeline")}
                          onMouseLeave={() => setHoveredItem(null)}
                          onClick={() => handleItemClick("timeline")}
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
                <Users className="mr-2 h-4 w-4" /> Employee Data
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {[1, 2, 3, 4, 5, 6, 7,8,9].map((num) => (
                    <SidebarMenuItem key={num}>
                      <SidebarMenuButton
                        onMouseEnter={() => setHoveredItem(`employee_${num}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => handleItemClick(`employee_${num}`)}
                      >
                        <Users className="h-4 w-4" /> <span>Employee {num}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* System Logs Section */}
            <SidebarGroup>
              <SidebarGroupLabel>
                <Activity className="mr-2 h-4 w-4" /> System Logs
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onMouseEnter={() => setHoveredItem("auth_log")}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleItemClick("auth_log")}
                    >
                      <Shield className="h-4 w-4" /> <span>Auth Log</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onMouseEnter={() => setHoveredItem("webserver_log")}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleItemClick("webserver_log")}
                    >
                      <Server className="h-4 w-4" /> <span>Webserver Log</span>
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

        {/* Main Content */}
        <SidebarInset>
          <div className="flex h-full w-full flex-col">
            {/* Header */}
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="h-4 w-px bg-sidebar-border mx-2" />
              <h1 className="text-lg font-semibold">File Management System</h1>
            </header>

            {/* Content */}
            <div className="flex-1 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-lg animate-bounce"></div>
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

              {/* Detail or Default */}
              <div className="relative z-10 h-full">
                {selectedItem ? (
                  <div className="h-full p-6 overflow-y-auto">
                    <div className="max-w-4xl mx-auto">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white">Details</h2>
                        <Button
                          onClick={handleCloseDetail}
                          variant="outline"
                          size="sm"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <X className="h-4 w-4 mr-2" /> Close
                        </Button>
                      </div>
                      <div className="bg-black/40 text-white backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
                        {DetailedData[selectedItem as keyof typeof DetailedData]}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-8">
                        Click on the folder to download the files
                      </h2>
                      <div
                        className="cursor-pointer transition-transform hover:scale-105"
                        onClick={handleDownload}
                      >
                        <Folder size={2} color="#FFFF00" className="custom-folder" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Preview */}
              {hoveredItem && !selectedItem && (
                <div className="absolute top-4 right-4 max-w-md bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg border border-blue-500/30">
                  <p className="text-sm leading-relaxed">
                    {/* ✅ Since DetailedData is JSX, you can’t substring it. Instead, maybe show the key: */}
                    Preview: {hoveredItem.replace("_", " ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
