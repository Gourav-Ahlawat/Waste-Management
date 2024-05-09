import express from 'express';
const adminRouter = express.Router();

// Home page route
adminRouter.get("/about", function (req, res) {
  res.send("admin home page");
});

// About page route
adminRouter.get("/panel", function (req, res) {
  res.send("admin panel page");
});

export default adminRouter;