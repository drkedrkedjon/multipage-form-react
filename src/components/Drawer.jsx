/* eslint-disable react/prop-types */
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

export default function Drawer({ handleCloseMenu, children }) {
  return (
    <div className="drawer-container">
      <div onClick={handleCloseMenu} className="drawer-backdrop" />
      <FocusLock>
        <RemoveScroll></RemoveScroll>
      </FocusLock>
    </div>
  );
}
