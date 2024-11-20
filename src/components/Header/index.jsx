import logo from "../../assets/logo.png";
import lupa from "../../assets/search.png";
import style from "./styles.module.scss";

const Header = () => {
  return (
    <header>
      <section>
        <figure>
          <img src={logo} alt={"logotipo - livros vai na web"} />
        </figure>
        <h1>Livros Vai na Web</h1>
      </section>
      <nav>
        <ul>
          <li>Início</li>
          <li>Livros Doados</li>
          <li>Quero doar</li>
        </ul>
      </nav>
      <form onSubmit={(e) => e.preventDefault} action="#">
        <input type="text" name="search" />
        <img src={lupa} alt={`ícone de lupa "o que você procura?"`} />
      </form>
    </header>
  );
};

export default Header;
