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
	const items = [
		{
			value: '1',
			title: '👨‍👩‍👧‍👦 Best For Families',
			image: '610c1490-6880-4cb2-8d14-84554584ed5e',
			content: `
      <ul class="list-disc pl-6 space-y-1">
        <li>Island: Classic boardwalk fun with amusement rides and beach access.</li>
        <li>Bronx Zoo – The largest urban zoo in the U.S., home to diverse animal species.</li>
        <li>American Museum of Natural History – Dinosaurs and interactive exhibits.</li>
        <li>New York Hall of Science – Hands-on STEM exhibits, a place for curious minds.</li>
        <li>Central Park Zoo – A compact but charming zoo, perfect for younger children.</li>
      </ul>`
		},
		{
			value: '2',
			title: '🎒 Best For Solo Travelers',
			image: '8c52a57b-55a3-4099-b361-5b0b6c9f68bf',
			content: `
      <ul class="list-disc pl-6 space-y-1">
        <li>Central Park – Take a stroll through the first public park ever built in America.</li>
        <li>American Museum of Natural History – Journey through U.S. history and culture.</li>
        <li>The High Line – Walk the elevated park with gardens, art, and skyline views.</li>
        <li>The Strand Bookstore – Browse and linger through 18 miles of books.</li>
        <li>MoMA (Museum of Modern Art) – See modern masterpieces at your own pace.</li>
      </ul>`
		},
		{
			value: '3',
			title: '🚴‍♂️ Best For Adventure Seekers',
			image: '2fee4e31-bac9-4b7a-b1f7-2d94ff19aa2d',
			content: `
      <ul class="list-disc pl-6 space-y-1">
        <li>Kayaking on the Hudson River – Experience the joy of this unique experience.</li>
        <li>A helicopter tour over Manhattan – These are views you’ll never forget.</li>
        <li>Jet ski around New York Harbor – An adventure along the famous waterfront.</li>
        <li>Climb The Edge – The highest outdoor sky deck in the Western Hemisphere.</li>
        <li>Hot air balloon ride – Travel just an hour north of the city for this experience.</li>
      </ul>`
		},
		{
			value: '4',
			title: '🌿 Best For Relaxing',
			image: '372f4ced-fb13-4d5b-9547-e78e30fc0d1d',
			content: `
      <ul class="list-disc pl-6 space-y-1">
        <li>Coney Island – This vibrant area includes a beach, boardwalk, and attractions.</li>
        <li>Galleries and museums – From art to science, a variety of options.</li>
        <li>Central Park – One of the most relaxing places in the city.</li>
        <li>Visit the Rockaways – Oceanfront fun in the Queens neighborhood.</li>
        <li>The subway – Stay on the train, enjoy a long ride, and people watch.</li>
      </ul>`
		},
		{
			value: '5',
			title: '💑 Best For Romantic Escapes',
			image: '7755b199-6bd2-48ee-9110-df1c14ec5be3',
			content: `
      <ul class="list-disc pl-6 space-y-1">
        <li>The High Line – A unique blend of nature and art to escape the city’s bustle.</li>
        <li>Royalton Hotel in Midtown Manhattan – Known for its fireplace and unique tubs.</li>
        <li>Carriage Ride in Central Park – It’s classic, timeless, and romantic all at once.</li>
        <li>Empire Hotel – It offers a romantic package and rooftop bar views.</li>
        <li>Mohonk Mountain House – Take a trip upstate for a mountaintop experience.</li>
      </ul>`
		}
	];

	const days = [
		{
			value: '1',
			title: '🏛 Day 1: World Trade Center, Battery Park, and the Financial District',
			content:
				'Reflect at the 9/11 Memorial & Museum, catch a breeze at Battery Park, consider a ferry ride to the Statue of Liberty, then explore the New York Stock Exchange and Wall Street.'
		},
		{
			value: '2',
			title: '🛍️ Day 2: SoHo, Chinatown, and Lower East Side',
			content:
				'Window shop along the cobblestone streets of SoHo, take in sights and flavors of Chinatown, then visit the Lower East Side for bold street art and cultural history.'
		},
		{
			value: '3',
			title: '☕ Day 3: Greenwich Village, West Village, and Chelsea',
			content:
				'Start your morning at a café in the West Village, wander through tiny bookstores, have lunch at Chelsea Market, visit an art gallery, and walk the High Line.'
		},
		{
			value: '4',
			title: '🎭 Day 4: Midtown and Times Square',
			content:
				'Begin with a classic NYC breakfast from a corner cart, visit Rockefeller Center and St. Patrick’s Cathedral, then finish with a Broadway show and the buzz of Times Square.'
		},
		{
			value: '5',
			title: '🖼️ Day 5: Central Park and Museums',
			content:
				'Brunch near the park, then go on a stroll through Central Park, visit The Met (Metropolitan Museum of Art) and the American Museum of Natural History.'
		},
		{
			value: '6',
			title: '🌉 Day 6: Excursion to Brooklyn',
			content:
				'Take in skyline views as you walk over the Brooklyn Bridge. Spend the afternoon exploring street art in Williamsburg, cafes and the charm of Prospect Park.'
		},
		{
			value: '7',
			title: '⚾ Day 7: Harlem, Uptown, and a Yankees game',
			content:
				'Start with brunch in Harlem, explore the legendary Apollo Theater, then unwind with a stroll through Riverside Park. End strong with a Yankees game and a slice of pizza.'
		}
	];
</script>

<article class="container">
	<Header.Root image="14759a14-fd1e-4769-a56d-5c081c6dfdf7">
		<Header.Title>Fly to New York with Copa Airlines</Header.Title>
	</Header.Root>
	<section class="grid grid-cols-2 items-center pb-8">
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
			<div class="grid gap-1 grid-rows-auto">
				<Body class="mb-0">✈️ Airport: John F. Kennedy International Airport (JFK)</Body>
				<Body class="mb-0">💰 Currency: U.S. Dollar (USD) [1 USD = $1.00]</Body>
				<Body class="mb-0"
					>⏰ Time Zone: Eastern Time (GMT -5, GMT -4 during daylight saving time)</Body
				>
				<Body class="mb-0">🏨 Hotels: Book a hotel now. [ Booking.com link]</Body>
				<Body class="mb-0">☀️ Most Sunshine: July - August.</Body>
				<Body class="mb-0"
					>📅 Peak Seasons: May - August (best weather), November - December (holidays).</Body
				>
				<Body class="mb-0">🏛 Least Crowded: January - March (winter, less tourists)</Body>
				<Body class="mb-0"
					>🗣️Fun Fact: New York is is one of the world’s most diverse cities with more than 800
					languages spoken</Body
				>
			</div>
		</div>
	</section>

	<div class="py-8">
		<ul class="flex flex-wrap gap-4">
			<li><a href="#book-your-trip">Book Your Trip Now</a></li>
			<li><a href="#top-attractions">Top 10 Attractions</a></li>
			<li><a href="#getting-around">Getting Around</a></li>
			<li><a href="#best-of">Best Of</a></li>
			<li><a href="#cultural-tips">Cultural Tips</a></li>
			<li><a href="#perfect-week">The Perfect Week</a></li>
			<li><a href="#useful-links">Useful Links</a></li>
			<li><a href="#flight-offers">Offers on Flights</a></li>
			<li><a href="#best-prices">Best Prices on Flights</a></li>
			<li><a href="#key-resources">Key Resources</a></li>
		</ul>
	</div>

	<section id="top10Attractions" class=" py-8">
		<div class="text-center items-center">
			<Heading>Top 10 Attractions in New York City</Heading>
			<Body class="max-w-prose mx-auto"
				>Explore the vibrant metropolis central to American life with these world famous
				attractions.</Body
			>
		</div>

		<div class="grid grid-cols-[repeat(auto-fit,minmax(268px,1fr))] gap-4">
			<!-- 1. Empire State Building -->
			<div class="rounded-2xl grid auto-rows-auto justify-items-start text-left">
				<div class="aspect-[4/3] overflow-hidden subgrid">
					<img
						src="https://cm-marketing.directus.app/assets/030268c6-b666-47ba-83f8-93115e4486f0"
						alt="Empire State Building"
						class="w-full h-full object-cover object-top rounded-2xl"
					/>
				</div>
				<div class="pt-4">
					<Heading class={getTypographyVariant('h4', 'text-primary m-0')}
						>Empire State Building</Heading
					>
					<Body class="">Take in unforgettable views with the famous observatory.</Body>
				</div>
			</div>

			<!-- 2. Broadway and Theater District -->
			<div class="rounded-2xl grid auto-rows-auto justify-items-start text-left">
				<div class="aspect-[4/3] overflow-hidden subgrid">
					<img
						src="https://cm-marketing.directus.app/assets/247eaffc-b4aa-4d3f-8d5f-556ff2937433"
						alt="Broadway and Theater District"
						class="w-full h-full object-cover object-top rounded-2xl"
					/>
				</div>
				<div class="pt-4">
					<Heading class={getTypographyVariant('h4', 'text-primary m-0')}
						>Broadway and Theater District</Heading
					>
					<Body class="">Home to world-class performances, part of the New York experience.</Body>
				</div>
			</div>

			<!-- 3. The Metropolitan Museum of Art (The Met) -->
			<div class="rounded-2xl grid auto-rows-auto justify-items-start text-left">
				<div class="aspect-[4/3] overflow-hidden subgrid">
					<img
						src="https://cm-marketing.directus.app/assets/180d5cb1-eb97-4e0a-9a65-67a6115b1050"
						alt="The Metropolitan Museum of Art (The Met)"
						class="w-full h-full object-cover object-top rounded-2xl"
					/>
				</div>
				<div class="pt-4">
					<Heading class={getTypographyVariant('h4', 'text-primary m-0')}
						>The Metropolitan Museum of Art</Heading
					>
					<Body class=""
						>One of the world’s premier art museums with more than two million works.</Body
					>
				</div>
			</div>

			<!-- 4. Brooklyn Bridge -->
			<div class="rounded-2xl grid auto-rows-auto justify-items-start text-left">
				<div class="aspect-[4/3] overflow-hidden subgrid">
					<img
						src="https://cm-marketing.directus.app/assets/8089924f-98db-4dae-8660-d1fdaf3a2f2a"
						alt="Brooklyn Bridge"
						class="w-full h-full object-cover object-top rounded-2xl"
					/>
				</div>
				<div class="pt-4">
					<Heading class={getTypographyVariant('h4', 'text-primary m-0')}>Brooklyn Bridge</Heading>
					<Body class="">An architectural marvel that connects Brooklyn with Manhattan.</Body>
				</div>
			</div>

			<!-- 5. Times Square -->
			<div class="rounded-2xl grid auto-rows-auto justify-items-start text-left">
				<div class="aspect-[4/3] overflow-hidden subgrid">
					<img
						src="https://cm-marketing.directus.app/assets/efb630fc-d464-4989-a84a-45e919691c90"
						alt="Times Square"
						class="w-full h-full object-cover object-top rounded-2xl"
					/>
				</div>
				<div class="pt-4">
					<Heading class={getTypographyVariant('h4', 'text-primary m-0')}>Times Square</Heading>
					<Body class="">With bright lights and bustling energy, a must-see for visitors.</Body>
				</div>
			</div>

			<!-- 6. One World Observatory -->
			<div class="rounded-2xl grid auto-rows-auto justify-items-start text-left">
				<div class="aspect-[4/3] overflow-hidden subgrid">
					<img
						src="https://cm-marketing.directus.app/assets/fa014ba0-a862-44a5-8dc3-9ec167828a0e"
						alt="One World Observatory"
						class="w-full h-full object-cover object-top rounded-2xl"
					/>
				</div>
				<div class="pt-4">
					<Heading class={getTypographyVariant('h4', 'text-primary m-0')}
						>One World Observatory</Heading
					>
					<Body class="">A place for reflection that offers panoramic views of the city.</Body>
				</div>
			</div>
			<!-- 7. Rockefeller Center -->
			<div class="rounded-2xl grid auto-rows-auto justify-items-start text-left">
				<div class="aspect-[4/3] overflow-hidden subgrid">
					<img
						src="https://cm-marketing.directus.app/assets/cf11849a-3b3e-4ccb-b030-22d3f3ec4cf0"
						alt="One World Observatory"
						class="w-full h-full object-cover object-top rounded-2xl"
					/>
				</div>
				<div class="pt-4">
					<Heading class={getTypographyVariant('h4', 'text-primary m-0')}
						>Rockefeller Center</Heading
					>
					<Body class="">A hub of entertainment and shopping with expansive city views.</Body>
				</div>
			</div>

			<!-- 8. Grand Central Terminal -->
			<div class="rounded-2xl grid auto-rows-auto justify-items-start text-left">
				<div class="aspect-[4/3] overflow-hidden subgrid">
					<img
						src="https://cm-marketing.directus.app/assets/940749cf-2488-43cb-959c-b73286a07057"
						alt="Grand Central Terminal"
						class="w-full h-full object-cover object-top rounded-2xl"
					/>
				</div>
				<div class="pt-4">
					<Heading class={getTypographyVariant('h4', 'text-primary m-0')}
						>Grand Central Terminal</Heading
					>
					<Body class="">A transportation hub that boasts stunning architecture.</Body>
				</div>
			</div>
		</div>
	</section>

	<section class="py-8">
		<Divider />
		<div class="text-center items-center">
			<Heading>Ready to Experience New York?</Heading>
			<Body class="max-w-prose mx-auto"
				>Book your flight to <strong class="text-primary">New York with Copa Airlines</strong> today
				and explore one of America's most famous and historic cities. With convenient flights and our
				award-winning service, Copa Airlines makes your journey to the U.S. capital effortless.</Body
			>
			<Link class={getTypographyVariant('body', 'text-primary m-0')} href="https://www.google.com"
				>🛫 Book Now and Discover the Magic of New York City!</Link
			>
		</div>
		<Divider></Divider>
	</section>

	<section id="gettingAround" class="py-8">
		<Heading tag="h2" class="text-center">Fly to New York with Copa Airlines</Heading>
		<Body class="text-center"
			>From the airport, you have several options to get to the city: Public transit, taxi or
			rideshare access into Manhattan and beyond.
		</Body>

		<InformativeBoxContainer let:Box>
			<Box let:Icon let:Title let:Description>
				<Icon>🚇</Icon>
				<Title
					><Link
						class={getTypographyVariant('h4', 'text-primary underline')}
						href="https://www.google.com">Subway (MTA)</Link
					></Title
				>
				<Description
					>The fastest and most affordable way to get around. Runs 24/7 and connects all five
					boroughs with underground and elevated lines.
				</Description>
			</Box>

			<Box let:Icon let:Title let:Description>
				<Icon>🚇</Icon>
				<Title
					><Link
						class={getTypographyVariant('h4', 'text-primary underline')}
						href="https://www.google.com">AirTrain</Link
					> + <Link
						class={getTypographyVariant('h4', 'text-primary underline')}
						href="https://www.google.com">LIRR/NJ Transit</Link
					>
				</Title>
				<Description
					>From JFK, take the AirTrain to Jamaica or Howard Beach, then connect to the subway or
					Long Island Rail Road (LIRR).
				</Description>
			</Box>

			<Box let:Icon let:Title let:Description>
				<Icon>🚇</Icon>
				<Title
					><Link
						class={getTypographyVariant('h4', 'text-primary underline')}
						href="https://www.google.com">Yellow Taxis and Ridesharing</Link
					></Title
				>
				<Description
					>Hail a classic yellow cab on the street or use apps like Uber, Lyft, or Via for on-demand
					rides.
				</Description>
			</Box>

			<Box let:Icon let:Title let:Description>
				<Icon>🚇</Icon>
				<Title
					><Link
						class={getTypographyVariant('h4', 'text-primary underline')}
						href="https://www.google.com"
						>City Buses (MTA)
					</Link></Title
				>
				<Description>A reliable to get around for areas not served directly by subway.</Description>
			</Box>

			<Box let:Icon let:Title let:Description>
				<Icon>🚇</Icon>
				<Title
					><Link class={getTypographyVariant('h4', 'text-primary')}
						>Ferries, Bikes, and Scooters
					</Link></Title
				>
				<Description
					>Another option to explore the city in certain areas, perfect for a scenic ride.
				</Description>
			</Box>
		</InformativeBoxContainer>
	</section>

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
					<Content>
						<picture
							class="block mx-auto sm:aspect-[16_/_16] md:aspect-[16_/_8] lg:aspect-[10_/_4] pb-6"
						>
							<img
								src="https://cm-marketing.directus.app/assets/{item.image}"
								alt=""
								class="w-full h-full object-cover lg:object-cover rounded-2xl drop-shadow-lg"
							/>
						</picture>
						<Body>{@html item.content}</Body>
					</Content>
				</Item>
			{/each}
		</AccordionRoot>
	</section>

	<section class="py-8">
		<Divider />
		<div class="text-center items-center">
			<Heading>Ready to Experience New York?</Heading>
			<Body class="max-w-prose mx-auto"
				>Book your flight to <strong class="text-primary">New York with Copa Airlines</strong> today
				and explore one of America's most famous and historic cities. With convenient flights and our
				award-winning service, Copa Airlines makes your journey to the U.S. capital effortless.</Body
			>
			<Link class={getTypographyVariant('body', 'text-primary m-0')} href="https://www.google.com"
				>🛫 Book Now and Discover the Magic of New York City!</Link
			>
		</div>
		<Divider></Divider>
	</section>

	<section id="culturalHighlightsTips" class="py-8">
		<div class=" items-center">
			<Heading>Cultural Highlights and Tips</Heading>
		</div>
		<picture class="block mx-auto sm:aspect-[16_/_16] md:aspect-[16_/_7] lg:aspect-[10_/_3] pb-6">
			<img
				src="https://cm-marketing.directus.app/assets/80beff87-fbce-431f-b822-00681a926213"
				alt=""
				class="w-full h-full object-cover lg:object-cover rounded-2xl drop-shadow-lg"
			/>
		</picture>
		<Body>
			<ul>
				<li>
					<strong>Broadway in NYC is a must.</strong>
					Even if the theater isn’t typically your scene, seeing a show on Broadway is an unforgettable
					cultural experience.
				</li>
				<li>
					<strong>Respect the hustle.</strong>
					New Yorkers walk fast and value efficiency. Stay to the right on sidewalks, don’t stop suddenly,
					and don’t block subway doors.
				</li>
				<li>
					<strong>Iconic holidays are big events.</strong>
					From the Thanksgiving Day Parade to New Year’s Eve in Times Square, NYC knows how to throw
					a party. Arrive early and bundle up.
				</li>
				<li>
					<strong>Recommended dress code: Urban casual.</strong>
					New Yorkers dress practically but with style. Sneakers, denim, and layers are the norm. Black
					is always in fashion.
				</li>
				<li>
					<strong>Explore the boroughs.</strong>
					Culture goes well beyond Manhattan. Stop by Brooklyn for indie art and food, Queens for unmatched
					diversity, and Harlem for jazz and history.
				</li>
				<li>
					<strong>Tipping culture is strong.</strong>
					It’s expected to tip 15–20% in restaurants, $1–2 per drink at bars, and $1–2 per bag for hotel
					staff or airport porters.
				</li>
				<li>
					<strong>Don’t skip public art.</strong>
					NYC is an outdoor gallery, from subway performers to murals and installations in parks and
					plazas. Keep your eyes open and explore the culture everywhere.
				</li>
			</ul>
		</Body>
	</section>

	<section id="thePerfectWeek" class="py-8">
		<div class=" items-center">
			<Heading>The Perfect Week: What To Do in New York</Heading>
		</div>
		<Body class=""
			>We recommend starting at the southern part of Manhattan and working your way north as the
			days go on, then visiting a few boroughs, to get the full New York experience.
		</Body>

		<picture class="block mx-auto sm:aspect-[16_/_16] md:aspect-[16_/_7] lg:aspect-[10_/_3] pb-6">
			<img
				src="https://cm-marketing.directus.app/assets/86d5c4dd-e80c-4153-bc1b-4c28f7dc571f"
				alt=""
				class="w-full h-full object-cover lg:object-cover rounded-2xl drop-shadow-lg"
			/>
		</picture>

		<AccordionRoot let:Item>
			{#each days as item (item.value)}
				<Item value={item.value} class="" let:Header let:Content>
					<Header let:Trigger>
						<Trigger let:Title>
							<Title>{item.title}</Title>
						</Trigger>
					</Header>
					<Content>
						<Body>{@html item.content}</Body>
					</Content>
				</Item>
			{/each}
		</AccordionRoot>
	</section>

	<section id="beforeFlights" class="py-8">
		<Heading><strong>Essentials Before Your Flight</strong></Heading>
		<Body>
			Here are essential resources to make your trip with Copa Airlines seamless and enjoyable.</Body
		>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<div>
				<Heading class="text-lg font-semibold mb-2">💻 Online Check-in</Heading>
				<Body class="mb-1"
					>Check in online 24 hours before departure to save time at the airport.</Body
				>
				<Link
					class={getTypographyVariant('body', 'text-primary m-0')}
					href="https://checkin.copaair.com">checkin.copaair.com</Link
				>
			</div>

			<div>
				<Heading class="text-lg font-semibold mb-2">🧾 Manage Reservations (My Trips)</Heading>
				<Body class="mb-1">Manage and save your Copa Airlines bookings.</Body>
				<Link
					class={getTypographyVariant('body', 'text-primary m-0')}
					href="https://mytrips.copaair.com">mytrips.copaair.com</Link
				>
			</div>

			<div>
				<Heading class="text-lg font-semibold mb-2">🛂 Travel Requirements</Heading>
				<Body class="mb-1">Verify entry requirements and prepare documents for boarding.</Body>
				<Link
					class={getTypographyVariant('body', 'text-primary m-0')}
					href="https://www.copaair.com/en-gs/travel-requirement/">Travel Requirements</Link
				>
			</div>

			<div>
				<Heading class="text-lg font-semibold mb-2">🎒 Baggage Policy</Heading>
				<Body class="mb-1">Review baggage allowances and fees in advance.</Body>
				<Link
					class={getTypographyVariant('body', 'text-primary m-0')}
					href="https://www.copaair.com/en-gs/travel-information/baggage-information/"
					>Baggage Info</Link
				>
			</div>

			<div>
				<Heading class="text-lg font-semibold mb-2">🚫 Restricted Baggage</Heading>
				<Body class="mb-1">Find out which items are prohibited in your luggage.</Body>
				<Link
					class={getTypographyVariant('body', 'text-primary m-0')}
					href="https://www.copaair.com/en-gs/travel-information/baggage-information/restricted-baggage/"
					>Restricted Items</Link
				>
			</div>

			<div>
				<Heading class="text-lg font-semibold mb-2">🚗 Rent a Car</Heading>
				<Body class="mb-1">Book a rental vehicle through our partner platform.</Body>
				<Link
					class={getTypographyVariant('body', 'text-primary m-0')}
					href="https://copa.cartrawler.com/en/home">Car Rental</Link
				>
			</div>

			<div>
				<Heading class="text-lg font-semibold mb-2">📡 Flight Status & Updates</Heading>
				<Body class="mb-1">Check the latest status and updates for your flight.</Body>
				<Link
					class={getTypographyVariant('body', 'text-primary m-0')}
					href="https://www.copaair.com/en-gs/flight-status/">Flight Status</Link
				>
			</div>
		</div>

		<Heading class="text-xl font-bold mt-12 mb-4">🌐 ConnectMiles</Heading>
		<Body class="mb-6"
			>If you're part of the ConnectMiles program — or thinking of joining — don’t miss out on these
			exclusive perks:</Body
		>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<div>
				<h4 class="text-lg font-semibold mb-2">🏨 ConnectMiles Hotels</h4>
				<p class="mb-1">Book your stay and earn miles through our exclusive hotel platform.</p>
				<Link
					class={getTypographyVariant('body', 'text-primary m-0')}
					href="https://connectmileshotels.copaair.com/">connectmileshotels.copaair.com</Link
				>
			</div>

			<div>
				<h4 class="text-lg font-semibold mb-2">💼 Earn Miles Everywhere</h4>
				<p class="mb-1">Flights, hotels, rentals, and more—discover ways to earn miles.</p>
				<Link
					class={getTypographyVariant('body', 'text-primary m-0')}
					href="https://www.copaair.com/en-gs/connectmiles/miles/other-ways-to-earn-miles-services/"
					>Other Ways to Earn</Link
				>
			</div>

			<div>
				<h4 class="text-lg font-semibold mb-2">⭐ Not a Member Yet?</h4>
				<p class="mb-1">Join ConnectMiles today and start earning with every trip.</p>
				<Link
					class={getTypographyVariant('body', 'text-primary m-0')}
					href="https://www.copaair.com/en-gs/enrollment/">Join Now</Link
				>
			</div>
		</div>
	</section>

	<section id="usefulLinks" class="py-8">
		<Heading><strong>Useful Links:</strong></Heading>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			<!-- Topic Group -->
			<div>
				<h4 class="text-lg font-semibold mb-2">Official Tourism & Government Websites</h4>
				<ul class="space-y-1">
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.nyc.gov">NYC.gov</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="http://nyctourism.com/">NYC Tourism</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.iloveny.com/">I Love NY</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://visitnyc.com/">Visit NYC</Link
						>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-semibold mb-2">Airport Information</h4>
				<ul class="space-y-1">
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.jfkairport.com/">JFK Airport</Link
						>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-semibold mb-2">Weather & Seasonal Travel</h4>
				<ul class="space-y-1">
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://worldweather.wmo.int/en/city.html?cityId=278">WMO</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.weather.gov/okx/">National Weather Service</Link
						>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-semibold mb-2">Seasonal Events</h4>
				<ul class="space-y-1">
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.nycstpatricksparade.org/">St. Patrick’s Parade</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.tribecafilm.com/">Tribeca Film Festival</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://cityparksfoundation.org/summerstage/">SummerStage</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://wiadcacarnival.org/">West Indian Carnival</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.thanksgivingparade.com/">Thanksgiving Parade</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.rockefellercenter.com/holidays/rockefeller-center-christmas-tree-lighting/"
							>Rockefeller Tree</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.timessquarenyc.org/nye/nye-landing">New Year’s Eve</Link
						>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-semibold mb-2">Museums & Attractions</h4>
				<ul class="space-y-1">
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.amnh.org/">Natural History Museum</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.nyc.gov/html/dot/html/infrastructure/brooklyn-bridge.shtml"
							>Brooklyn Bridge</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.esbnyc.com/">Empire State Building</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.metmuseum.org/">The Met</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.moma.org/">MoMA</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.guggenheim.org/">Guggenheim</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://intrepidmuseum.org/">Intrepid Museum</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.timessquarenyc.org/">Times Square</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.wtc.com/">World Trade Center</Link
						>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-semibold mb-2">Activities & Adventure</h4>
				<ul class="space-y-1">
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://bronxzoo.com/">Bronx Zoo</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.nycgovparks.org/parks/central-park">Central Park</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://chinatown.nyc/">Chinatown</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.coneyisland.com/">Coney Island</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.statueofliberty.org/visit/">Statue of Liberty</Link
						>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-semibold mb-2">Dining & Romantic Getaways</h4>
				<ul class="space-y-1">
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://balthazarny.com/">Balthazar</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.boucherieus.com/location/boucherie-la-grande-boucherie/"
							>La Grande Boucherie</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.thehighline.org/">The High Line</Link
						>
					</li>
					<li>
						<Link class={getTypographyVariant('body', 'text-primary m-0')} href="https://nycl.com/"
							>Cruise Lines</Link
						>
					</li>
					<li>
						<Link
							class={getTypographyVariant('body', 'text-primary m-0')}
							href="https://www.ferry.nyc/">NYC Ferry</Link
						>
					</li>
				</ul>
			</div>
		</div>
	</section>
</article>
