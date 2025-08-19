import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home/Home.jsx";
import { TweetDataProvider } from "./contexts/TweetContext.jsx";

function App() {
  return (
    <>
      <TweetDataProvider>
        <Home />
      </TweetDataProvider>
    </>
  );
}

export default App;
