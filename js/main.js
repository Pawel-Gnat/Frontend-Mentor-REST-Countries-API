import { renderDashboard } from './dashboard.js'
import { renderDetail } from './detail.js'
import * as theme from './theme.js'

if (window.location.search.includes('?country=')) {
	document.querySelector('.filters').classList.add('hidden')
	renderDetail()
} else {
	renderDashboard()
}
