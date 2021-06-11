<script lang="ts">
	import { onMount, onDestroy, getContext, beforeUpdate } from 'svelte'
	import { fly, fade } from 'svelte/transition'
	import Typing from '../components/Typing.svelte'
	import Logo from '../components/Logo.svelte'
	//metatags.title = 'Uriel Curiel';
	//metatags.description = 'Uriel Curiel IT Consultant';
	//metatags.keywords = 'IT Consultant,web developer,wix,FullStack,webiste,frontend';
	const texts = ['Fullstack Developer', 'Life Hacker', 'IT Consultant']
</script>

<div transition:fly={{ x: 800, duration: 1200 }} class="w-full">
	<div class="w-full h-screen">
		<div
			class="w-full h-full grid text-center relative content-center
        items-center justify-center"
		>
			<Logo class="text-12xl font-thin" />
			<h2
				in:fade={{ delay: 750 }}
				out:fly={{ y: 20 }}
				class="text-3xl text-neutral-300 font-semibold select-none"
			>
				<Typing {texts} />
			</h2>
		</div>
	</div>
</div>
