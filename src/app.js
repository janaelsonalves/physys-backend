import express from "express";
import cors from "cors";
import logger from "morgan";

import "dotenv/config";

import routes from "./routes/index";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", routes.user);
app.use("/messages", routes.message);
app.use("/sessions", routes.session);

app.set("port", port);

export default app;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
  console.log(`Access via web browser in http://localhost:${port}`);
  // console.log(`Secret Key: ${process.env.SECRET_KEY}`);
  // console.log(`DB host: ${process.env.DB_HOST}`);
  // console.log(`DB user: ${process.env.DB_USER}`);
  // console.log(`DB pass: ${process.env.DB_PASS}`);
});
