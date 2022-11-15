import React, { useState } from "react";

function Login({onLogin}) {

const [username, setUsername] = useState("")

function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username}),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Login With Username</h3>
                <label htmlFor="username">Username: </label>
                <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;