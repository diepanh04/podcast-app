import prismaClient from "../prismaClient.js";
import { Client } from 'podcast-api';
const client = Client({ apiKey: '62d8df21df004406a436454ce14733f1' });

const seedEpisodes = async () => {
  try {
    const channels = await prismaClient.channel.findMany();
    const promises = channels.slice(219, 221).map(async (channel) => {
      const channelId = channel.id;

      let allEpisodes = [];
      let nextEpisodePubDate = null;
      let count = 0;

      for (let i = 0; i < 5; i++) {
        const response = await client.fetchPodcastById({
          id: channelId,
          sort: 'recent_first',
          next_episode_pub_date: nextEpisodePubDate,
        });
        const episodes = response.data.episodes;
        allEpisodes = allEpisodes.concat(episodes);
        nextEpisodePubDate = response.data.next_episode_pub_date;
      };

      for (const episode of allEpisodes) {

        const episodeData = {
          id: episode.id,
          title: episode.title,
          thumbnail: episode.thumbnail,
          channelId: channelId,
        }

        await prismaClient.episode.create({
          data: episodeData,
        })
      }
    })

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
