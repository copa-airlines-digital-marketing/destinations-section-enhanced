const aroundDest = 'Atlanta';
export const transportations = [
	{
		value: '0',
		translations: {
			en: {
				title: `Getting Around ${aroundDest}`,
				description: `From the airport to ${aroundDest} you have several convenient transportation optionsto get to the city: Public transit, taxi or rideshare access around Atlanta.`
			},
			es: {
				title: `Cómo moverse por ${aroundDest}`,
				description:
					'Desde el aeropuerto, tienes varias opciones para llegar a la ciudad: transporte público, taxi o servicios de transporte privado en Atlanta.'
			},
			pt: {
				title: `Como se Locomover em ${aroundDest}`,
				description: `Ao chegar no aeroporto, você tem várias opções para chegar à cidade e se locomover por Atlanta: transporte público, táxis ou aplicativos de transporte.`
			},
			fr: {
				title: `Se déplacer à ${aroundDest}`,
				description: `Depuis l'aéroport, plusieurs options s'offrent à vous pour rejoindre la ville : transport en commun, taxi ou services de covoiturage autour d'Atlanta.`
			}
		}
	},

	{
		value: '1',
		icon: 'ade19325-3751-431d-8704-83464477a120',
		translations: {
			en: {
				title: 'MARTA ',
				description:
					'Atlanta’s rapid transit system is the easiest way to travel around the city, connecting key neighborhoods and attractions.'
			},
			es: {
				title: 'MARTA ',
				description:
					'El sistema de transporte rápido de Atlanta es la forma más fácil de moverse por la ciudad, conectando barrios clave y atracciones turísticas.',
				icon: 'ade19325-3751-431d-8704-83464477a120',
				url: 'https://www.wmata.com/service/rail/'
			},
			pt: {
				title: 'MARTA ',
				description:
					'O sistema de metrô de Atlanta é a forma mais prática de se locomover pela cidade, conectando os principais bairros e atrações.'
			},
			fr: {
				title: 'MARTA',
				description: `Le réseau de transport rapide d'Atlanta est la façon la plus simple de se déplacer en ville, reliant les principaux quartiers et attractions.`
			}
		}
	},
	{
		value: '2',
		icon: '66c26539-e78a-4fbd-9021-012d237c799c',
		translations: {
			en: {
				title: 'Taxis and Ridesharing',
				description: 'Find a ride easily through Uber, Lyft, or traditional taxis.'
			},
			es: {
				title: 'Taxis amarillos y aplicaciones de transporte ',
				description: 'Encuentra fácilmente un viaje a través de Uber, Lyft o taxis tradicionales.'
			},
			pt: {
				title: 'Táxis e Aplicativos de Transporte',
				description: ' Encontre uma corrida facilmente com Uber, Lyft ou táxis tradicionais.'
			},
			fr: {
				title: 'Taxis et services de covoiturage',
				description: `Trouvez facilement un trajet avec Uber, Lyft ou un taxi traditionnel.`
			}
		}
	},
	{
		value: '3',
		icon: 'ade19325-3751-431d-8704-83464477a120',
		translations: {
			en: {
				title: ' Ferries, Bikes, and Scooters',
				description:
					'Another option to explore the city in certain areas, perfect for a scenic ride. Make sure to download the Lime or Bird app to unlock e-scooters.'
			},
			es: {
				title: 'Ferry, bicicletas y scooters',
				description:
					'Otra opción para explorar la ciudad en algunas zonas, ideal para un paseo escénico. Asegúrate de descargar la aplicación de Lime o Bird para desbloquear los scooters eléctricos.',
				icon: 'ade19325-3751-431d-8704-83464477a120'
			},
			pt: {
				title: 'Bicicletas, Patinetes e Ferries',
				description:
					'Uma forma divertida de explorar áreas específicas da cidade. Baixe os aplicativos da Lime ou Bird para desbloquear patinetes elétricos.'
			},
			fr: {
				title: 'Traversiers, vélos et trottinettes électriques',
				description: `Une autre façon d'explorer certains secteurs de la ville, idéale pour une balade agréable. Téléchargez l'application Lime ou Bird pour déverrouiller une trottinette électrique.`
			}
		}
	},
	{
		value: '5',
		icon: '2c5502ca-8a4e-4e66-89a6-6def3b2d6ad5',
		translations: {
			en: {
				title: 'City Buses',
				description:
					'Affordable and reliable, offering a chance to explore different parts of the city.'
			},
			es: {
				title: 'Autobuses urbanos',
				description:
					'Económicos y confiables, ofrecen la oportunidad de descubrir diferentes partes de la ciudad.'
			},
			pt: {
				title: 'Ônibus Urbanos',
				description: 'Uma opção acessível e confiável para explorar diferentes regiões da cidade.'
			},
			fr: {
				title: 'Autobus urbains',
				description: `Une option abordable et fiable pour découvrir différents quartiers d'Atlanta.`
			}
		}
	},

	{
		value: '6',
		icon: '66c26539-e78a-4fbd-9021-012d237c799c',
		translations: {
			en: {
				title: 'Car Rentals',
				description:
					'Renting a car gives you flexibility for trips to surrounding areas like Stone Mountain or the nearby vineyards.'
			},
			es: {
				title: 'Alquiler de autos',
				description:
					' Rentar un auto te da flexibilidad para hacer excursiones a lugares cercanos como Stone Mountain o los viñedos de la región'
			},
			pt: {
				title: 'Aluguel de Carros',
				description:
					'Alugar um carro oferece flexibilidade para visitar lugares ao redor, como Stone Mountain ou vinícolas próximas.'
			},
			fr: {
				title: `Location de voiture`,
				description: `Louer une voiture vous offre plus de flexibilité pour visiter les environs, comme Stone Mountain ou les vignobles tout proches.`
			}
		}
	}
];
