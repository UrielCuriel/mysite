<svelte:options accessors />

<script>
	import { slide } from 'svelte/transition'
	import { locale } from '$lib/store/locale'
	import { onMount } from 'svelte'
	import type { Locale } from 'contentful'
	import { page } from '$app/stores'
	let locales: Locale[]
	let open: boolean = false
	let close = () => {
		open = false
	}
	let buttonElement
	let menuElement
	let handleKeyDown = ({ key }) => {
		if (key === 'Escape') {
			close()
		}
	}
	let handleWindowClick = (event) => {
		const path = event.path || event.composedPath()
		if (path.includes(buttonElement) || path.includes(menuElement)) {
			return
		}
		close()
	}
	let setLocale = (_locale: Locale) => {
		if ($page.query.has('locale')) {
			$page.query.set('locale', _locale.code)
		} else $page.query.append('locale', _locale.code)
		console.log($page.query.toString())
		document.location.search = $page.query.toString()
		locale.set(_locale)
		close()
	}
	$: showMenu = !!open
	onMount(async () => {
		locales = await (await fetch(`/api/langs.json`)).json()
		const _locale = locales.find(({ code }) => code === $page.query.get('locale'))
		if (_locale) locale.set(_locale)
	})
</script>

<svelte:window on:click={handleWindowClick} on:keydown={handleKeyDown} />

<div
	bind:this={buttonElement}
	on:click={() => (open = !open)}
	class="fixed top-2 right-2 text-neutral-700 hover:text-primary-600 w-12 h-8 z-40 cursor-pointer flex flex-col items-center print:hidden"
>
	<i class="fas fa-language text-xl" />
	<span class="text-xs">{$locale.code}</span>
</div>

{#if showMenu}
	<div
		bind:this={menuElement}
		class="w-48 py-1 z-50 fixed m-1 top-12 right-2 bg-neutral-100 overflow-y-auto rounded border-2 border-neutral-200"
		transition:slide
	>
		<ul>
			{#each locales as _locale (_locale.code)}
				<li
					on:click={() => setLocale(_locale)}
					class="p-2 border-b-2 text-neutral-700 cursor-pointer border-neutral-800 border-dashed last:border-none hover:text-primary-600"
				>
					{_locale.name}
				</li>
			{/each}
		</ul>
	</div>
{/if}
