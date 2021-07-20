<script>
	import type { IActionCard } from '$lib/interface/Card.interface'
	import Label from './Label.svelte'

	export let image: string = ''
	export let title: string
	export let content: string
	export let labels: any[] = []
	export let actions: IActionCard[] = []
</script>

<div class="text-neutral-700 px-4">
	{#if image}
		<div class=" py-2 text-center border-b border-neutral-800 border-dashed">
			<img src={image} alt={title} class="object-contain h-72 m-auto object-center" />
		</div>
	{/if}
	<div class=" py-2 text-neutral-900 font-code">
		<h3>{title}</h3>
	</div>
	<div class="text-justify  py-2 border-t border-neutral-800 border-dashed">
		{@html content}
	</div>
	{#if labels}
		<div class="py-2">
			{#each labels as label}
				<Label {label} />
			{/each}
		</div>
	{/if}
	{#if actions.length>0}
		<div class="py-2 border-t border-neutral-800 border-dashed">
			{#each actions as action}
				<button
					class="block w-full py-1 bg-neutral-200 rounded hover:bg-neutral-700 transition-all hover:text-white"
					on:click={action.action}>{action.title}</button
				>
			{/each}
		</div>
	{/if}
</div>
