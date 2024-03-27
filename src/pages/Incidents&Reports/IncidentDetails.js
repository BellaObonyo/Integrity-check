import React, { useState, useEffect } from "react"

import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Table,
  Row,
  DropdownItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Button } from "reactstrap"

const IncidentDetails = () => {
  const [settingsMenu, setSettingsMenu] = useState(false)
  const [btnSuccess1, setBtnSuccess1] = useState(false)

  //meta title
  document.title = "Incident | Details"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Groups" breadcrumbItem="Incident Details" />

          <Row>
            <Card>
              <CardBody className="p-4">
                <Row className="align-items-center">
                  <Col xs="2">
                    <div className="d-flex">
                      <div className="me-3">
                        <img
                          // src={avatar1}
                          alt=""
                          className="avatar-md rounded-circle img-thumbnail"
                        />
                      </div>
                      <div className="flex-grow-1 align-self-center">
                        <div className="text-muted">
                          <p className="mb-2">Anonymous User</p>
                          <h5 className="mb-1">Ticket ID - CA-INC-123</h5>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="1" className="text-end">
                    <Dropdown
                      isOpen={btnSuccess1}
                      toggle={() => setBtnSuccess1(!btnSuccess1)}
                    >
                      <DropdownToggle tag="button" className="btn btn-success">
                        Open <i className="mdi mdi-chevron-down" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Open</DropdownItem>
                        <DropdownItem>Closed</DropdownItem>
                        <DropdownItem>New</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                  <Col xs="1">
                    <p className="bg-danger p-2">Vulnerability Incident</p>
                  </Col>
                  <Col className="d-flex justify-content-end align-items-center">
                    <Button className="me-2 bg-success">
                      <i className="bx bx-edit text-white" />
                    </Button>
                    <Button className="btn btn-primary me-2 bg-danger">
                      <i className="bx bx-trash text-white" />
                    </Button>

                    <Dropdown
                      isOpen={settingsMenu}
                      toggle={() => setSettingsMenu(!settingsMenu)}
                    >
                      <DropdownToggle tag="button" className="btn btn-primary">
                        <i className="bx bx-align-right" />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem href="#">Reply to Incident</DropdownItem>
                        <DropdownItem href="#">Print Incident</DropdownItem>
                        <DropdownItem href="#">PDF Incident</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
          <Row className="align-items-stretch">
            <Col xl="6" className="mt-4 d-flex">
              <Card className="w-100 h-100">
                <CardBody>
                  <CardTitle className="mb-4">INCIDENT DETAILS</CardTitle>
                  <div className="table-responsive">
                    <Table className="table-nowrap mb-0">
                      <tbody>
                        <>
                          <tr>
                            <th scope="row">Subject</th>
                            <td>Malicious Code Outbreak</td>
                          </tr>
                          <tr>
                            <th scope="row">Names</th>
                            <td>Anonymous</td>
                          </tr>
                          <tr>
                            <th scope="row">Mobile</th>
                            <td>Anonymous</td>
                          </tr>
                          <tr>
                            <th scope="row">Email</th>
                            <td>anonymous@me.com</td>
                          </tr>
                          <tr>
                            <th scope="row">Target of Attack IP address</th>
                            <td>192.156.23.23</td>
                          </tr>
                          <tr>
                            <th scope="row">DNS Name</th>
                            <td>me.mycode.com</td>
                          </tr>
                          <tr>
                            <th scope="row">TCP/UDP Port</th>
                            <td>42</td>
                          </tr>
                          <tr>
                            <th scope="row">Source of Attack IP Address</th>
                            <td>72.19.204.12</td>
                          </tr>
                          <tr>
                            <th scope="row">DNS Name</th>
                            <td>me.mycode.com</td>
                          </tr>
                          <tr>
                            <th scope="row">TCP/UDP Port</th>
                            <td>41</td>
                          </tr>
                        </>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl="6" className="mt-4">
              <Card className="border-0 h-100">
                <div className="position-relative h-100 d-flex flex-column">
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <img
                        // src={avatar1}
                        alt=""
                        className="img-thumbnail w-100 h-100" 
                        style={{ objectFit: "cover" }} 
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <p className="card-text m-0">
                        The accelerating trends of interconnectedness,
                        complexity and extensibility are aggravating the already
                        serious threat posed by malicious code. To combat
                        malicious code, these authors argue for creating sound
                        policy about software behaviour and enforcing that
                        policy through technological means.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default IncidentDetails
