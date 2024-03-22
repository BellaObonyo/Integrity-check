import React from "react";
import { Row, Button, Col, Container, CardBody, Card, CardTitle, Form, Input, Label, FormFeedback } from "reactstrap";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

const ChildReport = () => {
  //meta title
  document.title="Child Vulnerability Report";

    // Form validation 
    const validation = useFormik({
      // enableReinitialize : use this flag when initial values needs to be changed
      // enableReinitialize: true,
  
      initialValues: {
        victimName: '',
        platform: '',
        gender: '',
        datetime: '',
        place: '',
        description: '',
      },
      validationSchema: Yup.object({
        victimName: Yup.string().required("Please Enter Victim Name"),
        platform: Yup.string().required("Please Enter Platform Used"),
        gender: Yup.string().required("Please Select Gender"),
        datetime: Yup.string().required("Please Enter Date and Time of Incident"),
        place: Yup.string().required("Please Enter Your Place of Incident"),
        description: Yup.string().required("Please Enter Your Incident Description"),
      }),
      onSubmit: (values) => {
      }
    });


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
        <Row className="justify-content-center">
            <Col xl={8}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Child Related Cyber Incident Reporting Form</CardTitle>
                  <Form onSubmit={validation.handleSubmit}>                  
                  <Row className="mb-4">
                        <Col sm={12}>

                        <Label for="reportingParty">
                            Reporting Party
                        </Label>
                        <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-name-Input"
                          placeholder="Name of Reporter"
                        />
                   
                      <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-address-Input"
                          placeholder="Enter Address"
                        />
                            <Input
                          type="email"
                          className="form-control mb-2"
                          id="horizontal-email-Input"
                          placeholder="Enter Your Email"
                        />
                        <Input
                          type="tel"
                          autoComplete="off"
                          className="form-control mb-4"
                          id="horizontal-phoneNumber-Input"
                          placeholder="Enter Your Phone Number"
                        />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col sm={12}>

                        <Label for="victimDetails">
                            Victim Details
                        </Label>
                        <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-victimName-Input"
                          placeholder="Name"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.victimName}
                          invalid={validation.touched.victimName && !!validation.errors.victimName}
                        />
                        {validation.errors.victimName && validation.touched.victimName && (
                          <FormFeedback type="invalid">{validation.errors.victimName}</FormFeedback>
                        )}
                      <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-nickname-Input"
                          placeholder="Nickname/Other names used online"
                        />
                            <Input
                          type="number"
                          className="form-control mb-2"
                          id="horizontal-age-Input"
                          placeholder="Age"
                        />
                        <Input
                          type="text"
                          className="form-control mb-4"
                          id="horizontal-location-Input"
                          placeholder="Present Location"
                        />
                        <Input
                          type="text"
                          className="form-control mb-4"
                          id="horizontal-relationship-Input"
                          placeholder="Relationship to reporting party"
                        />
                        <Input
                        type="textarea"
                        className="form-control mb-4"
                        id="incidentType"
                        placeholder="Vulnerability of child due to age, disability or other(expound)."
                        />
                        <Input
                          type="text"
                          className="form-control mb-4"
                          id="horizontal-language-Input"
                          placeholder="Language"
                        />
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col sm={12}>

                        <Label for="involvedParties">
                            Involved Parties
                        </Label>
                        <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-platform-Input"
                          placeholder="Platform Used"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.platform}
                          invalid={validation.touched.platform && !!validation.errors.platform}
                        />
                        {validation.touched.platform && validation.errors.platform && (
                          <FormFeedback type="invalid">{validation.errors.platform}</FormFeedback>
                        )}                      
                        <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-nickname-Input"
                          placeholder="Nickname/Other names used by suspect"
                        />
                    <Row className="mb-4">
                      <Col sm={12}>
                        <Label for="gender">
                          Gender
                        </Label>
                        <Input
                          type="select"
                          className="form-control mb-2"
                          id="horizontal-gender-Input"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.gender}
                          invalid={validation.touched.gender && !!validation.errors.gender}
                        >
                          <option value="" disabled>Select Gender of Suspect</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Input>
                        {validation.touched.gender && validation.errors.gender && (
                          <FormFeedback type="invalid">{validation.errors.gender}</FormFeedback>
                        )}
                      </Col>
                    </Row>


                        <Input
                            type="textarea"
                            className="form-control mb-4"
                            id="information"
                            placeholder="Other relevant information."
                            />          
                        </Col>  
                    </Row>    

                    <Row className="mb-4">
                        <Col sm={12}>

                        <Label for="incidentDetails">
                            Incident Details
                        </Label>
                        <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-datetime-Input"
                          placeholder="Date and Time of Incident"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.datetime}
                          invalid={validation.touched.datetime && !!validation.errors.datetime}
                        />
                        {validation.touched.datetime && validation.errors.datetime && (
                          <FormFeedback type="invalid">{validation.errors.datetime}</FormFeedback>
                        )}                      
                        <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-place-Input"
                          placeholder="Place of Incident"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.place}
                          invalid={validation.touched.place && !!validation.errors.place}
                        />
                        {validation.touched.place && validation.errors.place && (
                          <FormFeedback type="invalid">{validation.errors.place}</FormFeedback>
                        )}
                        <Input
                            type="textarea"
                            className="form-control mb-4"
                            id="description"
                            placeholder="Narrative Description (What victim(s) said/What the reporter observed/Similar incidents involving the victim(s) or suspect(s))"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.description}
                            invalid={validation.touched.description && !!validation.errors.description}
                          />
                          {validation.touched.description && validation.errors.description && (
                            <FormFeedback type="invalid">{validation.errors.description}</FormFeedback>
                          )}                        
                        </Col>  
                    </Row>    

                    <Row className="justify-content-center mb-4">
                        <Col sm={6}>
                            <Button type="submit" color="primary" block>
                            Submit
                            </Button>
                        </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ChildReport;
