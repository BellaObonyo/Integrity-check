import React from "react";
import Breadcrumbs from "components/Common/Breadcrumb";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Alert,
} from "reactstrap";


const Surveys = () => {
  const validationSchema = Yup.object().shape({
    section1: Yup.string().required("Section 1 is required"),
    section2: Yup.string().required("Section 2 is required"),
  });

  const handleSaveSurvey = (values) => {
    console.log("Survey Data:", values);
    alert("Survey saved successfully!");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Surveys" breadcrumbItem="Create Surveys &  View feedbacks here" />
          <Alert color="success">Please create you survey here.</Alert>
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <Formik
                    initialValues={{
                      section1: "",
                      section2: "",
                      section3: "",
                      section4: "",
                      section5: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      handleSaveSurvey(values);
                      setSubmitting(false);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Label for="section1">Section 1</Label>
                              <Field as="select" id="section1" name="section1" className="form-control">
                                <option value="">Select an option</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                              </Field>
                              <ErrorMessage name="section1" component="div" className="text-danger" />
                            </FormGroup>
                          </Col>
                          <Col>
                            <FormGroup>
                              <Label for="section2">Section 2</Label>
                              <Field as="select" id="section2" name="section2" className="form-control">
                                <option value="">Select an option</option>
                                <option value="Option A">Option A</option>
                                <option value="Option B">Option B</option>
                                <option value="Option C">Option C</option>
                              </Field>
                              <ErrorMessage name="section2" component="div" className="text-danger" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <Label for="section3">Section 3</Label>
                              <Field as="select" id="section3" name="section3" className="form-control">
                                <option value="">Select an option</option>
                                <option value="Choice 1">Choice X</option>
                                <option value="Choice 2">Choice Y</option>
                                <option value="Choice 3">Choice Z</option>
                              </Field>
                              <ErrorMessage name="section3" component="div" className="text-danger" />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <Label for="section4">Section 4</Label>
                              <Field as="textarea" id="section4" name="section4" className="form-control" />
                              <ErrorMessage name="section4" component="div" className="text-danger" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Label for="section5">Section 5</Label>
                              <Field as="textarea" id="section5" name="section5" className="form-control" />
                              <ErrorMessage name="section5" component="div" className="text-danger" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button type="submit" color="primary" disabled={isSubmitting}>
                          Submit
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <h4>Feedbacks</h4>
                <ul>
                  <li>Feedback 1</li>
                  <li>Feedback 2</li>
                  <li>Feedback 3</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Surveys;



