import React from "react";

import { Row, Button, Col,   Container, CardBody, Card, CardTitle, Form, Input, FormFeedback, Label } from "reactstrap";

//redux
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";


const IncidentReport = () =>{

  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col xl={8}>
            <Card>
              <CardBody>
                <CardTitle className="mb-4">Report Incident</CardTitle>
                <Form>
                <Row className="mb-4">
                      <Col sm={12}>
                        <Label for="horizontal-name-Input">Name</Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-name-Input"
                          placeholder="Enter Your Name (Optional)"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col sm={12}>
                        <Label for="horizontal-email-Input">Email</Label>
                        <Input
                          type="email"
                          className="form-control"
                          id="horizontal-email-Input"
                          placeholder="Enter Your Email (Optional)"
                        />
                      </Col>
                    </Row>
                  <Row className="mb-4">
                    <Col sm={12}>
                    <Label for="horizontal-phoneNumber-Input">Phone Number</Label>
                    <Input
                        type="tel"
                        className="form-control"
                        id="horizontal-phoneNumber-Input"
                        placeholder="Enter Your Phone Number"
                    />
                    </Col>
                  </Row>

                  <Row className="mb-4">
                  <Col sm={12}>

                    <Label for="horizontal-organization-Input">
                      Organization Name
                    </Label>
                      <Input
                        type="text"
                        autoComplete="off"
                        className="form-control"
                        id="horizontal-organization-Input"
                        placeholder="Enter Your Organization Name"
                      />
                    </Col>
                  </Row>

                  <Row className="mb-4">
                  <Col xs={12}>

                    <Label for="horizontal-category-Input">
                      Category
                    </Label>
                    <select defaultValue="0" className="form-select">
                        <option value="0">Abusive Content</option>
                        <option value="1">Malicious Code</option>
                        <option value="2">Information Gathering</option>
                        <option value="3">Intrusion Attempts</option>
                        <option value="4">Intrusions</option>
                        <option value="5">Availability</option>
                        <option value="6">Information Security</option>
                        <option value="7">Fraud</option>
                        <option value="8">Spam</option>
                        <option value="9">Harrasment</option>
                        <option value="10">Child/Sexual/Violence/..</option>
                        <option value="11">Virus</option>
                        <option value="12">Worm</option>
                        <option value="13">Trojan</option>
                        <option value="14">Spyware</option>
                        <option value="15">Dialer</option>
                        <option value="16">Scanning</option>
                        <option value="17">Sniffing</option>
                        <option value="18">Social Engineering</option>
                        <option value="19">Exploiting of Unknown Vulnerabilities</option>
                        <option value="20">Login Attempts</option>
                        <option value="21">New Attack Signature</option>
                        <option value="22">Privileged Account Compromise</option>
                        <option value="23">Application Compromise</option>
                        <option value="24">DoS</option>
                        <option value="25">DDoS</option>
                        <option value="26">Sabotage</option>
                        <option value="27">Technical Vulnerability</option>
                        <option value="28">Other</option>
                      </select>
                    </Col>
                  </Row>

                  <Row className="mb-4">
                  <Col xs={12}>
                    <Label for="incidentType">
                      Incident Type
                    </Label>
                      <Input
                        type="textarea"
                        id="incidentType"
                        placeholder="Describe and categorize your incident according to your knowledge and understanding."
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

export default IncidentReport;
