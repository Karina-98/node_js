const contacts = require("./contacts")

const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
          const allContacts = await contacts.listContacts();
          console.log("allContacts", allContacts);
      break;

    case 'get':
      // ... id
          const getContactsById = await contacts.getContactById(id);
         return console.log("getContactsById", getContactsById)
      break;

    case 'add':
      // ... name email phone
          const addContacts = await contacts.addContact({name, email, phone});
          console.log("addContacts", addContacts)
      break;

    case 'remove':
      // ... id
          const removeContact = await contacts.removeContact(id);
          console.log("removeContact", removeContact)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "e6ywwRe4jcqxXfCZOj_1e"});
// invokeAction({ action: "remove", id: "e6ywwRe4jcqxXfCZOj_1e"});
// invokeAction({ action: "add", name: "Stiv Flovers", email: "stivflovers@gmail.com", phone: "454-45-785"})