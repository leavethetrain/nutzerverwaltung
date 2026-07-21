import "./create.css";

import Button from "@mui/material/Button";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    phoneNumber: "",
    email: "",
  });

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext fehlt");
  }

  const { addUser } = context;

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

    addUser(user);

    setUser({
      firstName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      phoneNumber: "",
      email: "",
    });

    navigate("/overview");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-divs">
        <label htmlFor="firstName">Vorname</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Vorname"
          value={user.firstName}
          onChange={handleUserInput}
          required
        />
      </div>
      <div className="form-divs">
        <label htmlFor="lastName">Nachname</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Nachname"
          value={user.lastName}
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
          <option value="male">Männlich</option>
          <option value="female">Weiblich</option>
          <option value="diverse">Divers</option>
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

      <Button className="submit-button" variant="contained" type="submit">
        Speichern
      </Button>
    </form>
  );
}

export default Create;
