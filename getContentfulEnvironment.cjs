require('dotenv').config()
const contentfulManagement = require('contentful-management')

module.exports = function () {
	const contentfulClient = contentfulManagement.createClient({
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_CMA
	})

	return contentfulClient
		.getSpace(process.env.CONTENTFUL_SPACE)
		.then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT))
}
