import React, { Suspense, useEffect } from "react";
import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
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
import { compose } from "redux";
import { withRouter } from "./components/Profile/WithRouter";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/reduxStore";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

// class App extends React.Component {
//   componentDidMount() {
//     props.initializeApp();
//   }

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, [props.initializeApp]);

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__header}>
        <HeaderContainer />
      </div>
      <div className={s.app_wrapper}>
        <Navbar className={s.navbar} state={props.state.siteBar} />
        <div className={s.app_wrapper_content}>
          <Suspense fallback={<Preloader />}>
            <Routes>
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
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fbff04",
      contrastText: "#615e5e",
      text: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#fff",
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
