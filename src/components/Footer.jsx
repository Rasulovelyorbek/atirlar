import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img className="logoo" src="./img/logo.png" alt="" />
      <div className="futrCard">
        <div>
          <p>
            <i class="fa-solid fa-location-dot"></i>г. Астрахань: ул. Свердлова,
            106;ул. Победы 55А, пав. 10.
          </p>
          <p>
            <i class="fa-solid fa-clock"></i>Ежедневно с 9:00 до 18:00
          </p>
        </div>
        <ul>
          <li>
            <a href="" className="fut-link">
              <i class="fa-brands fa-whatsapp"></i>Мы в Whatsapp
            </a>
          </li>
          <li>
            <a href="" className="fut-link">
              <i class="fa-brands fa-telegram"></i>Мы в Telegram
            </a>
          </li>
          <li>
            <a href="" className="fut-link">
              <i class="fa-solid fa-message"></i>parfumpomotivam@gmail.com
            </a>
          </li>
        </ul>
        <div>
          <p>
            <i class="fa-solid fa-tree-city"></i>ИП РАГИМОВА А.М.К. ИНН
            510704693888
          </p>
        </div>
      </div>
        <p className="par">© Parfumpomotivam 2023 <br /> Политика конфиденциальности</p>
    </div>
  );
};

export default Footer;
