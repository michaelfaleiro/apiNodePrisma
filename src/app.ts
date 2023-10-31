import express from "express";
import cors from "cors";
import { router } from "./routes";

require("dotenv").config();

export const app = express();

app.use(express.json());
app.use(cors());

app.use("/v1/api", router);
