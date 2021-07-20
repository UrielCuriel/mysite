import { timeout } from '$lib/helpers'
import type { EndpointOutput, Request } from '@sveltejs/kit'
import chromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'
export async function get({ host }: Request): Promise<EndpointOutput> {
	const executablePath = host.includes('localhost')
		? './node_modules/puppeteer/.local-chromium/linux-884014/chrome-linux/chrome'
		: await chromium.executablePath
	const browser = await puppeteer.launch({
		args: chromium.args,
		executablePath
	})

	const page = await browser.newPage()

	await page.goto(`${host}/cv`, {
		waitUntil: ['networkidle0', 'load', 'domcontentloaded']
	})

	await page.waitForSelector('#cv', {
		visible: true
	})

	await timeout(1000)

	const pdfStream = await page.pdf()
	if (pdfStream)
		return {
			headers: {
				'Content-type': 'application/pdf'
			},
			body: pdfStream.toString('base64')
		}
}
