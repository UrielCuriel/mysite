import { config } from '$lib/config'
import * as contentful from 'contentful'
export const client = contentful.createClient({
	space: config.CONTENTFUL_SPACE,
	environment: config.CONTENTFUL_ENVIRONMENT,
	accessToken: config.CONTENTFUL_ACCESS_TOKEN
})
