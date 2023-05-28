import { PrismaClient } from '@prisma/client';
import type { LayoutServerLoad } from './$types';
export const load = (async () => {
	const prisma = new PrismaClient();
	const sections = await prisma.section.findMany();

	return { sections: sections, foo: [], bar: 'test' };
}) satisfies LayoutServerLoad;
