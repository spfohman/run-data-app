import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function NavBar({ logout }) {
  const history = useHistory();
  function handleLogout() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then(() => {
      logout();
      history.push("/");
    });
  }
  return (
    <>
      <div className="navbar">
        <button onClick={handleLogout}>Logout</button>

        <NavLink to="/Home">
          <button className="button">Home</button>
        </NavLink>
        <NavLink to="/AddRun">
          <button className="button">Add A Run</button>
        </NavLink>
        <NavLink to="/FindData">
          <button className="button">Find Data</button>
        </NavLink>
      </div>
    </>
  );
}
export default NavBar;
