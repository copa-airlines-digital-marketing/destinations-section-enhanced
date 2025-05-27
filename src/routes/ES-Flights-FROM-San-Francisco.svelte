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
	import { transportations } from '$lib/data/Flights-from/ES/desde-sfo/gettingAround';
	import * as Header from '$lib/components/MainHeader';
	let destination = 'San Francisco';
</script>

<article class="container">
	<Body class="mt-2">
		Emprende una aventura desde <strong>San Francisco</strong> con Copa Airlines. Con una simple escala
		en Ciudad de Panamá, explora América Latina y el Caribe — tu viaje comienza aquí, en la bahía.
	</Body>
	<Header.Root image="70fc6dba-263a-49b5-9ce0-2a222c85e25d"></Header.Root>

	<section id="gettingAround" class="py-8">
		<Heading tag="h2" class="text-center mb-2">Cómo llegar al aeropuerto de {destination}</Heading>
		<Body class="text-center">
			Hay varias formas de llegar al Aeropuerto Internacional de San Francisco (SFO) desde el Área
			de la Bahía.
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
					<Icon>
						<img
							src="https://cm-marketing.directus.app/assets/{transport.icon}"
							alt={transport.title}
							class="w-full h-full object-cover rounded-2xl"
						/>
					</Icon>
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
		<Heading tag="h2" class="text-center mb-2"
			><strong>Viajando desde San Francisco: Enlaces útiles</strong></Heading
		>
		<Body class="text-center"
			>Aquí tiene algunos enlaces útiles para que su viaje desde San Francisco sea sencillo y sin
			complicaciones.</Body
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
				<Heading tag="h3" variant="h4">Recursos de Copa Airlines</Heading>
				<ul class="space-y-1">
					<li><Link href="https://mytrips.copaair.com">Gestionar Reservas</Link></li>
					<li>
						<Link href="https://checkin.copaair.com">Check-in en Línea (24h antes del vuelo)</Link>
					</li>
					<li>
						<Link href="https://www.copaair.com/es-gs/flight-status/"
							>Estado de Vuelo y Actualizaciones</Link
						>
					</li>
					<li>
						<Link href="https://www.copaair.com/es-gs/travel-requirement/">Requisitos de Viaje</Link
						>
					</li>
					<li>
						<Link href="https://www.copaair.com/es-gs/travel-information/baggage-information/"
							>Política de Equipaje</Link
						>
					</li>
					<li>
						<Link
							href="https://www.copaair.com/es-gs/travel-information/baggage-information/restricted-baggage/"
							>Equipaje Restringido</Link
						>
					</li>
					<li>
						<Link
							href="https://www.copaair.com/es-us/discover-copa-airlines/digital-experience/mobile-app/"
							>Descarga la App de Copa Airlines</Link
						>
					</li>
					<li>
						<Link
							href="https://docs.google.com/document/d/19AJC9ikW6mgtklpblSwgGrJVo42aE1pP7PoSQPlrmco/edit?tab=t.0#heading=h.wjb0uj407deo"
							>Programa de Recompensas</Link
						>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Información del Aeropuerto</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://www.flysfo.com/"
							>Sitio Oficial del Aeropuerto Internacional de San Francisco (SFO)</Link
						>
					</li>
					<li>
						<Link href="https://www.flysfo.com/flight-info/international"
							>Pasajeros Internacionales en SFO</Link
						>
					</li>
					<li>
						<Link href="https://www.flysfo.com/passengers/parking">Estacionamiento en SFO</Link>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Transporte</Heading>
				<ul class="space-y-1">
					<li>
						<Link href="https://www.bart.gov/guide/airport/sfo"
							>BART (Transporte Rápido del Área de la Bahía) | Conexión con el aeropuerto</Link
						>
					</li>
					<li><Link href="https://copa.cartrawler.com/en/home">Renta de Autos</Link></li>
				</ul>
			</div>
		</div>
	</section>

	<section id="connectMiles" class="py-8">
		<div class="py-4">
			<Heading>¿Eres miembro de ConnectMiles?</Heading>
			<Body class="mb-6">
				Si ya formas parte del programa ConnectMiles — o estás pensando en unirte — no te pierdas
				estos beneficios exclusivos:
			</Body>

			<div class="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6">
				<div class="">
					<Heading tag="h3" variant="h4">🏨 Hoteles ConnectMiles</Heading>
					<Body class="mb-1"
						>Reserva tu estadía y acumula millas con nuestra exclusiva plataforma hotelera.</Body
					>
					<Link href="https://connectmileshotels.copaair.com/">connectmileshotels.copaair.com</Link>
				</div>

				<div class="">
					<Heading tag="h3" variant="h4">💼 Acumula Millas en Todas Partes</Heading>
					<Body class="mb-1"
						>Vuelos, hoteles, alquileres y más — descubre nuevas formas de ganar millas.</Body
					>
					<Link
						href="https://www.copaair.com/en-gs/connectmiles/miles/other-ways-to-earn-miles-services/"
						>Otras Formas de Acumular</Link
					>
				</div>

				<div>
					<Heading tag="h3" variant="h4">⭐ ¿Aún no eres miembro?</Heading>
					<Body class="mb-1">Únete a ConnectMiles hoy y empieza a ganar con cada viaje.</Body>
					<Link href="https://www.copaair.com/en-gs/enrollment/">Únete Ahora</Link>
				</div>
			</div>
		</div>
	</section>
</article>
