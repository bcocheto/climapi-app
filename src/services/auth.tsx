interface Response {
    token: string;
    user: {
        username: string;
        password: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'eiwoe2dksao2dada21jdjadaoda9kdqof',
                user: {
                    username: 'Gabi',
                    password: '12345',
                },
            });
        }, 2000);
    });
}