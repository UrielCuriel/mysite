<script>
	export let label: string
	export let color: string[] = ['bg-neutral-200', 'text-neutral-700']
</script>

<span class="py-1 px-2 {color.toString().replace(',', ' ')} rounded-full m-1 inline-block text-xs"
	>{label}</span
>
