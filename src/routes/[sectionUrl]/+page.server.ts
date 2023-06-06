import type { PageServerLoad, Actions } from './$types';
import { error, redirect } from "@sveltejs/kit";
import { getList } from "$lib/repositories/articles";
import { getOne, getSectionTags } from "$lib/repositories/sections";

export const load =  (async ({ url, params }) => {
    const section = await getOne(params.sectionUrl, true);
    if (!section) {
        throw error(404, {
            message: 'Not found'
        });
    }
    const search = url.searchParams.get('search');
    // Validation. Strip tags
    if (search) {
        search.replace(/<[^>]*>?/gm, '')
    }

    let tags: number[]|undefined = url.searchParams.get('tags')?.split(',').map(item => parseInt(item))
    // Validation. Only existing in section
    if (tags !== undefined) {
        const sectionTags = await getSectionTags(section.id, tags)
        tags = sectionTags?.map(tag => tag.id)
    }
    // Else show every tagged article
    else {
        tags = section.tags?.map(tag => tag.id)
    }

    const articles  = await getList(search, tags)

    return { section, articles, search, selected: tags }
}) satisfies PageServerLoad

export const actions = {
    default: async ({request, url}) => {
        const data = await request.formData()

        const search = data.get('search')?.toString()
        if (search) {
            search.replace(/<[^>]*>?/gm, '')
            url.searchParams.set('search', search)
        } else {
            url.searchParams.delete('search')
        }

        const tags = data.getAll('tags')
        if (tags.length) {
            url.searchParams.set('tags', tags.join(','))
        } else {
            url.searchParams.delete('tags')
        }

        throw redirect(303, url.toString())
    }
} satisfies Actions