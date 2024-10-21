import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Cloud,
  CreditCard,
  Database,
  FileText,
  Globe,
  LayoutDashboard,
  LifeBuoy,
  Menu,
  Plus,
  Server,
  Settings,
  ShieldCheck,
  Users,
  CircleCheck,
  CircleX,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

function DashboardComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const SidebarContent = () => (
    <ScrollArea className="h-full">
      <div className="flex h-full flex-col space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            <Link href="/" className="flex items-center gap-2">
              <Cloud className="h-6 w-6" />
              <span>Host Em</span>
            </Link>
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              className="w-full justify-start"
              asChild
            >
              <Link href="#">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#">
                <Server className="mr-2 h-4 w-4" />
                Servers
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#">
                <Globe className="mr-2 h-4 w-4" />
                Domains
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#">
                <Database className="mr-2 h-4 w-4" />
                Databases
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#">
                <Cloud className="mr-2 h-4 w-4" />
                Deployments
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#">
                <FileText className="mr-2 h-4 w-4" />
                Logs
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Security
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#">
                <Users className="mr-2 h-4 w-4" />
                Team
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#">
                <CreditCard className="mr-2 h-4 w-4" />
                Billing
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="#">
                <LifeBuoy className="mr-2 h-4 w-4" />
                Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-background dashboard-font">
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } w-64 border-r lg:block`}
      >
        <SidebarContent />
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px]">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
            <Button variant="ghost" size="icon">
              <span className="sr-only">Notifications</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon">
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg?height=32&width=32"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <ScrollArea className="h-full">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Welcome back, Alice
                  </h2>
                  <p className="text-muted-foreground">
                    Here's what's happening with your projects today.
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button>Download Report</Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Deployments
                    </CardTitle>
                    <Cloud className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">
                      +2 from last month
                    </p>
                    <Progress value={75} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Users
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,453</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                    <Progress value={53} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Bandwidth Usage
                    </CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2.4 TB</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last month
                    </p>
                    <Progress value={32} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Monthly Cost
                    </CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$459.99</div>
                    <p className="text-xs text-muted-foreground">
                      +7% from last month
                    </p>
                    <Progress value={88} className="mt-2" />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Deployments</CardTitle>
                    <CardDescription>
                      You have made 265 deployments in the last 30 days.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Project Alpha",
                          status: "Success",
                          time: "2 hours ago",
                          icon: CircleCheck,
                        },
                        {
                          name: "Project Beta",
                          status: "Failed",
                          time: "5 hours ago",
                          icon: CircleX,
                        },
                        {
                          name: "Project Gamma",
                          status: "In Progress",
                          time: "1 day ago",
                          icon: Clock,
                        },
                        {
                          name: "Project Delta",
                          status: "Success",
                          time: "2 days ago",
                          icon: CircleCheck,
                        },
                        {
                          name: "Project Epsilon",
                          status: "Success",
                          time: "3 days ago",
                          icon: CircleCheck,
                        },
                      ].map((deployment, index) => (
                        <div key={index} className="flex items-center">
                          <deployment.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {deployment.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {deployment.status}
                            </p>
                          </div>
                          <div className="ml-auto font-medium">
                            {deployment.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Top Projects</CardTitle>
                    <CardDescription>
                      Your highest performing projects this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Project X", visits: "45.1K", progress: 60 },
                        { name: "Project Y", visits: "23.7K", progress: 45 },
                        { name: "Project Z", visits: "18.2K", progress: 35 },
                        { name: "Project W", visits: "12.5K", progress: 25 },
                      ].map((project, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-full space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {project.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {project.visits} visits
                            </p>
                            <Progress
                              value={project.progress}
                              className="mt-2"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your team's most recent actions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        user: "Alice",
                        action: "deployed Project X to production",
                        time: "2 hours ago",
                      },
                      {
                        user: "Bob",
                        action: "created a new API endpoint",
                        time: "4 hours ago",
                      },
                      {
                        user: "Charlie",
                        action: "updated the database schema",
                        time: "1 day ago",
                      },
                      {
                        user: "David",
                        action: "merged a pull request",
                        time: "2 days ago",
                      },
                      {
                        user: "Eve",
                        action: "added a new team member",
                        time: "3 days ago",
                      },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {activity.user}{" "}
                            <span className="text-muted-foreground">
                              {activity.action}
                            </span>
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}

export default DashboardComponent;
