<script lang="ts">
	import { modal } from '$lib/utils/web3modal';
	import { checkout } from '@imtbl/sdk';
	import Icon from '@iconify/svelte';
	import { getCheckoutProviderName } from '$lib/utils/utils';
	import { checkoutSDK } from '$lib/utils/checkout';

	let showBalances: boolean = false;

	async function openBalances() {
		const widgets = await checkoutSDK.widgets({
			config: { theme: checkout.WidgetTheme.DARK }
		});
		const wallet = widgets.create(checkout.WidgetType.WALLET, {
			config: {
				showDisconnectButton: false,
				showNetworkMenu: false
			},
			provider: (
				await checkoutSDK.createProvider({
					walletProviderName: getCheckoutProviderName(modal.getWalletInfo()?.name)
				})
			).provider
		});

		wallet.addListener(checkout.WalletEventType.CLOSE_WIDGET, () => {
			wallet.unmount();
			// remove event listeners for the wallet widget
			wallet.removeListener(checkout.WalletEventType.CLOSE_WIDGET);
		});

		wallet.mount('wallet');
	}
</script>

<button
	on:click={() => {
		showBalances = true;
		openBalances();
	}}
	class="btn btn-icon variant-filled-primary"
>
	<Icon icon="lucide:piggy-bank" class="h-6 w-6" />
</button>

{#if showBalances}
	<div id="wallet" class="absolute -right-4 sm:right-0 top-0" />
{/if}
