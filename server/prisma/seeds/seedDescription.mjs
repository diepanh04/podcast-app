import prismaClient from "../prismaClient.js";
import { Client } from 'podcast-api';

const client = Client({ apiKey: '62d8df21df004406a436454ce14733f1' });

const seedChannels = async () => {
  try {
    const channels = await prismaClient.channel.findMany();

    for (const channel of channels) {
      const id = channel.id;
      const response = await client.fetchPodcastById({
        id: id,
        sort: 'recent_first',
      });
      const description = response.data.description;
      await prismaClient.channel.update({
        where: {
          id: id,
        },
        data: {
          description: description,
        },
      });
    }
  } catch (error) {
    console.error('Error seeding channel data:', error);
  } finally {
    await prismaClient.$disconnect();
  }
};

seedChannels().catch((error) => {
  console.error('Unhandled Promise Rejection:', error);
});
