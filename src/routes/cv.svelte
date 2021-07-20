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
	import type { IAuthorFields, IProjectFields, ISkillFields } from '$lib/types'
	import Logo from '../components/Logo.svelte'

	export let author: IAuthorFields
	export let skills: ISkillFields[]
	export let projects: IProjectFields[]
</script>

<div class="print:w-screen m-auto h-screen" id="cv">
	<div class="w-1/3 bg-neutral-500 text-center p-4">
		<Logo show allwayShow textColorPrimary="text-support-500" textColorSecondary="text-white" class="text-2xl" />
	</div>
	<div class="w-2/3" />
</div>
