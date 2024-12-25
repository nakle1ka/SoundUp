function getCookieByName(name: string): string | undefined {
    const cookie = document.cookie.split(';').find(el => el.includes(name));
    return cookie?.split('=')[1];
}

function deleteCookieByName(name: string): void {
    document.cookie = `${name}=; Max-Age=0; path=/;`;
}

function getAccessToken(): string | undefined {
    return getCookieByName('accessToken');
}

function getRefreshToken(): string | undefined {
    return getCookieByName('refreshToken');
}

function getUserId(): string | undefined {
    return getCookieByName('userId');
}

function setUserId(userId: string) {
    document.cookie = `userId=${encodeURIComponent(userId)}; path=/; Max-Age=604800; samesite=strict;`;
}

function setAccessToken(accessToken: string) {
    document.cookie = `accessToken=${encodeURIComponent(accessToken)}; path=/; Max-Age=604800; samesite=strict; `;
}

function setRefreshToken(refreshToken: string) {
    document.cookie = `refreshToken=${encodeURIComponent(refreshToken)}; path=/; Max-Age=604800; samesite=strict;`;
}

export {
    getCookieByName,
    getAccessToken,
    getRefreshToken,
    getUserId,

    setUserId,
    setAccessToken,
    setRefreshToken,

    deleteCookieByName,
}