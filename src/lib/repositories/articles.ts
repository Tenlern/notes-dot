import prisma from '$lib/prisma';
import type { Prisma } from '@prisma/client'

export async function getList(
	search: string | null = null,
	tagIDs: number[] | undefined = undefined
) {
	const filter: Prisma.ArticleWhereInput = {
		tags: {
			some: {
				id: {
					in: tagIDs
				}
			}
		}
	};

	// if contains will be null or undefined it will ruin OR query
	// so never use it with optional conditions
	// another prisma-moment
	if (search !== null) {
      filter.OR = [
        {
          name: {
            contains: search
          }
        },
        {
          description: {
            contains: search
          }
        }
      ];
    }

	return prisma.article.findMany({
		include: {
			tags: true
		},
		where: filter
	});
}