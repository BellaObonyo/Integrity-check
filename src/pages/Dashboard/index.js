import PropTypes from "prop-types"
import React from "react"
import {
  Row,
  Container,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap"

import SplineArea from "./SplineArea"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"

const Dashboard = props => {
  //meta title
  document.title = "Dashboard | SHOFCO - SUN Portal"

  return (
    <React.Fragment>

    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
}

export default withTranslation()(Dashboard)
