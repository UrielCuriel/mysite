import { client } from '$lib/contentful'
import type { Author } from '$lib/types'
import type { EndpointOutput, Request } from '@sveltejs/kit'
import markdown from 'markdown-it'

export async function get({ params }: Request): Promise<EndpointOutput> {
    const author = await client.getEntries<Author>({
        content_type: 'author',
        'sys.id': params.id,
        locale: params.locale,

    })

    if (author) {
        const converter = markdown()
        const data = author.items[0].fields
        data.resume = converter.render(data.resume)
        data.bio = converter.render(data.bio)
        return {
            body: data as any
        }
    }
}
