import { connect } from "mongoose";
import express, { json } from "express";

import notesRouter from "./routes/notesRoutes.js";

const app = express();

app.use(json());

app.use("/notes", notesRouter);

connect(
  "mongodb+srv://agamj990:agamjain12@cluster0.kdpzrxs.mongodb.net/Node-API?retryWrites=true&w=majority"
)
  .then(() => {
    app.listen(3000, () => {
      console.log(`node API is running on port 3000`);
    });
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
