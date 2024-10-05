import express from "express";
import mainRouter from "./Routes/main.mjs";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3500;

app.use(morgan("dev"));
app.use(express.json());
app.use(mainRouter);

app.get("/", (req, res) => {
  res.status(200).send("hi kid");
});

app.use((req, res) => {
  res.status(404).send({ error: "not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "smth went wrong" });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
