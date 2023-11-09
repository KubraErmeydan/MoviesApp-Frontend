import React from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
import { GlobalContextProvider } from "./context/GlobalState";
import LoginSignup from "./components/Auth/LoginSignup";

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route exact path="/" component={WatchList} />
          <Route exact path="/watched" component={Watched} />
          <Route exact path="/watched" component={Watched} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/auth" element = {<LoginSignup/>}/>
        </Routes>        
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;