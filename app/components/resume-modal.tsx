"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Linkedin, ExternalLink } from "lucide-react"

export default function ResumeModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Resume</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] w-full">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Resume - Luiza Ferraz LeBlanc</DialogTitle>
          </div>
        </DialogHeader>
        <ScrollArea className="h-full max-h-[70vh] pr-4">
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">LUIZA FERRAZ LEBLANC</h1>
              <h2 className="text-xl text-muted-foreground">Software Development</h2>
              <p className="text-sm max-w-3xl mx-auto">
                Bilingual Software Developer (English and Portuguese), with several works in web front-end. Adept in
                delivering solutions focused on user experience. Eager to apply my knowledge in a practical setting and
                impact people through technology. Curiosity moves me, passionate about learning new things and solving
                problems.
              </p>
            </div>

            <Separator />

            <div className="grid md:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Contact */}
                <div>
                  <h3 className="font-bold text-lg mb-3">CONTACT</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>luizaa.fq@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>João Pessoa, Brazil</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Portfolio</span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="font-bold text-lg mb-3">EDUCATION</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold">Full Stack Development</h4>
                      <p className="text-muted-foreground">Kenzie Academy</p>
                      <p className="text-muted-foreground">Manchester (USA)</p>
                      <p className="text-muted-foreground">2022 - 2024</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">MBA (Data Science)</h4>
                      <p className="text-muted-foreground">FM2S</p>
                      <p className="text-muted-foreground">Brazil</p>
                      <p className="text-muted-foreground">2024 - 2025</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Systems Analysis and Development</h4>
                      <p className="text-muted-foreground">Maurício de Nassau</p>
                      <p className="text-muted-foreground">Brazil</p>
                      <p className="text-muted-foreground">2025-2027</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="font-bold text-lg mb-3">SKILLS</h3>
                  <div className="space-y-1 text-sm">
                    <p>• JSX</p>
                    <p>• CSS</p>
                    <p>• REST APIs</p>
                    <p>• Figma</p>
                    <p>• Interface Design (UX/UI)</p>
                    <p>• JavaScript</p>
                    <p>• Typescript</p>
                    <p>• SQL | PostGreSQL</p>
                    <p>• Python</p>
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="font-bold text-lg mb-3">LANGUAGES</h3>
                  <div className="space-y-1 text-sm">
                    <p>• Portuguese (native)</p>
                    <p>• English (fluent)</p>
                    <p>• French (Intermediate)</p>
                    <p>• Spanish (Intermediate)</p>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="font-bold text-lg mb-3">CERTIFICATIONS AND COURSES</h3>
                  <div className="space-y-1 text-sm">
                    <p>• Kenzie Academy (Full-Stack Engineering)</p>
                    <p>• Sebrae (Leadership)</p>
                    <p>• Aliança Francesa (French A1 Level)</p>
                    <p>• Duolingo English Test</p>
                    <p>• System and Analysis Development (Nassau University)</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Work Experience */}
              <div className="md:col-span-2">
                <h3 className="font-bold text-lg mb-4">WORK EXPERIENCE</h3>
                <div className="space-y-6 text-sm">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Software Engineer</h4>
                        <p className="text-muted-foreground">CroSoften</p>
                      </div>
                      <p className="text-muted-foreground">March 2025 - Present</p>
                    </div>
                    <ul className="space-y-1 ml-4">
                      <li>
                        • Create, fetch and send data while updating the interface accordingly with loading, empty,
                        error and successful states, keeping the user aware of what's happening in the application.
                      </li>
                      <li>• Responsible for detailing code changes with descriptive commits.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Lead Marketing | Software Development</h4>
                        <p className="text-muted-foreground">Dan AI</p>
                      </div>
                      <p className="text-muted-foreground">May 2024 - July 2024</p>
                    </div>
                    <ul className="space-y-1 ml-4">
                      <li>
                        • Conducting the addition of semantics to custom UI components, using screen readers to check,
                        guaranteeing app usability and satisfaction of the customers.
                      </li>
                      <li>
                        • Responsible for writing unit, widget, and integration tests, ensuring new features don't cause
                        older features to stop working. As a result, I developed my analytical skills.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">QA Specialist</h4>
                        <p className="text-muted-foreground">Livier Marketing Integrativo</p>
                      </div>
                      <p className="text-muted-foreground">October 2023 - August 2024</p>
                    </div>
                    <ul className="space-y-1 ml-4">
                      <li>
                        • Contributed to keep the architecture structured, sorting files in their respective folders to
                        keep the code readable and maintainable.
                      </li>
                      <li>
                        • Responsible for internationalization, presenting the interface in the user's language,
                        interface elements change based on who's using, ensuring that anyone can use the application.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Software Engineer</h4>
                        <p className="text-muted-foreground">Telus AI Services</p>
                      </div>
                      <p className="text-muted-foreground">July 2023 - April 2024</p>
                    </div>
                    <ul className="space-y-1 ml-4">
                      <li>
                        • Managed the fetching and sending data while updating the interface accordingly with loading,
                        empty, error and successful states, keeping the user aware of what's happening in the
                        application.
                      </li>
                      <li>• Responsible for detailing code changes with descriptive commits.</li>
                      <li>- International relevant freelancing Experience</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">Copywriter</h4>
                        <p className="text-muted-foreground">LatinHire</p>
                      </div>
                      <p className="text-muted-foreground">January 2021 - January 2022</p>
                    </div>
                    <ul className="space-y-1 ml-4">
                      <li>
                        • Develop compelling copy for advertisements, websites, social media, and email campaigns to
                        capture audience attention and drive action.
                      </li>
                      <li>
                        • Use persuasive techniques to align messaging with brand voice and target audience needs.
                      </li>
                      <li>- International relevant freelancing Experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
