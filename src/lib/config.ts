import * as dotenv from 'dotenv'

dotenv.config()

export const config = {
	CONTENTFUL_SPACE: process.env['CONTENTFUL_SPACE'],
	CONTENTFUL_ENVIRONMENT: process.env['CONTENTFUL_ENVIRONMENT'],
	CONTENTFUL_ACCESS_TOKEN: process.env['CONTENTFUL_ACCESS_TOKEN']
}
