import clsx from 'clsx';
import classes from './Icon.module.scss';

interface IconProps {
    name: string
    auxClass: string
}

export function Icon({
    name,
    auxClass = '',
}: IconProps) {
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
