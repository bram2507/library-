import LIBRARY from "../../constants/constats";
import main from "./Main.module.css";
import Book from "../Book/book";

/**
 * The `body` function returns a JSX element representing the body of a web page,
 * including a books section.
 * @returns The body component is being returned. It is a JSX element that
 * represents the body of a web page. It includes a className attribute that is set
 * to the value of the main.settings variable. Inside the body component, there is
 * a div element with a className attribute set to the value of the
 * main.booksSection variable. The content of this div is the result of calling the
 * displayBooksList() function.
 */
const body = () => {
  return (
    <body className={main.settings}>
      {/* <Header name="Nathan" age={27} occupation="Software Developer" /> */}
      <div className={main.booksSection}>{displayBooksList()}</div>
    </body>
  );
};

/**
 * The function `displayBooksList` maps over an array of books in the `LIBRARY`
 * variable and returns a list of book cards.
 * @returns The `displayBooksList` function is returning an array of JSX elements.
 * Each element represents a book card and contains a `Book` component with the
 * book data from the `LIBRARY` array.
 */
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
