import { createWeb3Modal } from '@web3modal/wagmi';
import { walletConnect } from '@wagmi/connectors';
import { Web3Provider } from '@ethersproject/providers';

import {
	createConfig,
	getAccount,
	getChainId,
	http,
	injected,
	reconnect,
	watchAccount,
	watchChainId
} from '@wagmi/core';
import { readable } from 'svelte/store';

import { immutableZkEvm, immutableZkEvmTestnet } from 'viem/chains';

export const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

const metadata = {
	name: 'sample-primary-sales',
	description: 'Sample Primary Sales',
	url: 'https://sample-ps-frontend.vercel.app/',
	icons: ['https://sample-ps-frontend.vercel.app/favicon.svg']
};

// export const chains = [immutableZkEvm, immutableZkEvmTestnet] as const;
export const chains = [immutableZkEvmTestnet] as const;

export const wagmiConfig = createConfig({
	chains: chains,
	connectors: [walletConnect({ projectId, metadata, showQrModal: false }), injected()],
	transports: {
		[immutableZkEvmTestnet.id]: http()
	}
});

reconnect(wagmiConfig);

export const modal = createWeb3Modal({
	wagmiConfig,
	projectId,
	enableAnalytics: false
});

export const chainId = readable(getChainId(wagmiConfig), (set) =>
	watchChainId(wagmiConfig, { onChange: set })
);

export const account = readable(getAccount(wagmiConfig), (set) =>
	watchAccount(wagmiConfig, { onChange: set })
);

export const provider = readable<Web3Provider | undefined>(undefined, (set) =>
	watchAccount(wagmiConfig, {
		onChange: async (account) => {
			if (!account.connector) return set(undefined);
			set(await account.connector?.getProvider() as Web3Provider);
		}
	})
);