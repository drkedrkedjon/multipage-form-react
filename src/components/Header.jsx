import NavBar from "./NavBar";
import { Menu, Umbrella } from "react-feather";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Umbrella stroke-width={3} color="var(--color-green)" size={30} />
          <h1>Weather App</h1>
        </div>
        <div className="header-menu">
          <Menu size={30} />
          {/* <NavBar /> */}
        </div>
      </div>
    </header>
  );
}
