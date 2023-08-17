/* eslint-disable react/prop-types */
import Drawer from "./Drawer";
import useToggle from "../utilities/useToggle";
import { Menu, Umbrella } from "react-feather";

export default function Header({ setPasos }) {
  const [isMenuOpen, setIsMenuOpen] = useToggle(false);

  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Umbrella strokeWidth={3} color="var(--color-green)" size={26} />
          <a className="link-logo" onClick={() => setPasos("inicio")}>
            Weather App
          </a>
        </div>

        <nav className="header-menu">
          <button
            aria-label="Open Navigation"
            onClick={setIsMenuOpen}
            className="menu-btn"
          >
            <Menu size={26} />
          </button>
          {isMenuOpen && (
            <Drawer handleCloseMenu={setIsMenuOpen}>
              <ul className="nav-list">
                <li>
                  <a href="https://bubulazy.com">My portfolio</a>
                </li>
                <li>
                  <a href="https://github.com/drkedrkedjon">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sasa-savic-perusina/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://bubulazy.com/#form">Contact form</a>
                </li>
                <li>
                  <p className="about-app">
                    This application serves as an exercise project aimed at
                    constructing a multi-page form with Firebase authentication,
                    storage, and database integration as the backend
                    infrastructure. Essentially, it simulates the process of
                    applying for a job opportunity.
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
