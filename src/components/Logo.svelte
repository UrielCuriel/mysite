<script lang="ts">
	import { fly } from 'svelte/transition'
	export let show: boolean = false
	export let textColorPrimary: string = null
	export let textColorSecondary: string = null
	export let allwayShow: boolean = false
</script>

{#if show}
	<h1
		class="font-logo {$$props.class} {textColorSecondary ?? 'text-neutral-600'} select-none"
		style={$$props.style}
	>
		<span
			class={textColorPrimary ?? 'text-support-500'}
			transition:fly={{ duration: 150, y: -50, delay: 100 }}
		>
			{'{'}
		</span>
		<span transition:fly={{ duration: 150, y: -50, delay: 150 }}>U</span>
		<span
			transition:fly={{ duration: 150, y: -50, delay: 200 }}
			class={allwayShow ? 'inline' : 'hidden lg:inline'}
		>
			r
		</span>
		<span
			transition:fly={{ duration: 150, y: -50, delay: 250 }}
			class={allwayShow ? 'inline' : 'hidden lg:inline'}
		>
			i
		</span>
		<span
			transition:fly={{ duration: 150, y: -50, delay: 300 }}
			class={allwayShow ? 'inline' : 'hidden lg:inline'}
		>
			e
		</span>
		<span
			transition:fly={{ duration: 150, y: -50, delay: 350 }}
			class={allwayShow ? 'inline' : 'hidden lg:inline'}
		>
			l
		</span>
		{' '}
		<span transition:fly={{ duration: 150, y: -50, delay: 400 }}>C</span>
		<span
			transition:fly={{ duration: 150, y: -50, delay: 450 }}
			class={allwayShow ? 'inline' : 'hidden lg:inline'}
		>
			u
		</span>
		<span
			transition:fly={{ duration: 150, y: -50, delay: 500 }}
			class={allwayShow ? 'inline' : 'hidden lg:inline'}
		>
			r
		</span>
		<span
			transition:fly={{ duration: 150, y: -50, delay: 550 }}
			class={allwayShow ? 'inline' : 'hidden lg:inline'}
		>
			i
		</span>
		<span
			transition:fly={{ duration: 150, y: -50, delay: 600 }}
			class={allwayShow ? 'inline' : 'hidden lg:inline'}
		>
			e
		</span>
		<span
			transition:fly={{ duration: 150, y: -50, delay: 650 }}
			class={allwayShow ? 'inline' : 'hidden lg:inline'}
		>
			l
		</span>
		<span
			transition:fly={{ duration: 150, y: -50, delay: 700 }}
			class={textColorPrimary ?? 'text-support-500'}
		>
			{'}'}
		</span>
	</h1>
{/if}
