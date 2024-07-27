<script lang="ts">
	import { account } from '$lib/utils/web3modal';
	import WalletSignInPassport from './WalletSignInPassport.svelte';
	import WalletConnectedButton from './WalletConnectedButton.svelte';
	import WalletConnect from './WalletConnect.svelte';
</script>

{#if $account.isConnected && $account.address}
<!-- {#if true} -->
	<WalletConnectedButton />
{:else}
	<WalletConnect />
{/if}
