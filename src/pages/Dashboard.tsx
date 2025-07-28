import { Users, TrendingUp, DollarSign, Activity } from "lucide-react"
import { StatCard } from "@/components/StatCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "12,847",
      change: { value: "+12%", trend: "up" as const },
      icon: Users,
    },
    {
      title: "Active Sessions",
      value: "2,943",
      change: { value: "+5%", trend: "up" as const },
      icon: Activity,
    },
    {
      title: "Revenue",
      value: "$84,392",
      change: { value: "+18%", trend: "up" as const },
      icon: DollarSign,
    },
    {
      title: "Growth Rate",
      value: "23.5%",
      change: { value: "+2.1%", trend: "up" as const },
      icon: TrendingUp,
    },
  ]

  const recentActivities = [
    { user: "John Doe", action: "Created new account", time: "2 minutes ago" },
    { user: "Jane Smith", action: "Updated profile", time: "5 minutes ago" },
    { user: "Mike Johnson", action: "Made a purchase", time: "12 minutes ago" },
    { user: "Sarah Wilson", action: "Logged in", time: "18 minutes ago" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your application.
          </p>
        </div>
        <Button variant="gradient" className="gap-2">
          <TrendingUp className="w-4 h-4" />
          View Reports
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Chart Card */}
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>
              Monthly active users over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] bg-gradient-subtle rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest user actions in your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-sm">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}