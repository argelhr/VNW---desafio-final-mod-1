import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import lupa from "../../assets/search.png";
import style from "./styles.module.scss";

const Header = () => {
  const searchInput = useRef(null);

  const onFormClick = () => {
    searchInput.current.focus();
  };

  return (
    <header>
      <div className={style.container_header}>
        <section>
          <Link to="/">
            <figure>
              <img src={logo} alt={"logotipo - livros vai na web"} />
            </figure>
            <h1>
              <span>Livros</span>Vai na Web
            </h1>
          </Link>
        </section>
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              {" "}
              <Link to="/livros_doados">Livro Doados</Link>{" "}
            </li>
            <li>
              <Link to="/quero_doar">Quero doar</Link>
            </li>
          </ul>
        </nav>
        <form onSubmit={(e) => e.preventDefault()} action="#" onClick={onFormClick}>
          <input ref={searchInput} type="search" name="search" placeholder="O que você procura?" />
          <button type="submit">
            <img src={lupa} alt={`ícone de lupa "o que você procura?"`} />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
