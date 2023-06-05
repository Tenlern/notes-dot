import prisma from "$lib/prisma";

export function getList(search: string|null = null, tagIDs: number[]|undefined = undefined) {
  return prisma.article.findMany({
    include: {
      tags: true
    },
    where: {
      OR: [
        {
          name: {
            contains: search !== null ? search : undefined
          },
        },
        {
          description: {
            contains: search !== null ? search : undefined
          },
        }
      ],
      tags: {
        some: {
          id: {
            in: tagIDs
          }
        }
      },
    }
  });
}