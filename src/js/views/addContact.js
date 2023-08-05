import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newContact = {
      name: fullName,
      email: email,
      phone: phone,
      address: address
    };
    actions.saveContact(newContact);

   
    setFullName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="container">
      <h1>
        <strong>Add a new contact</strong>
      </h1>
      <form>
        <div className="mb 3">
          <label htmlFor="fullname">Full name</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            aria-describedby="emailHelp"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb 3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb 3">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb 3">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="mb 3">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary custom-btn-width container d-flex flex-column justify-content-center align-items-center mt-3"
          >
            Save
          </button>
        </div>
        <Link to="/contact" className="ml-3">
          Or get back to contacts
        </Link>
      </form>
    </div>
  );
};
