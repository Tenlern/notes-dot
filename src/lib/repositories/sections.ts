import prisma from "$lib/prisma";

export async function getOne(url: string, withTags: boolean) {
  return prisma.section.findUnique({
    where: {
      url: url,
    },
    include: {
      tags: withTags
    }
  });
}

export async function getSectionTags(id: number, tagIDs: number[]) {
  return prisma.section.findUnique({
    where: {
      id: id
    }
  }).tags({
    where: {
      id: {
        in: tagIDs
      }
    }
  })
}