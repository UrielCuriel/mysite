export const openUrl = (url: string): void => {
	window.open(url, '_blank').focus()
}

export const timeout = (ms: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
