const express = require("express");
const router = express.Router();

const {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
  commentAtPhoto,
  searchPhotos,
} = require("../controllers/PhotoController");

const {
  photoInsertValidation,
  photoUpdateValidation,
  commentValidation,
} = require("../middlewares/photoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const { imageUploads } = require("../middlewares/imageUploads");

router.post(
  "/",
  authGuard,
  imageUploads.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);

router.delete("/:id", authGuard, deletePhoto);

router.get("/", authGuard, getAllPhotos);

router.get("/search", authGuard, searchPhotos);

router.get("/user/:id", authGuard, getUserPhotos);

router.get("/:id", authGuard, getPhotoById);

router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);

router.put("/like/:id", authGuard, likePhoto);

router.put(
  "/comment/:id",
  authGuard,
  commentValidation(),
  validate,
  commentAtPhoto
);

module.exports = router;
