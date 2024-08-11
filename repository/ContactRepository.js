const Contact = require("../models/Contact");

const GetContacts = async () => {
  return await Contact.find({});
};

const GetContact = async (email) => {
    return await Contact.findOne({ email: email });
  };


const AddContact = async (contactObj) => {
  let contact = new Contact({
    fname: contactObj.fname,
    lname: contactObj.lname,
    email: contactObj.email,
    city: contactObj.city,
    phone: contactObj.phone
  });
  console.log(contact);
  return await contact.save();
};

const DeleteContact = async (email) => {
    await Contact.deleteOne({ email: email });
    console.log(email);
  };

  const UpdateContact = async (email,contact) => {
    await Contact.updateOne(
      { email: email},
      {
          fname: contact.fname,
          lname: contact.lname,
          city: contact.city,
          phone: contact.phone
      }
    );
  
    console.log(email, email);
  };





module.exports = {
    GetContacts,
  GetContact,
  AddContact,
  DeleteContact,
  UpdateContact
};
