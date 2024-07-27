<script lang="ts">
	import { account } from '$lib/utils/web3modal';
	import { writeContract, BaseError, waitForTransactionReceipt } from '@wagmi/core';
	import { sale } from '$lib/abi/sale';
	import { wagmiConfig } from '$lib/utils/web3modal';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { createToastErrorMessage, createToastSuccessMessage, createToastWarningMessage } from '$lib/utils/utils';
	import Icon from '@iconify/svelte';

	let loading: boolean = false;
	const toastStore = getToastStore();

	async function mintFree() {
		try {
			loading = true;
			const tx = await writeContract(wagmiConfig, {
				abi: sale,
				address: import.meta.env.VITE_SALE_CONTRACT_ADDRESS as `0x${string}`,
				functionName: 'mintFreeWL'
			});
			toastStore.trigger(createToastWarningMessage('Mint submitted!'));
			await waitForTransactionReceipt(wagmiConfig, { hash: tx });
			toastStore.trigger(createToastSuccessMessage('Mint successful!'));
		} catch (e) {
			const error = e as BaseError;
			toastStore.trigger(createToastErrorMessage(error.shortMessage));
		} finally {
			loading = false;
		}
	}
</script>

<button on:click={mintFree} disabled={!$account.isConnected} class="btn variant-filled-secondary">
	{#if loading}
		<Icon icon="line-md:loading-loop" class="h-6 w-6"/>
	{:else}
		Mint for free
	{/if}
</button>
