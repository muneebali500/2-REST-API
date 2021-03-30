import express from "express";
import productsRouter from "./routes/productsRouter.js";

const app = express();

app.use(express.json());
app.use(productsRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is up at port http://localhost:${PORT}`);
});
