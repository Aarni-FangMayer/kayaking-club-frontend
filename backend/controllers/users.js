const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");
const { authenticate } = require("../utils/middleware"); // JWT или сессия

/* Create new user */
usersRouter.post("/", async (request, response, next) => {
  const { email, password, phone, username, role } = request.body;

  bcrypt
    .hash(password, 10)
    .then((passwordHash) => {
      const user = new User({ email, phone, username, passwordHash, role });
      return user.save();
    })
    .then((savedUser) => response.status(201).json(savedUser))
    .catch((error) => next(error));
});

/* Fetch all users */
usersRouter.get("/", async (request, response, next) => {
  User.find({})
    .then((users) => response.json(users))
    .catch((error) => next(error));
});

// Fetch the user's booked tours
usersRouter.get("/me/tours", authenticate, (request, response, next) => {
  User.findById(request.user.id)
    .populate("tours_id")
    .then((user) => {
      if (!user) {
        return response.status(404).json({ error: "User not found" });
      }
      response.json(user.tours_id);
    })
    .catch((error) => next(error));
});

module.exports = usersRouter;
