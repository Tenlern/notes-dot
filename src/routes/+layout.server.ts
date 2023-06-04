import type { LayoutServerLoad } from './$types';
import prisma from "$lib/prisma";
export const load = (async () => {
	const sections = await prisma.section.findMany({
		include: {
			tags: true
		}
	});

	return { sections };
}) satisfies LayoutServerLoad;
