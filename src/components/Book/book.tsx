// import bookItem from '../Book/BookItem.module.css';
import { ReactElement } from "react";
import Books from "../../interfaces/books";
import { Card, Skeleton } from "@nextui-org/react";
const Book = (props: Books) => {
  return customSkeletonCardNextUI();

  // <section>
  //     <div>
  //         <img src={props.cover} />
  //     </div>

  //         <ol>
  //             <li>{props.pages}</li>
  //             <li>{props.genre}</li>
  //             <li>{props.year}</li>
  //             <li>{props.ISBN}</li>
  //         </ol>

  // </section>
};

const customSkeletonCardNextUI = (): ReactElement => {
  return (
    <Card className="w-[200px] h-[250px] space-y-5 p-4" radius="lg">
      {skeletonImgSection()}
      {skeletonPropsSetion()}
    </Card>
  );
};

const skeletonImgSection = (): ReactElement => {
  return (
    <Skeleton className="rounded-lg">
      <div className="h-24 rounded-lg bg-default-300"></div>
    </Skeleton>
  );
};

const skeletonPropsSetion = (): ReactElement => {
  return (
    <div className="space-y-3">
      {skeletonTextSM("w-3/5", "rounded-lg")}
      <Skeleton className="w-4/5 rounded-lg">
        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="w-2/5 rounded-lg">
        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
      </Skeleton>
    </div>
  );
};

const skeletonTextSM = (width: string, rounded: string): ReactElement => {
  return (
    <Skeleton className={`${width}` + ` ` + `${rounded}`}>
      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
    </Skeleton>
  );
};
export default Book;
