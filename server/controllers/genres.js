import express from 'express';
import prismaClient from '../prisma/prismaClient.js';

const router = express.Router();

export const getAllGenres = async(req, res) => {
  try {
    const genres = await prismaClient.genre.findMany({
      select: { name: true }
    });
    res.status(200).json(genres);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getChannelsByGenreName = async (req, res) => {
  const genreName = req.params.name;
  try {
    const genre = await prismaClient.genre.findMany({
      where: {
        name: genreName,
      },
    })
    const genreId = genre[0].id;
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
    res.status(200).json({
      name: genreName,
      channels: channels,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
