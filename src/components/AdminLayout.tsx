import { Outlet } from "react-router-dom"
import { AdminSidebar } from "@/components/AdminSidebar"

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}