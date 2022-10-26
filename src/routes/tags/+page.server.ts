import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = async ({ params: any }) => {
    const data = await prisma.tag.findMany()

    if (!data) {
        return {
            status: 404
        }
    }

    return {
        data: data
    }
}