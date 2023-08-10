/* eslint-disable react/prop-types */
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utilities/firebase";
import { useState } from "react";

export default function Login({ setPasos, setUserUID }) {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errorMesasage, setErrorMesasage] = useState("");
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserUID(user.uid);
        setPasos("paso-cuatro");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMesasage(errorMessage);
      });
  }

  function handleLoginForm(e) {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  }

  if (
    loginForm.email.trim() !== "" &&
    loginForm.password.trim() !== "" &&
    btnDisabled
  ) {
    setBtnDisabled(false);
  } else if (
    (loginForm.email.trim() === "" || loginForm.password.trim() === "") &&
    !btnDisabled
  ) {
    setBtnDisabled(true);
  }

  return (
    <div className="pasos-container">
      <div className="pasos-left">
        <div>
          <h2>{"Step One:"}</h2>
          <h3>Login to your existing account</h3>
        </div>

        <p className="pasos-small-p">
          Not have account?{" "}
          <button className="btn-link" onClick={() => setPasos("paso-uno")}>
            Create one!
          </button>
        </p>
      </div>
      <div className="pasos-right">
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            required={true}
            onChange={handleLoginForm}
            value={loginForm.email}
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password:</label>
          <input
            required={true}
            onChange={handleLoginForm}
            value={loginForm.password}
            minLength={8}
            type="password"
            name="password"
            id="password"
          />
          <button disabled={btnDisabled} className="btn-green">
            Login and apply to job!
          </button>
          {errorMesasage && <p className="error-msg">{errorMesasage}</p>}
        </form>
      </div>
    </div>
  );
}
