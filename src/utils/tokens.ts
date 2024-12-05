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

export {
    getAccessToken,
    getRefreshToken,
    getUserId
}