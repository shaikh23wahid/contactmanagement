import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputEL = useRef("");

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

  const getSearchTearm = () => {
    props.searchKeywords(inputEL.current.value);
  };

  const renderContactList = props?.contacts?.map((contact) => {
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
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEL}
            type="text"
            placeholder="Search contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTearm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui called list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
