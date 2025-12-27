import express from "express";
import { prisma } from "./src/db";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
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
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
