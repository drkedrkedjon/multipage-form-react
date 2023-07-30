/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { X as Close } from "react-feather";
import { useEffect } from "react";

export default function Drawer({ handleCloseMenu, children }) {
  useEffect(() => {
    const focuedElementBeforeOpen = document.activeElement;
    return () => {
      focuedElementBeforeOpen?.focus();
    };
  }, []);

  useEffect(() => {
    function handleEsc(e) {
      if (e.code === "Escape") {
        handleCloseMenu();
      }
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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
