import {Form} from 'react-router-dom';
import {useContext} from 'react';
import clsx from 'clsx';
import {LoginFormContext} from './LoginFormContext';
import classes from './LoginForm.module.scss';
import {Button} from '../Button/Button';

export function LoginForm() {
    const {hasError} = useContext(LoginFormContext);
    const inputClasses = clsx([
        classes.LoginForm__input,
        hasError && classes.LoginForm__input_error,
    ]);

    return (
        <Form
            className={classes.LoginForm}
            method="post"
            navigate={false}
        >
            <input
                className={inputClasses}
                name="username"
                placeholder="username"
                required
            />
            <input
                className={inputClasses}
                type="password"
                name="password"
                placeholder="password"
                required
            />
            <Button text="Log in" />
        </Form>
    );
}
