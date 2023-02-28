import React from "react";
import styles from "../components/Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className={styles.nav_container}>
        <div  id={styles.logo}>
          CrikTrik
        </div>
        <div className={styles.list}>
          <ul className={styles.nav_list}>
            <li>
              <i className={`${styles.logo_icon} fa-solid fa-user`}></i>
              {/* <Link to="/Login" className={styles.nav_ele}> */}
                {/* Login/Register */}
              {/* </Link> */}
            </li>
            <li>
              <a href="#!" className={styles.nav_ele}>
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
