import {NavLink} from 'react-router-dom';
import clsx from 'clsx';
import classes from './Menu.module.scss';

export function Menu() {
    const menuItems = [
        {url: '/', caption: 'Home'},
        {url: '/catalog', caption: 'Catalog'},
    ];

    return (
        <div className={classes.Menu}>
            {menuItems.map(({url, caption}) => ((
                <NavLink
                    key={url}
                    to={url}
                    className={({isActive}) => (clsx([
                        classes.Menu__item,
                        isActive && classes.Menu__item_active,
                    ]))}
                >
                    {caption}
                </NavLink>
            )))}

        </div>
    );
}
