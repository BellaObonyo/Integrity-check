import React, { useMemo, useState, useEffect } from "react";
import {
  Row,
  Container,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TableContainer from "../../components/Common/TableContainer";
import { useMutation } from 'react-query';
import { getIncidents } from "api/incidents";

const Index = () => {
  // Set meta title
  React.useEffect(() => {
    document.title = "Incident | CAK Portal";
  }, []);

  const [pagination, setPagination] = useState({
    pageSize: 10,
    pageNumber: 1,
  });

  const { mutate: mutateIncidents } = useMutation(
    () => getIncidents(pagination.pageNumber, pagination.pageSize),
    {
      onSuccess: res => {
        console.log(res);
        setIncidentsData(res.data); // Set only the data portion of the response
      },
      onSettled: () => {
        // queryClient.invalidateQueries('get-all-dependents');
      },
    }
  );

  useEffect(() => {
    mutateIncidents({ ...pagination });
  }, [pagination]);

  // State to hold the incidents data for display in the table
  const [incidentsData, setIncidentsData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "REPORTED BY",
        accessor: "name",
      },
      {
        Header: "DESCRIPTION",
        accessor: "description",
      },
      {
        Header: "DATE REPORTED",
        accessor: "dateTime",
      },
      {
        Header: "STATUS",
        accessor: "deleted",
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Breadcrumb Row */}
          <Row>
            <Col>
              <Breadcrumbs title="Incidents" breadcrumbItem="IncidentReport" />
            </Col>
          </Row>

          <Card>
            <CardBody>
              {/* Your card body content */}
            </CardBody>
          </Card>

          <TableContainer
            showView
            // handleView={handleViewDetails}
            columns={columns}
            data={incidentsData}
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

export default Index;
