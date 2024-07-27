<script lang="ts">
	import { formatWalletAddress } from '$lib/utils/utils';
	import { account } from '$lib/utils/web3modal';
	import Icon from '@iconify/svelte';
	import { passportInstance } from '$lib/utils/passport';
	import { wagmiConfig } from '$lib/utils/web3modal';
	import { disconnect } from '@wagmi/core';
	import WalletDropdown from '../walletDropdown/WalletDropdown.svelte'

	let showDropdown: boolean = false;
	const address: string = $account.address as string;
</script>


<div class="relative">
	<button
		on:click={async () => {
			showDropdown = !showDropdown;
			// try {
			// 	loading = true;
			// 	console.log('logOut');
			// 	await disconnect(wagmiConfig);
			// } catch (err) {
			// 	console.error('logOut error', err);
			// } finally {
			// 	loading = false;
			// }
		}}
		class="btn p-[9px] sm:px-5 sm:py-[9px] variant-filled-primary cursor-pointer"
	>
		<Icon icon="lucide:wallet" class="w-6 h-6" />
		<p class="hidden sm:flex ml-2">
			{formatWalletAddress(address)}
		</p>
	</button>
	
	{#if showDropdown}
		<WalletDropdown bind:showDropdown/>
	{/if}
</div>
