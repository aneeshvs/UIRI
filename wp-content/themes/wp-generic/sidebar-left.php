<?php
/**
 * The left sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Generic
 */

if ( ! is_active_sidebar( 'wp-generic-left' ) ) {
	return;
}
?>

<div id="secondary" class="widget-area sidebar-left" role="complementary">
	<?php dynamic_sidebar( 'wp-generic-left' ); ?>
</div><!-- #secondary -->
