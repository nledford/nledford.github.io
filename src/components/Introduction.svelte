<script lang="ts">
	import { github, lastfm, linkedin } from '../stores/socialMediaStore';
</script>

<section class="py-5 text-center">
	<h1 class="text-5xl font-bold pb-5">Hi, I'm Nate!</h1>

	<p class="text-lg">
		I'm a
		<a href={linkedin.url} title={linkedin.title} target="_social" rel="noopener noreferrer">
			software developer
		</a>
		in Orange City, FL.
	</p>

	<p class="text-lg">
		I
		<a href={github.url} title={github.title} target="_social" rel="noopener noreferrer">
			write code
		</a>
		and
		<a href={lastfm.url} title={lastfm.title} target="_social" rel="noopener noreferrer"
			>love music</a
		>
		.
	</p>
</section>
