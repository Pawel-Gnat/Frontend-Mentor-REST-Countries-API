import { renderCountryDetails } from './dom-utils.js'

export const renderDetail = () => {
	const searchParams = new URLSearchParams(window.location.search)
	const countryName = searchParams.get('country')

	if (!countryName) {
		goBackToDashboard()
	}

	const API_URL_ALL = `https://restcountries.com/v3.1/alpha/${countryName}`

	fetch(API_URL_ALL)
		.then(res => res.json())
		.then(([country]) => {
			if (!country) {
				goBackToDashboard()
			}

			country = {
				capital: country.capital && country.capital[0],
				population: country.population.toLocaleString(),
				name: country.name.common,
				nativeName: Object.values(country.name.nativeName)[0].official,
				code: country.cca3,
				region: country.region,
				subregion: country.subregion,
				flagUrl: country.flags.png,
				currencies: Object.values(country.currencies)
					.map(currency => currency.name)
					.join(', '),
				languages: Object.values(country.languages).join(', '),
				tld: country.tld[0],
				borders: country.borders,
			}

			renderCountryDetails(country)
		})
}

export const goBackToDashboard = () => {
	window.location.search = './index.html'
}
