import prismaClient from "../prismaClient.js";
import { Client } from 'podcast-api';
const client = Client({ apiKey: '6f228db1aec840ec96932ebdc92138e8' });

const seedChannels = async () => {
  try {
    const genres = await prismaClient.genre.findMany();
    const promises = genres.slice(150,160).map(async (genre) => {
      const genreId = genre.id;
      const genreName = genre.name;
      const response = await client.fetchBestPodcasts({
        genre_id: genreId,
        sort: 'listen_score',
        safe_mode: 0,
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

seedChannels().catch((error) => {
  console.error('Unhandled Promise Rejection:', error);
});
