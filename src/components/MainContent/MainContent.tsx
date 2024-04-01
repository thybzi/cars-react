import classes from './MainContent.module.scss';

export function MainContent({
    children,
}) {
    return (
        <div className={classes.MainContent}>
            {children}
        </div>
    );
}
