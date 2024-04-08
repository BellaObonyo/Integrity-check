import React, { useMemo, useState, useEffect } from "react";
import {
  Row,
  Container,
  Col,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TableContainer from "../../components/Common/TableContainer";
import { useMutation } from 'react-query';
import { getIncidents } from "api/incidents";
import { useNavigate } from "react-router-dom";



const Index = () => {
const navigate = useNavigate();

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
        // console.log(res);
        setIncidentsData(res.data); 
      },
      onSettled: () => {
        // queryClient.invalidateQueries('get-all-dependents');
      },
    }
  );

  useEffect(() => {
    mutateIncidents({ ...pagination });
  }, [pagination]);

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

  const handleViewDetails = (record) => {
    // console.log(record);
    navigate(`/incidents/${record.original.id}`);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col>
              <Breadcrumbs title="Incidents" breadcrumbItem="IncidentReport" />
            </Col>
          </Row>
          <TableContainer
            showView
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
            handleView={handleViewDetails}

          />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Index;
