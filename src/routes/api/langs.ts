import { client } from '$lib/contentful'

export async function get() {
	const locales = await client.getLocales()

	if (locales) {
		return {
			body: {
				locales
			}
		}
	}
}
