import React, { useEffect, useRef, useState } from "react";
import "./ChatMenu.css";

export default function ChatMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const close = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="menu-wrapper" ref={menuRef}>
      <button
        className="menu-trigger"
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
          setOpen(o => !o);
        }}
      >
        ⋯
      </button>

      {open && (
        <div className="menu-dropdown">
          <button>✏️ Rename</button>
          <button>📦 Archive</button>
          <button className="danger">🗑 Delete</button>
        </div>
      )}
    </div>
  );
}
