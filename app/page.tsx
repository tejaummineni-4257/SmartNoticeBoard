"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import LoginForm from "@/components/login-form"
import RegisterForm from "@/components/register-form"
import { BookOpen, Users, Lock } from "lucide-react"

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<"student" | "faculty" | "admin" | null>(null)
  const [isLogin, setIsLogin] = useState(true)

  const roles = [
    {
      id: "student",
      title: "Student",
      description: "Access your courses, assignments, and grades",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      lightColor: "bg-blue-50",
    },
    {
      id: "faculty",
      title: "Faculty",
      description: "Manage courses and track student progress",
      icon: Users,
      color: "from-emerald-500 to-teal-500",
      lightColor: "bg-emerald-50",
    },
    {
      id: "admin",
      title: "Admin",
      description: "Administer the entire platform",
      icon: Lock,
      color: "from-purple-500 to-pink-500",
      lightColor: "bg-purple-50",
    },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-muted to-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EduPortal
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">EduPortal</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Select your role to get started with our educational platform
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {roles.map((role) => {
            const IconComponent = role.icon
            return (
              <Dialog key={role.id}>
                <DialogTrigger asChild>
                  <Card
                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/50 overflow-hidden"
                    onClick={() => {
                      setSelectedRole(role.id as any)
                      setIsLogin(true)
                    }}
                  >
                    <CardHeader className={`${role.lightColor} border-b border-border/30 pb-6`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${role.color}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{role.id}</span>
                      </div>
                      <CardTitle className="text-2xl">{role.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{role.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <Button
                          className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-md transition-all"
                          size="lg"
                        >
                          Get Started
                        </Button>
                        <p className="text-center text-sm text-muted-foreground">
                          New user? You can register during sign-up
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                {/* Dialog Content */}
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {isLogin ? `${role.title} Login` : `${role.title} Registration`}
                    </DialogTitle>
                  </DialogHeader>

                  {isLogin ? <LoginForm role={role.id as any} /> : <RegisterForm role={role.id as any} />}

                  <div className="text-center mt-6 border-t pt-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </p>
                    <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsLogin(!isLogin)}>
                      {isLogin ? "Create New Account" : "Sign In"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>

        {/* Features Section */}
        <div className="mt-20 sm:mt-32">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose EduPortal?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Access",
                description: "Role-based authentication ensures your data is protected",
                icon: "🔒",
              },
              {
                title: "Easy Navigation",
                description: "Intuitive interface designed for all user types",
                icon: "🧭",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance for all your queries",
                icon: "💬",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="border border-border/50 bg-card/50">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30 backdrop-blur-md mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 EduPortal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
