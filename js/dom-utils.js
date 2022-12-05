const rootElement = document.querySelector('#root')

const createInfoElement = (labelName, value) => {
	const infoElement = document.createElement('div')

	const labelElement = document.createElement('strong')
	labelElement.innerText = `${labelName}: `
	const valueElement = document.createElement('span')
	valueElement.innerText = value

	infoElement.append(labelElement)
	infoElement.append(valueElement)

	return infoElement
}

const createFlagImgElement = country => {
	const imgContainerElement = document.createElement('div')
	const imgElement = document.createElement('img')
	imgElement.src = country.flagUrl
	imgElement.alt = `${country.name} flag`

	imgContainerElement.append(imgElement)

	return imgContainerElement
}

const createCountryItemElement = country => {
	const countryElement = document.createElement('li')

	const anchorElement = document.createElement('a')
	// anchorElement.href = `?country=${country.code}`
	anchorElement.href = `?country=${country.name}`

	anchorElement.appendChild(createFlagImgElement(country))

	const countryNameElement = document.createElement('strong')
	countryNameElement.innerText = country.name
	countryNameElement.classList.add('country-name')

	const infoContainerElement = document.createElement('div')
	infoContainerElement.classList.add('info-container')

	infoContainerElement.append(
		countryNameElement,
		createInfoElement('Population', country.population),
		createInfoElement('Region', country.region),
		createInfoElement('Capital', country.capital)
	)

	anchorElement.appendChild(infoContainerElement)
	countryElement.appendChild(anchorElement)

	return countryElement
}

const createListElement = countries => {
	const listElement = document.createElement('ul')

	countries.forEach(country => {
		listElement.append(createCountryItemElement(country))
	})

	return listElement
}

const createDetailElement = country => {
	const detailContainerElement = document.createElement('div')
	detailContainerElement.classList.add('detail-container')

	const flagImgElement = createFlagImgElement(country)
	const detailContentElement = document.createElement('div')
	detailContentElement.classList.add('detail-content')

	const detailNameElement = document.createElement('strong')
	detailNameElement.innerText = country.name
	detailNameElement.classList.add('detail-name')

	detailContainerElement.appendChild(flagImgElement)
	detailContentElement.appendChild(detailNameElement)

	const leftColumnElement = document.createElement('div')

	leftColumnElement.append(
		createInfoElement('Native name', country.nativeName),
		createInfoElement('Population', country.population),
		createInfoElement('Region', country.region),
		createInfoElement('Sub region', country.subregion),
		createInfoElement('Capital', country.capital)
	)

	const rightColumnElement = document.createElement('div')

	rightColumnElement.append(
		createInfoElement('Top level domain', country.tld),
		createInfoElement('Currencies', country.currencies),
		createInfoElement('Languages', country.languages)
	)

	detailContentElement.append(leftColumnElement, rightColumnElement)

	if (country.borders && country.borders.length > 0) {
		detailContentElement.appendChild(createBorderCountriesContainer(country))
	}

	detailContainerElement.appendChild(detailContentElement)

	return detailContainerElement
}

const createDetailButton = (text, link) => {
	const anchorElement = document.createElement('a')
	anchorElement.innerText = text
	anchorElement.classList.add('detail-button')
	anchorElement.href = link

	return anchorElement
}

const createBorderCountriesContainer = country => {
	const borderCountriesContainerElement = document.createElement('div')
	borderCountriesContainerElement.classList.add('border-countries-container')

	const labelElement = document.createElement('strong')
	labelElement.innerText = 'Border Countries: '

	borderCountriesContainerElement.appendChild(labelElement)

	country.borders.forEach(border => {
		borderCountriesContainerElement.appendChild(createDetailButton(border, `/?country=${border}`))
	})

	return borderCountriesContainerElement
}

export const renderCountriesList = countries => {
	rootElement.innerHTML = ''
	rootElement.appendChild(createListElement(countries))
}

export const renderCountryDetails = country => {
	rootElement.innerHTML = ''
	rootElement.appendChild(createDetailButton('Go back', './index.html'))
	rootElement.appendChild(createDetailElement(country))
}
