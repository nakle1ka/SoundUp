import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import axios, { AxiosError } from "axios";

import routes from "./types/routes";

export async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const serverApi = process.env.NEXT_PUBLIC_SERVER_API;

    const accessToken = req.cookies.get("accessToken")?.value;
    const refreshToken = req.cookies.get("refreshToken")?.value;
    const userId = req.cookies.get("userId")?.value;

    if (!accessToken || !refreshToken) {
        return NextResponse.redirect(new URL("/auth", url));
    }

    try {
        await axios.get(serverApi + routes.VALIDATE_TOKEN, {
            headers: {
                Authorization: "bearer " + accessToken,
            },
        });
        console.log("ok");

        return NextResponse.next();
    } catch (error: AxiosError | any) {
        console.log(error);

        if (error.response?.status === 401 && refreshToken) {
            try {
                const response = await axios.post(
                    serverApi + routes.VALIDATE_REFRESH_TOKEN,
                    { refreshToken },
                    {
                        headers: {
                            Authorization: "bearer " + accessToken,
                            refreshToken: refreshToken,
                            userId: userId,
                        },
                    }
                );

                const {
                    accessToken: newAccessToken,
                    refreshToken: newRefreshToken,
                } = response.data;

                const res = NextResponse.next();

                res.cookies.set("accessToken", newAccessToken);
                res.cookies.set("refreshToken", newRefreshToken);

                return res;
            } catch (refreshError) {
                return NextResponse.redirect(new URL(`/auth`, url));
            }
        }

        console.error("Ошибка при проверке access токена:", error);
        return NextResponse.redirect(new URL(`/test?err=${error}`, url));
    }
}

export const config = {
    // Допишите свои роуты кому надо
    matcher: ["/"],
};
