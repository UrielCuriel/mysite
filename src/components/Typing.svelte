<script lang="ts">
	export let texts = []
	function typewriter(node, { speed = 100 }) {
		const text = node.textContent
		const duration = text.length * speed

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t)
				node.textContent = text.slice(0, i)
			}
		}
	}
	function* infinte() {
		let n = 0
		while (true) {
			if (n + 1 < texts.length) {
				n++
			} else {
				n = 0
			}
			yield n
		}
	}
	const activeGenerator = infinte()
	let active = activeGenerator.next().value
	const nextActive = () => (active = activeGenerator.next().value)

	const startOutro = () => {
		setTimeout(() => {
			active = -1
		}, 5000)
	}
	startOutro()
</script>

<span>
	//
	{#each texts as text, i}
		{#if active === i}
			<span transition:typewriter|local on:introend={startOutro} on:outroend={nextActive}>
				{text}
			</span>
		{/if}
	{/each}
	<span class="blink -m-4">_</span>
</span>

<style>
	.blink {
		animation: blink 0.7s linear infinite;
	}
	@-webkit-keyframes blink {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
