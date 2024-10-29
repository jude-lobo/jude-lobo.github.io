<!-- src/Loader.svelte -->
<script>
	export let visible = true;
</script>

{#if visible}
	<div class="loader">
		<div class="spinner" />
	</div>
{/if}

<style>
	/* Center the loader */
	.loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0); /* Slightly transparent background */
		z-index: 1000;
	}

	/* Create the spinner */
	.spinner {
		width: 50px;
		height: 50px;
		border: 5px solid #f3f3f3; /* Light grey */
		border-top: 5px solid #15bf74; /* Blue color */
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	/* Keyframes for the spin animation */
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
