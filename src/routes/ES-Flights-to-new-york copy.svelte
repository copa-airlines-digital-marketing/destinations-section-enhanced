<script>
	import {
		Heading,
		Body,
		Link,
		Caption,
		getTypographyVariant,
		getTypographySize
	} from '$components/components/typography/index.js';
	let destinationFile = 'to-JFK';
	let lang = 'es';
	import { Divider } from '$components/components/divider/index.js';
	import { InformativeBoxContainer } from '$components/components/boxes/informative/index.js';
	import * as Header from '$lib/components/MainHeader';
	import { AccordionRoot } from '$components/components/input-dropdowns/accordion';
	import { bestOf } from '$lib/data/to-JFK/ES/bestOf';
	import { days } from '$lib/data/to-JFK/ES/daysItinerary';
	import { attractions } from '$lib/data/to-JFK/ES/topTenAttractions';
	import { culturalTips } from '$lib/data/to-JFK/ES/culturalHighlightsTips';
	import { keyFacts } from '$lib/data/to-JFK/ES/keyFacts';
	import { transportations } from '$lib/data/to-JFK/ES/gettingAround';
	let destination = 'Nueva York';
</script>

<article class="container">
	<Header.Root image="14759a14-fd1e-4769-a56d-5c081c6dfdf7"></Header.Root>

	<section class="grid xs:grid-cols-1 sm:grid-cols-2 items-center pb-8">
		<div class="p-2">
			<Caption class="text-primary mb-2"
				>Visita la famosa Gran Manzana, la ciudad que nunca duerme.</Caption
			>
			<Body class="max-w-prose"
				><strong>Nueva York</strong>, la capital cultural y financiera del mundo, irradia energía y
				posibilidades. Desde las deslumbrantes luces de Times Square y Broadway hasta el encanto
				eterno de Central Park, NYC es una ciudad de monumentos icónicos, barrios diversos y
				experiencias infinitas. Realmente hay algo para todos, y es un destino que nunca decepciona.</Body
			>
		</div>
		<div class="p-2">
			<Caption class="font-bold text-primary mb-2">Datos Claves para el Viaje</Caption>
			<div class="grid gap-2 grid-rows-auto">
				{#each keyFacts as key}
					<Body class="mb-0"><strong>{key.icon} {key.label}</strong> {@html key.description}</Body>
				{/each}
				<Body class="mb-0"
					><strong>🏨 Hoteles</strong>
					<Link
						href="https://www.booking.com/city/us/new-york.es.html?aid=2027762&sid=8480624e3929c70a43e7ae6c6bc14d87&lang=es&soz=1&lang_click=other&cdl=en-us&lang_changed=1"
						class=" ">Reserva un hotel ahora.</Link
					></Body
				>
			</div>
		</div>
	</section>

	<section id="topicSelector" class="py-8">
		<Heading>Salta a la sección:</Heading>
		<ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-auto gap-2">
			<li>
				<Link href="#top10Attractions" class=" ">Las 10 mejores atracciones en {destination}</Link>
			</li>
			<li><Link href="#gettingAround" class=" ">Cómo moverse en {destination}</Link></li>
			<li><Link href="#bestOf" class=" ">Lo mejor de {destination}</Link></li>
			<li>
				<Link href="#culturalHighlightsTips" class=" ">Consejos culturales de {destination}</Link>
			</li>
			<li><Link href="#thePerfectWeek" class=" ">La semana perfecta en {destination}</Link></li>
			<li><Link href="https://www.google.com">Ofertas de vuelos a {destination}</Link></li>
			<li><Link href="#readytoFly" class=" ">Enlaces útiles para volar a {destination}</Link></li>
			<li><Link href="#usefulLinks" class=" ">Recursos clave de {destination}</Link></li>
		</ul>
	</section>

	<section id="top10Attractions" class=" py-8">
		<div class="text-center items-center">
			<Heading class="mb-2">Las 10 mejores atracciones de la ciudad de Nueva York</Heading>
			<Body class="max-w-prose mx-auto"
				>Explora la vibrante metrópolis que es central en la vida estadounidense con estas
				atracciones de fama mundial.</Body
			>
		</div>
		<div class="grid grid-cols-[repeat(auto-fit,minmax(268px,1fr))] gap-4">
			{#each attractions as attraction (attraction.value)}
				<div class="rounded-2xl justify-items-start text-left grid-cols-subgrid grid-rows-subgrid">
					<div class="aspect-[4/3] overflow-hidden">
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
						<Body class="m-0">{attraction.description}</Body>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section id="fareCall" class="py-8">
		<Divider />
		<div class="text-center items-center mb-4">
			<Heading class="mb-2">¿Listo para vivir la experiencia de Nueva York?</Heading>
			<Body class="max-w-prose mx-auto"
				>Reserva hoy tu vuelo a <strong>Nueva York con Copa Airlines</strong> y prepárate para una aventura
				en la Gran Manzana. Con vuelos convenientes y nuestro servicio galardonado, Copa Airlines hace
				que viajar a Nueva York sea fácil y placentero.</Body
			>
			<Link href="https://www.google.com">🛫 ¡Reserva ahora y descubre la magia de Nueva York!</Link
			>
		</div>
		<Divider></Divider>
	</section>

	<section id="gettingAround" class="py-8">
		<Heading tag="h2" class="text-center mb-2">Cómo moverse por Nueva York</Heading>
		<Body class="text-center"
			>Desde el aeropuerto, tienes varias opciones para llegar a la ciudad: transporte público, taxi
			o servicios de transporte por aplicación para ir a Manhattan y más allá.</Body
		>

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
					>Desde JFK, toma el AirTrain hasta Jamaica o Howard Beach, y luego conecta con el metro o
					el tren de Long Island (LIRR).
				</Description>
			</Box>
		</InformativeBoxContainer>
	</section>

	<section id="bestOf">
		<Heading tag="h2" class="text-center mb-2">Best of New York</Heading>
		<div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
			{#each bestOf as item}
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
	</section>

	<section id="fareCall" class="py-8">
		<Divider />
		<div class="text-center items-center mb-4">
			<Heading class="mb-2">¿Listo para vivir la experiencia de Nueva York?</Heading>
			<Body class="max-w-prose mx-auto"
				>Reserva hoy tu vuelo a <strong>Nueva York con Copa Airlines</strong> y prepárate para una aventura
				en la Gran Manzana. Con vuelos convenientes y nuestro servicio galardonado, Copa Airlines hace
				que viajar a Nueva York sea fácil y placentero.</Body
			>
			<Link href="https://www.google.com">🛫 ¡Reserva ahora y descubre la magia de Nueva York!</Link
			>
		</div>
		<Divider></Divider>
	</section>

	<section id="culturalHighlightsTips" class="py-8">
		<div class=" items-center">
			<Heading class="mb-2">Consejos culturales para visitar Nueva York</Heading>
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
			<Heading class="mb-2">La semana perfecta: Qué hacer en Nueva York</Heading>
		</div>
		<Body class=""
			>Recomendamos comenzar por la parte sur de Manhattan e ir avanzando hacia el norte a lo largo
			de los días, y luego visitar algunos de los otros distritos para vivir la experiencia completa
			de Nueva York.
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
			<Heading class="mb-2"><strong>Recursos clave</strong></Heading>
			<Body>Recursos clave para que tu viaje con Copa Airlines sea sencillo y placentero.</Body>

			<div class="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6">
				<div>
					<Heading tag="h3" variant="h4">💻 Check-in en línea (24h antes del vuelo)</Heading>
					<Body class="mb-1">
						Los pasajeros deben realizar el check-in en línea 24 horas antes de la salida para
						ahorrar tiempo en el aeropuerto.
					</Body>
					<Link href="https://checkin.copaair.com">checkin.copaair.com</Link>
				</div>

				<div>
					<Heading tag="h3" variant="h4">🧾 Gestionar reservas (Mis viajes)</Heading>
					<Body class="mb-1">
						Permite a los viajeros administrar y guardar sus reservas con Copa Airlines.
					</Body>
					<Link href="https://mytrips.copaair.com">mytrips.copaair.com</Link>
				</div>

				<div>
					<Heading tag="h3" variant="h4">🛂 Requisitos de viaje</Heading>
					<Body class="mb-1">
						Los pasajeros deben verificar los requisitos de entrada de su destino, ya que estos
						pueden cambiar en cualquier momento. Tener todos los documentos listos es esencial para
						abordar.
					</Body>
					<Link href="https://www.copaair.com/es-gs/travel-requirement/">Requisitos de viaje</Link>
				</div>

				<div>
					<Heading tag="h3" variant="h4">🎒 Política de equipaje</Heading>
					<Body class="mb-1">
						Información sobre franquicias y tarifas de equipaje para ayudar a los viajeros a
						prepararse antes del vuelo.
					</Body>
					<Link href="https://www.copaair.com/es-gs/travel-information/baggage-information/"
						>Información sobre equipaje</Link
					>
				</div>

				<div>
					<Heading tag="h3" variant="h4">🚫 Equipaje restringido</Heading>
					<Body class="mb-1">
						Lista de artículos que no están permitidos en el equipaje de mano ni en el facturado.
					</Body>
					<Link
						href="https://www.copaair.com/es-gs/travel-information/baggage-information/restricted-baggage/"
						>Artículos restringidos</Link
					>
				</div>

				<div>
					<Heading tag="h3" variant="h4">🚗 Renta de autos</Heading>
					<Body class="mb-1">
						Permite reservar un vehículo en el destino a través del socio de alquiler de autos de
						Copa.
					</Body>
					<Link href="https://copa.cartrawler.com/es/home">Renta de autos</Link>
				</div>

				<div>
					<Heading tag="h3" variant="h4">📡 Estado del vuelo y actualizaciones</Heading>
					<Body class="mb-1">
						Consulta la información más reciente sobre el estado de tu vuelo y posibles cambios.
					</Body>
					<Link href="https://www.copaair.com/es-gs/flight-status/">Estado del vuelo</Link>
				</div>
			</div>
		</div>
	</section>

	<section id="connectMiles" class="py-8">
		<div class="py-4">
			<Heading>¿Eres miembro de ConnectMiles?</Heading>
			<Body class="mb-6">
				Si formas parte del programa ConnectMiles —o estás pensando en unirte— no te pierdas estos
				beneficios exclusivos:
			</Body>

			<div class="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6">
				<div>
					<Heading tag="h3" variant="h4">🏨 Hoteles ConnectMiles</Heading>
					<Body class="mb-1">
						Reserva tu estadía y acumula millas a través de nuestra plataforma exclusiva de hoteles.
					</Body>
					<Link href="https://connectmileshotels.copaair.com/">connectmileshotels.copaair.com</Link>
				</div>

				<div>
					<Heading tag="h3" variant="h4">💼 Gana millas en todas partes</Heading>
					<Body class="mb-1">
						Desde vuelos hasta estadías en hoteles, alquiler de autos y compras. Descubre todas las
						formas de acumular ConnectMiles.
					</Body>
					<Link
						href="https://www.copaair.com/es-gs/connectmiles/miles/other-ways-to-earn-miles-services/"
						>Otras formas de ganar millas</Link
					>
				</div>

				<div>
					<Heading tag="h3" variant="h4">⭐ ¿Aún no eres miembro?</Heading>
					<Body class="mb-1">
						Únete a ConnectMiles hoy y comienza a ganar millas con cada viaje.
					</Body>
					<Link href="https://www.copaair.com/es-gs/enrollment/">Únete ahora</Link>
				</div>
			</div>
		</div>
	</section>

	<section id="usefulLinks" class="py-8">
		<Heading><strong>Enlaces útiles</strong></Heading>
		<div class="grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 gap-6">
			<div>
				<Heading tag="h3" variant="h4">Sitios oficiales de turismo y del gobierno</Heading>
				<ul>
					<li>
						<Link href="https://www.nyc.gov/"
							>NYC.gov – Sitio web oficial de la Ciudad de Nueva York</Link
						>
					</li>
					<li>
						<Link href="https://www.nyctourism.com/es/"
							>Turismo NYC – Planea tu viaje y descubre qué hacer</Link
						>
					</li>
					<li>
						<Link href="https://www.iloveny.com/"
							>I Love NY – Sitio oficial de turismo del Estado de Nueva York</Link
						>
					</li>
					<li>
						<Link href="https://visitnyc.com/es/"
							>Visit NYC – Fuente completa para todo lo relacionado con NYC</Link
						>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Información sobre aeropuertos</Heading>
				<ul>
					<li>
						<Link href="https://www.jfkairport.com/"
							>JFK – Aeropuerto Internacional John F. Kennedy</Link
						>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Clima y viajes por temporada</Heading>
				<ul>
					<li>
						<Link href="https://worldweather.wmo.int/en/city.html?cityId=278"
							>Organización Meteorológica Mundial (OMM) – Ciudad de Nueva York</Link
						>
					</li>
					<li>
						<Link href="https://www.weather.gov/okx/"
							>Servicio Meteorológico Nacional de EE. UU. – Nueva York, NY</Link
						>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Eventos de temporada</Heading>
				<ul>
					<li>
						<Link href="https://www.nycstpatricksparade.org/"
							>Desfile del Día de San Patricio en NYC</Link
						> (marzo)
					</li>
					<li>
						<Link href="https://www.tribecafilm.com/">Festival de Cine de Tribeca</Link> (junio)
					</li>
					<li>
						<Link href="https://cityparksfoundation.org/summerstage/"
							>Festival SummerStage en Central Park</Link
						> (de junio a septiembre)
					</li>
					<li>
						<Link href="https://wiadcacarnival.org/"
							>Carnaval del Día de los Estadounidenses de las Indias Occidentales</Link
						> (septiembre)
					</li>
					<li>
						<Link href="https://www.thanksgivingparade.com/"
							>Desfile del Día de Acción de Gracias de Macy’s</Link
						> (noviembre)
					</li>
					<li>
						<Link
							href="https://www.rockefellercenter.com/holidays/rockefeller-center-christmas-tree-lighting/"
							>Iluminación del árbol de Navidad en el Rockefeller Center</Link
						> (diciembre)
					</li>
					<li>
						<Link href="https://www.timessquarenyc.org/nye/nye-landing"
							>Nochevieja en Times Square</Link
						> (diciembre)
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Museos y atracciones</Heading>
				<ul>
					<li><Link href="https://www.amnh.org/">Museo Americano de Historia Natural</Link></li>
					<li>
						<Link href="https://www.nyc.gov/html/dot/html/infrastructure/brooklyn-bridge.shtml"
							>Puente de Brooklyn</Link
						>
					</li>
					<li><Link href="https://www.esbnyc.com/">Empire State Building</Link></li>
					<li>
						<Link href="https://www.metmuseum.org/">Museo Metropolitano de Arte (The Met)</Link>
					</li>
					<li><Link href="https://www.moma.org/">Museo de Arte Moderno (MoMA)</Link></li>
					<li><Link href="https://www.guggenheim.org/">Museo Solomon R. Guggenheim</Link></li>
					<li>
						<Link href="https://intrepidmuseum.org/">Museo Intrepid del Mar, Aire y Espacio</Link>
					</li>
					<li><Link href="https://www.timessquarenyc.org/">Times Square</Link></li>
					<li><Link href="https://www.wtc.com/">World Trade Center</Link></li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Actividades y aventura</Heading>
				<ul>
					<li><Link href="https://bronxzoo.com/">Zoológico del Bronx</Link></li>
					<li>
						<Link href="https://www.nycgovparks.org/parks/central-park"
							>Central Park | Parques de NYC</Link
						>
					</li>
					<li><Link href="https://chinatown.nyc/">Chinatown NYC</Link></li>
					<li><Link href="https://www.coneyisland.com/">Coney Island USA</Link></li>
					<li>
						<Link href="https://www.statueofliberty.org/visit/"
							>Estatua de la Libertad y Ellis Island</Link
						>
					</li>
				</ul>
			</div>

			<div>
				<Heading tag="h3" variant="h4">Gastronomía y escapadas románticas</Heading>
				<ul>
					<li><Link href="https://balthazarny.com/">Restaurante Balthazar</Link></li>
					<li>
						<Link href="https://www.boucherieus.com/location/boucherie-la-grande-boucherie/"
							>La Grande Boucherie (NYC)</Link
						>
					</li>
					<li><Link href="https://www.thehighline.org/">The High Line</Link></li>
					<li><Link href="https://nycl.com/">Nueva York Cruise Lines</Link></li>
					<li><Link href="https://www.ferry.nyc/">Servicio de ferris de Nueva York</Link></li>
				</ul>
			</div>
		</div>
	</section>
</article>
