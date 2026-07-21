import type { User } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

type UserCardType = {
  user: User;
};

function UserCard({ user }: UserCardType) {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext fehlt");
  }
  const { deleteUser } = context;

  function handleDelete() {
    const deleteUsers = window.confirm(
      "Wollen Sie den Nutzer wirklich löschen?",
    );

    if (deleteUsers) {
      deleteUser(user.id);
    }
  }

  return (
    <div className="user-card">
      <h2>
        {user.firstName} {user.lastName}
      </h2>

      <p>Geburtsdatum: {user.birthDate}</p>
      <p>Geschlecht: {user.gender}</p>
      <p>Telefon: {user.phoneNumber}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => navigate(`/create/${user.id}`)}>Edit</button>
      <button onClick={handleDelete}>löschen</button>
    </div>
  );
}

export default UserCard;
