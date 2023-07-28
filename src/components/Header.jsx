import Drawer from "./Drawer";
import useToggle from "../utilities/useToggle";
import { Menu, Umbrella } from "react-feather";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useToggle(false);

  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Umbrella strokeWidth={3} color="var(--color-green)" size={30} />
          <p>Weather App</p>
        </div>

        <div className="header-menu">
          <button className="menu-btn">
            <Menu size={30} />
          </button>
          {isMenuOpen && (
            <Drawer>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Gallery</a>
                </li>
                <li>
                  <a href="">Photographers</a>
                </li>
                <li>
                  <a href="">Submit Work</a>
                </li>
              </ul>
            </Drawer>
          )}
        </div>
      </div>
    </header>
  );
}
