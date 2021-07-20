import { client } from '$lib/contentful'
import type { EndpointOutput } from '@sveltejs/kit'

export async function get(): Promise<EndpointOutput> {
	const locales = await client.getLocales()

	if (locales) {
		return {
			body: locales.items as any
		}
	}
}
