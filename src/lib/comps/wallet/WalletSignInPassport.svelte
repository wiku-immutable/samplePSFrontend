<script lang="ts">
	import { passportInstance } from '$lib/utils/passport';
	import Icon from '@iconify/svelte';

	let loading: boolean = false;
</script>

<button
	on:click={async () => {
		try {
			loading = true;
			console.log('connectEvm');
			const provider = passportInstance.connectEvm();
			await provider.request({ method: 'eth_requestAccounts' });
		} catch (err) {
			console.error('connectEvm error', err);
		} finally {
			loading = false;
		}
	}}
	class="btn p-[9px] sm:px-5 sm:py-[9px] variant-filled-primary cursor-pointer rounded-full"
>
	{#if loading}
		<Icon icon="line-md:loading-loop" class="w-6 h-6" />
		<p class="hidden sm:flex mr-2">Logging in...</p>
	{:else}
		<img src="/passport_logo_32px.svg" alt="Immutable logo" class="w-6 h-6" />
		<p class="hidden sm:flex ml-2">Sign in with Immutable</p>
	{/if}
</button>
