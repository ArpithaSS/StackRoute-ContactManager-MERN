const repo = require("../repository/ContactRepository");

const GetContacts = async () => {
  return await repo.GetContacts();
};

const GetContact= async (email) => {
  let contact = await repo.GetContact(email);
  console.log(email);
  if (contact == null) {
    throw Error(`Contact with Email: ${email} does not exists`);
  } else {
    return contact;
  }
};

const AddContact = async (contact) => {
  let result = await repo.GetContact(contact.email);
  if (result == null) {
   return await repo.AddContact(contact);
  } else {
    throw Error(
      `Contact with Email: ${contact.email} already exists`
    );
  }
};

const UpdateContact = async (email, contact) => {
  let result = await repo.GetContact(email);
  console.log(email);
  if (result == null) {
    throw Error(`Contact with email: ${email} does not exists`);
  } else {
    await repo.UpdateContact(email, contact);
    return await repo.GetContact(email);
  }
};

const DeleteContact = async (email) => {
  let result = await repo.GetContact(email);
  console.log(email, typeof(email),result);
  if (result == null) {
    throw Error(`Contact with: ${email} does not exists`);
  } else {
    await repo.DeleteContact(email);
  }
};

module.exports = {
  GetContacts,
  GetContact,
  AddContact,
  UpdateContact,
  DeleteContact,
};
