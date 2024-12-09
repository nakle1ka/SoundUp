import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { AxiosError } from 'axios';
import apiClient from '@/axios/index'; 

const VALIDATE_TOKEN_ROUTE = '/api/GetRequestsUsers/ValidateAccessToken';
const REFRESH_TOKEN_ROUTE = '/api/PostRequestsUsers/GetNewRefreshAndJwtToken';

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    const accessToken = req.cookies.get('token')?.value;
    const refreshToken = req.cookies.get('refreshToken')?.value;

    if (!accessToken || !refreshToken) {
        return NextResponse.redirect(new URL('/login', url));
    }

    try {
        await apiClient.get(VALIDATE_TOKEN_ROUTE);

        return NextResponse.next();

    } catch (error: AxiosError | any) {

        if (error.response?.status === 401 && refreshToken) {
            try {
                const response = await apiClient.post(REFRESH_TOKEN_ROUTE, { refreshToken });

                const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;

                const res = NextResponse.next();

                res.cookies.set('accessToken', newAccessToken, { httpOnly: true, secure: true });
                res.cookies.set('refreshToken', newRefreshToken, { httpOnly: true, secure: true });

                return res;
            } catch (refreshError) {
                return NextResponse.redirect(new URL('/login', url));
            }
        }

        console.error('Ошибка при проверке access токена:', error);
        return NextResponse.redirect(new URL('/login', url));
    }
}

export const config = {
    matcher: ['/'], // Допишите свои роуты кому надо
};
