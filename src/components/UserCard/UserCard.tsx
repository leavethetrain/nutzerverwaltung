import type { User } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
    <Card sx={{ maxWidth: 350 }}>
      <CardContent>
        <Typography variant="h5">
          {user.firstName} {user.lastName}
        </Typography>

        <Typography variant="body2">Geburtsdatum: {user.birthDate}</Typography>

        <Typography variant="body2">Geschlecht: {user.gender}</Typography>

        <Typography variant="body2">Telefon: {user.phoneNumber}</Typography>

        <Typography variant="body2">E-Mail: {user.email}</Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          onClick={() => navigate(`/create/${user.id}`)}
        >
          Bearbeiten
        </Button>

        <Button variant="outlined" color="error" onClick={handleDelete}>
          Löschen
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserCard;
