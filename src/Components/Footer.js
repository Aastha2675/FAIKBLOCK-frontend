import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer__addr">
          <div class="footer__logo"></div>

          <h2>
            <b>
              {" "}
              <FaLocationDot />
              Find us
            </b>
          </h2>

          <address>
            VJTI, Matunga-Mumbai 400019
            <br />
            <a class="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">
              <b>Social</b>
            </h2>

            <ul class="nav__ul">
              <li>
                <a href="/">LinkdeIn</a>
              </li>

              <li>
                <a href="https://github.com/NaikVedhas/Fake-Product-Identification-System">
                  Github
                </a>
              </li>

              <li>
                <a href="/">Twitter</a>
              </li>

              <li>
                <a href="/">Instagram</a>
              </li>
            </ul>
          </li>

          <li class="nav__item nav__item--extra">
            <h2 class="nav__title">
              <b>Useful Links</b>
            </h2>

            <ul class="nav__ul nav__ul--extra">
              <li>
                <a href="#list-item-1">Home</a>
              </li>

              <li>
                <a href="/">Our Service</a>
              </li>

              <li>
                <a href="/LoginSignUp">Login</a>
              </li>

              <li>
                <a href="/JoinUs">Join Us</a>
              </li>

              <li>
                <a href="/#list-item-2">About us</a>
              </li>

              <li>
                <a href="#list-item-3">Statistic</a>
              </li>

              <li>
                <a href="/">Team</a>
              </li>

              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title">
              <b>Legal</b>
            </h2>

            <ul class="nav__ul">
              <li>
                <a href="/">Privacy Policy</a>
              </li>

              <li>
                <a href="/">Terms of Use</a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="legal">
          <p> Copyright &copy; 2024 Something. All rights reserved.</p>

          <div class="legal__links">
            <span>
              <b>
                Made with <span class="heart">♥</span> by{" "}
                <span style={{ color: "#8860D0" }}>Ethereal Elites</span>
              </b>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
