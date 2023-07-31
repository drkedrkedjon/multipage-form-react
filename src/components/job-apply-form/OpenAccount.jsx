export default function OpenAccount() {
  return (
    <div className="pasos-container">
      <div className="pasos-left">
        <div>
          <h2>{"Step One: (1/3)"}</h2>
          <h3>Open an account</h3>
        </div>
        <p>Acordeon</p>
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
