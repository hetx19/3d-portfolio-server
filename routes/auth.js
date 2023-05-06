import express from "express";
import isAuthenticated from "../middlewares/auth.js";
import {
  login,
  logout,
  getUser,
  myProfile,
  contact,
  updateUser,
  addTimeline,
  addProject,
  deleteTimeline,
  deleteYoutube,
  deleteProject,
} from "../controller/auth.js";

const authRouter = express.Router();

authRouter.route("/login").post(login);

authRouter.route("/logout").get(logout);

authRouter.route("/user").get(getUser);

authRouter.route("/me").get(isAuthenticated, myProfile);

authRouter.route("/admin/update").put(isAuthenticated, updateUser);

authRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline);
authRouter.route("/admin/project/add").post(isAuthenticated, addProject);

authRouter.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline);
authRouter.route("/admin/youtube/:id").delete(isAuthenticated, deleteYoutube);
authRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProject);

authRouter.route("/contact").post(contact);

export default authRouter;
