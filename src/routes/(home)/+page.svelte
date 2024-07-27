<script lang="ts">
	import MintPublic from '$lib/comps/mintPublic/MintPublic.svelte';
	import MintWL from '$lib/comps/mintWL/MintWL.svelte';
	import { account } from '$lib/utils/web3modal';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col md:gap-1">
	<h1 class="h1 font-bold text-center py-4">Sample Primary Sale</h1>
	<!-- <h2 class="h3 font-bold text-center">Immutable zkEVM TESTNET</h2> -->
	<div class="flex justify-center items-center py-2 gap-3 font-semibold text-lg">
		Frontend
		<a href="https://github.com/willkuswanto/sample-marketplace" target="_blank">
			<Icon icon="lucide:github" class="h-6 w-6" />
		</a>
		<div class="border-l-4 border-primary-500 h-[25px] mx-2" />
		Contracts
		<a href="https://github.com/willkuswanto/sample-marketplace" target="_blank">
			<Icon icon="lucide:github" class="h-6 w-6" />
		</a>
	</div>
</div>

<div class="my-2 text-center justify-center card m-auto w-[320px] bg-primary-500">
	<section class="p-2">
		<img
			src={`${'https://gateway.pinata.cloud/ipfs/QmdnrCRGiDLND1UwsNTWt5CMQRWAH4oo3xBCqPwtYDzzsk'}`}
			alt="Collection"
			class="w-full"
		/>
	</section>
</div>
<!-- <div class="text-lg py-2 text-center w-[400px] mx-auto font-bold">Remaining supply: 1000</div> -->

<div class="text-sm py-2 w-[400px] mx-auto font-medium">
	<a
		href="https://explorer.testnet.immutable.com/address/0xba01c1efb4e1591f030d089cc6dfef9645bce04f"
		target="_blank"
		class="flex flex-row justify-center gap-1 items-top underline"
	>
		Link to ERC721 contract in explorer
		<span>
			<Icon icon="lucide:external-link" class="h-4 w-4" />
		</span>
	</a>
</div>

<div class="text-sm pb-2 w-[400px] mx-auto font-medium">
	<a
		href="https://explorer.testnet.immutable.com/address/0x492c0429f64804E2a0CeFd235905D1f2A25e8f17"
		target="_blank"
		class="flex flex-row justify-center gap-1 items-top underline"
	>
		Link to sale contract in explorer
		<span>
			<Icon icon="lucide:external-link" class="h-4 w-4" />
		</span>
	</a>
</div>

{#if !$account.isConnected}
	<div class="card variant-filled-warning my-2 py-2 text-center w-[400px] mx-auto font-semibold">
		Please connect your wallet to mint
	</div>
{/if}

<div class="flex flex-row gap-2 w-[360px] mt-2 mx-auto">
	<MintPublic />
	<MintWL />
</div>
