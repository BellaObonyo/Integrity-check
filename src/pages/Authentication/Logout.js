import React, { useEffect } from "react";
import PropTypes from "prop-types";
import withRouter from "components/Common/withRouter";

//redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth"; 

const Logout = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const {logout} = useAuth()

  useEffect(() => {
    logout();
  }, []);

  return <></>;
};

Logout.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Logout);