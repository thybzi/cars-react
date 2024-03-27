import clsx from 'clsx';
import './Button.scss';

export function Button({
    text,
    auxClass = '',
}) {
    return (
        <div
            className={clsx(['Button', auxClass])}
        >
            {text}
        </div>
    );
}
