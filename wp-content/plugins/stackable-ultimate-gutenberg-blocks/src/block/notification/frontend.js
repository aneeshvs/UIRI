import domReady from '@wordpress/dom-ready';

/**
 * Permanently hide the dismissible notification if clicked.
 */
domReady(() => {
	const elems = document.querySelectorAll('.ugb-notification.dismissible-true[data-uid]')
	elems.forEach(el => {
		const uid = el.getAttribute( 'data-uid' )
		if ( ! localStorage.getItem(`stckbl-notif-${uid}`) ) {
			el.style.display = 'block'
		}
		el.querySelector('.close-button').addEventListener('click', () => {
			localStorage.setItem(`stckbl-notif-${uid}`, 1)
			el.style.display = ''
		})
	})
})
