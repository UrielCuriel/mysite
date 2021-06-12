<script lang="ts">
	import { fly } from 'svelte/transition'
	export let show: boolean = false
</script>

{#if show}
	<h1 class="font-logo {$$props.class} text-neutral-600 select-none" style={$$props.style}>
		<span class="text-support-500" transition:fly={{ duration: 150, y: -50, delay: 100 }}>
			{'{'}
		</span>
		<span transition:fly={{ duration: 150, y: -50, delay: 150 }}>U</span>
		<span transition:fly={{ duration: 150, y: -50, delay: 200 }} class="hidden lg:inline"> r </span>
		<span transition:fly={{ duration: 150, y: -50, delay: 250 }} class="hidden lg:inline"> i </span>
		<span transition:fly={{ duration: 150, y: -50, delay: 300 }} class="hidden lg:inline"> e </span>
		<span transition:fly={{ duration: 150, y: -50, delay: 350 }} class="hidden lg:inline"> l </span>
		{' '}
		<span transition:fly={{ duration: 150, y: -50, delay: 400 }}>C</span>
		<span transition:fly={{ duration: 150, y: -50, delay: 450 }} class="hidden lg:inline"> u </span>
		<span transition:fly={{ duration: 150, y: -50, delay: 500 }} class="hidden lg:inline"> r </span>
		<span transition:fly={{ duration: 150, y: -50, delay: 550 }} class="hidden lg:inline"> i </span>
		<span transition:fly={{ duration: 150, y: -50, delay: 600 }} class="hidden lg:inline"> e </span>
		<span transition:fly={{ duration: 150, y: -50, delay: 650 }} class="hidden lg:inline"> l </span>
		<span transition:fly={{ duration: 150, y: -50, delay: 700 }} class="text-support-500">
			{'}'}
		</span>
	</h1>
{/if}
