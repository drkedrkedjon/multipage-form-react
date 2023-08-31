/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { X as Close } from "react-feather";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function JobModal({ handleCloseMenu, children }) {
  useEffect(() => {
    const focuedElementBeforeOpen = document.activeElement;
    return () => {
      focuedElementBeforeOpen?.focus();
    };
  }, []);

  useEffect(() => {
    function handleEsc(e) {
      if (e.code === "Escape") {
        handleCloseMenu(null);
      }
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return createPortal(
    <div className="job-modal-container">
      <div
        onClick={() => handleCloseMenu(null)}
        className="job-modal-backdrop"
      />
      <FocusLock>
        <RemoveScroll>
          <div className="job-modal-content">
            <div>{children}</div>
            <button
              onClick={() => handleCloseMenu(null)}
              className="job-modal-close-btn"
            >
              <Close size={18} /> Dismiss
            </button>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>,
    document.querySelector("#job-modal-root")
  );
}
