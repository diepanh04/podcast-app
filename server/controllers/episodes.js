import express from 'express';
import prismaClient from '../prisma/prismaClient.js';

const router = express.Router();

export const addHeart = async(req, res) => {
  const { episodeId, userId } = req.body;
  console.log(userId);
  try {
    const heart = await prismaClient.heart.create({
      data: {
        userId: userId,
      },
    });

    await prismaClient.episodeHeart.create({
      data: {
        heartId: heart.id,
        episodeId: episodeId,
      },
    });

    const favList = await prismaClient.favouriteList.findUnique({
      where: {
        userId: userId,
      },
    });

    await prismaClient.favouriteEpisode.create({
      data: {
        episodeId: episodeId,
        favouriteListId:favList.id,
      }
    });

    return res.status(200).json({
      success: 'Added heart to channel'
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeHeart = async(req, res) => {
  const { episodeId, userId } = req.params;
  try {
    const hearts = prismaClient.heart.findMany({
      where: {
        userId: userId,
      },
    });

    if (hearts.length != 0) {
      hearts.map(async (heart) => {
        const episodeHearts = prismaClient.episodeHeart.findMany({
          where: {
            heartId: heart.id,
            episodeId: episodeId,
          },
        });

        if (episodeHearts.length != 0) {
          await prismaClient.episodeHeart.delete({
            where: {
              id: episodeHearts[0].id,
            },
          });

          await prismaClient.heart.delete({
            where: {
              id: heart.id,
            },
          });
        }
      });

    }
  } catch (error) {
    console.log(error);
  }
};