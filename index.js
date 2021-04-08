import "dotenv/config.js";
import express from "express";
import productsRouter from "./routes/productsRouter.js";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log(`DB Connected`))
  .catch((err) => console.log(`DB Connection Error: ${err}`));

app.use(express.json());
app.use(productsRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is up at port http://127.0.0.1:${PORT}`);
});

// https://github.com/muneebali500/2-REST-API
