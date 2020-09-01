import express from "express";
import { accountModel } from "../models/accountModel.js";

const app = express();

app.get("/accounts", async (_, res) => {
  try {
    const accounts = await accountModel.find({});

    res.send(accounts);
  } catch (error) {
    res.status(500).send(error);
  }
});