import PropTypes from "prop-types"
import React from "react"
import { Row, Container, Col, Card, CardBody, CardTitle } from "reactstrap"
import SplineArea from "./SplineArea"
import BarChart from "./barChart"
import DonutChart from "./donutchart"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { withTranslation } from "react-i18next"
import { getIncidents } from "api/incidents";

const Dashboard = props => {
  //meta title
  document.title = "Dashboard | CAK Portal"

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Breadcrumb Row */}
          <Row>
            <Col md={12}>
              <Breadcrumbs
                header={props.t("Dashboard")}
              />
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={8}>
              <Card className="h-100 d-flex flex-column">
                <CardBody className="d-flex flex-column">
                  <Row className="flex-grow-1">
                    <Col md={3}>
                      <div>
                        <h3>Incidents Reported</h3>
                        <p>Jan 1-Jan 31</p>
                        <h2>581</h2>
                        <p>76% anonymous incidents reported</p>
                      </div>
                    </Col>
                    <Col md={9}>
                      <SplineArea dataColors='["--bs-success"]' />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <div>
                        <i className=" bx bx-error"></i>
                        <h4>81</h4>
                        <p>General Incidents</p>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <h4>237</h4>
                        <p>Vulnerability Incidents</p>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <h4>263</h4>
                        <p>Child Abuse Incidents</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 d-flex flex-column">
                <CardBody className="d-flex flex-column justify-content-between">
                  <h3>Alerts & Advisory</h3>
                  <div className="card bg-primary text-white text-center p-3 mb-3">
                    <blockquote className="card-blockquote font-size-14 mb-0">
                      <p>Practice Guides</p>
                    </blockquote>
                  </div>
                  <div className="card bg-success text-white text-center p-3 mb-3">
                    <blockquote className="card-blockquote font-size-14 mb-0">
                      <p>Cyber Alerts</p>
                    </blockquote>
                  </div>
                  <div className="card bg-dark text-white text-center p-3 mb-3">
                    <blockquote className="card-blockquote font-size-14 mb-0">
                      <p>Cyber Advisories</p>
                    </blockquote>
                  </div>
                  <div className="card bg-info text-white text-center p-3">
                    <blockquote className="card-blockquote font-size-14 mb-0">
                      <p>Press Statements</p>
                    </blockquote>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Card className="h-100 d-flex flex-column">
                <CardBody className="d-flex flex-column">
                  <CardTitle className="mb-4">Incidences by Category</CardTitle>
                  <BarChart dataColors='["--bs-success"]' />
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 d-flex flex-column">
                <CardBody className="d-flex flex-column">
                  <CardTitle className="mb-4">Report Types</CardTitle>
                  <DonutChart dataColors='["--bs-warning","--bs-secondary"]' />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
}

export default withTranslation()(Dashboard)
