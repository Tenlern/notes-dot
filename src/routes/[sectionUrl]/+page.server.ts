import type { PageServerLoad, Actions } from './$types';
import { error } from "@sveltejs/kit";
import prisma from "$lib/prisma";
import { getList } from "$lib/repositories/articles";

export const load =  (async ({ url, params }) => {
    const search = url.searchParams.get('search');
    const tags: number[]|undefined = url.searchParams.get('tags')?.split(',').map(item => parseInt(item))

    const section = await prisma.section.findUnique({
        where: {
            url: params.sectionUrl
        },
        include: {
            tags: true
        }
    })

    if (!section) {
        throw error(404, {
            message: 'Not found'
        });
    }

    const articles  = await getList(search, tags)

    return { section, articles }
}) satisfies PageServerLoad

export const actions = {
    default: async (event) => {
        console.log(event);
    }
} satisfies Actions