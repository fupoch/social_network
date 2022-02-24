import React from "react";

import s from "./App.module.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";

const App = (props) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.app_wrapper}>
        <Navbar className={s.navbar} state={props.state.siteBar} />
        <div className={s.app_wrapper_content}>
          <Routes>
            <Route
              path="/dialogs"
              element={<DialogsContainer store={props.store} />}
            />
            <Route path="/profile" element={<Profile store={props.store} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
