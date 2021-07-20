<script lang="ts">
	import { locale } from '$lib/store/locale'
	import { onMount } from 'svelte'
	import { get } from 'svelte/store'
	import type { Locale } from 'contentful'
	const _locale: Locale = get(locale)
	let socialMedia: any[]
	onMount(async () => {
		socialMedia = await (
			await fetch(`/api/${_locale.code}/author/5VscPTD6HNFqzwdwRHRsDX/socialmedia.json`)
		).json()
	})
</script>

{#if socialMedia}
	<footer class="w-full fixed bottom-0 z-50 bg-neutral-100  px-4 print:hidden">
		<div
			class="w-full border-t-2 border-dashed border-neutral-800 flex justify-between items-center h-12"
		>
			<div class="ml-4">
				{#each socialMedia as { href, name, value }}
					<a
						{href}
						rel="noreferrer"
						class="text-neutral-400 hover:text-support-500 "
						target="_blank"
						aria-label={name}
					>
						<span class="sr-only">{value}</span>
						<i class="fab fa-{name} text-xl m-1" />
					</a>
				{/each}
				<a
					href="mailto:urielcuriel@outlook.com?subject=Hola%20me%20gustó%20tu%20trabajo%20y%20tengo%20una%20propuesta"
					class="text-neutral-400 hover:text-support-500 "
				>
					<span class="sr-only">contact mail</span>
					<i class="fas fa-envelope text-xl m-1" />
				</a>
			</div>
			<div class="mx-4 text-neutral-400">
				crafted by
				<a href="/" class="font-display text-support-500">Uriel Curiel</a>
				&copy; {new Date().getFullYear()}
			</div>
		</div>
	</footer>
{/if}
