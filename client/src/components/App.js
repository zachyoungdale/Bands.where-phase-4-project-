import '../App.css';
import Login from './Login';
import NavBar from './NavBar';
import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      <NavBar user={user} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/login">
          <Login onLogin={handleLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
