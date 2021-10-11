import './header.scss';

import * as React from 'react';
import {
    useAppDispatch,
    useAppSelector,
} from 'app/hooks';
import {
    logoutFb,
    selectIsUserLoggedIn,
} from 'features/login';
import { LogoutButton } from './logout-button/logoutButton';

export const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const showLogoutButton = useAppSelector(selectIsUserLoggedIn);
    const logout = () => dispatch(logoutFb());

    return (
        <div className='header'>
            <p className='header__title'>All your facebook pages. In one place.</p>
            {showLogoutButton ? <LogoutButton logoutAction={logout}/> : null}
        </div>
    );
};
