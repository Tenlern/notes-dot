import type { RequestHandler } from '@sveltejs/kit';
import client from '$lib/scripts/elastic';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get: RequestHandler = async ({ clientAddress, locals, params, platform, request, routeId, url }):Promise<{ body: { [key: string]:  returnType } }> => {
    await client
  const res: returnType = await something;

  if (res) {
    return {
      body: {
        res
      }
    };
  }
}