import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"




export default async function Home() {

  const projects = await getProjects()




  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hola{' '}<span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Juan Manuel</span>{' '}!
      </h1>

      <p
        className="text-2xl font-bold text-gray-600 mt-5"
      >Aloha everyone! Check out my projects!</p>



      <h2
        className="text-3xl font-bold text-gray-600 mt-20"
      >
        My Projects
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mx-5"
      >
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className="border-2 border-gray-300 rounded-md p-5 mt-5 hover:scale-105 transform transition-all duration-500 ease-in-out"
            key={project._id}
          >
            {project.image && <Image
              className="object-cover rounded-lg  p-1"
              src={project.image}
              alt={project.name}
              width={500}
              height={500}

            />}
            <div
              className="text-2xl font-bold text-gray-600 text-center"
            >

              {project.name}
            </div>
          </Link>
        ))
        }
      </div>



    </div>
  )
}
