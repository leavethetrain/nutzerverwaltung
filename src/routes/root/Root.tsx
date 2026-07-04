import { Link, Outlet } from "react-router-dom";
import "./root.css";

function Root() {
  return (
    <div className="root-body">
      <nav className="sidebar-container">
        <Link to="overview">
          <button className="sidebar-item">Übersicht</button>
        </Link>
        <Link to="create">
          <button className="sidebar-item">Erstellen</button>
        </Link>
        <Link to="edit">
          <button>Bearbeiten</button>
        </Link>
      </nav>
      <main className="main-content">
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Root;
