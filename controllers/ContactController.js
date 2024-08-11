const service = require("../services/ContactService");

const GetContacts = async (req, res) => {
  res.status(200).send(await service.GetContacts());
};

const GetContact = async (req, res) => {
  try {
    let result = await service.GetContact(req.params.email);
    res.status(200).send({ status: 200, data: result });
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
};

const AddContact = async (req, res) => {
  try {
    const newContact=await service.AddContact(req.body);
    res
      .status(201)
      .send({ status: 201, message: "Contact saved successfully", data: newContact });
  } catch (err) {
    res.status(209).send({ status: 209, message: err.message });
  }
};

const UpdateContact = async (req, res) => {
  try {
    const updatedContact=await service.UpdateContact(req.params.email, req.body);
    res
      .status(200)
      .send({ status: 200, message: "Contact updated successfully", data: updatedContact });
      console.log(updatedContact);
  } catch (err) {
    console.log(err);
    res.status(404).send({ status: 404, message: err.message });
  }
};

const DeleteContact = async (req, res) => {
  try {
    await service.DeleteContact(req.params.email);
    res
      .status(200)
      .send({ status: 200, message: "Contact deleted successfully" });
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
};

module.exports = {
  GetContacts,
  GetContact,
  AddContact,
  UpdateContact,
  DeleteContact,
};
