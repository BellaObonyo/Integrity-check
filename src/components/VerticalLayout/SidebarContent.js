import React, { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";


// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import withRouter from "components/Common/withRouter";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = props => {
  const ref = useRef();
  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); 
          parent3.childNodes[0].classList.add("mm-active"); 
          const parent4 = parent3.parentElement; 
          if (parent4) {
            parent4.classList.add("mm-show"); 
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); 
              parent5.childNodes[0].classList.add("mm-active");
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;

      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null;
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show");
        }

        parent.classList.remove("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("mm-active"); 
            parent3.childNodes[0].classList.remove("mm-active");

            const parent4 = parent3.parentElement; 
            if (parent4) {
              parent4.classList.remove("mm-show"); 
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove("mm-show"); 
                parent5.childNodes[0].classList.remove("mm-active"); 
              }
            }
          }
        }
      }
    }
  };

  const path = useLocation();
  const activeMenu = useCallback(() => {
    const pathName = path.pathname;
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    removeActivation(items);

    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [path.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  }, []);

  useEffect(() => {
    new MetisMenu("#side-menu");
    activeMenu();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activeMenu();
  }, [activeMenu]);

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/#">
                <i className="bx bxs-dashboard"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>
            
            <li>
              <Link to="/#" className="has-arrow ">
              <i className="bx bx-error-alt"></i>
              <span>{props.t("Incidents")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                <Link to="/incident-reports">{props.t("Report Incident")}</Link>
                </li>
                <li>
                <Link to="/vulnerability-report">{props.t("Report Vulnerability")} </Link>
                </li>
                <li>
                  <Link to="/child-report">{props.t("Child Related Cyber Incident")}</Link>
                </li> 
              </ul>
            </li>

            <li>
              <Link to="/alerts">
                <i className="bx bxs-bell-ring"></i>
                <span>{props.t("Alerts & History")}</span>
              </Link>
            </li>
            
            <li>
              <Link to="/learningCenter" >
                <i className="bx bxs-book-open"></i>
                <span>{props.t("Learning Center")}</span>
              </Link>
            </li>
            <li>
              <Link to="/feedback" >
                <i className="bx bxs-file"></i>
                <span>{props.t("Feedback & Surveys")}</span>
              </Link>
            </li>
     
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));