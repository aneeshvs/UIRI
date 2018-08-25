<?php
/**
 * The right sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Generic
 */

if ( ! is_active_sidebar( 'wp-generic-right' ) ) {
	return;
}
?>

<div id="secondary" class="widget-area sidebar-right" role="complementary">
	<?php dynamic_sidebar( 'wp-generic-right' ); ?>
</div><!-- #secondary -->
