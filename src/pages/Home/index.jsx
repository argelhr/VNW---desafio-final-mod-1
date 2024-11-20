import React from "react";
import style from "./styles.module.scss";
import Cards from "./Cards";

const Home = () => {
  return (
    <main>
      <div className={style.main_container}>
        <section className={style.banner}>
          <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
      </div>
      <div className={style.main_container}>
        <section className={style.content}>
          <h2>Por que devo doar?</h2>
          <Cards />
        </section>
      </div>
    </main>
  );
};

export default Home;
