import prismaClient from "../prismaClient.js";
import { Client } from 'podcast-api';

const client = Client({ apiKey: '62d8df21df004406a436454ce14733f1' });

const seedChannels = async () => {
  try {
    const genres = await prismaClient.genre.findMany();

    const promises = genres.slice(110, 120).map(async (genre) => {
      const genreId = genre.id;
      const genreName = genre.name;

      const response = await client.fetchBestPodcasts({
        genre_id: genreId,
        sort: 'listen_score',
        safe_mode: 0,
      });

      const channels = response.data.podcasts;
      for (const channel of channels) {
        const channelGenres = channel.genre_ids; // Assuming the API provides genre IDs for each channel

        const createdChannel = await prismaClient.channel.create({
          data: {
            id: channel.id,
            title: channel.title,
            publisher: channel.publisher,
            thumbnail: channel.thumbnail,
            genres: {
              create: channelGenres.map((genreId) => ({
                genre: {
                  connect: {
                    id: genreId,
                  },
                },
              })),
            },
          },
        });

        console.log('Channel seeded:', createdChannel);
      }
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
