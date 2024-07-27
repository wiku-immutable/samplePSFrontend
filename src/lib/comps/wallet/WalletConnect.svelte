<script lang="ts">
	import { passportInstance } from '$lib/utils/passport';
	import { modal } from '$lib/utils/web3modal';
	import Icon from '@iconify/svelte';

	let loading: boolean = false;
</script>

<button
	on:click={async () => {
		// required to make passport show on the modal
		if (passportInstance) {
			passportInstance.connectEvm();
		}
		modal.open();
	}}
	class="btn p-[9px] sm:px-5 sm:py-[9px] variant-filled-primary cursor-pointer"
>
	{#if loading}
		<Icon icon="line-md:loading-loop" class="w-6 h-6" />
		<p class="hidden sm:flex mr-2">Connecting...</p>
	{:else}
		<Icon icon="lucide:wallet" class="w-6 h-6" />
		<p class="hidden sm:flex ml-2">Connect wallet</p>
	{/if}
</button>
