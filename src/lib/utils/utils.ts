import { checkout } from '@imtbl/sdk';
import type { WalletProviderName } from '@imtbl/sdk/checkout';
import type { ToastSettings } from '@skeletonlabs/skeleton';

export function formatWalletAddress(address: string): string {
	try {
		if (!address) {
			return '0x0000...0000';
		}
		if (!address.startsWith('0x') || address.length <= 10) {
			return '0x0000...0000';
		}
		const prefix = address.slice(0, 6);
		const lastPart = address.slice(-4);
		return `${prefix}...${lastPart}`;
	} catch (error) {
		console.error(error);
		return '0x0000...0000';
	}
}

export function getCheckoutProviderName(walletName: string | undefined): WalletProviderName {
	if (walletName == 'Immutable Passport') {
		return checkout.WalletProviderName.PASSPORT;
	} else if (walletName == 'MetaMask') {
		return checkout.WalletProviderName.METAMASK;
	} else {
		return checkout.WalletProviderName.WALLETCONNECT;
	}
}

export function createToastErrorMessage(msg: string): ToastSettings {
	return {
		message: msg,
		timeout: 2000,
		background: "variant-filled-error",
		classes: "w-[300px]"
	}
}

export function createToastWarningMessage(msg: string): ToastSettings {
	return {
		message: msg,
		timeout: 2000,
		background: "variant-filled-warning",
		classes: "w-[300px]"
	}
}

export function createToastSuccessMessage(msg: string): ToastSettings {
	return {
		message: msg,
		timeout: 2000,
		background: "variant-filled-success",
		classes: "w-[300px]"
	}
}
