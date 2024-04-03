import type {UserData} from '../../api/types';
import {useAppDispatch} from '../../store/hooks';
import {logoutUser} from '../../store/slices/user';
import {Button} from '../Button/Button';
import classes from './UserInfo.module.scss';

interface UserInfoProps extends UserData {
}

export function UserInfo({
    image,
    firstName,
    lastName,
}: UserInfoProps) {
    const dispatch = useAppDispatch();

    return (
        <div className={classes.UserInfo}>
            <img
                className={classes.UserInfo__image}
                src={image}
                alt={`${firstName} ${lastName} avatar`}
            />
            <span className={classes.UserInfo__name}>
                {firstName} {lastName}
            </span>
            <Button
                text="Log out"
                onClick={() => {
                    dispatch(logoutUser());
                }}
            />
        </div>
    );
}
