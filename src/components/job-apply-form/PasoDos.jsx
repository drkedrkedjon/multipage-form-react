/* eslint-disable react/prop-types */
import AccordionSIngle from "./AccordionSIngle";

const acordeonData = {
  header: "Can I use false name?",
  content:
    "Just like a superhero's secret identity keeps them safe, using a false name can be a user's invisible cloak in the online realm. While it may sound mischievous, there are valid reasons behind this digital sleight-of-hand:\n\n Privacy Shield: With cyber threats lurking everywhere, safeguarding personal data is crucial. By adopting an alias during the data submission process, users can shield their real identities from potential threats and data breaches.\n\n Pseudonymous Prowess: Sometimes, users might want to share their opinions or experiences without revealing their true selves. A false name grants them the freedom to express without fear of judgment or backlash.",
};

export default function OpenAccount({ handleForm, form }) {
  return (
    <div className="pasos-container">
      <div className="pasos-left">
        <div>
          <h2>{"Step One: (1/3)"}</h2>
          <h3>Open an account</h3>
        </div>
        <AccordionSIngle
          header={acordeonData.header}
          content={acordeonData.content}
        />
        <p className="pasos-small-p">
          Already have an account? <a href="#">Login Here!</a>
        </p>
      </div>
      <div className="pasos-right">
        <form>
          <label htmlFor="email">Email</label>
          <input
            required
            onChange={handleForm}
            value={form.email}
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            required
            onChange={handleForm}
            value={form.password}
            type="password"
            name="password"
            id="password"
          />
          <label htmlFor="confirmar-password">Confirm Password</label>
          <input
            required
            type="password"
            name="password"
            id="confirmar-password"
          />
          <button className="btn-green">Create Account</button>
        </form>
      </div>
    </div>
  );
}
