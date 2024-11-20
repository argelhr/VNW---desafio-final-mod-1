import React, { useState } from "react";
import styles from "./styles.module.scss";
import protagonista from "../../assets/protagonista.png";
import { useEffect } from "react";
const DonatedBooks = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  const mockBook = { id: 1, title: "O Protagonista", autor: "Susanne Andrade", category: "Ficção", img: protagonista };

  useEffect(() => {
    const timer = Math.random() * 5000;
    setTimeout(() => {
      setBooks([mockBook]);
      setLoading(false);
    }, timer);
  }, []);

  if (loading)
    return (
      <main>
        <Loading />;
      </main>
    );

  if (!books?.length)
    return (
      <main>
        <div className={styles.main_container}>
          <h2>Nenhum livro encontrado</h2>
        </div>
      </main>
    );

  return (
    <main>
      <div className={styles.main_container}>
        <h2>Livros doados</h2>
      </div>
      <div className={styles.books_container}>
        {books?.map((book) => (
          <div key={book.id} className={styles.book_card}>
            <img src={book.img} alt={`Capa do livro ${book.title}`} />
            <h3>{book.title}</h3>
            <p>{book.autor}</p>
            <p>{book.category}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

const Loading = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 700);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.loading_container}>
      <div className={styles.loading}>
        <div /> <span>Carregando {count % 4 === 0 ? "." : ".".repeat(count % 4)}</span>
      </div>
    </div>
  );
};

export default DonatedBooks;
