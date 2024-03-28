import {NavLink} from 'react-router-dom';
import clsx from 'clsx';
import './Menu.scss';

export function Menu() {
    const menuItems = [
        {url: '/', caption: 'Home'},
        {url: '/catalog', caption: 'Catalog'},
    ];

    return (
        <div className="Menu">
            {menuItems.map(({url, caption}) => ((
                <NavLink
                    key={url}
                    to={url}
                    className={({isActive}) => (clsx([
                        'Menu__item',
                        isActive && 'Menu__item_active',
                    ]))}
                >
                    {caption}
                </NavLink>
            )))}

        </div>
    );
}
