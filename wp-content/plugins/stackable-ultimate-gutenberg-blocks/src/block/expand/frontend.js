import domReady from '@wordpress/dom-ready';

/**
 * Permanently hide the dismissible notification if clicked.
 */
domReady(() => {
	const elems = document.querySelectorAll('.wp-block-ugb-expand')
	elems.forEach(el => {
		const btn = el.querySelector('.ugb-expand-button')
		const clickHandler = e => {
			el.classList.toggle('ugb-more')
			e.preventDefault()
		}
		if ( btn ) {
			btn.addEventListener('click', clickHandler)
			btn.addEventListener('tapEnd', clickHandler)
		}
	})
})
