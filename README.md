# prisma-orm-example

1 - npm init -y

2 - npm install typescript ts-node @types/node
--save-dev

3 - npx tsc --init

4 - npm install prisma --save-dev

5 - npx prisma init --datasource-provider sqlite

6 - No arquivo tsconfig.json - Descomentar a linha "sourceMap:true"

7 - Dentro do schema.prisma criar a model, exemplo abaixo: <br/>

model User {  <br />
  id Int @id @default(autoincrement())
   <br />
  email String @unique
   <br />
  name String?
   <br />
}

8 - Criar o arquivo default para iniciar o prisma:
Gerar o arquivo "index.ts", conforme abaixo:
 <br />
import { PrismaClient } from "prisma/client"

const prisma = new PrismaClient();

async function main() {
    console.log('main..')
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


APOS A CONFIGURAÇÃO NO PROJETO executar os comandos abaixo: <br />
9 - npx prisma migrate dev --name init
 <br />
10 - npx ts-node script.ts


