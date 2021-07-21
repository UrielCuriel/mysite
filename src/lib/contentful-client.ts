/* eslint-disable @typescript-eslint/no-var-requires */
import { config } from '$lib/config'
import {createClient} from 'contentful/dist/contentful.node'
export const client = createClient({
	space: config.CONTENTFUL_SPACE,
	environment: config.CONTENTFUL_ENVIRONMENT,
	accessToken: config.CONTENTFUL_ACCESS_TOKEN
})
