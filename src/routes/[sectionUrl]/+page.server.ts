import type { PageServerLoad } from './$types';
import { PrismaClient } from "@prisma/client";
import { error } from '@sveltejs/kit';

export const load =  (async ({ params }) => {
    const prisma = new PrismaClient();
    const section = await prisma.section.findUnique({
        where: {
            url: params.sectionUrl
        }
    })

    if (!section) {
        throw error(404, {
            message: 'Not found'
        });
    }

    return {
       section
    }
}) satisfies PageServerLoad