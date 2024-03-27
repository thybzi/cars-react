import clsx from 'clsx';
import classes from './Button.module.scss';

export function Button({
    text,
    auxClass = '',
    ...props
}) {
    return (
        <div
            className={clsx([classes.Button, auxClass])}
            {...props}
        >
            {text}
        </div>
    );
}
