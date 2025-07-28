import { useState } from "react"
import { Plus, Shield, Users, Settings, Eye, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function RolesPermissions() {
  const [selectedRole, setSelectedRole] = useState("admin")

  const roles = [
    {
      id: "admin",
      name: "Admin",
      description: "Full access to all features",
      userCount: 2,
      color: "destructive"
    },
    {
      id: "editor",
      name: "Editor",
      description: "Can edit content and manage users",
      userCount: 5,
      color: "default"
    },
    {
      id: "user",
      name: "User",
      description: "Basic user permissions",
      userCount: 847,
      color: "secondary"
    }
  ]

  const permissions = [
    {
      category: "User Management",
      icon: Users,
      permissions: [
        { name: "View Users", admin: true, editor: true, user: false },
        { name: "Create Users", admin: true, editor: false, user: false },
        { name: "Edit Users", admin: true, editor: true, user: false },
        { name: "Delete Users", admin: true, editor: false, user: false },
      ]
    },
    {
      category: "Content Management",
      icon: Edit,
      permissions: [
        { name: "View Content", admin: true, editor: true, user: true },
        { name: "Create Content", admin: true, editor: true, user: false },
        { name: "Edit Content", admin: true, editor: true, user: false },
        { name: "Delete Content", admin: true, editor: false, user: false },
      ]
    },
    {
      category: "System Settings",
      icon: Settings,
      permissions: [
        { name: "View Settings", admin: true, editor: false, user: false },
        { name: "Edit Settings", admin: true, editor: false, user: false },
        { name: "System Backup", admin: true, editor: false, user: false },
        { name: "View Logs", admin: true, editor: false, user: false },
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Roles & Permissions</h1>
          <p className="text-muted-foreground">
            Manage user roles and their associated permissions.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Create Role
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Roles List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Roles
            </CardTitle>
            <CardDescription>
              Select a role to view and edit permissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                  selectedRole === role.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-accent hover:bg-accent/5"
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{role.name}</h3>
                  <Badge variant={role.color as any}>{role.userCount}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{role.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Permissions Matrix */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Permissions</CardTitle>
            <CardDescription>
              Configure permissions for the selected role
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {permissions.map((category) => (
                <div key={category.category}>
                  <div className="flex items-center gap-2 mb-4">
                    <category.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-medium">{category.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.permissions.map((permission) => (
                      <div
                        key={permission.name}
                        className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/30"
                      >
                        <Label htmlFor={permission.name} className="font-medium">
                          {permission.name}
                        </Label>
                        <Switch
                          id={permission.name}
                          checked={
                            selectedRole === "admin"
                              ? permission.admin
                              : selectedRole === "editor"
                              ? permission.editor
                              : permission.user
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Role Users */}
      <Card>
        <CardHeader>
          <CardTitle>Users with Selected Role</CardTitle>
          <CardDescription>
            Users currently assigned to the {roles.find(r => r.id === selectedRole)?.name} role
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Assigned Date</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">JD</span>
                    </div>
                    <span className="font-medium">John Doe</span>
                  </div>
                </TableCell>
                <TableCell>john.doe@example.com</TableCell>
                <TableCell>2024-01-01</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}