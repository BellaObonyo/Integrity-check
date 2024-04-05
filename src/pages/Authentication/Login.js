import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from 'hooks/useAuth';

import withRouter from "components/Common/withRouter";
import * as Yup from "yup";
import { useFormik } from "formik";
import { loginUser, socialLogin } from "../../store/actions";
import profile from "assets/images/profile-img.png";
import logo from "assets/images/logo.svg";

const Login = props => {
  document.title = "Login | SUN Welfare Member Portal";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated,  login, loginError, loading } = useAuth();


  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$|^[0-9]{10}$/,
        "Please enter a valid email or phone number"
      )
      .required("Please Enter Your Email"),
    password: Yup.string().required("Please Enter Your Password"),
    mobile: Yup.string().required("Enter Mobile Number")
  });

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
      mobile: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {

        let loginData = {
          userName: values.email,
          password: values.password,
          mobile: values.mobile
        }

        login(loginData);
        console.log(loginData)
      } catch (error) {
        console.error('Error during login:', error);
      }
    },
  });

  const selectLoginState = (state) => state.Login;
  const LoginProperties = createSelector(
    selectLoginState,
    (login) => ({
      error: login.error
    })
  );

  const {
    error
  } = useSelector(LoginProperties);

 
  useEffect(() => {
    console.log(isAuthenticated)
    if (isAuthenticated) {
      navigate('/dashboard');
      console.log(navigate('/dashboard')
    )
    
    }
  }, [isAuthenticated]);

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                {/* <div className="bg-secondary-subtle"> */}
                <div className="bg-primary">
                  <Row>
                    <Col className="col-7">
                    {/* <div className="p-4"> */}
                      <div className="p-4 text-white">
                        <span className="font-size-14 fw-bolder">CAK Admin Portal</span>
                        <p>Sign in to continue.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/" className="logo-light-element">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      {error ? <Alert color="danger">{error}</Alert> : null}

                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter Email"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          value={validation.values.password || ""}
                          type="password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password && validation.errors.password ? true : false
                          }
                        />
                        {validation.touched.password && validation.errors.password ? (
                          <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Mobile</Label>
                        <Input
                          name="mobile"
                          className="form-control"
                          placeholder="Enter Mobile"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.mobile || ""}
                          invalid={
                            validation.touched.mobile && validation.errors.mobile ? true : false
                          }
                        />
                        {validation.touched.mobile && validation.errors.mobile ? (
                          <FormFeedback type="invalid">{validation.errors.mobile}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

               

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          Forgot your password?
                        </Link>
                      </div>
                      <div className="mt-4 text-center">
                        <Link to="/register" className="text-muted">
                          <i className="mdi mdi-account-plus me-1" />
                          Don't have an Account? Register
                        </Link>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
