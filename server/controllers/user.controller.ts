import express, { Request, Response } from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userSchema";
import UserGroup from "../models/userGroupSchema";


const secret = process.env.JWT_SECRET
const userController = express.Router();

// write a user.controller.ts file with all imports for this project







// [/api/users] /;
// GET (PUBLIC)
// retrieve all users
userController.get("/", (req: Request, res: Response) => {
  User.find()
    .populate("usergroup")
    .then((users) => {
      res.status(200).json({
        users,
      });
    });
});

// [/api/users] /:id
// GET (PUBLIC)
// get info from a single user
userController.get("/:id", (req: Request, res: Response) => {
  User.findById(req.params.id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) =>
      res.status(400).json({ msg: "Failed to get info of user", err })
    );
});

// [/api/users] /update
// POST (PRIVATE)
// update an user
userController.post(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findByIdAndUpdate(req.body.id, req.body, {
      useFindAndModify: false,
    })
      .then((user) => res.status(200).json({ msg: "User updated", user }))
      .catch((err) =>
        res.status(400).json({ msg: "Failed to update user", err })
      );
  }
);

// [/api/users] /delete
// DELETE (PRIVATE)
// delete an user
userController.post(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findByIdAndDelete(req.body.id)
      .then(() => res.status(200).json({ msg: "User deleted" }))
      .catch((err) =>
        res.status(400).json({ msg: "Failed to delete user", err })
      );
  }
);

// Authentication routes

// [/api/users] /register
// POST (PUBLIC)
// register a new user
userController.post("/register", (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  User.findOne({ email }).then((user) => {
    UserGroup.findOne({ auth_level: 2 }).then((IUserGroup) => {
      if (user) {
        return res.status(400).json({ msg: "Email already in use." });
      } else {
        const newUser = new User({
          username,
          email,
          password,
          IUserGroup: IUserGroup._id,
        });

        bcrypt.genSalt(10, (genErr, salt) => {
          if (genErr) throw genErr;
          bcrypt.hash(newUser.password, salt, (hashErr, hash) => {
            if (hashErr) throw hashErr;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => res.status(200).json({ user }))
              .catch((err) =>
                res.status(400).json({ msg: "Failed to register user.", err })
              );
          });
        });
      }
    });
  });
});

// [/api/users] /login
// POST (PUBLIC)
// login a user
userController.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  User.findOne({ email }, "+password").then((user) => {
    if (!user) {
      return res.status(404).json({ msg: "This user does not exists." });
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user._id,
          username: user.userName,
        };

        jwt.sign(payload, secret, { expiresIn: 36000 }, (err, token) => {
          if (err) {
            res.status(500).json({ msg: "Error signing token.", err });
          }

          res.status(200).json({
            success: true,
            token,
            user: {
              id: user._id,
              username: user.userName,
              email: user.email,
            },
          });
        });
      } else {
        res.status(400).json({ msg: "Password is incorrect." });
      }
    });
  });
});

export default userController;
