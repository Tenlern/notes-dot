import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient()

const numberOfTags = 15
const numberOfSections = 5
const numberOfArticles = 60
const tagsPerArticle = 3

async function main() {
  const sections: number[] = []
  const tags: { [key: number]: number[] } = []

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
    const sectionId = sections[Math.floor(Math.random() * sections.length)]
    const tag = await prisma.tag.create({
      data: {
        name: faker.lorem.word(),
        sectionId: sectionId
      }
    })
    tags[sectionId].push(tag.id)

  }
  console.log(tags);

  for (let i = 0; i < numberOfArticles; i++) {
    const sectionId = sections[Math.floor(Math.random() * sections.length)]
    const tagIDs = [];
    for (let j = 0; j < tagsPerArticle; j++) {
      tagIDs.push({id: tags[sectionId][Math.floor(Math.random() * tags[sectionId].length)]})
    }

    const article = await prisma.article.create({
      data: {
        name: faker.lorem.word(),
        description: faker.lorem.paragraph(),
        tags: {
          connect: tagIDs
        }
      }
    })

  }
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