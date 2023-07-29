/* eslint-disable react/prop-types */
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { X as Close } from "react-feather";

export default function Drawer({ handleCloseMenu, children }) {
  return (
    <div className="drawer-container">
      <div onClick={handleCloseMenu} className="drawer-backdrop" />
      <FocusLock>
        <RemoveScroll>
          <div className="drawer-content">
            <div>{children}</div>
            <button onClick={handleCloseMenu} className="drawer-close-btn">
              <Close size={18} /> Dismiss
            </button>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
