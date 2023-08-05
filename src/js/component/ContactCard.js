import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = (props) => {
  const { actions } = useContext(Context);

  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-4">
        <img
            className="card-img-top rounded-circle p-3"
            src="data:image/jpeg;base64,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"/>
            
          
          {props.contact.image}
        </div>
        <div className="col-md-8">
          <div className="d-flex justify-content-between">
            <div className="card-body">
              <h5 className="card-title">{props.contact.name}</h5>

              <p>
                <i className="fa-solid fa-phone-volume"></i>
                {props.contact.phone}
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i>
                {props.contact.email}
              </p>
              <p>
                <i className="fa-solid fa-location-dot"></i>
                {props.contact.address}
              </p>
            </div>
            <div>
             
              <i
                className="fa-solid fa-trash-alt"
                onClick={() => actions.deleteContact(props.contact.id)}
                style={{ cursor: "pointer", marginRight: "50px",marginTop:"50px" }}
              ></i>
              
              <Link to={"/editContact/" + props.index}>
                <i
                  className="fa-solid fa-pen"
                  style={{ cursor: "pointer",marginRight:"50px",marginTop:"50px" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
