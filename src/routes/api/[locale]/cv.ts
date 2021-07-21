import type { Request } from '@sveltejs/kit'
import chromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function get({ host }: Request): Promise<any> {
	const executablePath = host.includes('localhost')
		? './node_modules/puppeteer/.local-chromium/linux-884014/chrome-linux/chrome'
		: await chromium.executablePath
	const browser = await puppeteer.launch({
		args: chromium.args,
		executablePath,
		headless: chromium.headless
	})

	const page = await browser.newPage()

	await page.goto(
		`${host.includes('localhost') ? 'https://feature-card--urielcuriel.netlify.app' : host}/cv`,
		{
			waitUntil: ['networkidle0', 'load', 'domcontentloaded']
		}
	)

	await page.waitForSelector('#cv', {
		visible: true
	})

	const pdfStream = await page.pdf()
	return {
		statusCode: 200,
		isBase64Encoded: true,
		headers: {
			'Content-type': 'application/pdf'
		},
		body: pdfStream.toString('base64')
	}
}
