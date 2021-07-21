import { client } from '$lib/contentful-client'
import type { EndpointOutput, Request } from '@sveltejs/kit'


export async function get({ params }: Request): Promise<EndpointOutput> {

    const author = await client.getEntries({
        content_type: 'author',
        'sys.id': params.id,
        locale: params.locale,
        select: 'sys.id,fields.socialMedia'

    })

    if (author) {
        return {
            body: (author.items[0].fields as any).socialMedia
        }
    }
}
