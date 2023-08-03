/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utilities/firebase";
import AccordionSIngle from "./AccordionSIngle";

const acordeonData = {
  header: "Why do I need another account?",
  content:
    "We are not going to collect any of your personal data before you make your account. You may ask why?\n\n Well, that will make you be able to delete all your personal data after the selection process is done. Be it successful  or not. We do not share that data with anybody aside of our recruiter. He is the only one able to check.\n\n So, register and lets se if we can work together and at the end there is a big red button in your account that will delete your data if you wish so. Privacy done well.",
};

export default function OpenAccount({ handleForm, form, setPasos }) {
  function handleRegisterUser(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setPasos("paso-dos");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }

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
        <form onSubmit={handleRegisterUser}>
          <label htmlFor="email">Email</label>
          <input
            // required
            onChange={handleForm}
            value={form.email}
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            // required
            onChange={handleForm}
            value={form.password}
            type="password"
            name="password"
            id="password"
          />
          <label htmlFor="confirmar-password">Confirm Password</label>
          <input
            // required
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
