import express from 'express';
import prismaClient from '../prisma/prismaClient.js';
import authenticate from '../middleware/authenticate.js';
import firebase from '../services/firebase.js';

const router = express.Router();

export const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  try {
    const newUser = await firebase.auth.createUser({
      email,
      password,
    });

    if (newUser) {
      await prismaClient.user.create({
        data: {
          email,
          name,
          id: newUser.uid,
        }
      });
      await prismaClient.favouriteList.create({
        data: {
          userId: newUser.uid,
        }
      });
    }

    return res.status(200).json({ success: "Account created successfully. Please sign in." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}; 

export const authenticateUser = async (req, res) => {
  res.status(200).json(req.user);  
};

export const getFavouriteChannels = async (req, res) => {
  const { userId } = req.params;
  try {
    const favouriteList = await prismaClient.favouriteList.findUnique({
      where: {
        userId: userId,
      },
    });

    const favouriteChannels = await prismaClient.favouriteChannel.findMany({
      where: {
        favouriteListId: favouriteList.id,
      },
    });

    const channels = [];
    for (const channel of favouriteChannels) {
      const c = await prismaClient.channel.findUnique({
        where: {
          id: channel.channelId,
        },
      });
      channels.push(c);
    }

    res.status(200).json({ 
      list: channels,
     });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getFavouriteEpisodes = async(req, res) => {
  const { userId } = req.params;
  try {
    const favouriteList = await prismaClient.favouriteList.findUnique({
      where: {
        userId: userId,
      },
    });

    const favouriteEpisodes = await prismaClient.favouriteEpisodes.findMany({
      where: {
        favouriteListId: favouriteList.id,
      },
    });

    const episodes = [];
    for (const episode of favouriteEpisodes) {
      const e = await prismaClient.episode.findUnique({
        where: {
          id: episode.episodeId,
        },
      });
      episodes.push(e);
    }

    res.status(200).json({
      list: episodes,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
