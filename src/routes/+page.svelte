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

	<section class=" py-8">
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

	<section class="py-8">
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

	<section class="py-8">
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
</article>
