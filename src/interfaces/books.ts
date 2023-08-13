interface Books {
    pages:number;
    genre:string;
    title:string;
    cover:string;
    synopsis:string;
    year:number;
    ISBN:string;
    author: {
        name:string
        otherBooks: string[];
    }
};

export default Books;