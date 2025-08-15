import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import ResumeModal from "./components/resume-modal"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-20 items-center">
          <div className="flex items-center justify-between w-full">
            <Link className="flex items-center h-full" href="/">
              <Image
                src="/images/luiza-leblanc-logo.png"
                alt="Luiza LeBlanc"
                width={250}
                height={80}
                className="h-20 w-auto object-contain filter dark:invert"
              />
            </Link>
            <div className="flex items-center gap-4">
              <ResumeModal />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Software Developer
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
                  Building digital experiences with modern technologies. Focused on creating elegant solutions for
                  complex problems.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/luizaleblanc" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/luiza-ferraz-leblanc-7727ba167" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/luizaleblanc/profilecard/?igsh=NnpvODFkN3c1cXZ3" target="_blank">
                  <Button variant="outline" size="icon">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="mailto:luizaa.fq@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Capufeeno"
                description="E-commerce prototype built with Next.js, Figma, React and Javascript"
                image="/images/capufeeno.png"
                link="https://github.com/luizaleblanc/e-commerce-prototype"
                liveLink="https://caputeeno-commerce.vercel.app/"
                tags={["Next.js", "Figma", "React", "Javascript"]}
              />
              <ProjectCard
                title="Lanzarotto"
                description="A front-end application for client management and user authentication."
                image="/images/lanzarotto-login.png"
                link="https://github.com/luizaleblanc/lanzarotto"
                liveLink="https://v0-lanzarotto.vercel.app"
                tags={["Next.js", "SCSS", "Angular", "Figma", "TypeScript"]}
              />
              <ProjectCard
                title="Bag Chiic"
                description="E-commerce with Supabase backend integration, shopping cart and checkout."
                image="/images/bag-chiic.png"
                link="https://github.com/luizaleblanc/bag-chiic"
                liveLink="https://www.bagchiic.com.br"
                tags={["Next.js", "TailwindCSS", "TypeScript", "Supabase", "API", "React"]}
              />
              <ProjectCard
                title="MedSass"
                description="SaaS for appointment scheduling, user registration and control focused on medical clinics."
                image="/images/medsass.png"
                link="https://github.com"
                liveLink="https://v0-sass-para-medicos.vercel.app/"
                tags={["Next.js", "TailwindCSS", "TypeScript", "React", "Figma"]}
              />
            </div>
          </div>
        </section>

        <section id="stack" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">© 2024 Luiza LeBlanc. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
