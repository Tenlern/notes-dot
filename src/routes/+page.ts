import type { PageLoad } from './$types'
import services from '$lib/mockdata/services.json'
import {json} from "@sveltejs/kit";


// `PageServerData` will contain everything from the layouts and also the
// `data` from the `+page.server.ts` file.
// type OutputProps = Pick<PageServerData, 'product'> & { id: string }

// We have imported the `PageLoad` type from the relative `./$types` folder that
// is hidden in the generated `.svelte-kit` folder. Those generated types
// contain a `PageLoad` type with a `params` and `data` object that matches our route.
// You need to run the dev server or `svelte-kit sync` to generate them.
export const load: PageLoad = async ({params}) => {
    // const data = require('$lib/mockdata/services.json');
    return {
        services: services,
        pages: 5,
        all: 150,
        current: 1,
    }
}