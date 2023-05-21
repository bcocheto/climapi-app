import {AuthData} from '../contexts/auth';

export function signIn(username: string, password: string): Promise<AuthData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username == 'Gabi' && password == '123456') {
                resolve({
                    token: JWTTokenMock,
                    username: 'Gabi',
                    password: '123456',
                });
            } else {
                reject(new Error('Username or password incorrects'))
            }
        }, 2000);
    });
}

const JWTTokenMock = 'eiwoe2dksao2dada21jdjadaoda9kdqof';