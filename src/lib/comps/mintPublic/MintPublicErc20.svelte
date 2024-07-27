<script lang="ts">
	import { account } from '$lib/utils/web3modal';
	import { writeContract, BaseError, waitForTransactionReceipt, readContract } from '@wagmi/core';
	import { sale } from '$lib/abi/sale';
	import { usdc } from '$lib/abi/usdc';
	import { wagmiConfig } from '$lib/utils/web3modal';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import {
		createToastErrorMessage,
		createToastSuccessMessage,
		createToastWarningMessage
	} from '$lib/utils/utils';
	import Icon from '@iconify/svelte';

	let loading: boolean = false;
	const toastStore = getToastStore();

	async function mintErc20() {
		try {
			loading = true;
			const result = await readContract(wagmiConfig, {
				abi: usdc,
				address: import.meta.env.VITE_USDC_CONTRACT_ADDRESS as `0x${string}`,
				functionName: 'allowance',
				args: [
					$account.address as `0x${string}`,
					import.meta.env.VITE_SALE_CONTRACT_ADDRESS as `0x${string}`
				]
			});
			if (result < BigInt(10 ** 6 / 100)) {
				const tx = await writeContract(wagmiConfig, {
					abi: usdc,
					address: import.meta.env.VITE_USDC_CONTRACT_ADDRESS as `0x${string}`,
					functionName: 'approve',
					args: [
						import.meta.env.VITE_SALE_CONTRACT_ADDRESS as `0x${string}`,
						BigInt(10 ** 6 / 100)
					]
				});
				toastStore.trigger(createToastWarningMessage('Approval submitted!'));
				await waitForTransactionReceipt(wagmiConfig, { hash: tx });
				toastStore.trigger(createToastSuccessMessage('Approval successful!'));
			} else {
				const tx = await writeContract(wagmiConfig, {
					abi: sale,
					address: import.meta.env.VITE_SALE_CONTRACT_ADDRESS as `0x${string}`,
					functionName: 'mintErc20'
				});
				toastStore.trigger(createToastWarningMessage('Mint submitted!'));
				await waitForTransactionReceipt(wagmiConfig, { hash: tx });
				toastStore.trigger(createToastSuccessMessage('Mint successful!'));
			}
		} catch (e) {
			const error = e as BaseError;
			console.error(e);
			toastStore.trigger(createToastErrorMessage(error.shortMessage));
		} finally {
			loading = false;
		}
	}
</script>

<button on:click={mintErc20} disabled={!$account.isConnected} class="btn variant-filled-primary">
	{#if loading}
		<Icon icon="line-md:loading-loop" class="h-6 w-6" />
	{:else}
		Buy for 0.01 <img src="usdc.png" alt="USDC token" class="ml-2 h-6 w-6" />
	{/if}
</button>
