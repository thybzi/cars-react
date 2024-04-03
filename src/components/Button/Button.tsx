import clsx from 'clsx';
import classes from './Button.module.scss';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    text: string
    auxClass?: string
    type?: 'submit' | 'reset' | 'button'
}

export function Button({
    text,
    auxClass = '',
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx([classes.Button, auxClass])}
            {...props}
        >
            {text}
        </button>
    );
}
