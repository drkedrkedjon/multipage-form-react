/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utilities/firebase";
import AccordionSIngle from "./AccordionSIngle";
import { useState } from "react";

const acordeonData = {
  header: "Why do I need another account?",
  content:
    "We are not going to collect any of your personal data before you make your account. You may ask why?\n\n Well, that will make you be able to delete all your personal data after the selection process is done. Be it successful  or not. We do not share that data with anybody aside of our recruiter. He is the only one able to check.\n\n So, register and lets se if we can work together and at the end there is a big red button in your account that will delete your data if you wish so. Privacy done well.",
};

export default function OpenAccount({
  handleForm,
  form,
  setPasos,
  setUserUID,
}) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errorMesasage, setErrorMesasage] = useState("");

  function handleRegisterUser(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserUID(user.uid);
        setPasos("paso-dos");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMesasage(errorMessage);
      });
  }

  if (form.password === confirmPassword && btnDisabled) {
    if (form.email && form.password && confirmPassword) {
      setBtnDisabled(false);
    }
  }

  if (form.password !== confirmPassword && !btnDisabled) {
    setBtnDisabled(true);
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
          Already have an account?{" "}
          <button className="btn-link" onClick={() => setPasos("login")}>
            Login Here!
          </button>
        </p>
      </div>
      <div className="pasos-right">
        <form onSubmit={handleRegisterUser}>
          <label htmlFor="email">Email:</label>
          <input
            required={true}
            onChange={handleForm}
            value={form.email}
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">
            Password: <span className="label-span">Min length 8 char.</span>
          </label>
          <input
            required={true}
            onChange={handleForm}
            value={form.password}
            minLength={8}
            type="password"
            name="password"
            id="password"
          />
          <label htmlFor="confirmar-password">
            Confirm Password:{" "}
            {confirmPassword && (
              <span
                className="label-span"
                style={{ color: "var(--color-orange)" }}
              >
                {form.password !== confirmPassword || !confirmPassword
                  ? "Passwords do not match"
                  : "Match"}
              </span>
            )}
          </label>
          <input
            required={true}
            value={confirmPassword}
            minLength={8}
            type="password"
            name="password"
            id="confirmar-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button disabled={btnDisabled} className="btn-green">
            Create Account
          </button>
          {errorMesasage && <p className="error-msg">{errorMesasage}</p>}
        </form>
      </div>
    </div>
  );
}
