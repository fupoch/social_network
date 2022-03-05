import React from "react";
import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className={s.wrapper}>
      <HeaderContainer />
      <div className={s.app_wrapper}>
        <Navbar className={s.navbar} state={props.state.siteBar} />
        <div className={s.app_wrapper_content}>
          <Routes>
            <Route
              path="/dialogs"
              element={<DialogsContainer store={props.store} />}
            />
            <Route
              path="/profile/:userId"
              element={<ProfileContainer store={props.store} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
