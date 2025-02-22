const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");
const UserModel = require("./schema");

app.use(cors("*"));

app.use(express.json());
app.listen(8000, (req, res) => {
  console.log("server running");
});

app.get("/", (req, res) => res.send("OK"));

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

app.post("/user", async (req, res) => {
  try {

    const user = await UserModel.create(req.body);

    res.status(201).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});
