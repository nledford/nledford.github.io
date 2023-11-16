<script lang="ts">
	import type { SocialMediaLink } from '../stores/socialMediaStore';

	export let socialMediaLink: SocialMediaLink;
</script>

<a
	href={socialMediaLink.url}
	title={socialMediaLink.title}
	target="_social"
	rel="noopener noreferrer"
	class="text-5xl"
>
	<i class={`fa-brands fa-${socialMediaLink.icon}`}></i>
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
