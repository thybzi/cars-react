import clsx from 'clsx';
import classes from './Button.module.scss';

interface ButtonProps extends React.HTMLProps<HTMLDivElement> {
    text: string
    auxClass: string
}

export function Button({
    text,
    auxClass = '',
    ...props
}: ButtonProps) {
    return (
        <div
            className={clsx([classes.Button, auxClass])}
            {...props}
        >
            {text}
        </div>
    );
}
