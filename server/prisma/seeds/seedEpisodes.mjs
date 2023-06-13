import prismaClient from "../prismaClient.js";
import { Client } from 'podcast-api';
const client = Client({ apiKey: '6f228db1aec840ec96932ebdc92138e8' });

const seedEpisodes = async () => {
  try {
    const channels = await prismaClient.channel.findMany();
    const promises = channels.slice(150,160).map(async (channel) => {
      const channelId = channel.id;
      const response = await client.fetchEpisodeById({
        id: channelId,
      });
      const channels = response.data.podcasts;
      const channelData = channels.map((channel) => ({
        id: channel.id,
        title: channel.title,
        publisher: channel.publisher,
        thumbnail: channel.thumbnail,
      }));

      return prismaClient.channel.createMany({
        data: channelData,
        skipDuplicates: true,
      });
    });

    await Promise.all(promises);
    console.log('Channel data seeded successfully.');
  } catch (error) {
    console.error('Error seeding channel data:', error);
  } finally {
    await prismaClient.$disconnect();
  }
};

seedEpisodes().catch((error) => {
  console.error('Unhandled Promise Rejection:', error);
});
