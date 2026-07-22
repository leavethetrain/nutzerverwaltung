import UserCard from "../../components/UserCard/UserCard";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./overview.css";

function Overview() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext fehlt");
  }

  const { users } = context;

  return (
    <div className="user-card-container">
      <h1>Übersicht</h1>

      <div className="user-cards">
        {users.map((user) => (
          <UserCard key={user.email} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Overview;
