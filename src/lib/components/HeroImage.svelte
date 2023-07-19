<section class="container-fluid top">
	<div class="container title">
		<img
			alt="aaron in san francisco"
			class="profile-photo"
			src="/img/aaron-square.jpg"
		/>
		<div class="headline">
			<h1>
				<span>Hey there!</span>
				<span>I'm Aaron Jordan.</span>
			</h1>
		</div>
	</div>
	<div class="cover-filter" />
</section>

<style lang="scss">
	section.top {
		position: relative;
		flex-shrink: 0;
		z-index: -1;
		margin: 0;
		padding: 0;
		height: clamp(20vw, 25rem, min(30vh, 240px));
		background-image: url(/img/yosemite-13-crop-web.jpeg);
		background-position-x: center;
		background-position-y: 30%;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: end;
	}

	div.title {
		display: flex;
		align-items: end;
	}

	img {
		position: relative;
		z-index: 2;
		width: var(--profile-image-width);
		border-radius: calc(var(--profile-image-width) / 2);
		border: calc(var(--profile-image-width) / 20) solid var(--background-color);
		margin-bottom: calc(var(--profile-image-width) / -2.4);
	}

	.headline {
		display: inline-block;
		margin-left: 1rem;

		h1 {
			margin-bottom: 0;
			color: whitesmoke;
			font-size: 1.25rem;
			text-shadow: 0 0 32px black;
		}

		span {
			display: inline-block;
		}
	}

	.cover-filter {
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.5;
		background: var(--modal-overlay-background-color);
	}

	@media screen and (min-width: 576px) {
		.headline h1 {
			font-size: 1.5rem;
		}
	}

	@media screen and (min-width: 991px) {
		.headline h1 {
			font-size: 1.75rem;
		}
	}
</style>
