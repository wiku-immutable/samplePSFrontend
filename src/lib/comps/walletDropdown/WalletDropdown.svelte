<script lang="ts">
	import { wagmiConfig } from '$lib/utils/web3modal';
	import Icon from '@iconify/svelte';
	import { disconnect } from '@wagmi/core';
	import WalletDropdownBalances from './WalletDropdownBalances.svelte';
	import WalletDropdownSwap from './WalletDropdownSwap.svelte';
	import WalletDropdownOnramp from './WalletDropdownOnramp.svelte';
	import WalletDropdownBridge from './WalletDropdownBridge.svelte';
	import { goto } from '$app/navigation';

	export let showDropdown: boolean;
</script>

<div class="card absolute px-6 py-3 mt-3 w-full variant-glass-primary min-w-[240px] right-0">
	<div class="flex flex-col gap-2">
		<div class="flex flex-row gap-2">
			<WalletDropdownBalances />
			<WalletDropdownSwap />
			<WalletDropdownOnramp />
			<WalletDropdownBridge />
		</div>
		<hr class="mt-2 pb-1" />
		<button
			on:click={async () => {
				try {
					console.log('logOut');
					await disconnect(wagmiConfig);
					showDropdown = false;
				} catch (err) {
					console.error('logOut error', err);
				}
			}}
			class="btn flex flex-row gap-2 justify-center py-2 variant-filled-primary"
		>
			Log out
			<Icon icon="lucide:log-out" />
		</button>
	</div>
</div>
