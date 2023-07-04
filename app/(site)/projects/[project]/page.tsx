import { getProject } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
  params: {
    project: string
  }
}

export default async function Project({ params }: Props) {


  const slug = params.project

  const project = await getProject(slug)

  return (
    <div>
      <header
        className="flex items-center justify-between"
      >
        <h1
          className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-4xl font-extrabold drop-shadow-xl "
        >

          {project.name}
        </h1>
        <a
          className="text-xl font-bold text-gray-600 hover:text-gray-900 whitespace-nowrap  px-4 py-2 border-2 border-gray-300 rounded-md hover:scale-105 transform transition-all duration-500 ease-in-out"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </header>

      {/** Content goes here */}
      <div
        className="mt-10 text-gray-600 prose prose-lg max-w-none"
      >

        <PortableText
          value={project.content}
        />

      </div>

      {/* Image goes here */}
      <Image
        src={project.image}
        alt={project.name}
        width={500}
        height={300}
        className="rounded-lg mt-10 shadow-xl mx-auto"
      />


    </div>
  )
}
