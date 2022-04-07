import React, { Suspense, useEffect } from "react";
import s from "./App.module.css";
import classNames from "classnames";
// import s from "./components/Navbar/Navbar.module.css";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {
  Routes,
  Route,
  BrowserRouter,
  HashRouter,
  Navigate,
  Router,
} from "react-router-dom";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { getPhotos } from "./redux/authReducer";
import { compose } from "redux";
import { withRouter } from "./components/Profile/WithRouter";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/reduxStore";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { getProfile, getProfileStatus } from "./redux/profileReducer";

// class App extends React.Component {
//   componentDidMount() {
//     props.initializeApp();
//   }

const App = (props) => {
  const catchAllUnhandleErrors = (PromiseRejectionEvent) => {
    alert("Some error");
  };

  const [isActiveToggleClose, setActiveToggleClose] = React.useState(false);
  useEffect(() => {
    props.initializeApp();

    window.addEventListener("unhandledrejection", catchAllUnhandleErrors);
    return window.removeEventListener(
      "unhandledrejection",
      catchAllUnhandleErrors
    );
  }, [props.initializeApp]);

  if (!props.initialized) {
    return <Preloader />;
  }
  return (
    <div
      className={
        props.toggleDarkMode ? classNames(s.body, s.dark) : classNames(s.body)
      }
    >
      <nav
        className={
          props.toggleClass
            ? classNames(s.sidebar, s.close)
            : classNames(s.sidebar)
        }
      >
        <NavbarContainer store={props.store} />
      </nav>

      <section className={s.home}>
        <div className={s.app_wrapper}>
          <div className={s.app_wrapper_content}>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route
                  path="/"
                  exact
                  element={<ProfileContainer store={props.store} />}
                ></Route>
                <Route
                  path="/dialogs"
                  element={<DialogsContainer store={props.store} />}
                />
                <Route
                  path={"/profile/:userId"}
                  element={<ProfileContainer store={props.store} />}
                />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route
                  path="/users"
                  element={<UsersContainer pageTitle="Page Title" />}
                />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId,
  initialized: state.app.initialized,
  userId: state.auth.userId,
  photos: state.auth.photos,
  toggleClass: state.auth.toggleClass,
  toggleDarkMode: state.auth.toggleDarkMode,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp, getProfile, getPhotos })
)(App);

export const theme = createTheme({
  palette: {
    primary: {
      main: "#695cfe",
      contrastText: "#fff",
      text: "#fff",
    },
    secondary: {
      light: "#fff",
      main: "#fbff04",
      dark: "#fff",
      contrastText: "#fff",
      textColor: "#fff",
    },
    neutral: {
      light: "#fff",
      main: "#fbff04",
      dark: "#fff",
      contrastText: "#fff",
      textColor: "#fff",
    },
  },
});

const MainApp = (props) => {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppContainer state={store.getState()} />
        </Provider>
      </ThemeProvider>
    </HashRouter>
  );
};
export default MainApp;
