import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
const DonatedBooks = () => {
  const { data, error, loading } = useFetch("/api/livros");

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );

  if (!error) {
    return (
      <main>
        <div className={styles.main_container}>
          <h2>Houve algum problema ao recuperar os livros</h2>
          <p>Tente novamente mais tarde!</p>
          <p>Erro: {error}</p>
        </div>
      </main>
    );
  }

  if (!data?.length)
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
        {data?.map((book) => (
          <div key={book.id} className={styles.book_card}>
            <img src={book.image_url} alt={`Capa do livro ${book.title}`} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
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
