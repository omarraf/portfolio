import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CalendarIcon, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

// This is a placeholder for your blog data
// In a real application, you would fetch this from a database or CMS
const getBlogPost = (slug: string) => {
  const blogPosts = [
    {
      
      slug: "my-first-open-source-contribution",
      title: "My First Open Source Contribution",
      date: "November 11, 2024",
      readTime: "4 min read",
      content: `
        # My First Open Source Contribution

        Contributing to open source is a rewarding experience. 
        I recently had the opportunity to contribute to the Open Energy Dashboard project, which helps visualize energy data.
      `,
    },
  ]

  return blogPosts.find((post) => post.slug === slug)
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>{post.title}</h1>

        <div className="flex items-center text-sm text-muted-foreground gap-4 mt-4 mb-8">
          <div className="flex items-center">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {post.readTime}
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />
      </article>
    </div>
  )
}
