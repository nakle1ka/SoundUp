function getCoockieByName(name: string): string | undefined {
    const cookie = document.cookie.split(';').find(el => el.includes(name));
    return cookie?.split('=')[1];
}

function getAccessToken(): string | undefined {
    return getCoockieByName('token');
}

function getRefreshToken(): string | undefined {
    return getCoockieByName('refreshToken');
}

function getUserId(): string | undefined {
    return getCoockieByName('userId');
}

export function setUserId(userId: string) {
    document.cookie = `userId=${encodeURIComponent(userId)}; max-age=${60 * 60 * 24 * 30}; path=/; samesite=strict`;
}

export function setAccessToken(accessToken: string) {
    document.cookie = `accessToken=${encodeURIComponent(accessToken)}; max-age=${60 * 15}; path=/; samesite=strict`;
}

export function setRefreshToken(refreshToken: string) {
    document.cookie = `refreshToken=${encodeURIComponent(refreshToken)}; max-age=${60 * 60 * 24 * 30}; path=/; samesite=strict`;
}

export {
    getAccessToken,
    getRefreshToken,
    getUserId
}