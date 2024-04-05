import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Authmiddleware = (props) => {
  if (!localStorage.getItem("sessionToken")) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  return (<React.Fragment>
    {props.children}
  </React.Fragment>);
};

Authmiddleware.propTypes = {
  location: PropTypes.any,
  children: PropTypes.any,

};

export default Authmiddleware;

