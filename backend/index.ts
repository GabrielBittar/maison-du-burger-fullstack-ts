import express from "express";
import { prisma } from "./src/db";

const app = express();
app.use(express.json());

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
