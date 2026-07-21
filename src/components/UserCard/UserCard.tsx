import type { User } from "../../context/UserContext";

type UserCardType = {
  user: User;
};

function UserCard({ user }: UserCardType) {
  return (
    <div className="user-card">
      <h2>
        {user.firstName} {user.lastName}
      </h2>

      <p>Geburtsdatum: {user.birthDate}</p>
      <p>Geschlecht: {user.gender}</p>
      <p>Telefon: {user.phoneNumber}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserCard;
