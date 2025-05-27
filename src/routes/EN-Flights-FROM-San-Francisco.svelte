<script>
	import {
		Heading,
		Body,
		Link,
		Caption,
		getTypographyVariant,
		getTypographySize
	} from '$components/components/typography/index.js';
	import { InformativeBoxContainer } from '$components/components/boxes/informative/index.js';
	let lang = 'es';
	import { transportations } from '$lib/data/Flights-from/EN/From-SFO/gettingAround';
	import * as Header from '$lib/components/MainHeader';
	let destination = 'San Francisco';
</script>

<article class="container">
	<Body class="mt-2">
		Start your next adventure from <strong>San Francisco</strong> with Copa Airlines. With one-stop connections
		to Latin America and the Caribbean via Panama City, your global getaway starts in the Bay Area.</Body
	>
	<Header.Root image="70fc6dba-263a-49b5-9ce0-2a222c85e25d"></Header.Root>

	<section class="grid xs:grid-cols-1 sm:grid-cols-3 items-center pb-8">
		<div class="p-2"></div>
	</section>
	<section id="gettingAround" class="py-8">
		<Heading tag="h2" class="text-center mb-2">Getting Around {destination}</Heading>
		<Body class="text-center"
			>From the airport, you have several options to get to the city: Public transit, taxi or
			rideshare access into Manhattan and beyond.
		</Body>
		<picture class="block mx-auto sm:aspect-[16_/_16] md:aspect-[16_/_3] lg:aspect-[10_/_3] pb-6">
			<img
				src="https://cm-marketing.directus.app/assets/f7288bbc-8112-46de-8667-ff97d72891e4.jpg"
				alt=""
				class="w-full h-full object-cover lg:object-top rounded-2xl drop-shadow-lg"
			/>
		</picture>

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
					<Title>
						{#if transport.url}
							<Link
								class={getTypographyVariant('h4', 'text-primary-light hover:underline')}
								href={transport.url}
							>
								{transport.title}
							</Link>
						{:else}
							<span class={getTypographyVariant('h4', 'text-primary-light')}>
								{transport.title}
							</span>
						{/if}
					</Title>
					<Description>{transport.description}</Description>
				</Box>
			{/each}
		</InformativeBoxContainer>
	</section>

	<section id="usefulLinks" class="py-8">
		<Heading tag="h2" class="text-center mb-2">Flying from San Francisco: Useful Links</Heading>
		<Body class="text-center"
			>Here are some helpful links to make your trip from San Francisco smooth and stress-free.</Body
		>
		<picture class="block mx-auto sm:aspect-[16_/_16] md:aspect-[16_/_3] lg:aspect-[10_/_5] pb-6">
			<img
				src="https://cm-marketing.directus.app/assets/c1f8a7b9-327a-4e24-8aa0-5fa35a3e6b10"
				alt=""
				class="w-full h-full object-cover lg:object-top rounded-2xl drop-shadow-lg"
			/>
		</picture>

		<div class="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6">
			<div>
				<Heading tag="h3" variant="h4">Copa Airlines Resources</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://mytrips.copaair.com">Manage Reservations</Link>
					</li>
					<li>
						<Link href="https://checkin.copaair.com">Online Check-In (24 Hours Before Flight)</Link>
					</li>
					<li>
						<Link href="https://www.copaair.com/en-gs/flight-status/"
							>Flight Status and Updates</Link
						>
					</li>
					<li>
						<Link href="https://www.copaair.com/en-gs/travel-requirement/">Travel Requirements</Link
						>
					</li>
					<li>
						<Link href="https://www.copaair.com/en-gs/travel-information/baggage-information/"
							>Copa Airlines Baggage Policy</Link
						>
					</li>
					<li>
						<Link
							href="https://www.copaair.com/en-gs/travel-information/baggage-information/restricted-baggage/"
							>Restricted Baggage</Link
						>
					</li>
					<li>
						<Link
							href="https://www.copaair.com/en-us/discover-copa-airlines/digital-experience/mobile-app/"
							>Download the Copa Airlines Mobile App</Link
						>
					</li>
					<li>
						<Link
							href="https://docs.google.com/document/d/19AJC9ikW6mgtklpblSwgGrJVo42aE1pP7PoSQPlrmco/edit?tab=t.0#heading=h.wjb0uj407deo"
							>Rewards Program</Link
						>
					</li>
				</ul>
			</div>
			<div>
				<Heading tag="h3" variant="h4">Airport Information</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://www.flysfo.com/"
							>San Francisco International Airport (SFO) Official Site</Link
						>
					</li>
					<li>
						<Link href="https://www.flysfo.com/flight-info/international"
							>International Passengers at SFO</Link
						>
					</li>
					<li>
						<Link href="https://www.flysfo.com/passengers/parking">Parking at SFO</Link>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Transportation</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://www.bart.gov/guide/airport/sfo"
							>BART (Bay Area Rapid Transit) | Airport Connections</Link
						>
					</li>
					<li>
						<Link href="https://copa.cartrawler.com/en/home">Rent A Car</Link>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section id="connectMiles" class="py-8">
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
</article>
