<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package WP_Generic
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function wp_generic_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	return $classes;
}
add_filter( 'body_class', 'wp_generic_body_classes' );

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function wp_generic_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', 'wp_generic_pingback_header' );

if( ! function_exists( 'wp_generic_custom_class' ) ){
	function wp_generic_custom_class($classes){
		$header_class = esc_attr(get_theme_mod('wp_generic_weblayout_option','fullwidth'));
		$classes[] = $header_class;

		if(is_search() ):		
			$classes[] = esc_attr('right-sidebar');
	
		elseif(is_404() ):		
			$classes[] = esc_attr('no-sidebar');

		elseif(is_home() || is_front_page() || is_page_template('tpl-home.php')):
			if(is_page_template('tpl-home.php'))
				$classes[] = esc_attr('no-sidebar');	        
			else
				$classes[] = esc_attr('right-sidebar');	

		elseif(is_single()):

			global $post;
			$sidebar = get_post_meta($post->ID, 'wp_generic_sidebar_layout', true);
			if(empty($sidebar)):		
				$sidebar = 'right-sidebar';		
			endif;
			$classes[] = esc_attr($sidebar);
		elseif(is_page() && !(is_home() || is_front_page())):
			global $post;
			$sidebar = get_post_meta($post->ID, 'wp_generic_sidebar_layout', true);
			if(empty($sidebar)):	
				$sidebar = 'right-sidebar';
			endif;
			$classes[] = esc_attr($sidebar);
		elseif(is_archive() || is_category()):
			if(!is_category()):
				$sidebar = get_theme_mod('wp_generic_innerpage_archive_layout','right-sidebar');
				
			else:
				$blog_cat = get_theme_mod( 'wp_generic_theme_category_blog', 0 );
				$team_cat = get_theme_mod( 'wp_generic_theme_category_team', 0 );
				$tes_cat = get_theme_mod( 'wp_generic_theme_category_testimonial', 0 );
				$port_cat = get_theme_mod('wp_generic_theme_category_portfolio', 0 );
				$sidebar = get_theme_mod('wp_generic_innerpage_archive_layout','right-sidebar');
				if(($blog_cat != 0) && is_category( $blog_cat )):
					$sidebar = get_theme_mod('wp_generic_innerpage_blog_layout','right-sidebar');

				elseif(($team_cat != 0) && is_category( $team_cat )):
					$sidebar = get_theme_mod('wp_generic_innerpage_team_layout','right-sidebar');

				elseif(($tes_cat != 0) && is_category( $tes_cat )):
					$sidebar = get_theme_mod('wp_generic_innerpage_testimonial_layout','right-sidebar');

				elseif(($port_cat != 0) && is_category( $port_cat )):
					$sidebar = get_theme_mod('wp_generic_innerpage_portfolio_layout','right-sidebar');
				endif;
			endif;		
			$classes[] = esc_attr($sidebar);

		endif;
		return $classes;
	}
}
add_filter( 'body_class', 'wp_generic_custom_class' );
