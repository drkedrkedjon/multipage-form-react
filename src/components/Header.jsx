import Drawer from "./Drawer";
import useToggle from "../utilities/useToggle";
import { Menu, Umbrella } from "react-feather";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useToggle(false);

  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Umbrella strokeWidth={3} color="var(--color-green)" size={26} />
          <span>Weather App</span>
        </div>

        <nav className="header-menu">
          <button onClick={setIsMenuOpen} className="menu-btn">
            <Menu size={26} />
          </button>
          {isMenuOpen && (
            <Drawer handleCloseMenu={setIsMenuOpen}>
              <ul className="nav-list">
                <li>
                  <a href="">My portafolio</a>
                </li>
                <li>
                  <a href="">LinkedIn</a>
                </li>
                <li>
                  <a href="">Contact form</a>
                </li>
                <li>
                  <p>
                    jkhg sghjsd sdfgh sdfhg sdfgshdfg sdfhg sdfgskldjfg sdjhfg
                    sdflgjhsdf sdkfhg sdfg sd
                  </p>
                </li>
              </ul>
            </Drawer>
          )}
        </nav>
      </div>
    </header>
  );
}
