import PropTypes from "prop-types"
import React from "react"
import { useNavigate } from "react-router-dom"

import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
} from "reactstrap"

//redux
import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "reselect"
import { Link } from "react-router-dom"
import withRouter from "components/Common/withRouter"
import { useAuth } from "hooks/useAuth"

// Formik validation
import * as Yup from "yup"
import { useFormik } from "formik"

// actions
import { loginUser, socialLogin } from "../../store/actions"

// import images
import profile from "assets/images/profile-img.png"
import logo from "assets/images/logo.svg"

const Login = props => {
  //meta title
  document.title = "Login | CAK Admin Login"

  const { isAuthenticated, login, loading, loginSuccess, loginError } =
    useAuth()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      mobile: Yup.string().required("Please Enter Your Mobile"),
      password: Yup.string().required("Please Enter Your Password"),
    }),

    onSubmit: async values => {
      try {
        await login(values);
        console.log("loginSuccess:", loginSuccess); 
        console.log("isAuthenticated:", isAuthenticated); 
        if (loginSuccess) {
          navigate("/dashboard"); 
        } else {
          console.log("Login not successful"); 
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },

  });

  const selectLoginState = state => state.Login;
  const LoginProperties = createSelector(selectLoginState, login => ({
    error: login.error,
  }));


  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary-subtle">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">CAK Admin Portal</h5>
                        <p>Sign in to continue.</p>
                      </div>
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
                      onSubmit={e => {
                        e.preventDefault()
                        validation.handleSubmit()
                        return false
                      }}
                    >

                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Mobile</Label>
                        <Input
                          name="mobile"
                          className="form-control"
                          placeholder="Enter mobile"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.mobile || ""}
                          invalid={
                            validation.touched.mobile &&
                            validation.errors.mobile
                              ? true
                              : false
                          }
                        />
                        {validation.touched.mobile &&
                        validation.errors.mobile ? (
                          <FormFeedback type="invalid">
                            {validation.errors.mobile}
                          </FormFeedback>
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
                            validation.touched.password &&
                              validation.errors.password
                              ? true
                              : false
                          }
                        />
                        {validation.touched.password &&
                          validation.errors.password ? (
                          <FormFeedback type="invalid">
                            {validation.errors.password}
                          </FormFeedback>
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
                        <p>
                          Don&#39;t have an account ?{" "}
                          <Link
                            to="/register"
                            className="fw-medium text-primary"
                          >
                            {" "}
                            Signup now{" "}
                          </Link>{" "}
                        </p>
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
  )
}

export default withRouter(Login)

Login.propTypes = {
  history: PropTypes.object,
}
