import { Link, Outlet } from "react-router-dom";
import "./root.css";
import { Button } from "@mui/material";

function Root() {
  return (
    <div className="root-body">
      <nav className="sidebar-container">
        <Link to="overview">
          <Button variant="contained" className="sidebar-item button">
            Übersicht
          </Button>
        </Link>
        <Link to="create">
          <Button variant="contained" className="sidebar-item button">
            Erstellen
          </Button>
        </Link>
      </nav>
      <main className="main-content">
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Root;
