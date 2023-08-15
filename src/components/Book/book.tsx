// import bookItem from '../Book/BookItem.module.css';
import { ReactElement } from "react";
import Books from "../../interfaces/books";
import { Card, Skeleton } from "@nextui-org/react";

/**
 * The function `Book` returns a custom skeleton card component for a book.
 * @param {Books} props - The `props` parameter is an object that contains the
 * properties of the `Books` component. These properties can be accessed using dot
 * notation, for example `props.title` or `props.author`.
 * @returns a custom skeleton card component from the Next.js UI library.
 */
const Book = (props: Books): ReactElement => {
  return customSkeletonCardNextUI();
};

/**
 * The function returns a custom skeleton card component with specific styling.
 * @returns a React element.
 */
const customSkeletonCardNextUI = (): ReactElement => {
  return skeletonCardCustom("w-[200px]", "h-[220px", "space-y-5", "p-4", "lg");
};

/**
 * The function `skeletonCardCustom` returns a React element that renders a card
 * with custom dimensions, spacing, padding, and border radius, along with skeleton
 * image and property sections.
 * @param {string} width - The `width` parameter is a string that represents the
 * width of the skeleton card. It can be any valid CSS value for width, such as
 * pixels (e.g., "300px") or percentage (e.g., "50%").
 * @param {string} height - The `height` parameter in the `skeletonCardCustom`
 * function is a string that represents the desired height of the card component.
 * @param {string} space_y - The "space_y" parameter represents the vertical
 * spacing between the elements inside the card. It determines the amount of space
 * between the skeleton image section and the skeleton props section within the
 * card.
 * @param {string} padding - The `padding` parameter is used to specify the padding
 * of the skeleton card. Padding is the space between the content of an element and
 * its border. It can be specified in different units such as pixels (px), em, or
 * percentage (%).
 * @param {string} radius - The `radius` parameter in the `skeletonCardCustom`
 * function is used to specify the border radius of the card component. It
 * determines the roundness of the corners of the card.
 * @returns a React element, which is a JSX expression wrapped in parentheses. The
 * JSX expression is creating a `<Card>` component with a className prop that is
 * being set using the `getClass` and `getRadius` functions. The
 * `skeletonImgSection` and `skeletonPropsSetion` functions are also being called
 * and their return values are being rendered as children of the `<Card
 */
const skeletonCardCustom = (
  width: string,
  height: string,
  space_y: string,
  padding: string,
  radius: string
): ReactElement => {
  return (
    <Card
      className={
        getClass(width, height, space_y, padding) + space() + getRadius(radius)
      }
    >
      {skeletonImgSection()}
      {skeletonPropsSetion()}
    </Card>
  );
};

/**
 * The `getClass` function takes in four string parameters and returns a
 * concatenated string of those parameters.
 * @param {string} width - The `width` parameter represents the width of an
 * element. It is expected to be a string value.
 * @param {string} height - The `height` parameter is a string that represents the
 * height of an element.
 * @param {string} space_y - The `space_y` parameter represents the vertical
 * spacing between elements.
 * @param {string} padding - The `padding` parameter is a string that represents
 * the amount of space between the content and the border of an element. It is used
 * to create space around the content within an element.
 * @returns The function `getClass` returns a string that concatenates the values
 * of the `width`, `height`, `space_y`, and `padding` parameters, separated by
 * spaces.
 */
const getClass = (
  width: string,
  height: string,
  space_y: string,
  padding: string
): string => {
  return (
    `${width}` + ` ` + `${height}` + ` ` + `${space_y}` + ` ` + `${padding}`
  );
};
/**
 * The function "getRadius" takes a string parameter "radius" and returns a string
 * that concatenates the word "radius" with the value of the "radius" parameter.
 * @param {string} radius - string
 * @returns a string that concatenates the word "radius", the equal sign "=", and
 * the value of the input parameter "radius".
 */
const getRadius = (radius: string): string => {
  const stringRadius = "radius" + "=" + `${radius}`;
  return stringRadius;
};

const space = (): string => {
  return " ";
};

/**
 * The function returns a skeleton image section component in TypeScript React.
 * @returns The skeletonImgSection function is returning a React element.
 */
const skeletonImgSection = (): ReactElement => {
  return (
    <Skeleton className="rounded-lg">
      <div className="h-24 rounded-lg bg-default-300"></div>
    </Skeleton>
  );
};

/* The `skeletonPropsSetion` function is returning a React element that represents
a section of the skeleton card component. It renders a `<div>` element with a
className of "space-y-3", which adds vertical spacing between its child
elements. The child elements are four instances of the `skeletonTextSM`
function, each with different width and rounded parameters. These child elements
render a `<Skeleton>` component with a className that combines the width and
rounded parameters. Inside the `<Skeleton>` component, there is a `<div>`
element with a className of "h-3 w-3/5 rounded-lg bg-default-200", which
represents a placeholder for the skeleton text. */
const skeletonPropsSetion = (): ReactElement => {
  return (
    <div className="space-y-3">
      {skeletonTextLG("w-4/5", "rounded-lg")}
      {skeletonTextSM("w-3/5", "rounded-lg")}
      {skeletonTextSM("w-3/5", "rounded-lg")}
      {skeletonTextSM("w-3/5", "rounded-lg")}
    </div>
  );
};

/**
 * The function `skeletonTextSM` returns a React element that renders a skeleton
 * text with a specified width and rounded corners.
 * @param {string} width - The `width` parameter is a string that represents the
 * width of the skeleton element. It can be any valid CSS width value, such as
 * "100px", "50%", or "auto".
 * @param {string} rounded - The `rounded` parameter is a string that determines
 * the type of rounding to be applied to the skeleton element. It can have the
 * following values:
 * @returns A React element is being returned.
 */
const skeletonTextSM = (width: string, rounded: string): ReactElement => {
  return (
    <Skeleton className={`${width}` + ` ` + `${rounded}`}>
      <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
    </Skeleton>
  );
};

/**
 * The function `skeletonTextLG` returns a React element that renders a skeleton
 * text with a specified width and rounded corners.
 * @param {string} width - The `width` parameter is a string that represents the
 * width of the skeleton element. It can be any valid CSS width value, such as
 * "100%", "50px", "auto", etc.
 * @param {string} rounded - The "rounded" parameter is a string that determines
 * the type of rounding to be applied to the skeleton element. It can have the
 * following values:
 * @returns A React element is being returned.
 */
const skeletonTextLG = (width: string, rounded: string): ReactElement => {
  return (
    <Skeleton className={`${width}` + ` ` + `${rounded}`}>
      <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
    </Skeleton>
  );
};

export default Book;
