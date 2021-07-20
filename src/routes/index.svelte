<script context="module">
	import type { LoadInput } from '@sveltejs/kit'
	export async function load({ page, fetch, session, context }: LoadInput) {
		const authorUrl = `/api/${
			page.query.get('locale') ?? 'es-MX'
		}/author/5VscPTD6HNFqzwdwRHRsDX.json`
		const authorRes = await fetch(authorUrl)
		const skillsUrl = `/api/${page.query.get('locale') ?? 'es-MX'}/skills.json`
		const skillsRes = await fetch(skillsUrl)
		const projectsUrl = `/api/${page.query.get('locale') ?? 'es-MX'}/project.json`
		const projectsRes = await fetch(projectsUrl)
		if (authorRes.ok && skillsRes.ok && projectsRes.ok) {
			return {
				props: {
					author: await authorRes.json(),
					skills: (await skillsRes.json()).filter((skill) => skill.type != 'other'),
					projects: await projectsRes.json()
				}
			}
		}

		return {
			status: authorRes.status,
			error: new Error(`Could not load ${authorUrl}`)
		}
	}
</script>

<script>
	import { onMount } from 'svelte'
	import { fly, fade } from 'svelte/transition'
	import Typing from '../components/Typing.svelte'
	import Logo from '../components/Logo.svelte'
	import type { IAuthorFields, IProjectFields, ISkillFields } from '$lib/types'
	import Card from '../components/Card.svelte'
	import { openUrl } from '$lib/helpers'

	//metatags.title = 'Uriel Curiel';
	//metatags.description = 'Uriel Curiel IT Consultant';
	//metatags.keywords = 'IT Consultant,web developer,wix,FullStack,webiste,frontend';

	let active = false
	export let author: IAuthorFields
	export let skills: ISkillFields[]
	export let projects: IProjectFields[]
	const texts = ['Fullstack Developer', 'Life Hacker', 'IT Consultant']
		.map((a) => ({ sort: Math.random(), value: a }))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value)

	onMount(() => {
		active = true
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
	</div>
{/if}
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
<div id="myWork" class="h-screen pt-8 pb-20 container m-auto">
	{#if projects}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
			{#each projects as project}
				<Card
					image={project.preview.fields.file.url}
					content={project.description}
					title={project.title}
					labels={project.skills}
					actions={project.url && [{ action: () => openUrl(project.url), title: 'Visitar' }]}
				/>
			{/each}
		</div>
	{/if}
</div>

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
