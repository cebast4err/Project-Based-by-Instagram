const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getCurrentUser,
  update,
  getUserByID,
} = require("../controllers/UserController");
const validate = require("../middlewares/handleValidation");
const {
  userCreateValidation,
  userValidation,
  userUpdateValidation,
} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");
const { imageUploads } = require("../middlewares/imageUploads");

router.post("/register", userCreateValidation(), validate, register);
router.post("/login", userValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  imageUploads.single("profileImage"),
  update
);

router.get("/:id", getUserByID);

module.exports = router;
