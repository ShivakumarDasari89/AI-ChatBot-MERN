import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

const JWT_SECRET = process.env.JWT_SECRET as Secret;

export const createToken = (id: string, email: string, expiresIn: string) => {
  const payload = { id, email };

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const token = jwt.sign(payload, JWT_SECRET,);

  return token;
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.signedCookies[`${COOKIE_NAME}`];

  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token Not Received" });
  }

  try {
    const secret = process.env.JWT_SECRET as Secret;
    const decoded = jwt.verify(token, secret);
    res.locals.jwtData = decoded;
    return next();
  } catch (err: any) {
    return res.status(401).json({ message: "Token Expired or Invalid" });
  }
};
