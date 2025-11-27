import Auth0 from "react-native-auth0";
import Config from "react-native-config"
import { getGenericPassword, resetGenericPassword, setGenericPassword } from "react-native-keychain";

const auth0 = new Auth0({
    domain: Config.AUTH0_DOMAIN,
    clientId: Config.AUTH0_CLIENT_ID,
})

export const loginService = async ({ username, password }) => {
    const credentials = await auth0.auth.passwordRealm({
        username,
        password,
        realm: 'Username-Password-Authentication',
        scope: 'openid profile offline_access',
    });

    await setGenericPassword('authTokens', JSON.stringify({
        accessToken: credentials.accessToken,
        refreshToken: credentials.refreshToken,
    }));

    return credentials;
};

export const refreshTokenService = async () => {
    const creds = await getGenericPassword();
    if (!creds) return null;

    const { refreshToken } = JSON.parse(creds.password);

    const newTokens = await auth0.auth.refreshToken({ refreshToken });

    await setGenericPassword('authTokens', JSON.stringify({
        accessToken: newTokens.accessToken,
        refreshToken,
    }));

    return newTokens.accessToken;
}

export const logoutService = async () => {
    await resetGenericPassword();
}