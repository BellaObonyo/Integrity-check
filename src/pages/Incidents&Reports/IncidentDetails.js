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
  DropdownMenu
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
  document.title = "Incident | Details";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Groups" breadcrumbItem="Group Details" />

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
                    <Dropdown isOpen={btnSuccess1} toggle={() => setBtnSuccess1(!btnSuccess1)}>
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
                    <Button className="me-2 bg-success"><i className="bx bx-edit text-white" /></Button>
                    <Button className="btn btn-primary me-2 bg-danger"><i className="bx bx-trash text-white" /></Button>

                    <Dropdown isOpen={settingsMenu} toggle={() => setSettingsMenu(!settingsMenu)}>
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
          <Row>
          
            <Col xl="4" className="mt-4">
             
              <Card>
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
                            <th scope="row">DNS Namw</th>
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

          </Row>
          {/* <Card className="overflow-hidden">
        <div className="bg-primary-subtle">
          <Row>
            <Col xs="7">
              <div className="text-primary p-3">
                <h5 className="text-primary">Welcome Back !</h5>
                <p>Skote Dashboard</p>
              </div>
            </Col>
            <Col xs="5" className="align-self-end">
              <img 
            //   src={profileImg} 
              alt="" className="img-fluid" />
            </Col>
          </Row>
        </div>
        <CardBody className="pt-0">
          <Row>
            <Col sm="4">
              <div className="avatar-md profile-user-wid mb-4">
                <img
                //   src={avatar1}
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <h5 className="font-size-15 text-truncate">Henry Price</h5>
              <p className="text-muted mb-0 text-truncate">UI/UX Designer</p>
            </Col>

            <Col sm="8">
              <div className="pt-4">
                <Row>
                  <Col xs="6">
                    <h5 className="font-size-15">125</h5>
                    <p className="text-muted mb-0">Projects</p>
                  </Col>
                  <Col xs="6">
                    <h5 className="font-size-15">$1245</h5>
                    <p className="text-muted mb-0">Revenue</p>
                  </Col>
                </Row>
                <div className="mt-4">
                  <Link
                    to=""
                    className="btn btn-primary  btn-sm"
                  >
                    View Profile <i className="mdi mdi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card> */}

        </Container>
      </div>
    </React.Fragment >
  )
}

export default IncidentDetails