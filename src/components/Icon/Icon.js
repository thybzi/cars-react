import clsx from 'clsx';
import classes from './Icon.module.scss';

export function Icon({
    name,
    auxClass = '',
}) {
    return (
        <div
            className={clsx([
                classes.Icon,
                classes[`Icon_${name}`],
                auxClass,
            ])}
        />
    );
}
