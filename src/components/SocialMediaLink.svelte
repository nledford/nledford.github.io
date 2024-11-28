<script lang="ts">
	import type { SocialMediaLink } from '../stores/socialMediaStore';

	import {
		siBluesky as Bluesky,
		siFacebook as Facebook,
		siGithub as Github,
		siInstagram as Instagram,
		siLastdotfm as Lastfm,
		siLinkedin as Linkedin,
		siThreads as Threads
	} from 'simple-icons';

	interface Props {
		socialMediaLink: SocialMediaLink;
	}

	let { socialMediaLink }: Props = $props();

	const title = socialMediaLink.title;
	const url = socialMediaLink.url;
	const size = 45;

	const getPath = (title: string) => {
		switch (title) {
			case 'Bluesky':
				return Bluesky.path;
			case 'Facebook':
				return Facebook.path;
			case 'Github':
				return Github.path;
			case 'Instagram':
				return Instagram.path;
			case 'Last.fm':
				return Lastfm.path;
			case 'LinkedIn':
				return Linkedin.path;
			case 'Threads':
				return Threads.path;
			default:
				return '';
		}
	};
</script>

<a href={url} {title} target="_social" rel="noopener noreferrer">
	<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d={getPath(title)}></path>
	</svg>
</a>

<style lang="scss">
  a :global {
    color: $link-color;
    opacity: 0.9;
    width: 50px;
    height: 50px;

    svg {
      fill: $link-color;
    }

    @extend %transition;

    &:hover {
      color: $link-hover-color;
      opacity: 1;
    }
  }
</style>
