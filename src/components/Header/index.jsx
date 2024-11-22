import { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import lupa from "../../assets/search.png";
import style from "./styles.module.scss";

const Header = () => {
  const searchInput = useRef(null);
  const checkRef = useRef(null);

  const onFormClick = () => {
    searchInput.current.focus();
  };

  return (
    <header>
      <div className={style.container_header}>
        <section>
          <NavLink to="/">
            <figure>
              <img src={logo} alt={"logotipo - livros vai na web"} />
            </figure>
            <h1>
              <span>Livros</span>Vai na Web
            </h1>
          </NavLink>
          <div className={style.menu} onClick={() => checkRef.current.click()}>
            <input type="checkbox" ref={checkRef} />
            <div />
            <div />
            <div />
          </div>
        </section>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? style.active : "")}>
                Início
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/livros_doados" className={({ isActive }) => (isActive ? style.active : "")}>Livros doados</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/quero_doar" className={({ isActive }) => (isActive ? style.active : "")}>Quero doar</NavLink>
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
