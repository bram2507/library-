
import { ReactElement } from 'react';
import LIBRARY from '../../constants/constats';
import main from './Main.module.css';
import Book from '../Book/book';
import bookItem from './../Book/BookItem.module.css';
import Header from '../Header/header';


const body = ():ReactElement => {
  
   return(
      <body className={main.settings}>

         {/* <Header name="Nathan" age={27} occupation="Software Developer" />
         <div className={main.booksGrid}>
         <section className={bookItem.booksCardsList}>
            {{displayBooksList()}; }
     
         </section>
           
         </div> */}

       
        
      </body>
      
      
   );
}; 

// const displayBooksList = () =>{
//    return(
//       LIBRARY.map( (library) => {
//          return (
//              <Book {...library.book} />
//          )
//        })
//    );
// }

export default body;