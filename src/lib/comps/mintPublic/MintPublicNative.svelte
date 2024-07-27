<script lang="ts">
	import { account } from '$lib/utils/web3modal';
	import { writeContract, BaseError, waitForTransactionReceipt } from '@wagmi/core';
	import { sale } from '$lib/abi/sale';
	import { wagmiConfig } from '$lib/utils/web3modal';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import {
		createToastErrorMessage,
		createToastSuccessMessage,
		createToastWarningMessage
	} from '$lib/utils/utils';
	import Icon from '@iconify/svelte';
	import { parseEther } from 'viem';

	let loading: boolean = false;
	const toastStore = getToastStore();

	async function mintNative() {
		try {
			loading = true;
			const tx = await writeContract(wagmiConfig, {
				abi: sale,
				address: import.meta.env.VITE_SALE_CONTRACT_ADDRESS as `0x${string}`,
				functionName: 'mintNative',
				value: parseEther('0.01')
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

<button on:click={mintNative} disabled={!$account.isConnected} class="btn variant-filled-primary">
	{#if loading}
		<Icon icon="line-md:loading-loop" class="h-6 w-6" />
	{:else}
		Buy for 0.01 <img src="imx.svg" alt="IMX token" class="ml-2 h-6 w-6" />
	{/if}
</button>
