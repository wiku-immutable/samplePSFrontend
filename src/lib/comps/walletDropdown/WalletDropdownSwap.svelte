<script lang="ts">
	import { modal } from '$lib/utils/web3modal';
	import { checkout } from '@imtbl/sdk';
	import Icon from '@iconify/svelte';
	import { getCheckoutProviderName } from '$lib/utils/utils';
	import { checkoutSDK } from '$lib/utils/checkout';

	let showSwap: boolean = false;

	async function openSwap() {
		const widgets = await checkoutSDK.widgets({
			config: { theme: checkout.WidgetTheme.DARK }
		});
		const swap = widgets.create(checkout.WidgetType.SWAP, {
			provider: (
				await checkoutSDK.createProvider({
					walletProviderName: getCheckoutProviderName(modal.getWalletInfo()?.name)
				})
			).provider
		});

		swap.addListener(checkout.SwapEventType.CLOSE_WIDGET, () => {
			swap.unmount();
			// remove event listeners for the wallet widget
			swap.removeListener(checkout.SwapEventType.CLOSE_WIDGET);
		});

		swap.mount('swap');
	}
</script>

<button
	on:click={() => {
		showSwap = true;
		openSwap();
	}}
	class="btn btn-icon variant-filled-primary"
>
	<Icon icon="lucide:arrow-left-right" class="h-5 w-5" />
</button>

{#if showSwap}
	<div id="swap" class="absolute -right-4 sm:right-0 top-0" />
{/if}
