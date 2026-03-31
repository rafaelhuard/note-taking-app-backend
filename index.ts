import express from "express";
import { NoteRouter } from "./src/routes/noteRouter";
import { UserRouter } from "./src/routes/userRouter";

const app = express();
const port = 3000;

const noteRouter = new NoteRouter();
const userRouter = new UserRouter();

app.get("/", (req, res) => {
  res.send("Note Taking App Backend");
});

app.use("/note", noteRouter.router);
app.use("/user", userRouter.router);

const server = app.listen(port, () => {
  console.log(`Express server listening on port ${port}.`);
});

server.on("error", (error) => {
  console.error(error);
});