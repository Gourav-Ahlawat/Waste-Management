import express from 'express';
const userRouter = express.Router();

// Home page route
userRouter.get("/about", function (req, res) {
  res.send("user home page");
});

// About page route
userRouter.get("/panel", function (req, res) {
  res.send("user panel page");
});

export default userRouter;
