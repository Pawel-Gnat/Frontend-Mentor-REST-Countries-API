import { renderDashboard } from './dashboard.js'
import { renderDetail } from './detail.js'

if (window.location.search.includes('?country=')) {
	document.querySelector('.filters').classList.add('hidden')
	renderDetail()
} else {
	renderDashboard()
}