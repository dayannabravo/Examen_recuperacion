import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const players = [
    {
      name: 'Lionel Messi',
      position: 'Forward',
      country: 'Argentina'
    },
    {
      name: 'Cristiano Ronaldo',
      position: 'Forward',
      country: 'Portugal'
    },
    {
      name: 'Neymar Jr.',
      position: 'Forward',
      country: 'Brazil'
    },
    {
      name: 'Kylian Mbappé',
      position: 'Forward',
      country: 'France'
    },
    {
      name: 'Kevin De Bruyne',
      position: 'Midfielder',
      country: 'Belgium'
    },
    {
      name: 'Robert Lewandowski',
      position: 'Forward',
      country: 'Poland'
    },
    {
      name: 'Mohamed Salah',
      position: 'Forward',
      country: 'Egypt'
    },
    {
      name: 'Virgil van Dijk',
      position: 'Defender',
      country: 'Netherlands'
    },
    {
      name: 'Sergio Ramos',
      position: 'Defender',
      country: 'Spain'
    },
    {
      name: 'Luka Modrić',
      position: 'Midfielder',
      country: 'Croatia'
    }
  ];

  for (const player of players) {
    try {
      const result = await prisma.player.create({
        data: player,
      });
      console.log(`Created player with ID: ${result.id}`);
    } catch (e) {
      console.error(`Error creating player: ${e}`);
    }
  }
}

main()
  .catch(e => {
    console.error(`Main function error: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
