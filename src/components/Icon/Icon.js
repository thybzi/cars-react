import clsx from 'clsx';
import './Icon.scss';

export function Icon({
    name,
    auxClass = '',
}) {
    return (
        <div
            className={clsx([
                'Icon',
                `Icon_${name}`,
                auxClass,
            ])}
        />
    );
}
