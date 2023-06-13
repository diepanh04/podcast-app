import express from 'express';
import prismaClient from '../prisma/prismaClient.js';

export const getChannels = async (req, res) => {
  try {
    const channels  = await prismaClient.channel.findMany();
    console.log(channels);
    res.status(200).json(channels);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createChannel = async (req, res) => {
  try {
    console.log(req.body);
    const newChannel = await prismaClient.channel.create({
      data: {
        title: 'Test channel',
      }
    });
    res.status(200).json(newChannel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}