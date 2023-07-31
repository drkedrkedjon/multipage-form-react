import AccordionSIngle from "./AccordionSIngle";

const acordeonData = {
  header: "Why you need one more account?",
  content:
    "We are not going to collect any of your personal data before you make your account. You may ask why? Well, that will make you be able to delete all your personal data after the selection process is done. Be it successful for both sides or not. We do not share that data with anybody aside of our recruiter. He is the only one able to check. So, register and lets se if we can work together and at the end there is a big red button in your account that will delete your data if you wish so.",
};

export default function OpenAccount() {
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
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="confirmar-password">Confirm Password</label>
          <input type="password" name="password" id="confirmar-password" />
          <button className="btn-green">Next Step</button>
        </form>
      </div>
    </div>
  );
}