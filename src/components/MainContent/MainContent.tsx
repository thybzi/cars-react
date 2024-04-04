import classes from './MainContent.module.scss';

interface MainContentProps extends React.HTMLProps<HTMLDivElement> {
}

export function MainContent({
    children,
}: MainContentProps) {
    return (
        <div className={classes.MainContent}>
            {children}
        </div>
    );
}
