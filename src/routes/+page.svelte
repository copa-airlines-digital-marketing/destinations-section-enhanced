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
	import {
		InformativeBox,
		InformativeBoxContainer,
		InformativeBoxDescription,
		InformativeBoxIcon,
		InformativeBoxTitle
	} from '$components/components/boxes/informative/index.js';
	import * as Header from '$lib/components/MainHeader';
	import Box from '$components/components/boxes/informative/box.svelte';
	import Description from '$components/components/boxes/informative/description.svelte';
</script>

<div class="container mb-8">
	<Header.Root image="8a5c82be-6ca4-4a25-9ea7-c80492d5f74e">
		<Header.Title>Fly to New York with Copa Airlines</Header.Title>
	</Header.Root>
	<div class="grid grid-cols-2 items-center">
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
	</div>

	<div class="mb-8">
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
				<Title>Subway (MTA)</Title>
				<Description
					>The fastest and most affordable way to get around. Runs 24/7 and connects all five
					boroughs with underground and elevated lines.
				</Description>
			</Box>

			<Box let:Icon let:Title let:Description>
				<Icon>🚇</Icon>
				<Title>Subway (MTA)</Title>
				<Description
					>The fastest and most affordable way to get around. Runs 24/7 and connects all five
					boroughs with underground and elevated lines.
				</Description>
			</Box>

			<Box let:Icon let:Title let:Description>
				<Icon>🚇</Icon>
				<Title>Subway (MTA)</Title>
				<Description
					>The fastest and most affordable way to get around. Runs 24/7 and connects all five
					boroughs with underground and elevated lines.
				</Description>
			</Box>
		</InformativeBoxContainer>
	</div>

	<Divider />
	<div class="text-center grid grid-cols-2 items-center">
		<Heading>Ready to Experience New York?</Heading>
		<Body class="max-w-prose mx-auto"
			>Book your flight to <strong class="text-primary">New York with Copa Airlines</strong> today
			and explore one of America's most famous and historic cities. With convenient flights and our
			award-winning service, Copa Airlines makes your journey to the U.S. capital effortless.
			<Body>🛫 Book Now and Discover the Magic of New York City!</Body>
		</Body>
	</div>
	<Divider></Divider>
</div>
