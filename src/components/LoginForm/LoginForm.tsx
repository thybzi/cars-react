import {Form} from 'react-router-dom';
import classes from './LoginForm.module.scss';
import {Button} from '../Button/Button';

export function LoginForm() {
    return (
        <Form
            className={classes.LoginForm}
            method="post"
            navigate={false}
        >
            <input
                className={classes.LoginForm__input}
                name="username"
                placeholder="username"
                required
            />
            <input
                className={classes.LoginForm__input}
                type="password"
                name="password"
                placeholder="password"
                required
            />
            <Button text="Log in" />
        </Form>
    );
}
