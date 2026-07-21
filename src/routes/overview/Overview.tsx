import UserCard from "../../components/UserCard/UserCard";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Overview() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext fehlt");
  }

  const { users } = context;

  return (
    <div>
      <h1>User Übersicht</h1>

      {users.map((user) => (
        <UserCard key={user.email} user={user} />
      ))}
    </div>
  );
}

export default Overview;
