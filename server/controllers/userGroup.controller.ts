 import express, { Request, Response } from "express";
 import passport from "passport";

 const userGroupController = express.Router();
 import UserGroup from "../models/userGroupSchema";

// [/api/usergroups] /
// GET (PUBLIC)
// retrieve all user groups
userGroupController.get("/", (req: Request, res: Response) => {
  UserGroup.find().then((usergroups) => {
    res.status(200).json({
      usergroups,
    });
  });
});

// [/api/usergroups] /:id
// GET (PUBLIC)
// get info from a single user group
userGroupController.get("/:id", (req: Request, res: Response) => {
  UserGroup.findById(req.params.id)
    .then((usergroup) => res.status(200).json({ usergroup }))
    .catch((err) =>
      res.status(400).json({ msg: "Failed to get info of user group", err })
    );
});

// [/api/usergroups] /add
// POST (PRIVATE)
// add a new user group
userGroupController.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { name, auth_level } = req.body;
    const newUserGroup = new UserGroup({
      name,
      auth_level,
    });

    newUserGroup
      .save()
      .then((usergroup) => res.status(200).json({ usergroup }))
      .catch((err) => res.json({ msg: "Failed to add a new user group", err }));
  }
);

// [/api/usergroups] /update
// POST (PRIVATE)
// update an usergroup
userGroupController.post(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    UserGroup.findByIdAndUpdate(req.body.id, req.body, {
      useFindAndModify: false,
    })
      .then((usergroup) =>
        res.status(200).json({ msg: "User group updated", usergroup })
      )
      .catch((err) =>
        res.status(400).json({ msg: "Failed to update user group", err })
      );
  }
);

// [/api/usergroups] /delete
// DELETE (PRIVATE)
// delete an usergroup
userGroupController.post(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    UserGroup.findByIdAndDelete(req.body.id)
      .then(() => res.status(200).json({ msg: "User group deleted" }))
      .catch((err) =>
        res.status(400).json({ msg: "Failed to delete user group", err })
      );
  }
);

export default userGroupController;