import React from "react";
import style from "./styles.module.scss";
import facebook from "../../assets/facebook.png";
import x from "../../assets/x.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className={style.footer_container}>
        <a href="https://www.youtube.com/watch?v=JQuqkk7deOc" target="_blank" rel="noopener noreferrer" aria-label="Ligar para o número 4 0 0 2 2 8 9 2 2 e pedir playstation, playstation, playstation">
          4002-8922
        </a>
        <aside>
          <ul>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Link para a página do Facebook">
                <img src={facebook} alt="Logotipo do Facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Link para a página do X">
                <img src={x} alt="Logotipo do Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Link para a página do YouTube">
                <img src={youtube} alt="Logotipo do YouTube" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Link para a página do LinkedIn">
                <img src={linkedin} alt="Logotipo do LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Link para a página do Instagram">
                <img src={instagram} alt="Logotipo do Instagram" />
              </a>
            </li>
          </ul>
        </aside>
      </div>
      <div className={style.footer_container}></div>
    </footer>
  );
};

export default Footer;
