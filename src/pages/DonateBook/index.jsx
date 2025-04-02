import { useEffect, useRef, useState } from "react";
import style from "./styles.module.scss";
import bookIcon from "../../assets/book.png";
import toast from "react-hot-toast";
import useFetch from "../../hooks/useFetch";

const DonateBook = () => {
  const [book, setBook] = useState({
    title: "",
    categoria: "",
    autor: "",
    link: "",
  });
  const { error, loading, fetchData } = useFetch("/api/doar", "POST");
  const toastID = useRef(null);

  const toastProps = {
    duration: 4000,
    position: "top-right",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const validateBook = () => {
    const { title, categoria, autor, link } = book;
    if (!title || !categoria || !autor || !link) {
      throw new Error("Preencha todos os campos");
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      validateBook();

      const requestBody = {
        title: book.title,
        category: book.categoria,
        author: book.autor,
        image_url: book.link,
      };

      await fetchData(requestBody);

      toastID.current = toast.success(`Livro ${book.title} doado com sucesso!`, toastProps);
      setBook({
        title: "",
        categoria: "",
        autor: "",
        link: "",
      });
    } catch (e) {
      toastID.current = toast.error(e.message, toastProps);
    }
  };

  const categorias = [
    { value: "", label: "Selecione uma categoria" },
    { value: "romance", label: "Romance" },
    { value: "ficcao", label: "Ficção" },
    { value: "aventura", label: "Aventura" },
    { value: "terror", label: "Terror" },
    { value: "biografia", label: "Biografia" },
    { value: "autoajuda", label: "Autoajuda" },
  ];

  useEffect(() => {
    return () => {
      if (toastID.current) {
        toast.dismiss(toastID.current);
      }
    };
  }, []);

  return (
    <main>
      <div className={style.main_container}>
        <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
      </div>
      <div className={style.main_container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h2>
            <img src={bookIcon} alt="ícone de livro para informações do livro" />
            <span>Informações do Livro</span>
          </h2>
          <input type="text" name="title" placeholder="Título" value={book.title} onChange={handleChange} />
          <select name="categoria" value={book.categoria} onChange={handleChange}>
            {categorias.map((categoria) => (
              <option key={categoria.value} value={categoria.value}>
                {categoria.label}
              </option>
            ))}
          </select>
          <input type="text" name="autor" placeholder="Autor" value={book.autor} onChange={handleChange} />
          <input type="text" name="link" placeholder="Link da imagem" value={book.link} onChange={handleChange} />
          <button type="submit" disabled={loading}>
            <span>{loading ? "Enviando..." : "Doar"}</span>
          </button>
        </form>
      </div>
      <div className={style.main_container}>{error && <p>{error}</p>}</div>
    </main>
  );
};

export default DonateBook;
