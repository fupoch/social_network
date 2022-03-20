import React from "react";
import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className={s.wrapper}>
        <div className={s.wrapper__header}>
          <HeaderContainer />
        </div>
        <div className={s.app_wrapper}>
          <Navbar className={s.navbar} state={this.props.state.siteBar} />
          <div className={s.app_wrapper_content}>
            <Routes>
              <Route
                path="/dialogs"
                element={<DialogsContainer store={this.props.store} />}
              />
              <Route
                path={"/profile/:userId"}
                element={<ProfileContainer store={this.props.store} />}
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer state={store.getState()} />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
