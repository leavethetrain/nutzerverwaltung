import "./create.css";

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
      <div>
        <label htmlFor="lastName">Nachname</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Nachname"
          required
        />
      </div>

      <div>
        <label htmlFor="birthDate">Geburtsdatum</label>
        <input type="date" id="birthDate" name="birthDate" required />
      </div>
      <div>
        <label htmlFor="gender">Geburtsdatum</label>
        <select id="gender" name="gender" required>
          <option value="">Bitte auswählen</option>
          <option value="male">Männlich</option>
          <option value="female">Weiblich</option>
          <option value="diverse">Divers</option>
        </select>
      </div>

      <div>
        <label htmlFor="phoneNumber">Telefonnummer</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Telefonnummer"
          pattern="[0-9+\s-]+"
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          required
        />
      </div>

      <button type="submit">Speichern</button>
    </form>
  );
}

export default Create;
