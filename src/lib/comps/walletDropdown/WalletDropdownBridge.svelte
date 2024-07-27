<script lang="ts">
	import { modal } from '$lib/utils/web3modal';
	import { checkout } from '@imtbl/sdk';
	import Icon from '@iconify/svelte';
	import { getCheckoutProviderName } from '$lib/utils/utils';
	import { checkoutSDK } from '$lib/utils/checkout';

	let showBridge: boolean = false;

	async function openBridge() {
		const widgets = await checkoutSDK.widgets({
			config: { theme: checkout.WidgetTheme.DARK }
		});
		const bridge = widgets.create(checkout.WidgetType.BRIDGE, {
			provider: (
				await checkoutSDK.createProvider({
					walletProviderName: getCheckoutProviderName(modal.getWalletInfo()?.name)
				})
			).provider
		});

		bridge.addListener(checkout.BridgeEventType.CLOSE_WIDGET, () => {
			bridge.unmount();
			// remove event listeners for the wallet widget
			bridge.removeListener(checkout.BridgeEventType.CLOSE_WIDGET);
		});

		bridge.mount('bridge');
	}
</script>

<button
	on:click={() => {
		showBridge = true;
		openBridge();
	}}
	class="btn btn-icon variant-filled-primary"
>
	<Icon icon="lucide:arrow-up-from-line" class="h-5 w-5" />
</button>

{#if showBridge}
	<div id="bridge" class="absolute -right-4 sm:right-0 top-0" />
{/if}
