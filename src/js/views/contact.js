import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
export const Contact = () => {
    const { store, actions } = useContext(Context);
    useEffect(()=>{
        store.contacts && store.contacts.length >0 ? 
console.log("working with state contacts") : actions.getContacts()
    },[])
    return (
        <div className="container">
            {store.contacts.map ((contact,index) =>(
                <ContactCard contact ={contact} index={index} /> 
            ))}
          </div>
    );
};

