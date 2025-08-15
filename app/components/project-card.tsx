import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Card } from "@/components/ui/card" // Importar Card
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  liveLink?: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, liveLink, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      {liveLink ? (
        <Link href={liveLink} target="_blank" rel="noopener noreferrer" className="block">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
      ) : (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
