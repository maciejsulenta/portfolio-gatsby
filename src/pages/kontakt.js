import React from "react";
import Header from "../components/Header";
import "../styles/contact.scss";

export default function kontakt() {
  return (
    <>
      <Header />
      <section className="contact">
        <div className="contact__heading">
          <h1 className="contact__title">Odzywaj się śmiało!</h1>
        </div>
        <div className="contact__data">
          <div className="contact__details">
            <h2 className="contact__subtitle">Pozostańmy w kontakcie</h2>
            <div className="contact__info">
              <p>Jan Nowak</p>
              <p>+48 997 997 997</p>
              <p>ul. Lubelska 23/6</p>
              <p>997 Lublin</p>
            </div>
          </div>
          <div className="contact__details">
            <h2 className="contact__subtitle">Jesteśmy też na</h2>
            <div className="contact__info">
              <a
                href="https://facebook.com"
                target="_blank"
                className="contact__link"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="contact__link"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="contact__link"
              >
                Instagram
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                className="contact__link"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
