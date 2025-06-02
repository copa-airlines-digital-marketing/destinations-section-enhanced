const aroundDest = 'Washington D.C.';
export const transportations = [
	{
		value: '0',
		translations: {
			en: {
				title: `Getting Around ${aroundDest}`,
				description: `From the airport to ${aroundDest} you have several convenient transportation options, whether you're headed to the National Mall or Capitol Hill.`
			},
			es: {
				title: `Cómo moverse por ${aroundDest}`,
				description:
					'Desde el aeropuerto, tienes varias opciones para llegar a la ciudad: transporte público, taxi o servicios de transporte por aplicación para ir a Manhattan y más allá.'
			},
			pt: {
				title: `Como se Locomover em ${aroundDest}`,
				description: `Do aeroporto ao centro de ${aroundDest} você conta com várias opções práticas de transporte, seja rumo ao National Mall ou ao Capitólio.`
			},
			fr: {
				title: `Se déplacer à ${aroundDest}`,
				description: `Depuis l'aéroport jusqu'au centre-ville de ${aroundDest} plusieurs options de transport efficaces s'offrent à vous, que vous vous rendiez au National Mall ou à Capitol Hill.`
			}
		}
	},

	{
		value: '1',
		icon: 'ade19325-3751-431d-8704-83464477a120',
		translations: {
			en: {
				title: 'Metrorail (WMATA)',
				description:
					'The fastest and most affordable way to travel around the city. The Metro system connects key neighborhoods and nearby suburbs, with six ',
				url: 'https://www.wmata.com/service/rail/'
			},
			es: {
				title: 'Metro (MTA)',
				description:
					'La forma más rápida y económica de moverse. Funciona las 24 horas del día, los 7 días de la semana, y conecta los cinco distritos con líneas subterráneas y elevadas.',
				icon: 'ade19325-3751-431d-8704-83464477a120',
				url: 'https://www.wmata.com/service/rail/'
			},
			pt: {
				title: 'Metrô (MTA)',
				description:
					'A forma mais rápida e econômica de se locomover. Funciona 24 horas por dia e conecta os cinco distritos com linhas subterrâneas e elevadas.',
				url: 'https://www.wmata.com/service/rail/'
			},
			fr: {
				title: 'Metrorail (WMATA) ',
				description:
					'Le moyen le plus rapide et le plus économique pour se déplacer. Fonctionne 24h/24 et relie les cinq arrondissements avec des lignes souterraines et aériennes.',
				url: 'https://www.wmata.com/service/rail/'
			}
		}
	},

	{
		value: '2',
		icon: 'ade19325-3751-431d-8704-83464477a120',
		translations: {
			en: {
				title: ' Metrobus',
				description:
					'Ideal for reaching destinations not directly served by the Metrorail. Reliable and extensive coverage throughout the D.C. area.',
				url: 'https://www.wmata.com/service/bus/'
			},
			es: {
				title: 'Metrobus',
				description:
					'Ideal para llegar a destinos no directamente conectados por el Metrorail. Ofrece cobertura confiable y extensa en toda el área de D.C.',
				icon: 'ade19325-3751-431d-8704-83464477a120',
				url: 'https://www.wmata.com/service/bus/'
			},
			pt: {
				title: 'Metrobus',
				description:
					'Ideal para chegar a locais que não são atendidos diretamente pelo metrô. Possui ampla cobertura e é bastante confiável.',
				url: 'https://www.wmata.com/service/bus/'
			},
			fr: {
				title: 'Metrobus',
				description:
					'Idéal pour atteindre des destinations non desservies directement par le Metrorail. Un service fiable et une couverture étendue dans toute la région de D.C.',
				url: 'https://www.wmata.com/service/bus/'
			}
		}
	},
	{
		value: '3',
		icon: '66c26539-e78a-4fbd-9021-012d237c799c',
		translations: {
			en: {
				title: 'Taxis and Ridesharing',
				description:
					'Easily accessible throughout the city. Use apps like Uber and Lyft for on-demand rides, or hail a traditional taxi curbside.'
			},
			es: {
				title: 'Taxis y aplicaciones de transporte',
				description:
					'Fáciles de encontrar en toda la ciudad. Usa aplicaciones como Uber y Lyft para viajes bajo demanda, o toma un taxi tradicional en la calle.'
			},
			pt: {
				title: 'Táxis e Aplicativos de Transporte',
				description:
					' Fácil de encontrar em toda a cidade. Use apps como Uber e Lyft para corridas sob demanda ou chame um táxi tradicional na rua.'
			},
			fr: {
				title: 'Taxis et services de covoiturage',
				description: `Faciles d'accès partout en ville. Utilisez des applications comme Uber et Lyft pour des trajets à la demande, ou faites signe à un taxi traditionnel directement dans la rue.`
			}
		}
	},
	{
		value: '4',
		icon: 'a494f6bc-de0d-4602-9d43-61f55bc14c80',
		translations: {
			en: {
				title: 'Airport Express and Rail Connections',
				description:
					'From Dulles (IAD): Take the Silver Line Metrorail or use the Washington Flyer Bus.'
			},
			es: {
				title: 'Conexiones exprés y ferroviarias desde el aeropuerto',
				description:
					' Desde Dulles (IAD): toma la línea Plateada (Silver Line) del Metrorail o utiliza el autobús Washington Flyer.'
			},
			pt: {
				title: 'Ônibus Expressos e Conexões Ferroviárias dos Aeroportos',
				description: 'Do Dulles (IAD): Utilize a Linha Prata do Metrô ou o ônibus Washington Flyer.'
			},
			fr: {
				title: `Navettes express et liaisons ferroviaires depuis l'aéroport`,
				description: `Depuis Dulles (IAD) : prenez la ligne Silver du Metrorail ou utilisez l’autobus Washington Flyer.`
			}
		}
	},
	{
		value: '5',
		icon: '2c5502ca-8a4e-4e66-89a6-6def3b2d6ad5',
		translations: {
			en: {
				title: 'Capital Bikeshare, E-Scooters, and Pedestrian Paths',
				description:
					'A scenic and fun way to explore the city, especially around monuments and waterfronts. Available for rent throughout D.C.'
			},
			es: {
				title: 'Capital Bikeshare, scooters eléctricos y senderos peatonales',
				description:
					'Una forma divertida y escénica de explorar la ciudad, especialmente alrededor de los monumentos y las zonas ribereñas. Disponibles para alquilar en varios puntos de D.C'
			},
			pt: {
				title: 'Capital Bikeshare, Patinetes Elétricos e Trilhas para Pedestres',
				description:
					'Uma maneira divertida e cênica de explorar a cidade, especialmente ao redor dos monumentos e áreas à beira do rio.  Disponíveis para aluguel em vários pontos de D.C.'
			},
			fr: {
				title: 'Capital Bikeshare, trottinettes électriques et sentiers piétonniers',
				description: `Une façon agréable et ludique d'explorer la ville, surtout autour des monuments et des quais. Disponibles à la location partout à D.C.`
			}
		}
	}
];
