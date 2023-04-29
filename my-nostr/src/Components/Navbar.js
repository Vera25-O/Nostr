import React from "react";
import { useEffect, useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      
        <h7 className="logo">Nostr</h7>
        <h7>Product</h7>
        <h7>Solutions</h7>
        <h7>Resources</h7>
        <h7>|</h7>
        <h7>Gallery</h7>
        <h7>Pricing</h7>
        <h7>Signing</h7>
        <button className="started">Get Started</button>
    </nav>
    
  );
}
export default Navbar;