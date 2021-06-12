import * as contentful from 'contentful'
import { config } from '$lib/config'

export const client = contentful.createClient({
	space: config.CONTENTFUL_SPACE,
	environment: config.CONTENTFUL_ENVIRONMENT,
	accessToken: config.CONTENTFUL_ACCESS_TOKEN
})
