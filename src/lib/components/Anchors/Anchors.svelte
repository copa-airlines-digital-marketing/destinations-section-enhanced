
	<!--Topic selector Start-->
	<section id="topicSelector" class="py-8">
		<Heading>{anchorTabs[0].translations[lang].label}</Heading>
		<ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-auto gap-2">
			{#each anchorTabs.slice(1) as tab}
			<li><Link href={tab.href}>{tab.translations[lang].label}</Link></li>
			{/each}
		</ul>
</section>
<!--Topic selector ENDS-->