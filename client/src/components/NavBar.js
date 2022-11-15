import React from 'react';
import { Link } from 'react-router-dom'

function NavBar({ user, onLogout}) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
          }).then(() => onLogout());
    }

    return(
        <header>
            {user ? (
                <div>
                    <p>Welcome, {user.username}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <Link to="/login">Click Here to Login</Link>
            )}
        </header>
    );
}

export default NavBar;