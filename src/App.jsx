import { useState } from "react";
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./components/Home/Home.jsx";
import { ProfilePage } from "./components/ProfilePage/ProfilePage.jsx";
import { TweetDataProvider } from "./contexts/TweetContext.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <>
      <TweetDataProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
        </BrowserRouter>
      </TweetDataProvider>
    </>
  );
}

export default App;
