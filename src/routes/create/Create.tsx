import "./create.css";

import Button from "@mui/material/Button";

function Create() {
  return (
    <form className="form">
      <div className="form-divs">
        <label htmlFor="firstName">Vorname</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Vorname"
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
          required
        />
      </div>

      <div className="form-divs">
        <label htmlFor="birthDate">Geburtsdatum</label>
        <input type="date" id="birthDate" name="birthDate" required />
      </div>
      <div className="form-divs">
        <label htmlFor="gender">Geschlecht</label>
        <select id="gender" name="gender" required>
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
          pattern="[0-9+\s-]+"
        />
      </div>
      <div className="form-divs">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
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
