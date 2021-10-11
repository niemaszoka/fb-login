import React, { useEffect } from 'react';

import {
  useAppDispatch,
  useAppSelector,
} from '../../app/hooks';
import './accounts.scss';
import {
  refreshAccounts,
  selectAccounts,
} from './accountsSlice';
import { Account } from './account/account';


export const Accounts: React.FC = () => {
  const dispatch = useAppDispatch();
  const accountsList = useAppSelector(selectAccounts);

  useEffect(() => {
    dispatch(refreshAccounts());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='accounts'>
      <div className='accounts__header'>ACCOUNTS</div>
      <div className='accounts__list'>
        {accountsList.length ?
            accountsList.map((account) =>
                <Account name={account.name} category={account.category} key={account.id}/>)
            : <p>You have no accounts yet</p>
        }
      </div>
    </div>
  );
};
