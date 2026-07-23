import "./create.css";

import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import type { User } from "../../context/UserContext";

function Create() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    id: "",
    userName: "",
    birthDate: "",
    gender: "",
    phoneNumber: "",
    email: "",
    website: "",
    postId: "",
  });
  const { id } = useParams();
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext fehlt");
  }

  const { addUser, updateUser, users } = context;

  useEffect(() => {
    if (id) {
      const savedUser = users.find((user) => user.id === id);

      if (savedUser) {
        setUser(savedUser);
      }
    }
  }, [id, users]);

  function handleUserInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (id) {
      updateUser(user);
    } else {
      addUser({ ...user, id: crypto.randomUUID() });
    }

    setUser({
      id: "",
      userName: "",
      birthDate: "",
      gender: "",
      phoneNumber: "",
      email: "",
      website: "",
      postId: "",
    });

    navigate("/overview");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-divs">
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Username"
          value={user.userName}
          onChange={handleUserInput}
          required
        />
      </div>

      <div className="form-divs">
        <label htmlFor="birthDate">Geburtsdatum</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={user.birthDate}
          onChange={handleUserInput}
          required
        />
      </div>

      <div className="form-divs">
        <label htmlFor="gender">Geschlecht</label>
        <select
          id="gender"
          name="gender"
          value={user.gender}
          onChange={handleUserInput}
          required
        >
          <option value="">Bitte auswählen</option>
          <option value="Männlich">Männlich</option>
          <option value="Weiblich">Weiblich</option>
          <option value="Divers">Divers</option>
        </select>
      </div>

      <div className="form-divs">
        <label htmlFor="phoneNumber">Telefonnummer</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Telefonnummer"
          value={user.phoneNumber}
          onChange={handleUserInput}
          pattern="[0-9]+"
        />
      </div>
      <div className="form-divs">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleUserInput}
          placeholder="E-mail"
          required
        />
      </div>

      <div className="form-divs">
        <label htmlFor="postId">Adresse</label>
        <input
          type="text"
          id="postId"
          name="postId"
          placeholder="Adresse"
          value={user.postId}
          onChange={handleUserInput}
          required
        />
      </div>

      <div className="form-divs">
        <label htmlFor="website">Webseite</label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="Webseite"
          value={user.website}
          onChange={handleUserInput}
          required
        />
      </div>

      <Button className="submit-button" variant="contained" type="submit">
        Speichern
      </Button>
    </form>
  );
}

export default Create;
