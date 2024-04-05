import {Menu} from '../Menu/Menu';
import classes from './Header.module.scss';

export function Header() {
    return (
        <div className={classes.Header}>
            <Menu/>
        </div>
    );
}
