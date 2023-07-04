import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props = {
    params: {
        slug: string
    }

}

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug)



    return (
        <div>
            <h1
                className="text-4xl font-bold text-center"
            >{page.title}
            </h1>

            <div
                className="mt-10 prose prose-lg max-w-none"
            >
            <PortableText 
                value={page.content}
            />
            </div>
        </div>
    )
}