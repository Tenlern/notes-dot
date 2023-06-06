import type { RequestHandler } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";
import { getList } from "$lib/repositories/articles";

export const GET = (async ({url}) => {
  const search = url.searchParams.get('search')
  const tagIDs: number[]|undefined = url.searchParams.get('tags')?.split(',').map(item => parseInt(item))

  const articles = await getList(search, tagIDs)

  return json(articles)
}) satisfies RequestHandler