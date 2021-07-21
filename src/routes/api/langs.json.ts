import { client } from '$lib/contentful-client'
import type { EndpointOutput } from '@sveltejs/kit'
import type { JSONValue } from '@sveltejs/kit/types/endpoint'

export async function get(): Promise<EndpointOutput> {
	const locales: JSONValue = (await client.getLocales()).toPlainObject() as JSONValue

	if (locales) {
		return {
			body: locales['items']
		}
	}
}
