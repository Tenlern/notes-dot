import type { LayoutServerLoad } from './$types';
import prisma from "$lib/prisma";
export const load = (async () => {
	const sections = await prisma.section.findMany({
		include: {
			tags: true
		},
		orderBy: [
			{
				sort: 'asc'
			}
		]
	});

	return { sections };
}) satisfies LayoutServerLoad;
