import express from 'express';
import prismaClient from '../prisma/prismaClient.js';

const router = express.Router();

export const getChannelsByGenre = async (req, res) => {
  const genreId = parseInt(req.params.id);
  try {
    const channels = await prismaClient.channel.findMany({
      where: {
        genres: {
          some: {
            genre: {
              id: genreId,
            },
          },
        },
      },
    });
    res.status(200).json(channels);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
