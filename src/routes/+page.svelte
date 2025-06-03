<script>
	import Heading from '$components/components/typography/heading.svelte';
	import Link from '$components/components/typography/link.svelte';
</script>

<div class="container mx-auto my-8">
	<nav>
		<Heading>Flights pages</Heading>
		<ol class="flex flex-col">
			<Link href="./flights-to-new-york-ES">Flights to New York - ES</Link>
			<Link href="./flights-to-new-york-EN">Flights to New York - EN</Link>
			<Link href="./flights-to-new-york-PT">Flights to New York - PT</Link>
			<Link href="./flights-to-new-york-FR">Flights to New York - FR</Link>
			<Link href="./flights-to-washington-ES">Flights to Washington - ES</Link>
			<Link href="./flights-to-washington-EN">Flights to Washington - EN</Link>
			<Link href="./flights-to-washington-PT">Flights to Washington - PT</Link>
			<Link href="./flights-to-washington-FR">Flights to Washington - FR</Link>
			<Link href="./flights-to-atlanta-ES">Flights to Atlanta - ES</Link>
			<Link href="./flights-to-atlanta-EN">Flights to Atlanta - EN</Link>
			<Link href="./flights-to-atlanta-PT">Flights to Atlanta - PT</Link>
			<Link href="./flights-to-atlanta-FR">Flights to Atlanta - FR</Link>
		</ol>
	</nav>
</div>
