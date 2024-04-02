import React, { useEffect } from "react"
import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Input,
  Label,
  Form,
  FormFeedback,
  Button,
} from "reactstrap"

// Formik Validation
import * as Yup from "yup"
import { useFormik } from "formik"

// action
import { registerUser, apiError } from "../../store/actions"

//redux
import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "reselect"
import { useAuth } from "hooks/useAuth"

import { Link, useNavigate } from "react-router-dom"

// import images
import profileImg from "../../assets/images/profile-img.png"
import logoImg from "../../assets/images/logo.svg"
import { reset } from "redux-form"

const Register = props => {
  //meta title
  document.title = "Register | CAK Admin Portal"

  const {
    isAuthenticated,
    getCurrentUser,
    register,
    loading,
    registerSuccess,
    registrationError,
  } = useAuth()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      password: "",
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      mobile: "",
      dateOfBirth: "",
      sex: "",
      preferredLanguage: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      firstName: Yup.string().required("First name is required"),
      middleName: Yup.string(),
      lastName: Yup.string().required("Last name is required"),
      mobile: Yup.string().required("Mobile number is required"),
      dateOfBirth: Yup.date().required("Date of birth is required"),
      sex: Yup.string().required("Sex is required"),
      preferredLanguage: Yup.string(),
    }),
    onSubmit: async values => {
      // Format the dateOfBirth field to match the expected format
      const formattedValues = {
        ...values,
        dateOfBirth: new Date(values.dateOfBirth).toISOString(),
        sex: values.sex.toUpperCase(),
        preferredLanguage: values.preferredLanguage.toUpperCase(),
      }

      await register(formattedValues).then(() => {
        console.log(formattedValues)
        validation.resetForm()
      })
    },
  })

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary-subtle">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Register</h5>
                        <p>Get your CAK Admin account now.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
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
                      {registerSuccess && (
                        <Alert color="success">
                          Register User Successfully
                        </Alert>
                      )}

                      {registrationError && registrationError.message ? (
                        <Alert color="danger">
                          {registrationError.message}
                        </Alert>
                      ) : null}

                      <div className="mb-3">
                        <Label className="form-label">First Name</Label>
                        <Input
                          name="firstName"
                          value={validation.values.firstName || ""}
                          type="text"
                          placeholder="Enter your first name"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.firstName &&
                            !!validation.errors.firstName
                          }
                        />
                        <FormFeedback>
                          {validation.errors.firstName}
                        </FormFeedback>
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Middle Name</Label>
                        <Input
                          name="middleName"
                          value={validation.values.middleName || ""}
                          type="text"
                          placeholder="Enter your middle name"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.middleName &&
                            !!validation.errors.middleName
                          }
                        />
                        <FormFeedback>
                          {validation.errors.middleName}
                        </FormFeedback>
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Last Name</Label>
                        <Input
                          name="lastName"
                          value={validation.values.lastName || ""}
                          type="text"
                          placeholder="Enter your last name"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.lastName &&
                            !!validation.errors.lastName
                          }
                        />
                        <FormFeedback>
                          {validation.errors.lastName}
                        </FormFeedback>
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter your email address"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email &&
                            !!validation.errors.email
                          }
                        />
                        <FormFeedback>{validation.errors.email}</FormFeedback>
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
                            !!validation.errors.password
                          }
                        />
                        <FormFeedback>
                          {validation.errors.password}
                        </FormFeedback>
                      </div>
                      <div className="mb-3">
                        <Label className="form-label">Mobile Number</Label>
                        <Input
                          name="mobile"
                          value={validation.values.mobile || ""}
                          type="text"
                          placeholder="Enter your mobile number"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.mobile &&
                            !!validation.errors.mobile
                          }
                        />
                        <FormFeedback>{validation.errors.mobile}</FormFeedback>
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Date of Birth</Label>
                        <Input
                          name="dateOfBirth"
                          value={validation.values.dateOfBirth || ""}
                          type="date"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.dateOfBirth &&
                            !!validation.errors.dateOfBirth
                          }
                        />
                        <FormFeedback>
                          {validation.errors.dateOfBirth}
                        </FormFeedback>
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Sex</Label>
                        <Input
                          type="select"
                          name="sex"
                          value={validation.values.sex || ""}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.sex && !!validation.errors.sex
                          }
                        >
                          <option value="">Select sex</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Input>
                        <FormFeedback>{validation.errors.sex}</FormFeedback>
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Preferred Language</Label>
                        <Input
                          type="select"
                          name="preferredLanguage"
                          value={validation.values.preferredLanguage || ""}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.preferredLanguage && !!validation.errors.preferredLanguage
                          }
                        >
                          <option value="">Select Preferred Language</option>
                          <option value="english">English</option>
                          <option value="kiswahili">Kiswahili</option>
                        </Input>
                        <FormFeedback>
                          {validation.errors.preferredLanguage}
                        </FormFeedback>
                      </div>
                      <div className="mt-3 d-grid">
                        <Button
                          block
                          className="btn btn-primary btn-block "
                          type="submit"
                        >
                          Register
                        </Button>
                      </div>
                      <div className="mt-4 text-center">
                        <p>
                          Already have an account ?{" "}
                          <Link
                            to="/login"
                            className="font-weight-medium text-primary"
                          >
                            {" "}
                            Login
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

export default Register
