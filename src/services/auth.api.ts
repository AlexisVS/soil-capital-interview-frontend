import { api } from '@services';
import { LoginRequestI } from './auth.types';
import i18n from 'i18next';
import * as jose from 'jose';
import { addToken } from '@features/auth';
import { clearStorageToken, setStorageToken } from '@utils';

type UserT = {
    id: number;
    email: string;
};

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserT[], LoginRequestI>({
            query: (credentials) => {
                if (credentials.password !== 'hU3HUAy^yf97') throw new Error('INVALID_PASSWORD');

                return {
                    url: `users?email=${credentials.email}`,
                    method: 'GET',
                };
            },
            transformResponse: async (response: UserT[]) => {
                if (response.length) {
                    await i18n.changeLanguage('en');

                    const secret = new TextEncoder().encode(response[0].email);
                    const token = await new jose.SignJWT({})
                        .setProtectedHeader({ alg: 'HS256' })
                        .setIssuedAt()
                        .setIssuer('')
                        .setAudience('')
                        .setExpirationTime('2h')
                        .sign(secret);

                    clearStorageToken();
                    setStorageToken(token, false);

                    addToken({
                        user: response[0],
                        access_token: token,
                        partnerId: parseInt(jose.decodeJwt(token).partner_id as string),
                    });

                    return response;
                }
                throw new Error('ACCESS_DENIED');
            },
        }),
        user: builder.mutation<UserT, void>({
            query: () => ({
                url: 'users',
                method: 'GET',
            }),
        }),
    }),
});

export const { useLoginMutation, useUserMutation } = authApi;
export * from './auth.types';
