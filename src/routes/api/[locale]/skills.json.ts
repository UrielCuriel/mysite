import { client } from '$lib/contentful-client'
import type { ISkillFields } from '$lib/types'
import type { EndpointOutput, Request } from '@sveltejs/kit'
import type { JSONValue } from '@sveltejs/kit/types/endpoint'


export async function get({ params }: Request): Promise<EndpointOutput> {
    const skills = await client.getEntries<ISkillFields>({
        content_type: 'skill',
        locale: params.locale,
        limit: 100
    })

    if (skills) {
        const data = skills.items.map((skill) => skill.fields)
        return {
            body: data as JSONValue
        }
    }
}
