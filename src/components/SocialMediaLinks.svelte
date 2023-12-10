<script lang="ts">
	import SocialMediaLink from './SocialMediaLink.svelte';

	import {
		facebook,
		github,
		instagram,
		lastfm,
		linkedin,
		threads,
		twitter
	} from '../stores/socialMediaStore';
</script>

<section>
	<div class="flex gap-4 justify-center">
		<SocialMediaLink socialMediaLink={facebook} />
		<SocialMediaLink socialMediaLink={github} />
		<SocialMediaLink socialMediaLink={instagram} />
		<SocialMediaLink socialMediaLink={lastfm} />
		<SocialMediaLink socialMediaLink={linkedin} />
		<SocialMediaLink socialMediaLink={threads} />
		<SocialMediaLink socialMediaLink={twitter} />
	</div>
</section>
