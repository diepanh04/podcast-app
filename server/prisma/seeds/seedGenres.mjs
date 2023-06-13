import prismaClient from "../prismaClient.js";
import { Client } from 'podcast-api';
const client = Client({ apiKey: '6f228db1aec840ec96932ebdc92138e8' });

const seedGenres = async () => {
  try {
    const response = await client.fetchPodcastGenres({ top_level_only: 0 });
    const genres = response.data.genres;

    const genreData = genres.map((genre) => ({
      id: genre.id,
      name: genre.name,
    }));

    await prismaClient.genre.createMany({
      data: genreData,
      skipDuplicates: true,
    });

    console.log('Genre data seeded successfully.');
  } catch (error) {
    console.error('Error seeding genre data:', error);
  } finally {
    await prismaClient.$disconnect();
  }
};

seedGenres();