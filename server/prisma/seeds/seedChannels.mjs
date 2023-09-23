import prismaClient from "../prismaClient.js";
import { Client } from 'podcast-api';

const client = Client({ apiKey: 'bee97ab3092b46448c1f94fbed327a79' });

const seedChannels = async () => {
  try {
    const genres = await prismaClient.genre.findMany();
    const genre_ids = genres.map((genre) => genre.id);

    const promises = genres.slice().map(async (genre) => {
      const genreId = genre.id;

      const response = await client.fetchBestPodcasts({
        genre_id: genreId,
        sort: 'listen_score',
        safe_mode: 0,
      });

      const channels = response.data.podcasts;
      for (const channel of channels) {
        const channelGenres = channel.genre_ids;

        const createdChannel = await prismaClient.channel.create({
          data: {
            id: channel.id,
            title: channel.title,
            publisher: channel.publisher,
            thumbnail: channel.thumbnail,
            genres: {
              create: channelGenres
                .filter(genreId => genre_ids.includes(genreId))
                .map((genreId) => ({
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
