const defaultAppId: string = ''; // INSERT FB APP ID HERE
const defaultFbSdkVersion: string = '12.0';
declare var FB: facebook.FacebookStatic;

export const initFbSdk = (appId: string = defaultAppId, version: string = defaultFbSdkVersion) => {
    if (!appId || !appId.length) {
        window.alert('You need to provide app Id');
        return;
    }
    FB.init({
        appId,
        autoLogAppEvents : true,
        xfbml            : true,
        version: `v${version}`,
    });
};

export const loadFbSdkAsynchronously = () => {
    const elementId = 'facebook-jssdk';
    const firstScriptElement: HTMLScriptElement = document.getElementsByTagName('script')[0] as HTMLScriptElement;
    if (document.getElementById(elementId)) {
        // element already exists
        return;
    }
    const fjs:HTMLScriptElement = firstScriptElement;
    const js:HTMLScriptElement = document.createElement('script') as HTMLScriptElement;
    js.id = elementId;
    js.src = `https://connect.facebook.net/en_US/sdk.js`;
    fjs.parentNode?.insertBefore(js, fjs);
};
