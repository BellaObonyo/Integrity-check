import React, { useMemo } from "react";
import { Row, Container, Col, Card, CardBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TableContainer from '../../components/Common/TableContainer';


const IncidentReport = () => {
  // Set meta title
  React.useEffect(() => {
    document.title = "Incident | CAK Portal";
  }, []);

  const columns = useMemo(
    () => [
        {
          Header: '#',
          accessor: 'id',
        },
        {
            Header: 'REPORTED BY',
            accessor: 'reportedBy',
        },
        {
            Header: 'EMAIL',
            accessor: 'email'
        },
        {
            Header: 'DATE REPORTED',
            accessor: 'dateReported'
        },
        {
            Header: 'STATUS',
            accessor: 'status'
        },
        {
            Header: 'CATEGORY',
            accessor: 'category'
        },
        {
            Header: 'TICKET ID',
            accessor: 'ticketId'
        },
        {
          Header: 'TAGS',
          accessor: 'tags'
      },
    ],
    []
);

const data = [
    {
      id: 1,
      reportedBy: "Joy Neema",
      email: "jneema@flag42.com",
      dateReported: "2024/01/01",
      status: "Open",
      category: "General",
      ticketId: "CA-INK-2424",
      tags: "Malware"


    },
     {
   id: 2,
   reportedBy: "Michael Smith",
   email: "msmith@flag42.com",
   dateReported: "2024/02/15",
   status: "Closed",
   category: "Vulnerability",
   ticketId: "CA-INK-2425",
   tags: "Unauthorized Access"
},
 {
   id: 3,
   reportedBy: "Sarah Johnson",
   email: "sjohnson@flag42.com",
   dateReported: "2024/02/28",
   status: "Open",
   category: "Child Abuse",
   ticketId: "CA-INK-2426",
   tags: "Hate Speech, Incitement"
},
{
   id: 4,
   reportedBy: "David Lee",
   email: "dlee@flag42.com",
   dateReported: "2024/03/10",
   status: "New",
   category: "General",
   ticketId: "CA-INK-2427",
   tags: "Phishing"
},
 {
   id: 5,
   reportedBy: "Emily White",
   email: "ewhite@flag42.com",
   dateReported: "2024/03/20",
   status: "Open",
   category: "Vulnerability",
   ticketId: "CA-INK-2428",
   tags: "Web Defacement"
},
{
   id: 6,
   reportedBy: "Daniel Brown",
   email: "dbrown@flag42.com",
   dateReported: "2024/03/22",
   status: "Open",
   category: "Child Abuse",
   ticketId: "CA-INK-2429",
   tags: "Cyber Bullying"
},
 {
   id: 7,
   reportedBy: "Olivia Taylor",
   email: "otaylor@flag42.com",
   dateReported: "2024/03/24",
   status: "New",
   category: "General",
   ticketId: "CA-INK-2430",
   tags: "Malware"
}

  ]

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Breadcrumb Row */}
          <Row>
            <Col>
              <Breadcrumbs
                title="Incidents"
                breadcrumbItem="IncidentReport"
              />
            </Col>
          </Row>
          <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <Row>
                <Col lg="4">
                     <h2>Incidents</h2>                       
                </Col>

                <Col lg="4" className="align-self-center">
                  <div className="text-lg-center mt-4 mt-lg-0">
                    <Row>
                      <Col xs="4">
                        <div>
                        <i className=" bx bx-history"></i>

                          <p className="text-muted text-truncate mb-2">
                            New
                          </p>
                          <h5 className="mb-0">48</h5>
                        </div>
                      </Col>
                      <Col xs="4">
                        <div>
                          <p className="text-muted text-truncate mb-2">
                            Open
                          </p>
                          <h5 className="mb-0">40</h5>
                        </div>
                      </Col>
                      <Col xs="4">
                        <div>
                          <p className="text-muted text-truncate mb-2">
                            Closed
                          </p>
                          <h5 className="mb-0">18</h5>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>

              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
          <TableContainer
                    columns={columns}
                    data={data}
                    isGlobalFilter={true}
                    isAddOptions={false}
                    customPageSize={10}
                    isPagination={true}
                    tableClass="align-middle table-nowrap table-check table"
                    theadClass="table-light"
                    paginationDiv="col-12"
                    pagination="justify-content-center pagination pagination-rounded"
                />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default IncidentReport;
