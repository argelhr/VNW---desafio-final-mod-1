import React from "react";
import community from "../../../assets/community.png";
import reading from "../../../assets/reading.png";
import transform from "../../../assets/transform.png";
import balance from "../../../assets/balance.png";
import style from "./styles.module.scss";

const Cards = () => {
  const cards = [
    {
      id: 1,
      imagem: community,
      alt: "Ícone de pessoas em comunidade",
      texto: " Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.",
    },
    {
      id: 2,
      imagem: reading,
      alt: "Ícone de uma pessoa lendo",
      texto: "Estimula o hábito da leitura e o aprendizado contínuo.",
    },
    {
      id: 3,
      imagem: transform,
      alt: "Ícone de transformação por meio de um livro",
      texto: "Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.",
    },
    {
      id: 4,
      imagem: balance,
      alt: "Ícone de balança simbolizando oportunidades iguais para todos",
      texto: "Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.",
    },
  ];

  return (
    <div className={style.cards}>
      {cards.map((card) => (
        <article key={card.id} className={style.card}>
          <img src={card.imagem} alt={card.alt} />
          <p>{card.texto}</p>
        </article>
      ))}
    </div>
  );
};

export default Cards;
