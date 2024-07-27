<script lang="ts">
	import MintPublicErc20 from "./MintPublicErc20.svelte";
	import MintPublicFree from "./MintPublicFree.svelte";
	import MintPublicNative from "./MintPublicNative.svelte";

</script>

<div class="flex flex-col py-2 gap-2 w-[160px] mx-auto">
    <p class="text-center font-bold">Public</p>
    <MintPublicFree />
    <MintPublicNative />
    <MintPublicErc20 />
</div>