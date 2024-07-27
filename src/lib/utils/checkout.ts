import { checkout, config } from '@imtbl/sdk';
import { passportInstance } from './passport';

export const checkoutSDK = new checkout.Checkout({
	baseConfig: { environment: config.Environment.SANDBOX },
	passport: passportInstance
});
