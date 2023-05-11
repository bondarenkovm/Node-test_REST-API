const express = require("express");
const contacts = require("../../contacts.json");

const router = express.Router();

router.get("/", (reg, res) => {
  res.json(contacts);
});
router.get("/:id", (reg, res) => {
  res.json(contacts[0]);
});
router.post("/", (reg, res) => {
  res.json(contacts[0]);
});
router.put("/:id", (reg, res) => {
  res.json(contacts[0]);
});
router.delete("/:id", (reg, res) => {
  res.json(contacts[0]);
});

module.exports = router;
