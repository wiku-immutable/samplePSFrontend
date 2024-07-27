<script lang="ts">
	import { passportInstance } from '$lib/utils/passport';
	import { onMount } from 'svelte';

	onMount(async () => {
		try {
			console.log('login callback');
			await passportInstance.loginCallback();
			console.log('login callback done')
		} catch (err) {
			console.error('login callback error', err);
		}
	});
</script>
