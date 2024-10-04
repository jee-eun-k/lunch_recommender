// npm i -D tsx
// npx tsx src/db/queries/script.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // const category = await prisma.category.create({
    //     data: {
    //         name: 'korean',
    //     },
    // });
    // console.log(category);

    // const restaurant = await prisma.restaurant.findMany();
    // console.log(restaurant);

    const comment = await prisma.comment.findMany();
    // console.log(comment);

    // const deleteCategory = await prisma.category.delete({
    //     where: {
    //         id: 1,
    //     },
    // });
    // console.log(deleteCategory);
    // const updateCategory = await prisma.category.update({
    //     where: {
    //         name: 'cafe',
    //     },
    //     data: {
    //         name: 'Cafe',
    //     },
    // });
    // console.log(updateCategory);
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
