import type { PageServerLoad, Actions } from './$types';
import { error } from "@sveltejs/kit";
import prisma from "$lib/prisma";
import { getList } from "$lib/repositories/articles";

export const load =  (async ({ url, params }) => {
    const search = url.searchParams.get('search');
    let tags: number[]|undefined = url.searchParams.get('tags')?.split(',').map(item => parseInt(item))

    const section = await prisma.section.findFirst({
        where: {
            url: params.sectionUrl,
            tags: {
                every: {
                    id: {
                        in: tags
                    }
                }
            }
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

    if (tags === undefined) {
        tags = [];
        if (section.tags.length) {
            tags = section.tags.map(tag => tag.id)
        }
    }

    const articles  = await getList(search, tags)

    return { section, articles, search, tags }
}) satisfies PageServerLoad

export const actions = {
    default: async (event) => {
        console.log(event);
    }
} satisfies Actions