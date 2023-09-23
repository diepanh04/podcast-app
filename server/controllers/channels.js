import express from 'express';
import prismaClient from '../prisma/prismaClient.js';

const router = express.Router();

export const getEpisodesByChannel = async(req, res) => {
  const channelName = req.params.channelName;

  try {
    const channels = await prismaClient.channel.findMany({
      where: {
        title: channelName,
      },
    });
    if (channels.length == 0) {
      res.status(404).json({ message: 'Channel not found.' });
      return;
    }
    const channel = channels[0];
    const episodes = await prismaClient.episode.findMany({
      where: {
        channelId: channel.id,
      },
    });
    if (episodes.length != 0) {
      res.status(200).json({
        title: channelName,
        episodes: episodes,
      });
    } else {
      res.status(200).json({
        title: channelName,
        message: 'This channel has not been updated. Please try again later.',
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addHeart = async(req, res) => {
  const { channelId, userId } = req.body;
  try {
    const heart = await prismaClient.heart.create({
      data : {
        userId: userId,
      },
    });

    await prismaClient.channelHeart.create({
      data: {
        heartId: heart.id,
        channelId: channelId,
      },
    });

    const favList = await prismaClient.favouriteList.findUnique({
      where: {
        userId: userId,
      },
    });

    await prismaClient.favouriteChannel.create({
      data: {
        channelId: channelId,
        favouriteListId: favList.id,
      },
    });

    return res.status(200).json({ success: "Channel added to your favourite list!" });
  } catch (error) {
    console.log(error);
  }
};

export const removeHeart = async (req, res) => {
  const { channelId, userId } = req.params;
  try {
    const hearts = await prismaClient.heart.findMany({
      where: {
        userId: userId,
      },
    });

    if (hearts.length != 0) {
      hearts.map(async (heart) => {
        const channelHeart = await prismaClient.channelHeart.findMany({
          where: {
            heartId: heart.id,
            channelId: channelId,
          },
        });

        if (channelHeart.length != 0) {
          await prismaClient.channelHeart.delete({
            where: {
              id: channelHeart[0].id,
            },
          });
          await prismaClient.heart.delete({
            where: {
              id: heart.id,
            },
          });
        }
      })
    }

    const favList = await prismaClient.favouriteList.findUnique({
      where: {
        userId: userId,
      },
    });

    const favChannel = await prismaClient.favouriteChannel.findMany({
      where: {
        channelId: channelId,
        favouriteListId: favList.id,
      },
    });

    await prismaClient.favouriteChannel.delete({
      where: {
        id: favChannel[0].id,
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const loadChannelStatus = async (req, res) => {
  const { channelId, userId } = req.body;

  try {
    const favList = await prismaClient.favouriteList.findUnique({
      where: {
        userId: userId,
      },
    });

    const favChannel = await prismaClient.favouriteChannel.findMany({
      where: {
        channelId: channelId,
        favouriteListId: favList.id,
      },
    });

    const hearted = favChannel.length == 0 ? false: true;

    res.status(200).json({
      hearted: hearted,
    });
  } catch (error) {
    console.log(error);
  }
}

export default router;