declare var FB: facebook.FacebookStatic;
const defaultLoginScopes = ['pages_show_list', 'public_profile'];

export function getFbAuthData(): Promise<facebook.AuthResponse> {
  return new Promise((resolve, reject) => {
    FB.getLoginStatus(
        (response: facebook.StatusResponse) => handleLoginResponse(resolve, reject, response)
    );
  });
}

export function fbLogin(scopes: string[] = defaultLoginScopes) {
  return new Promise<facebook.AuthResponse>((resolve, reject) => {
    FB.login(
        (response: facebook.StatusResponse) => handleLoginResponse(resolve, reject, response),
        { scope: scopes.join(',') }
    );
  })
}

export function fbLogout() {
  return new Promise((resolve) => {
    FB.logout(() => {
      // not sure how error response looks so I omitted it for now
      resolve(true);
    });
  })
}

function handleLoginResponse(resolve: Function, reject: Function, response: facebook.StatusResponse) {
  if (response.status === 'connected') {
    resolve(response.authResponse);
  } else {
    reject(new Error('NOT_LOGGED_IN'));
  }
}
