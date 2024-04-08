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

import { getIncident } from "api/incidents"
import { useParams } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Button } from "reactstrap"
import profile from "assets/images/profile-img.png";

const IncidentDetails = () => {
  const [settingsMenu, setSettingsMenu] = useState(false)
  const [btnSuccess1, setBtnSuccess1] = useState(false)

  //meta title
  document.title = "Incident | Details"
  
  const { id } = useParams();

  const [ incidentData, setIncidentData ] = useState({});

  useEffect(() => {
    const fetchIncidentDetails = async () => {
      try {
        const response = await getIncident(id);
        setIncidentData(response.data);
        console.log(response)
        
      } catch (error) {
        console.error('Error fetching incident details:', error);
      }
    };

    fetchIncidentDetails();
  }, [id]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Incident" breadcrumbItem="Incident Details" />

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
                    <p className="bg-danger p-2">{incidentData.incidentType}</p>
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
                            <th scope="row">#</th>
                            <td>{incidentData.id}</td>
                          </tr>
                          <tr>
                            <th scope="row">Name</th>
                            <td>{incidentData.name}</td>
                          </tr>
                          <tr>
                            <th scope="row">Report Type</th>
                            <td>{incidentData.reportType}</td>
                          </tr>
                          <tr>
                            <th scope="row">Description</th>
                            <td>{incidentData.description}</td>
                          </tr>
                          <tr>
                            <th scope="row">Place</th>
                            <td>{incidentData.place}</td>
                          </tr>
                          <tr>
                            <th scope="row">Other Information</th>
                            <td>{incidentData.otherinfo}</td>
                          </tr>
                          <tr>
                            <th scope="row">Date</th>
                            <td>{incidentData.dateTime}</td>
                          </tr>
                          <tr>
                            <th scope="row">Deleted</th>
                            <td>{incidentData.deleted}</td>
                          </tr>
                          <tr>
                            <th scope="row">User ID</th>
                            <td>{incidentData.userId}</td>
                          </tr>
                          <tr>
                            <th scope="row">Reporter</th>
                            <td>{incidentData.reporter}</td>
                          </tr>
                          <tr>
                            <th scope="row">Victim</th>
                            <td>{incidentData.victim}</td>
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
                        src={profile}
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
