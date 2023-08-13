import { ReactElement } from 'react';
import header from './Header.module.css';
import Person from '../../interfaces/person';
const Header = (props:Person):ReactElement => {
    return(
        <h1 className={header.settings}>Header {props.name} {props.age}</h1>
    );
}
export default Header;

