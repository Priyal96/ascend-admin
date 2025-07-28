import { TrendingUp, Users, Activity, BarChart3, PieChart, Calendar } from "lucide-react"
import { StatCard } from "@/components/StatCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Analytics() {
  const overviewStats = [
    {
      title: "Page Views",
      value: "1,234,567",
      change: { value: "+15%", trend: "up" as const },
      icon: Activity,
    },
    {
      title: "Unique Visitors",
      value: "45,678",
      change: { value: "+8%", trend: "up" as const },
      icon: Users,
    },
    {
      title: "Bounce Rate",
      value: "32.5%",
      change: { value: "-2.1%", trend: "up" as const },
      icon: TrendingUp,
    },
    {
      title: "Session Duration",
      value: "4m 35s",
      change: { value: "+12%", trend: "up" as const },
      icon: BarChart3,
    },
  ]

  const topPages = [
    { page: "/dashboard", views: "45,123", percentage: "25%" },
    { page: "/users", views: "32,456", percentage: "18%" },
    { page: "/analytics", views: "28,789", percentage: "16%" },
    { page: "/settings", views: "21,345", percentage: "12%" },
    { page: "/roles", views: "18,567", percentage: "10%" },
  ]

  const trafficSources = [
    { source: "Direct", visitors: "25,456", percentage: "45%" },
    { source: "Google", visitors: "18,234", percentage: "32%" },
    { source: "Social Media", visitors: "8,123", percentage: "14%" },
    { source: "Referrals", visitors: "4,567", percentage: "8%" },
    { source: "Email", visitors: "567", percentage: "1%" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Insights and metrics about your application usage.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Last 30 days
          </Button>
          <Button variant="gradient" className="gap-2">
            <BarChart3 className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Main Chart */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>User Activity Over Time</CardTitle>
                <CardDescription>
                  Daily active users and page views for the last 30 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] bg-gradient-subtle rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive chart would be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Pages */}
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Most visited pages this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topPages.map((page, index) => (
                    <div key={page.page} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary">
                          {index + 1}
                        </span>
                        <span className="font-medium">{page.page}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{page.views}</div>
                        <div className="text-xs text-muted-foreground">{page.percentage}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Traffic Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trafficSources.map((source, index) => (
                    <div key={source.source} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-primary opacity-${100 - index * 20}`} />
                        <span className="font-medium">{source.source}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{source.visitors}</div>
                        <div className="text-xs text-muted-foreground">{source.percentage}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Analysis</CardTitle>
              <CardDescription>Detailed traffic patterns and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] bg-gradient-subtle rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Traffic analysis charts would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Behavior</CardTitle>
              <CardDescription>How users interact with your application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] bg-gradient-subtle rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Behavior analytics would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Tracking</CardTitle>
              <CardDescription>Monitor your conversion goals and funnels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] bg-gradient-subtle rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Conversion tracking would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}