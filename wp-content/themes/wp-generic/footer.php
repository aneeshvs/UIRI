<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Generic
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
	
		<?php 
		if ( is_active_sidebar( 'wp-generic-footer-one' ) ||  is_active_sidebar( 'wp-generic-footer-two' )  || is_active_sidebar( 'wp-generic-footer-three' ) ) : ?>
			<div class="top-footer footer-column-<?php echo esc_attr( wp_generic_footer_count() ); ?>">
				<div class="ed-container">
					<?php if ( is_active_sidebar( 'wp-generic-footer-one' ) ) : ?>
						<div class="footer-block-one footer-block">
							<?php dynamic_sidebar( 'wp-generic-footer-one' ); ?>    							
						</div>
					<?php endif; ?>	

					<?php if ( is_active_sidebar( 'wp-generic-footer-two' ) ) : ?>
						<div class="footer-block-two footer-block">	    						
							<?php dynamic_sidebar( 'wp-generic-footer-two' ); ?>	    						
						</div>
					<?php endif; ?>	

					<?php if ( is_active_sidebar( 'wp-generic-footer-three' ) ) : ?>
						<div class="footer-block-three footer-block">    							
							<?php dynamic_sidebar( 'wp-generic-footer-three' ); ?>
						</div>
					<?php endif; ?>
				</div>
			</div>
		<?php endif; ?>
		<div class="bottom-footer">
			<div class="ed-container">
				<div class="site-info">
					<?php
					$copyright = get_theme_mod('wp_generic_footer_copyright_text','');
					if($copyright && $copyright!=""){
						echo wp_kses_post($copyright)." ";
					}?>
					<?php //esc_html_e( 'WordPress Theme : ', 'wp-generic' );  ?><a  title="<?php //esc_attr_e('Free WordPress Theme','wp-generic');?>" href="<?php //echo esc_url( __( 'https://8degreethemes.com/wordpress-themes/wp-generic/', 'wp-generic' ) ); ?>"><?php //esc_html_e( 'WP Generic', 'wp-generic' ); ?> </a>
					<span><?php //esc_html_e(' by 8Degree Themes','wp-generic');?></span>
				</div><!-- .site-info -->
				<?php
				$footer_social = get_theme_mod('wp_generic_footer_social_option',0);
				if($footer_social):
					?>
					<div class="footer-social">
						<?php
						do_action('wp_generic_social');
						?>			
					</div>
					<?php
				endif;
				
				$menu_option= get_theme_mod('wp_generic_footer_menu_option',0);
				$menu = get_theme_mod('wp_generic_footer_menu_select','');
				if($menu_option && ( $menu != 0 || !empty( $menu ) ) ):?>
					<div class="footer-menu">
						<?php 
						wp_nav_menu(array( 'menu' => $menu) );							
						?>
					</div>
				<?php endif;?>
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<div id="back-to-top"><i class="fa fa-long-arrow-up"></i></div>
<?php wp_footer(); ?>

</body>
</html>
