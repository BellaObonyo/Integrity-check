import PropTypes from 'prop-types';
import React from "react";
import { useSelector } from "react-redux";
import ReactQueryProvider from 'ReactQueryProvider';
import { createSelector } from "reselect";
import { Routes, Route } from "react-router-dom";
import { layoutTypes } from "./constants/layout";
import { StoreContext, useStore } from 'hooks/useStore';
// Import Routes all
import { authProtectedRoutes, publicRoutes } from "./routes";

// Import all middleware
import Authmiddleware from "./routes/route";

// layouts Format
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./assets/scss/theme.scss";

const getLayout = (layoutType) => {
  let Layout = VerticalLayout;
  switch (layoutType) {
    case layoutTypes.VERTICAL:
      Layout = VerticalLayout;
      break;
    case layoutTypes.HORIZONTAL:
      Layout = HorizontalLayout;
      break;
    default:
      break;
  }
  return Layout;
};

const App = () => {
  const [state, dispatch] = useStore();

  const selectLayoutState = (state) => state.Layout;
  const LayoutProperties = createSelector(
    selectLayoutState,
    (layout) => ({
      layoutType: layout.layoutType,
    })
  );

  const {
    layoutType
  } = useSelector(LayoutProperties);

  const Layout = getLayout(layoutType);

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <ReactQueryProvider>
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={
                <NonAuthLayout>
                  {route.component}
                </NonAuthLayout>
              }
              key={route.path}
              exact={true}
            />
          ))}

          {authProtectedRoutes.map((route) => (
            <Route
              path={route.path}
              element={
                <Authmiddleware>
                  <Layout>{route.component}</Layout>
                </Authmiddleware>}
              key={route.path}
              exact={true}
            />
          ))}
        </Routes>
      </ReactQueryProvider>
    </StoreContext.Provider>

  );
};

App.propTypes = {
  layout: PropTypes.any
};

export default App;