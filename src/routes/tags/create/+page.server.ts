import prisma from '$lib/prisma';
import type { Actions } from './$types';
 
export const actions: Actions = {
  default: async (event) => {
    console.log(event);
    
    const data = await event.request.formData()
    const tag = prisma.tag.create({
        data: data.getAll
    })
  }
};