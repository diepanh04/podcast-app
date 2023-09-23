import firebaseAdmin from "../services/firebase.js";
import prismaClient from "../prisma/prismaClient.js";

export default async function (req, res, next) {
  try {
    const firebaseToken = req.headers.authorization?.split(" ")[1];
    let firebaseUser;
    if (firebaseToken) {
      firebaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken);
    }

    if (!firebaseUser) {
      // Unauthorized
      return res.sendStatus(401);
    }

    const user = await prismaClient.user.findUnique({
      where: {
        id: firebaseUser.uid,
      }
    });
    console.log(user);
    if (!user) {
      // Unauthorized
      return res.sendStatus(401);
    }

    req.user = user;

    next();
  } catch (err) {
    //Unauthorized
    res.sendStatus(401);
  }
}