<script>
	import {
		Heading,
		Body,
		Link,
		Caption,
		getTypographyVariant,
		getTypographySize
	} from '$components/components/typography/index.js';
	import { Divider } from '$components/components/divider/index.js';
	import { InformativeBoxContainer } from '$components/components/boxes/informative/index.js';
	import * as Header from '$lib/components/MainHeader';
	import { AccordionRoot } from '$components/components/input-dropdowns/accordion';
	import { items } from '$lib/data/bestOf';
	import { days } from '$lib/data/daysItinerary';
	import { attractions } from '$lib/data/topTenAttractions';
	import { culturalTips } from '$lib/data/culturalHighlightsTips';
	import { keyFacts } from '$lib/data/keyFacts';
	import { transportations } from '$lib/data/gettingAround';
	let destination = 'New York';
</script>

<article class="container">
	<Header.Root image="14759a14-fd1e-4769-a56d-5c081c6dfdf7">
		<Header.Title>Fly to New York with Copa Airlines</Header.Title>
	</Header.Root>

	<section class="grid xs:grid-cols-1 sm:grid-cols-2 items-center pb-8">
		<div class="p-2">
			<Caption class="italic text-primary mb-2"
				>Visit the famous Big Apple, the city that never sleeps.</Caption
			>
			<Body class="max-w-prose"
				><strong>New York</strong>, the cultural and financial capital of the world, radiates with
				energy and possibility. From the dazzling bright lights of Times Square and Broadway to the
				timeless beauty of Central Park, NYC is a city of iconic landmarks, diverse neighborhoods,
				and endless experiences. There’s truly something for everyone and it’s a destination that
				never disappoints.</Body
			>
		</div>
		<div class="p-2">
			<Caption class="font-bold text-primary mb-2">Key Facts for Travel</Caption>
			<div class="grid gap-2 grid-rows-auto">
				{#each keyFacts as key}
					<Body class="mb-0"><strong>{key.icon} {key.label}</strong> {@html key.description}</Body>
				{/each}
			</div>
		</div>
	</section>

	<section id="topicSelector" class="py-8">
		<Heading>Jump Ahead:</Heading>
		<ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-auto gap-2">
			<li><Link href="#top10Attractions" class=" ">Top 10 Attractions in {destination}</Link></li>
			<li><Link href="#gettingAround" class=" ">Getting Around {destination}</Link></li>
			<li><Link href="#bestOf" class=" ">Best Of {destination}</Link></li>
			<li>
				<Link href="#culturalHighlightsTips" class=" ">Cultural Tips from {destination}</Link>
			</li>
			<li><Link href="#thePerfectWeek" class=" ">The Perfect Week</Link></li>
			<li>
				<Link href="https://shopping.copaair.com">Best Prices on Flights to {destination}</Link>
			</li>
			<li><Link href="#readytoFly" class=" ">Before flying to {destination}</Link></li>
			<li><Link href="#usefulLinks" class=" ">Useful Links from {destination}</Link></li>
		</ul>
	</section>

	<section id="top10Attractions" class=" py-8">
		<div class="text-center items-center">
			<Heading>Top 10 Attractions in New York City</Heading>
			<Body class="max-w-prose mx-auto"
				>Explore the vibrant metropolis central to American life with these world famous
				attractions.</Body
			>
		</div>
		<div class="grid grid-cols-[repeat(auto-fit,minmax(268px,1fr))] gap-4">
			{#each attractions as attraction (attraction.value)}
				<div class="rounded-2xl grid auto-rows-auto justify-items-start text-left">
					<div class="aspect-[4/3] overflow-hidden subgrid">
						<img
							src="https://cm-marketing.directus.app/assets/{attraction.image}"
							alt={attraction.title}
							class="w-full h-full object-cover object-top rounded-2xl"
						/>
					</div>
					<div class="pt-4">
						<Heading class={getTypographyVariant('h4', 'text-primary m-0')}
							>{attraction.title}</Heading
						>
						<Body class="">{attraction.description}</Body>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="py-8">
		<Divider />
		<div class="text-center items-center mb-4">
			<Heading>Ready to Experience New York?</Heading>
			<Body class="max-w-prose mx-auto"
				>Book your flight to <strong>New York with Copa Airlines</strong> today and explore one of America's
				most famous and historic cities. With convenient flights and our award-winning service, Copa
				Airlines makes your journey to the U.S. capital effortless.</Body
			>
			<Link href="https://shopping.copaair.com"
				>🛫 Book Now and Discover the Magic of New York City!</Link
			>
		</div>
		<Divider></Divider>
	</section>

	<section id="gettingAround" class="py-8">
		<Heading tag="h2" class="text-center">Getting Around New York</Heading>
		<Body class="text-center"
			>From the airport, you have several options to get to the city: Public transit, taxi or
			rideshare access into Manhattan and beyond.
		</Body>

		<InformativeBoxContainer let:Box>
			{#each transportations as transport}
				<Box let:Icon let:Title let:Description>
					<Icon
						><img
							src="https://cm-marketing.directus.app/assets/{transport.icon}"
							alt={transport.title}
							class="w-full h-full object-cover rounded-2xl"
						/></Icon
					>
					<Title
						><Link
							class={getTypographyVariant('h4', 'text-primary-light hover:underline')}
							href={transport.url}>{transport.title}</Link
						></Title
					>
					<Description>{transport.description}</Description>
				</Box>
			{/each}

			<Box let:Icon let:Title let:Description>
				<Icon
					><img
						src="https://cm-marketing.directus.app/assets/ade19325-3751-431d-8704-83464477a120"
						alt=""
						class="w-full h-full object-cover rounded-2xl"
					/></Icon
				>
				<Title
					><Link
						class={getTypographyVariant('h4', 'text-primary-light hover:underline')}
						href="https://www.jfkairport.com/to-from-airport/air-train">AirTrain</Link
					>
					<Link
						class={getTypographyVariant('h4', 'text-primary-light hover:underline')}
						href="https://www.mta.info/agency/long-island-rail-road">+ LIRR</Link
					>/<Link
						class={getTypographyVariant('h4', 'text-primary-light hover:underline')}
						href="https://www.njtransit.com/">NJ Transit</Link
					>
				</Title>
				<Description
					>From JFK, take the AirTrain to Jamaica or Howard Beach, then connect to the subway or
					Long Island Rail Road (LIRR).
				</Description>
			</Box>
		</InformativeBoxContainer>
	</section>

	<div id="bestOf">
		<Heading tag="h2" class="text-center">Best of New York</Heading>
		<div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
			{#each items as item}
				<div class="rounded-2xl grid auto-rows-auto justify-items-start text-left">
					<div class="aspect-[16/8] overflow-hidden subgrid">
						<img
							src="https://cm-marketing.directus.app/assets/{item.image}"
							alt={item.title}
							class="w-full h-full object-cover object-top rounded-2xl"
						/>
					</div>
					<div class="">
						<Heading class={getTypographyVariant('h4', 'text-primary ')}>{item.title}</Heading>
						<Body class="">{@html item.content}</Body>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<!--	 
	<section id="bestOf" class="py-8">
		<Heading tag="h2" class="text-center">Best of New York</Heading>

		<AccordionRoot let:Item>
			{#each items as item (item.value)}
				<Item value={item.value} class="" let:Header let:Content>
					<Header let:Trigger>
						<Trigger let:Title>
							<Title>{item.title}</Title>
						</Trigger>
					</Header>
					<Content class="grid md:grid-cols-2 lg:grid-cols-2 items-center gap-4">
						<picture
							class="block mx-auto aspect-[16_/_10] sm:aspect-[16_/_16] md:aspect-[16_/_8] lg:aspect-[10_/_6] pb-6"
						>
							<img
								src="https://cm-marketing.directus.app/assets/{item.image}"
								alt=""
								class="w-full h-full object-cover rounded-2xl drop-shadow-lg"
							/>
						</picture>
						<Body>{@html item.content}</Body>
					</Content>
				</Item>
			{/each}
		</AccordionRoot>
	</section>  
	-->

	<section class="py-8">
		<Divider />
		<div class="text-center items-center mb-4">
			<Heading>Ready to Experience New York?</Heading>
			<Body class="max-w-prose mx-auto"
				>Book your flight to <strong class="">New York with Copa Airlines</strong> today and explore
				one of America's most famous and historic cities. With convenient flights and our award-winning
				service, Copa Airlines makes your journey to the U.S. capital effortless.</Body
			>
			<Link href="https://shopping.copaair.com"
				>🛫 Book Now and Discover the Magic of New York City!</Link
			>
		</div>
		<Divider></Divider>
	</section>

	<section id="culturalHighlightsTips" class="py-8">
		<div class=" items-center">
			<Heading>Cultural Highlights and Tips</Heading>
		</div>
		<picture class="block mx-auto sm:aspect-[16_/_16] md:aspect-[16_/_3] lg:aspect-[10_/_3] pb-6">
			<img
				src="https://cm-marketing.directus.app/assets/80beff87-fbce-431f-b822-00681a926213"
				alt=""
				class="w-full h-full object-cover lg:object-cover rounded-2xl drop-shadow-lg"
			/>
		</picture>
		<InformativeBoxContainer let:Box>
			{#each culturalTips as tip}
				<!--NUMERo-->

				<Box class=" bg-background-lightblue" let:Icon let:Title let:Description>
					<Title class="">{tip.title}</Title>
					<Description class="">{tip.description}</Description>
				</Box>
			{/each}
		</InformativeBoxContainer>
	</section>

	<section id="thePerfectWeek" class="py-8">
		<div class="items-center">
			<Heading>The Perfect Week: What To Do in New York</Heading>
		</div>
		<Body class=""
			>We recommend starting at the southern part of Manhattan and working your way north as the
			days go on, then visiting a few boroughs, to get the full New York experience.
		</Body>
		<picture class="block mx-auto sm:aspect-[16_/_16] md:aspect-[16_/_4] lg:aspect-[10_/_3] pb-6">
			<img
				src="https://cm-marketing.directus.app/assets/86d5c4dd-e80c-4153-bc1b-4c28f7dc571f"
				alt=""
				class="w-full h-full object-cover lg:object-cover rounded-2xl drop-shadow-lg"
			/>
		</picture>
		<InformativeBoxContainer let:Box>
			{#each days as day (day.value)}
				<Box alignment="left" class="" let:Icon let:Title let:Description>
					<Title><span class="text-secondary">{day.dayNumber}</span> {day.title}</Title>
					<Description>{day.description}</Description>
				</Box>
			{/each}
		</InformativeBoxContainer>
	</section>

	<section id="readytoFly" class="py-8">
		<div class="py-4">
			<Heading><strong>Essentials Before Your Flight</strong></Heading>
			<Body
				>Here are essential resources to make your trip with Copa Airlines seamless and enjoyable.</Body
			>

			<div class="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6">
				<div>
					<Heading tag="h3" variant="h4">💻 Online Check-in</Heading>
					<Body class="mb-1"
						>Check in online 24 hours before departure to save time at the airport.</Body
					>
					<Link href="https://checkin.copaair.com">checkin.copaair.com</Link>
				</div>

				<div>
					<Heading tag="h3" variant="h4">🧾 Manage Reservations (My Trips)</Heading>
					<Body class="mb-1">Manage and save your Copa Airlines bookings.</Body>
					<Link href="https://mytrips.copaair.com">mytrips.copaair.com</Link>
				</div>

				<div>
					<Heading tag="h3" variant="h4">🛂 Travel Requirements</Heading>
					<Body class="mb-1">Verify entry requirements and prepare documents for boarding.</Body>
					<Link href="https://www.copaair.com/en-gs/travel-requirement/">Travel Requirements</Link>
				</div>

				<div>
					<Heading tag="h3" variant="h4">🎒 Baggage Policy</Heading>
					<Body class="mb-1">Review baggage allowances and fees in advance.</Body>
					<Link href="https://www.copaair.com/en-gs/travel-information/baggage-information/"
						>Baggage Info</Link
					>
				</div>

				<div>
					<Heading tag="h3" variant="h4">🚫 Restricted Baggage</Heading>
					<Body class="mb-1">Find out which items are prohibited in your luggage.</Body>
					<Link
						href="https://www.copaair.com/en-gs/travel-information/baggage-information/restricted-baggage/"
						>Restricted Items</Link
					>
				</div>

				<div>
					<Heading tag="h3" variant="h4">🚗 Rent a Car</Heading>
					<Body class="mb-1">Book a rental vehicle through our partner platform.</Body>
					<Link href="https://copa.cartrawler.com/en/home">Car Rental</Link>
				</div>

				<div>
					<Heading tag="h3" variant="h4">📡 Flight Status & Updates</Heading>
					<Body class="mb-1">Check the latest status and updates for your flight.</Body>
					<Link href="https://www.copaair.com/en-gs/flight-status/">Flight Status</Link>
				</div>
			</div>
		</div>
	</section>

	<section id="">
		<div class="py-4">
			<Heading>ConnectMiles member?</Heading>
			<Body class="mb-6"
				>If you're part of the ConnectMiles program — or thinking of joining — don’t miss out on
				these exclusive perks:</Body
			>

			<div class="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6">
				<div class="">
					<Heading tag="h3" variant="h4">🏨 ConnectMiles Hotels</Heading>
					<Body class="mb-1"
						>Book your stay and earn miles through our exclusive hotel platform.</Body
					>
					<Link href="https://connectmileshotels.copaair.com/">connectmileshotels.copaair.com</Link>
				</div>

				<div class="">
					<Heading tag="h3" variant="h4">💼 Earn Miles Everywhere</Heading>
					<Body class="mb-1">Flights, hotels, rentals, and more—discover ways to earn miles.</Body>
					<Link
						href="https://www.copaair.com/en-gs/connectmiles/miles/other-ways-to-earn-miles-services/"
						>Other Ways to Earn</Link
					>
				</div>

				<div>
					<Heading tag="h3" variant="h4">⭐ Not a Member Yet?</Heading>
					<Body class="mb-1">Join ConnectMiles today and start earning with every trip.</Body>
					<Link href="https://www.copaair.com/en-gs/enrollment/">Join Now</Link>
				</div>
			</div>
		</div>
	</section>

	<section id="usefulLinks" class="py-8">
		<Heading><strong>Useful Links:</strong></Heading>
		<div class="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6">
			<div>
				<Heading tag="h3" variant="h4">Seasonal Events</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://www.nycstpatricksparade.org/">St. Patrick’s Parade</Link>
					</li>
					<li>
						<Link href="https://www.tribecafilm.com/">Tribeca Film Festival</Link>
					</li>
					<li>
						<Link href="https://cityparksfoundation.org/summerstage/">SummerStage</Link>
					</li>
					<li>
						<Link href="https://wiadcacarnival.org/">West Indian Carnival</Link>
					</li>
					<li>
						<Link href="https://www.thanksgivingparade.com/">Thanksgiving Parade</Link>
					</li>
					<li>
						<Link
							href="https://www.rockefellercenter.com/holidays/rockefeller-center-christmas-tree-lighting/"
							>Rockefeller Tree</Link
						>
					</li>
					<li>
						<Link href="https://www.timessquarenyc.org/nye/nye-landing">New Year’s Eve</Link>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Museums & Attractions</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://www.amnh.org/">Natural History Museum</Link>
					</li>
					<li>
						<Link href="https://www.nyc.gov/html/dot/html/infrastructure/brooklyn-bridge.shtml"
							>Brooklyn Bridge</Link
						>
					</li>
					<li>
						<Link href="https://www.esbnyc.com/">Empire State Building</Link>
					</li>
					<li>
						<Link href="https://www.metmuseum.org/">The Met</Link>
					</li>
					<li>
						<Link href="https://www.moma.org/">MoMA</Link>
					</li>
					<li>
						<Link href="https://www.guggenheim.org/">Guggenheim</Link>
					</li>
					<li>
						<Link href="https://intrepidmuseum.org/">Intrepid Museum</Link>
					</li>
					<li>
						<Link href="https://www.timessquarenyc.org/">Times Square</Link>
					</li>
					<li>
						<Link href="https://www.wtc.com/">World Trade Center</Link>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Activities & Adventure</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://bronxzoo.com/">Bronx Zoo</Link>
					</li>
					<li>
						<Link href="https://www.nycgovparks.org/parks/central-park">Central Park</Link>
					</li>
					<li>
						<Link href="https://chinatown.nyc/">Chinatown</Link>
					</li>
					<li>
						<Link href="https://www.coneyisland.com/">Coney Island</Link>
					</li>
					<li>
						<Link href="https://www.statueofliberty.org/visit/">Statue of Liberty</Link>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Dining & Romantic Getaways</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://balthazarny.com/">Balthazar</Link>
					</li>
					<li>
						<Link href="https://www.boucherieus.com/location/boucherie-la-grande-boucherie/"
							>La Grande Boucherie</Link
						>
					</li>
					<li>
						<Link href="https://www.thehighline.org/">The High Line</Link>
					</li>
					<li>
						<Link href="https://nycl.com/">Cruise Lines</Link>
					</li>
					<li>
						<Link href="https://www.ferry.nyc/">NYC Ferry</Link>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Official Tourism & Government Websites</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://www.nyc.gov">NYC.gov</Link>
					</li>
					<li>
						<Link href="http://nyctourism.com/">NYC Tourism</Link>
					</li>
					<li>
						<Link href="https://www.iloveny.com/">I Love NY</Link>
					</li>
					<li>
						<Link href="https://visitnyc.com/">Visit NYC</Link>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Weather & Seasonal Travel</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://worldweather.wmo.int/en/city.html?cityId=278">WMO</Link>
					</li>
					<li>
						<Link href="https://www.weather.gov/okx/">National Weather Service</Link>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Airport Information</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://www.jfkairport.com/">JFK Airport</Link>
					</li>
				</ul>
			</div>
		</div>
	</section>
</article>
