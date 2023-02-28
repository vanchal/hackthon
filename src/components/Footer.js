import React from "react";
import styles from "../components/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.site_footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`col-sm-12 col-md-6`}>
              <h6>About</h6>
              <p className={`text-justify`}>
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </p>
            </div>
        </div>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`col-md-8 col-sm-6 col-xs-12`}>
              <p className={styles.copyright_text}>
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>

            <div className={`col-md-4 col-sm-6 col-xs-12`}>
              <ul className={styles.social_icons}>
                <li>
                  <a className={styles.facebook} href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className={styles.twitter} href="#">
                    <i className={`fa fa-twitter`}></i>
                  </a>
                </li>
                <li>
                  <a className={styles.dribbble} href="#">
                    <i className={`fa fa-dribbble`}></i>
                  </a>
                </li>
                <li>
                  <a className={styles.linkedin} href="#">
                    <i className={`fa fa-linkedin`}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
