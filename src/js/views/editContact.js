import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  
  useEffect(() => {
    if (
      store.contacts &&
      store.contacts.length > 0 &&
      store.contacts[params.index]
    ) {
      const contact = store.contacts[params.index];

      setFullName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
      setAddress(contact.address);
    }
  }, [store.contacts, params.index]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    actions.editContact(params.index, {
      name: fullName,
      email: email,
      phone: phone,
      address: address,
    });
    
  };

  return (
    <div className="container">
      <h1>
        <strong>Edit Contact</strong>
      </h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
          />
        </div>
        <button
              onClick={() =>
                actions.editContact(params.index, {
                  name: fullName,
                  email,
                  phone,
                  address,
                })
              }
              className="btn btn-primary custom-btn-width container d-flex flex-column justify-content-center align-items-center mt-3"
            >
              Save
            </button>
        
      </form>
      <Link to="/contact" className="ml-3">
        Or get back to contacts
      </Link>
    </div>
  );
};