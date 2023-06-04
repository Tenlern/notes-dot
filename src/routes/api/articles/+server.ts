import type { RequestHandler } from "@sveltejs/kit";
import prisma from "$lib/prisma";
import { json } from "@sveltejs/kit";

export const GET = (async ({url}) => {
  const search = url.searchParams.get('search')
  const tagIDs: number[]|undefined = url.searchParams.get('tags')?.split(',').map(item => parseInt(item))


  const articles  = await prisma.article.findMany({
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
  })


  return json(articles)
}) satisfies RequestHandler