import React from "react";
import { Row, Button, Col, Container, CardBody, Card, CardTitle, Form, Input, Label } from "reactstrap";

const VulnerabilityReport = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
        <Row className="justify-content-center">
            <Col xl={8}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Child Related Cyber Incident Reporting Form</CardTitle>
                  <Form>
                  <Row className="mb-4">
                        <Col sm={12}>

                        <Label for="reportingParty">
                            Reporting Party
                        </Label>
                        <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-name-Input"
                          placeholder="Name of Reporter(Optional)"
                        />
                      <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-address-Input"
                          placeholder="Enter Address (Optional)"
                        />
                            <Input
                          type="email"
                          className="form-control mb-2"
                          id="horizontal-email-Input"
                          placeholder="Enter Your Email (Optional)"
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
                          placeholder="Name (Required)"
                        />
                      <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-nickname-Input"
                          placeholder="Nickname/Other names used online (Optional)"
                        />
                            <Input
                          type="number"
                          className="form-control mb-2"
                          id="horizontal-age-Input"
                          placeholder="Age (Optional)"
                        />
                        <Input
                          type="text"
                          className="form-control mb-4"
                          id="horizontal-location-Input"
                          placeholder="Present Location (Optional)"
                        />
                        <Input
                          type="text"
                          className="form-control mb-4"
                          id="horizontal-relationship-Input"
                          placeholder="Relationship to reporting party (Optional)"
                        />
                        <Input
                        type="textarea"
                        className="form-control mb-4"
                        id="incidentType"
                        placeholder="Vulnerability of child due to age, disability or other(expound). (Optional)"
                        />
                        <Input
                          type="text"
                          className="form-control mb-4"
                          id="horizontal-language-Input"
                          placeholder="Language (Optional)"
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
                          placeholder="Platform Used (Required)"
                        />
                      <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-nickname-Input"
                          placeholder="Nickname/Other names used by suspect (Optional)"
                        />
                    
                        <select className="form-select mb-2" defaultValue="Gender of Suspect">
                        <option disabled>Gender of Suspect</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        </select>


                        <Input
                            type="textarea"
                            className="form-control mb-4"
                            id="information"
                            placeholder="Other relevant information. (Optional)"
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
                          placeholder="Date and Time of Incident (Required)"
                        />
                      <Input
                          type="text"
                          className="form-control mb-2"
                          id="horizontal-place-Input"
                          placeholder="Place of Incident"
                        />

                        <Input
                            type="textarea"
                            className="form-control mb-4"
                            id="description"
                            placeholder="Narrative Description (What victim(s) said/What the reporter observed/Similar incidents involving the victim(s) or suspect(s))"
                            />          
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

export default VulnerabilityReport;
