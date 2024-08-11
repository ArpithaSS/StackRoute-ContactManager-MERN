const express = require("express");
const router = express.Router();
const {
  GetContacts,
  GetContact,
  AddContact,
  UpdateContact,
  DeleteContact,
} = require("../controllers/ContactController");

router.get("/contacts", GetContacts);
router.get("/contacts/:email", GetContact);
router.post("/contacts", AddContact);
router.put("/contacts/:email", UpdateContact);
router.delete("/contacts/:email", DeleteContact);

module.exports = router;
