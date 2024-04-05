import {useAppSelector} from '../../store/hooks';
import {LoginForm} from '../LoginForm/LoginForm';
import {Menu} from '../Menu/Menu';
import {UserInfo} from '../UserInfo/UserInfo';
import classes from './Header.module.scss';

export function Header() {
    const userData = useAppSelector(({user}) => (user.data));

    return (
        <div className={classes.Header}>
            <Menu/>
            {userData ? <UserInfo {...userData}/> : <LoginForm/>}
        </div>
    );
}
