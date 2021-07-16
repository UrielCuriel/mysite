<script lang="ts">
	import { onMount } from 'svelte'
	import { fly, fade } from 'svelte/transition'
	import Typing from '../components/Typing.svelte'
	import Logo from '../components/Logo.svelte'
	import { locale } from '$lib/store/locale'
	import type { IAuthorFields, ISkillFields } from '$lib/types'
	//metatags.title = 'Uriel Curiel';
	//metatags.description = 'Uriel Curiel IT Consultant';
	//metatags.keywords = 'IT Consultant,web developer,wix,FullStack,webiste,frontend';

	let active = false
	let author: IAuthorFields
	let skills: ISkillFields[]
	const texts = ['Fullstack Developer', 'Life Hacker', 'IT Consultant']
		.map((a) => ({ sort: Math.random(), value: a }))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value)

	onMount(() => {
		active = true
		locale.subscribe((_locale) => {
			fetch(`/api/${_locale.code}/author/5VscPTD6HNFqzwdwRHRsDX.json`)
				.then(async (body) => {
					author = await body.json()
				})
				.catch((e) => {
					console.log(e)
				})

			fetch(`/api/${_locale.code}/skills.json`)
				.then(async (body) => {
					skills = await body.json()
					skills = skills.filter((skill) => skill.type != 'other')
				})
				.catch((e) => {
					console.log(e)
				})
		})
	})
</script>

{#if active}
	<div transition:fly={{ x: 800, duration: 1200 }}>
		<div class="w-full h-screen">
			<div
				class="w-full h-full grid text-center relative content-center
        items-center justify-center"
			>
				<Logo show={active} class="text-12xl font-thin" />
				<h2
					in:fade={{ delay: 750 }}
					out:fly={{ y: 20 }}
					class="text-3xl text-neutral-300 font-semibold select-none font-code"
				>
					<Typing {texts} />
				</h2>
			</div>
		</div>
		<div id="about" class="h-screen pt-8 pb-20">
			{#if author}
				<div class="about container m-auto text-neutral-900 font-body">
					<div class="pic border-neutral-800 border-dashed border-r-2 bg-neutral-100 p-12">
						<img src={author.profilePic.fields.file.url} alt={author.profilePic.fields.title} />
					</div>
					<div class="resume py-12 px-20 flex items-center justify-center text-xl text-justify">
						{@html author.resume}
					</div>
					<div
						class="bio  border-neutral-800 border-dashed border-t-2 py-12 px-20 flex flex-col items-center justify-center text-xl text-justify"
					>
						{@html author.bio}
					</div>
					<div
						class="skills  border-neutral-800 border-dashed border-l-2 border-t-2 p-12 grid grid-cols-2"
					>
						{#if skills}
							{#each skills as skill}
								<div>
									{skill.name}<span class="pl-1 text-xs text-neutral-400">{skill.type}</span>
								</div>
							{/each}
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style lang="postcss">
	.about {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1.5fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'pic resume resume'
			'bio bio skills';
		width: 100%;
		height: 100%;
	}

	.pic {
		grid-area: pic;
	}

	.resume {
		grid-area: resume;
	}

	.bio {
		grid-area: bio;
	}

	.skills {
		grid-area: skills;
	}
</style>
