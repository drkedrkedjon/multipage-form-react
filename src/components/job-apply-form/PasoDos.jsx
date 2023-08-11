/* eslint-disable react/prop-types */
import AccordionSIngle from "./AccordionSIngle";

const acordeonData = {
  header: "Can I use false name?",
  content:
    "Just like a superhero's secret identity keeps them safe, using a false name can be a user's invisible cloak in the online realm. While it may sound mischievous, there are valid reasons behind this digital sleight-of-hand:\n\n Privacy Shield: With cyber threats lurking everywhere, safeguarding personal data is crucial. By adopting an alias during the data submission process, users can shield their real identities from potential threats and data breaches.\n\n YES, YOU CAN USE A FALSE NAME.",
};

export default function PasoDos({ handleForm, form, setPasos }) {
  function handleSubmit(e) {
    e.preventDefault();
    setPasos("paso-tres");
  }

  return (
    <div className="pasos-container">
      <div className="pasos-left">
        <div>
          <h2>{"Step Two: (2/4)"}</h2>
          <h3>Your Personal Data</h3>
        </div>
        <AccordionSIngle
          header={acordeonData.header}
          content={acordeonData.content}
        />
      </div>
      <div className="pasos-right">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            required
            onChange={handleForm}
            value={form.name}
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            required
            onChange={handleForm}
            value={form.phone}
            type="number"
            name="phone"
            id="phone"
          />
          <div className="water-resistant">
            <label htmlFor="water-resistant">🌧️ Are You Water Resistant?</label>
            <input
              required
              type="checkbox"
              name="waterResistant"
              id="water-resistant"
              checked={form.waterResistant}
              onChange={handleForm}
            />
          </div>
          <button className="btn-green">Next Step</button>
        </form>
      </div>
    </div>
  );
}
