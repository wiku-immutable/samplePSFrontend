<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Wallet from '$lib/comps/wallet/Wallet.svelte';
</script>

<!-- App Shell -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">
					<a href="/">
						primary sales
					</a>
				</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Wallet />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
