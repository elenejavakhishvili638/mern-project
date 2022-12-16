import React, { useRef } from "react";
import "./sideDrawer.css";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

const SideDrawer = ({ children, show, onClick }) => {
  const nodeRef = useRef(null);
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <aside className="side-drawer" onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
