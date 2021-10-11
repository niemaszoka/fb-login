import './logout-button.scss';

import * as React from 'react';

interface ILogoutProps {
    logoutAction: () => void
}

export const LogoutButton: React.FC<ILogoutProps> = (props: ILogoutProps) => {
    return (
        <button className='logout-button button-default' onClick={() => props.logoutAction()}>
            LOGOUT
        </button>
    );
};
