<script>
	export let image;
</script>

<div class="row-start-3 col-span-full mx-auto">
	<div class="col-start-2">
		<slot></slot>
	</div>
</div>

<picture class="block mx-auto sm:aspect-[16_/_16] md:aspect-[16_/_8] lg:aspect-[10_/_4] mb-6">
	<img
		src="https://cm-marketing.directus.app/assets/{image}"
		alt=""
		class="w-full h-full object-cover lg:object-cover rounded-2xl drop-shadow-lg"
	/>
</picture>
