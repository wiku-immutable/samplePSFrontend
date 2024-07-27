<script lang="ts">
	import MintWLErc20 from './MintWLErc20.svelte';
	import MintWLFree from './MintWLFree.svelte';
	import MintWLNative from './MintWLNative.svelte';
</script>

<div class="flex flex-col py-2 gap-2 w-[160px] mx-auto">
	<p class="text-center font-bold">Whitelisted</p>
	<MintWLFree />
	<MintWLNative />
	<MintWLErc20 />
</div>
