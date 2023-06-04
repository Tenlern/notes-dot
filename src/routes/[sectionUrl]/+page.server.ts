import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import prisma from "$lib/prisma";

export const load =  (async ({ params }) => {
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

    const articles  = await prisma.article.findMany({
        where: {
            tags: {
                some: {
                    id: {
                        in: section.tags.map(tag => tag.id)
                    }
                }
            },
        }
    })

    return { section, articles }
}) satisfies PageServerLoad