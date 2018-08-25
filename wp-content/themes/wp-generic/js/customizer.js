/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {

	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title a, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title a, .site-description' ).css( {
					'clip': 'auto',
					'position': 'relative'
				} );
				$( '.site-title a, .site-description' ).css( {
					'color': to
				} );
			}
		} );
	} );

	wp.customize( 'wp_generic_homepage_team_readmore', function( value ) {
		value.bind( function( to ) {
			$( '.team-content .team-post-bttn' ).text( to );
		} );
	} );

	wp.customize( 'wp_generic_homepage_skill_readmore', function( value ) {
		value.bind( function( to ) {
			$( '.skill-section .skill-post-bttn' ).text( to );
		} );
	} );

	wp.customize( 'wp_generic_homepage_service_readmore', function( value ) {
		value.bind( function( to ) {
			$( '.service-content .service-post-bttn' ).text( to );
		} );
	} );

	wp.customize( 'wp_generic_homepage_blog_readmore', function( value ) {
		value.bind( function( to ) {
			$( '.blog-content .blog-post-bttn' ).text( to );
		} );
	} );

	wp.customize( 'wp_generic_homepage_cta_readmore', function( value ) {
		value.bind( function( to ) {
			$( '.cta-section .cta-post-bttn' ).text( to );
		} );
	} );

} )( jQuery );
