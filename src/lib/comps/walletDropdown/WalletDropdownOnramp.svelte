<script lang="ts">
	import { modal } from '$lib/utils/web3modal';
	import { checkout } from '@imtbl/sdk';
	import Icon from '@iconify/svelte';
	import { getCheckoutProviderName } from '$lib/utils/utils';
	import { checkoutSDK } from '$lib/utils/checkout';

	let showOnramp: boolean = false;

	async function openOnramp() {
		const widgets = await checkoutSDK.widgets({
			config: { theme: checkout.WidgetTheme.DARK }
		});
		const onramp = widgets.create(checkout.WidgetType.ONRAMP, {
			provider: (
				await checkoutSDK.createProvider({
					walletProviderName: getCheckoutProviderName(modal.getWalletInfo()?.name)
				})
			).provider
		});

		onramp.addListener(checkout.OnRampEventType.CLOSE_WIDGET, () => {
			onramp.unmount();
			// remove event listeners for the wallet widget
			onramp.removeListener(checkout.OnRampEventType.CLOSE_WIDGET);
		});

		onramp.mount('onramp');
	}
</script>

<button
	on:click={() => {
		showOnramp = true;
		openOnramp();
	}}
	class="btn btn-icon variant-filled-primary"
>
	<Icon icon="lucide:credit-card" class="h-5 w-5" />
</button>

{#if showOnramp}
	<div id="onramp" class="absolute -right-4 sm:right-0 top-0" />
{/if}
