import clsx from 'clsx';
import './Button.css';

export function Button({
    text,
    auxClass = '',
    ...props
}) {
    return (
        <div
            className={clsx(['Button', auxClass])}
            {...props}
        >
            {text}
        </div>
    );
}
