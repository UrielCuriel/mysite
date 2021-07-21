import { client } from '$lib/contentful-client'
import type { IProjectFields } from '$lib/types'
import type { EndpointOutput, Request } from '@sveltejs/kit'
import type { JSONValue } from '@sveltejs/kit/types/endpoint'
import markdown from 'markdown-it'

export async function get({ params }: Request): Promise<EndpointOutput> {
    const projects = await client.getEntries<IProjectFields>({
        content_type: 'project',
        locale: params.locale,
        order:'-fields.relevance',
        limit: 100
    })

    if (projects) {
        const converter = markdown()
        const data = projects.items.map((project) => ({
            id: project.sys.id,
            relevance:project.fields.relevance,
            title: project.fields.title,
            url:project.fields.url,
            date:project.fields.date,
            description:converter.render(project.fields.description),
            preview:project.fields.preview as unknown as JSONValue,
            skills:project.fields.skills.map((skill)=>skill.fields.name)
        }))
        return {
            body: data as JSONValue
        }
    }
}
