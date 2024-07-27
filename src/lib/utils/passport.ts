import { config, passport } from '@imtbl/sdk';

const PUBLISHABLE_KEY = import.meta.env.VITE_PUBLISHABLE_KEY;
const CLIENT_ID = import.meta.env.VITE_PASSPORT_CLIENT_ID;

export const passportInstance = new passport.Passport({
	baseConfig: {
		environment: config.Environment.SANDBOX,
		publishableKey: PUBLISHABLE_KEY
	},
	clientId: CLIENT_ID,
	redirectUri: 'http://localhost:5173/redirect',
	logoutRedirectUri: 'http://localhost:5173',
	audience: 'platform_api',
	scope: 'openid offline_access email transact'
});
