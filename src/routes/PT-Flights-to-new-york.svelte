<script>
	import {
		Heading,
		Body,
		Link,
		Caption,
		getTypographyVariant,
	
	} from '$components/components/typography/index.js';
	import { InformativeBoxContainer } from '$components/components/boxes/informative/index.js';


	import * as Header from '$lib/components/MainHeader';
	import { keyFacts } from '$lib/data/Flights-to/to-JFK/keyFacts';
	import { anchorTabs } from '$lib/data/Flights-to/to-JFK/anchorTabs.js';
	import { attractions } from '$lib/data/Flights-to/to-JFK/topTenAttractions';
	import { transportations } from '$lib/data/Flights-to/to-JFK/gettingAround.js';
	import { bestOf } from '$lib/data/Flights-to/to-JFK/bestOf';
	import { culturalTips } from '$lib/data/Flights-to/to-JFK/culturalHighlightsTips';
	import { days } from '$lib/data/Flights-to/to-JFK/daysItinerary';
	import { keyResources } from '$lib/data/Flights-to/to-JFK/keyResources.js';
	import { connectMiles } from '$lib/data/Flights-to/to-JFK/connectMiles';


	let lang = 'pt'
	
</script>

<article class="container">
	<Header.Root image="14759a14-fd1e-4769-a56d-5c081c6dfdf7"></Header.Root>

		<!--Intro Section Start-->
			<section class="grid xs:grid-cols-1 sm:grid-cols-2 items-center pb-8">
				<div class="p-2">
					<Caption class="text-primary mb-2">{keyFacts[0].translations[lang].title}</Caption>
					<Body class="max-w-prose"
						>{@html keyFacts[0].translations[lang].description}</Body>
				</div>
				<div class="p-2">
					<Caption class="font-bold text-primary mb-2">{keyFacts[0].translations[lang].keysTitle}</Caption>
					<div class="grid gap-2 grid-rows-auto">
								{#each keyFacts.slice(1) as fact}
									{#if fact.translations[lang].url}
										<Body class="mb-0">
											<strong>{fact.icon} {fact.translations[lang].label}</strong>
											<Link href="{fact.translations[lang].url}">
												{fact.translations[lang].description}
											</Link>
										</Body>
									{:else}
										<Body class="mb-0">
											<strong>{fact.icon} {fact.translations[lang].label}</strong>
											{@html fact.translations[lang].description}
										</Body>
									{/if}
						{/each}
					</div>
				</div>
			</section>
		<!--Intro section ENDS-->



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



		<!-- TOP 10 ATTRACTIONS START -->
			<section id="top10Attractions" class=" py-8">
				<div class="text-center items-center">
					<Heading class="mb-2">{attractions[0].translations[lang].title}</Heading>
					<Body class="max-w-prose mx-auto"
						>{attractions[0].translations[lang].description}</Body
					>
				</div>	
				<div class="grid grid-cols-[repeat(auto-fit,minmax(268px,1fr))] gap-4">
					{#each attractions.slice(1) as attraction }
						<div class="rounded-2xl justify-items-start text-left grid-cols-subgrid grid-rows-subgrid">
							<div class="aspect-[4/3] overflow-hidden">
								<img
									src="https://cm-marketing.directus.app/assets/{attraction.image}"
									alt={attraction.translations[lang].title}
									class="w-full h-full object-cover object-top rounded-2xl"
								/>
							</div>
							<div class="pt-4">
								<Heading class={getTypographyVariant('h4', 'text-primary m-0')}
									>{attraction.translations[lang].title}</Heading>
								<Body class="m-0">{attraction.translations[lang].description}</Body>
							</div>
						</div>
					{/each}
				</div>
			</section>
		<!-- TOP 10 ATTRACTIONS END -->

		

		<!-- TOP GETTING AROUND START -->
		<section id="gettingAround" class="py-8">
			<Heading tag="h2" class="text-center mb-2">{transportations[0].translations[lang].title}</Heading>
			<Body class="text-center">{transportations[0].translations[lang].description}</Body>

			<InformativeBoxContainer let:Box>
				{#each transportations.slice(1) as transport}
					<Box let:Icon let:Title let:Description>
						<Icon
							><img
								src="https://cm-marketing.directus.app/assets/{transport.icon}"
								alt={transport.translations[lang].title}
								class="w-full h-full object-cover rounded-2xl"
							/></Icon>
					{#if transport.translations[lang].url}
						<Title
							><Link
								class={getTypographyVariant('h4', 'text-primary-light hover:underline')}
								href={transport.translations[lang].url}>{transport.translations[lang].title}</Link
							></Title
						>
						<Description>{transport.translations[lang].description}</Description>
						{:else}
						
						<Title>{@html transport.translations[lang].title}</Title>
						<Description>{transport.translations[lang].description}</Description>
					{/if}
							
					</Box>
				{/each}

				
			</InformativeBoxContainer>
		</section>
		<!-- TOP GETTING AROUND END -->



		<!-- BEEST OF SECTION START -->
			<section id="bestOf">
				<Heading tag="h2" class="text-center mb-2">{bestOf[0].translations[lang]}</Heading>
				<div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
					{#each bestOf.slice(1) as item}
						<div class="rounded-2xl grid auto-rows-auto justify-items-start text-left">
							<div class="aspect-[16/8] overflow-hidden subgrid">
								<img
									src="https://cm-marketing.directus.app/assets/{item.image}"
									alt={item.translations[lang].title}
									class="w-full h-full object-cover object-top rounded-2xl"
								/>
							</div>
							<div class="">
								<Heading class={getTypographyVariant('h4', 'text-primary ')}>{item.translations[lang].title}</Heading>
								<Body class="">{@html item.translations[lang].content}</Body>
							</div>
						</div>
					{/each}
				</div>
			</section>
		<!-- BEEST OF SECTION END -->


		<!--CULTURAL CULTURAL HIGHLIGHTS START-->
			<section id="culturalHighlightsTips" class="py-8">
			<div class=" items-center">
				<Heading class="mb-2">{culturalTips[0].translations[lang]}</Heading>
			</div>
			<picture class="block mx-auto sm:aspect-[16_/_16] md:aspect-[16_/_3] lg:aspect-[10_/_3] pb-6">
				<img
					src="https://cm-marketing.directus.app/assets/{culturalTips[0].image}"
					alt=""
					class="w-full h-full object-cover lg:object-cover rounded-2xl drop-shadow-lg"
				/>
			</picture>
			<InformativeBoxContainer let:Box>
				{#each culturalTips.slice(1) as tip}
					<!--NUMERo-->

					<Box class=" bg-background-lightblue" let:Icon let:Title let:Description>
						<Title class="">{tip.translations[lang].title}</Title>
						<Description class="">{tip.translations[lang].description}</Description>
					</Box>
				{/each}
			</InformativeBoxContainer>
		</section>
		<!--CULTURAL CULTURAL HIGHLIGHTS END-->


		<!-- THE PERFECT WEEK START -->
		 		<section id="thePerfectWeek" class="py-8">
		<div class="items-center">
			<Heading class="mb-2">{days[0].translations[lang].title}</Heading>
		</div>
		<Body class=""
			>{days[0].translations[lang].description}</Body>
		<picture class="block mx-auto sm:aspect-[16_/_16] md:aspect-[16_/_4] lg:aspect-[10_/_3] pb-6">
			<img
				src="https://cm-marketing.directus.app/assets/{days[0].image}"
				alt=""
				class="w-full h-full object-cover lg:object-cover rounded-2xl drop-shadow-lg"
			/>
		</picture>
		<InformativeBoxContainer let:Box>
			{#each days.slice(1) as day }
				<Box alignment="left" class="" let:Icon let:Title let:Description>
					<Title><span class="text-secondary">{day.translations[lang].icon}</span> {day.translations[lang].title}</Title>
					<Description>{day.translations[lang].description}</Description>
				</Box>
			{/each}
		</InformativeBoxContainer>
			</section>
		<!-- THE PERFECT WEEK END -->




		
		<!-- Copa Airlines RESOURCES START -->

	<section id="readytoFly" class="py-8">
		<div class="items-center">
			<Heading class="mb-2">{keyResources[0].translations[lang].title}</Heading>
		</div>
		<Body class=""
			>{keyResources[0].translations[lang].description}</Body>

			<div class="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6">

				{#each keyResources.slice(1) as resource}
					<div class="subgrid-cols-1 subgrid-rows-auto">
					<Heading tag="h3" variant="h4">{resource.emoji} {resource.translations[lang].title}</Heading>
					<Body class="mb-1">
						{resource.translations[lang].description}
					</Body>
					<Link href="{resource.translations[lang].url}">{keyResources[0].translations[lang].cta}</Link>
				</div>
				{/each}
			
			</div>
	</section>
		
		<!-- Copa Airlines RESOURCES END -->






			<!-- ConnectMiles RESOURCES START -->
	<section id="connectMiles" class="py-8">
		<div class="items-center">
			<Heading class="mb-2">{connectMiles[0].translations[lang].title}</Heading>
		</div>
		<Body class=""
			>{connectMiles[0].translations[lang].description}</Body>

			<div class="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6">

				{#each connectMiles.slice(1) as cmiTip}
					<div class="subgrid-cols-1 subgrid-rows-auto">
					<Heading tag="h3" variant="h4">{cmiTip.emoji} {cmiTip.translations[lang].title} </Heading>
					<Body class="mb-1">
						{cmiTip.translations[lang].description}
					</Body>
					<Link href="{cmiTip.translations[lang].url}">{connectMiles[0].translations[lang].cta}</Link>
				</div>
				{/each}
			
			</div>
	</section>
		
		<!-- ConnectMiles RESOURCES END -->

</article>
