import {useRouteError} from 'react-router-dom';
import classes from './ErrorBoundary.module.scss';

export function ErrorBoundary() {
    const error = useRouteError() as Error;

    return (
        <div className={classes.ErrorBoundary}>
            {error.message}
        </div>
    );
}
