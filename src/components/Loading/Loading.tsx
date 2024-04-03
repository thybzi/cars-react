import classes from './Loading.module.scss';

export function Loading() {
    return (
        <div className={classes.Loading}>
            <div className={classes.Loading__text}>Loading...</div>
        </div>
    );
}
