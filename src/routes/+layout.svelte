<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, type ModalComponent } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { initializeStores, Toast } from '@skeletonlabs/skeleton';
	initializeStores();

	const modalRegistry: Record<string, ModalComponent> = {
		// Set a unique modal ID, then pass the component reference
		// assetsModal: { ref: AssetsModal }
		// ...
	};
</script>

<Toast max={3} position={'tr'} buttonDismiss={'btn-icon btn-icon-lg'} />
<slot />
