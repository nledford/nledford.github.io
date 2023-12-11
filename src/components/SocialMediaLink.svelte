<script lang="ts">
	import type { SocialMediaLink } from '../stores/socialMediaStore';

	import {
		Sifacebook as Facebook,
		Sigithub as Github,
		Siinstagram as Instagram,
		Silastdotfm as Lastfm,
		Silinkedin as Linkedin,
		Sithreads as Threads
	} from '@icons-pack/svelte-simple-icons';

	export let socialMediaLink: SocialMediaLink;

	const title = socialMediaLink.title;
	const url = socialMediaLink.url;
	const size = 45;
</script>

<a href={url} {title} target="_social" rel="noopener noreferrer">
	{#if title === 'Facebook'}
		<Facebook {size} {title} />
	{:else if title === 'Github'}
		<Github {size} {title} />
	{:else if title === 'Instagram'}
		<Instagram {size} {title} />
	{:else if title === 'Last.fm'}
		<Lastfm {size} {title} />
	{:else if title === 'LinkedIn'}
		<Linkedin {size} {title} />
	{:else if title === 'Threads'}
		<Threads {size} {title} />
	{/if}
</a>

<style lang="scss">
	a {
		color: $link-color;
		opacity: 0.9;

		@extend %transition;

		&:hover {
			color: $link-hover-color;
			opacity: 1;
		}
	}
</style>
