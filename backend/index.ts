import express from "express";
import { prisma } from "./src/db";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: { email, password },
  });
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
