import LIBRARY from "../../constants/constats";
import main from "./Main.module.css";
import Book from "../Book/book";
// import bookItem from "./../Book/BookItem.module.css";
// import Header from "../Header/header";

const body = () => {
  return (
    <body className={main.settings}>
      {/* <Header name="Nathan" age={27} occupation="Software Developer" /> */}
      <div className={main.booksSection}>{displayBooksList()}</div>
    </body>
  );
};

const displayBooksList = () => {
  return LIBRARY.map((library) => {
    return (
      <div className={main.booksCards}>
        <Book {...library.book} />
      </div>
    );
  });
};

export default body;
