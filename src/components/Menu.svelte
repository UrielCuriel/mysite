<script lang="ts">
	let routes = [
		{
			label: 'Inicio',
			href: '/'
		},
		{
			label: 'Sobre Mí',
			href: '/#about'
		},
		{
			label: 'Proyectos',
			href: '/#myWork'
		},
		{
			label: 'Blog',
			href: '/blog'
		}
	]
</script>

<div class="h-screen pt-4 pb-12 fixed w-menu print:hidden">
	<div
		class="flex flex-col items-center justify-between h-full border-r-2 border-neutral-800 border-dashed w-menu ml-open-menu transition-all"
	>
		<div />
		<ul class="block w-full">
			{#each routes as route}
				<li class="block m-2 p-2 h-10 w-full">
					<a
						href={route.href}
						class="font-body text-neutral-700 font-bold text-2xl hover:text-3xl leading-10 hover:text-support-600 transition-all block"
						>{route.label}</a
					>
				</li>
			{/each}
		</ul>
		<div />
	</div>
</div>
