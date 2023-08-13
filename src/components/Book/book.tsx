import bookItem from './BookItem.module.css';
import Books from '../../interfaces/books';
const Book = (props:Books) => {
    return(
       
            <section className={bookItem.booksCards}>
                <div>
                    <img src={props.cover} />
                </div>
                {/* <div>
                    <ol>
                        <li>{props.pages}</li>
                        <li>{props.genre}</li> 
                        <li>{props.year}</li> 
                        <li>{props.ISBN}</li>
                    </ol>
                </div> */}
            </section>
           
    );
};

export default Book;