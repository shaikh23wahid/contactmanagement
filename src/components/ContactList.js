import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

//   const contacts = [
//     {
//       id: "1",
//       name: "Wahid",
//       email: "shaikh23wahid@gmail.com",
//     },
//   ];

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });

  return (
    <div className="main" style={{ marginTop: "50px" }}>
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui called list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
