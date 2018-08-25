<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WP_Generic
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'wp-generic' ); ?></a>

	<header id="masthead" class="site-header <?php echo esc_attr(get_theme_mod( 'wp_generic_header_logo_alignment','logo' ));?>" role="banner">
		<?php
		$header_text = get_theme_mod( 'wp_generic_header_topheader_text',esc_html__('Have any questions?','wp-generic') );
		$header_call = get_theme_mod( 'wp_generic_header_topheader_call','+977-01-4276760' );
		$header_mail = get_theme_mod( 'wp_generic_header_topheader_mail','info@8degreethemes.com' );
		$social_icon = get_theme_mod( 'wp_generic_header_topheader_social_option', 0 );
		if( !empty( $header_text ) || !empty($header_mail) || !empty($header_call)|| ( $social_icon == 1 ) ):
		?>
			<div id="top-header">
				<div class="ed-container">
				<?php if(!empty($header_text) || !empty($header_call) || !empty($header_mail)):?>
					<div class="header-text">				
						<?php if( !empty( $header_text ) ):?>
							<div class="contact-title"> 
							<?php echo esc_html( $header_text );?>
							</div>
						<?php endif;?>
						<?php if( !empty( $header_call ) ):?>
							<div class="contact-call"> 
							<i class="fa fa-phone"></i>
							<?php echo esc_html( $header_call );?>
							</div>
						<?php endif;?>
						<?php if( !empty( $header_mail ) ):?>
						<div class="contact-mail"> 
						<i class="fa fa-envelope-o"></i>
						<?php echo esc_html( $header_mail );?>
						</div>
						<?php endif;?>
					</div>
				<?php endif;?>
				<?php if( $social_icon == 1 ):?>
						<?php do_action( 'wp_generic_social' );?>
				<?php endif;?>
				</div>
			</div>
		<?php endif;?>
		<div id = "main-header">
			<div class="ed-container">
		        <div class="site-branding">
		            <?php 
		            if ( function_exists( 'the_custom_logo' ) ): 
		                if( has_custom_logo() ):
		                    ?>
		                <div class="site-logo">                             
		                    <?php the_custom_logo(); ?>
		                </div>                                      
		                <?php   
		                endif;
		            endif; // End the_custom_logo check. 

		            $header_option = get_theme_mod( 'header_text',1 );
		            if( $header_option ):?>
		                <div class="site-text">
		                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
		                        <h1 class="site-title"><?php bloginfo( 'name' ); ?></h1>
		                        <p class="site-description"><?php bloginfo( 'description' ); ?></p>
		                    </a>
		                </div>
		            <?php endif;
		            ?>
		        </div><!-- .site-branding -->

				<nav id="site-navigation" class="main-navigation" role="navigation">
					<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'wp-generic' ); ?></button>
					<?php wp_nav_menu( array( 'theme_location' => 'menu-1', 'menu_id' => 'primary-menu' ) ); ?>
					<?php 
					$search_option = get_theme_mod( 'wp_generic_header_search_option', 0 );
					if($search_option): ?>
						<div class="ed-search-wrap">                                   
		            		<?php get_search_form();?>
						</div>
					<?php endif;?>
				</nav><!-- #site-navigation -->
			</div>
	    </div>
	</header><!-- #masthead -->

	<div id="content" class="site-content">