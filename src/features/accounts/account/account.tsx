import './account.scss';

import * as React from 'react';

interface IAccountProps {
    name: string,
    category: string,
}

export const Account: React.FC<IAccountProps> = (props: IAccountProps) => {
    return (
        <div className='account'>
            <p className='account__name'>{props.name}</p>
            <p className='account__category'>category: {props.category}</p>
        </div>
    );
};
