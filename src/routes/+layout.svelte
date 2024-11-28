<script lang="ts">
	import '../app.postcss';
	import '$lib/sass/global.scss';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Nathaniel Ledford | Software Developer</title>
</svelte:head>

{@render children?.()}
