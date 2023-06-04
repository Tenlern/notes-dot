import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient()

const numberOfTags = 15
const numberOfSections = 5
const numberOfArticles = 60
const tagsPerArticle = 3

async function main() {
  const sections: number[] = []
  const tags: number[][] = []

  for (let i = 0; i < numberOfSections; i++) {
    const name = faker.lorem.word()
    // fuck prisma, why no batch insert for sqlite?
    const section = await prisma.section.create({
      data: {
        name: name,
        url: name.toLowerCase()
      }
    })
    sections.push(section.id)
    tags[section.id] = []
  }


  for (let i = 0; i < numberOfTags; i++) {
    const sectionId = Math.floor(Math.random() * sections.length)
    const tag = await prisma.tag.create({
      data: {
        name: faker.lorem.word(),
        sectionId: sectionId
      }
    })
    tags[sectionId].push(tag.id)
  }
  console.log(tags);

  for (let i = 0; i < numberOfSections; i++) {
    const sectionId = Math.floor(Math.random() * sections.length)
    const article = await prisma.article.create({
      data: {
        name: faker.lorem.word(),
        description: faker.lorem.paragraph()
      }
    })
    tags[sectionId].push(tag.id)
  }

  // await prisma.section.createMany({data: sections})
  //
  //
  //
  //
  // const alice = await prisma.user.upsert({
  //   where: { email: 'alice@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'alice@prisma.io',
  //     name: 'Alice',
  //     posts: {
  //       create: {
  //         title: 'Check out Prisma with Next.js',
  //         content: 'https://www.prisma.io/nextjs',
  //         published: true,
  //       },
  //     },
  //   },
  // })
  // const bob = await prisma.user.upsert({
  //   where: { email: 'bob@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'bob@prisma.io',
  //     name: 'Bob',
  //     posts: {
  //       create: [
  //         {
  //           title: 'Follow Prisma on Twitter',
  //           content: 'https://twitter.com/prisma',
  //           published: true,
  //         },
  //         {
  //           title: 'Follow Nexus on Twitter',
  //           content: 'https://twitter.com/nexusgql',
  //           published: true,
  //         },
  //       ],
  //     },
  //   },
  // })
  // console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })