import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function main() {
    console.log('main')

    //Deleto por conta da constraint no campo email
    await prisma.user.delete({
        where: {
            email: 'silvio@dev.com'
        }
    })

    const user = await prisma.user.create({
        data: {
            name: 'Silvio',
            email : 'silvio@dev.com'
        }
    })

    console.log(user)
}


main()
    .then(async () =>{
        await prisma.$disconnect();
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1)
    })


