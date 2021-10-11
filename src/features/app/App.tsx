import React, {
    useEffect,
} from 'react';
import './App.scss';
import {
    Accounts,
    Header,
    initFbSdk,
    loadFbSdkAsynchronously,
    Login,
    refreshLoginData,
    selectIsFbSdkLoaded,
    selectLoginStatus,
    setFbSdkLoaded,
} from 'features';
import {
    useAppDispatch,
    useAppSelector,
} from 'app/hooks';

const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const isFbSdkLoaded: boolean = useAppSelector(selectIsFbSdkLoaded);
    const userLoginStatus: string = useAppSelector(selectLoginStatus);

    useEffect(() => {
        // Sets initialization function of FB SDK that will be called from SDK script
        (window as any).fbAsyncInit = () => {
            initFbSdk();
            dispatch(setFbSdkLoaded(true));
        };
        loadFbSdkAsynchronously();
    });

    useEffect(() => {
        if (isFbSdkLoaded) {
            dispatch(refreshLoginData());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFbSdkLoaded]);


    return (
        <div className="App">
          <Header />
          <div className="content">
            {isFbSdkLoaded ? (
                userLoginStatus === 'notAuthenticated' ? <Login/> : (
                    userLoginStatus === 'loggedIn' ? <Accounts/> : null)
            ) : null}
          </div>
          <footer>
          </footer>
        </div>
  );
};

export default App;
