<script>
	import Footer from '../components/Footer.svelte'
	import '../app.css'
	import Menu from '../components/Menu.svelte'
	import Locales from '../components/Locales.svelte'
</script>

<div class="bg-neutral-100 grid grid-areas-layout grid-cols-layout grid-rows-layout overflow-x-hidden min-h-screen print:block">
	<Locales />
	<div class="grid-in-menu"><Menu /></div>
	<div class="grid-in-body"><slot /></div>
	<div class="grid-in-footer"><Footer /></div>
</div>

<style lang="postcss">
</style>
