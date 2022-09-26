import * as React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__section">
        <div className="footer__row">
          <div>
            <p className="footer__p text--bold">Ceramint Polska</p>
            <p className="footer__p">ul. Warszawska 60</p>
            <p className="footer__p">15-960, Białystok</p>
          </div>
          <div>
            <p className="footer__p text--bold">Godziny otwarcia:</p>
            <p className="footer__p">Pn-pt: 9:00 - 19:00</p>
            <p className="footer__p">Sob: 12:00 - 16:00</p>
          </div>
        </div>
        <div className="footer__row">
          <div>
            <p className="footer__p text--bold">E-mail:</p>
            <a className="footer__p" href="mailto:kontakt@ceramint.pl">
              kontakt@ceramint.pl
            </a>
          </div>
          <div>
            <a className="footer__link" href="" title="Skontaktuj się z nami">
              Kontakt odnosnik do kontaktu ze strony szkolki
            </a>
            <br />
            <a
              className="footer__link"
              href="/informacje/regulamin"
              title="Polityka prywatności"
            >
              Regulamin
            </a>
            <br />
            <a
              className="footer__link"
              href="/informacje/polityka-prywatnosci"
              title="Polityka prtwatności"
            >
              Polityka prywatności
            </a>
          </div>
        </div>
      </div>
      <div className="footer__section--small">
        <p>® 2022 Wszelkie prawa zastrzeżone</p>
      </div>
    </div>
  );
}
