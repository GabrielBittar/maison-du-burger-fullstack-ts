import express, { Request, Response } from "express";
import { prisma } from "./src/db";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "E-mail and password are required." });
    }

    const user = await prisma.user.findFirst({
      where: { email, password },
    });

    if (!user) {
      res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
    return;
  }
});

app.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password, postalCode } = req.body;

    if (!name || !email || !password || !postalCode) {
      res.status(400).json({ message: "All fields must be completed." });
      return;
    }

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
        password: password,
        postalCode: postalCode,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server error." });
    return;
  }
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
