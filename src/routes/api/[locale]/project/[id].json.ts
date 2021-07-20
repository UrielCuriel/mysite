import { client } from '$lib/contentful'
import type { IProjectFields } from '$lib/types'
import type { EndpointOutput, Request } from '@sveltejs/kit'
import type { JSONValue } from '@sveltejs/kit/types/endpoint'
import markdown from 'markdown-it'

export async function get({ params }: Request): Promise<EndpointOutput> {
    const author = await client.getEntries<IProjectFields>({
        content_type: 'project',
        'sys.id': params.id,
        locale: params.locale,

    })

    if (author) {
        const converter = markdown()
        const data = author.items[0].fields
        data.description = converter.render(data.description)
        data.challenges = converter.render(data.challenges)
        data.contribution = converter.render(data.contribution)
        data.outcome = converter.render(data.outcome)
        data.comments = converter.render(data.comments)
        return {
            body: data as JSONValue
        }
    }
}
