<script>
	import Footer from '../components/Footer.svelte'
	import '../app.css'
	import Menu from '../components/Menu.svelte'
	import Locales from '../components/Locales.svelte'
</script>

<div class="bg-neutral-100 contenedor overflow-x-hidden min-h-screen">
	<Locales />
	<div class="menu"><Menu /></div>
	<div class="body"><slot /></div>
	<div class="footer"><Footer /></div>
</div>

<style lang="postcss">
	.contenedor {
		display: grid;
		grid-template-columns: 200px 1fr 1fr;
		grid-template-rows: 1fr 50px;
		gap: 0px 0px;
		grid-template-areas:
			'menu body body'
			'footer footer footer';
	}

	.body {
		grid-area: body;
	}

	.menu {
		grid-area: menu;
	}

	.footer {
		grid-area: footer;
	}
</style>
