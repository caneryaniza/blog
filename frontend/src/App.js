import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import MainPage from './places/pages/MainPage';
import MainFooter from "./shared/components/Footer/MainFooter";

import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <header>
          <MainNavigation />
        </header>
        <main>
          <MainPage/>
        </main>
        <footer className="footer">
          <MainFooter />
        </footer>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
