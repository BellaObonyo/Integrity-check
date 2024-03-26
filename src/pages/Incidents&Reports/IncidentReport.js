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
         
          <Card>
            <CardBody>
            <Row>
      <Col xs="2" className="d-flex align-items-center">
        <h1 className="m-0">Incidents</h1>
      </Col>
      <Col xs="2">
        <div>
          <i className="bx bx-history"></i>
          <h5 className="mb-0">48</h5>
          <p className="text-muted text-truncate mb-2">New</p>
        </div>
      </Col>
      <Col xs="2">
        <div>
          <h5 className="mb-0">40</h5>
          <p className="text-muted text-truncate mb-2">Open</p>
        </div>
      </Col>
      <Col xs="2">
        <div>
          <h5 className="mb-0">18</h5>
          <p className="text-muted text-truncate mb-2">Closed</p>
        </div>
      </Col>
    </Row>
            </CardBody>
          </Card>
        
          <TableContainer
                    showView
                    columns={columns}
                    data={data}
                    isGlobalFilter={true}
                    isAddOptions={false}
                    customPageSize={10}
                    isPagination={true}
                    iscustomPageSizeOptions={true}
                    tableClass="align-middle table-nowrap table-check table"
                    theadClass="table-light"
                    paginationDiv="col-12"
                    pagination="justify-content-left pagination pagination-rounded"

                />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default IncidentReport;
