import type { Request, Response } from "express";
import { prisma } from "../db";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "E-mail and password are required." });
    }

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    const match = await bcrypt.compare(password, user?.password);

    if (!match) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    const userInfos = {
      id: user.id,
      name: user.name,
      email: user.email,
      postalCode: user.postalCode,
    };

    res.cookie("user", userInfos, { maxAge: 30000 });

    res.status(200).json(userInfos);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
    return;
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, postalCode } = req.body;

    if (!name || !email || !password || !postalCode) {
      res.status(400).json({ message: "All fields must be completed." });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user?.email) {
      res.status(409).json({ message: "E-mail already registered" });
    }

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        postalCode: postalCode,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
    return;
  }
};
