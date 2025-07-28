import { useState } from "react"
import { 
  LayoutDashboard, 
  Users, 
  Shield, 
  BarChart3, 
  Settings, 
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "User Management", url: "/users", icon: Users },
  { title: "Roles & Permissions", url: "/roles", icon: Shield },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/"
    return currentPath.startsWith(path)
  }

  return (
    <div
      className={cn(
        "h-screen bg-card border-r border-border transition-all duration-300 shadow-lg",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg">Admin Panel</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="hover:bg-accent/10"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-2">
        {menuItems.map((item) => {
          const active = isActive(item.url)
          return (
            <NavLink
              key={item.title}
              to={item.url}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all duration-200 group",
                active
                  ? "bg-primary/10 text-primary border-l-4 border-primary"
                  : "text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground"
              )}
            >
              <item.icon 
                className={cn(
                  "w-5 h-5 transition-colors",
                  active ? "text-primary" : "group-hover:text-accent"
                )} 
              />
              {!collapsed && (
                <span className="font-medium">{item.title}</span>
              )}
            </NavLink>
          )
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="p-3 bg-gradient-subtle rounded-lg border border-border">
            <p className="text-xs text-muted-foreground">
              Admin Panel v1.0
            </p>
          </div>
        </div>
      )}
    </div>
  )
}