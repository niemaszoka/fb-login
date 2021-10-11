export function getAccounts(): Promise<any[]> {
    return new Promise<any[]>((resolve) => {
        FB.api(
            `/me/accounts`,
            (response: {data: any[], error?: any}) => {
                if (response && !response.error) {
                    resolve(response.data);
                }
            }
        );
    });
}
