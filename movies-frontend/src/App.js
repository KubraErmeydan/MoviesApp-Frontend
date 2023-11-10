import React from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Watched from "./components/Watched";
import { GlobalContextProvider } from "./context/GlobalState";
import LoginSignup from "./components/Auth/LoginSignup";
import Home from "./components/Home";
import WatchList from "./components/WatchList";

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/watchlist" element={<WatchList/>} />
          <Route exact path="/watched" component={Watched} />
          <Route exact path="/add" element={<Add/>} />
          <Route exact path="/auth" element = {<LoginSignup/>}/>
        </Routes>        
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;