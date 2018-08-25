<?php
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Generic
 */

get_header(); 
$blog_cat = get_theme_mod('wp_generic_theme_category_blog',0);
$portfolio_cat = get_theme_mod('wp_generic_theme_category_portfolio',0);
$team_cat = get_theme_mod('wp_generic_theme_category_team',0);
$testimonial_cat = get_theme_mod('wp_generic_theme_category_testimonial',0);
$sidebar = get_theme_mod('wp_generic_innerpage_archive_layout','right-sidebar');
$post_layout = get_theme_mod('wp_generic_innerpage_archive_post_layout','large-image');
$archive = 'archive';


if(($blog_cat != 0) && is_category( $blog_cat )):
	$sidebar = get_theme_mod('wp_generic_innerpage_blog_layout','right-sidebar');
	$post_layout = get_theme_mod('wp_generic_innerpage_blog_post_layout','large-image');
	$archive = 'blog';

elseif(($portfolio_cat != 0) && is_category($portfolio_cat)):
	$sidebar = get_theme_mod('wp_generic_innerpage_portfolio_layout','right-sidebar');
	$post_layout = '';
	$archive = 'portfolio';
	
elseif(($team_cat != 0) && is_category($team_cat)):	
	$sidebar = get_theme_mod('wp_generic_innerpage_team_layout','right-sidebar');
	$post_layout = get_theme_mod('wp_generic_innerpage_team_post_layout','list');
	$archive = 'team';

elseif(($testimonial_cat != 0) && is_category($testimonial_cat)):
	$sidebar = get_theme_mod('wp_generic_innerpage_testimonial_layout','right-sidebar');
	$post_layout = get_theme_mod('wp_generic_innerpage_testimonial_post_layout','list');
	$archive = 'testimonial';
endif;
?>

<div class="ed-container <?php echo esc_attr($archive).' '.esc_attr($post_layout);?>">
	<?php 

	if($sidebar=='both-sidebar'){
	    ?>
	        <div class="left-sidebar-right">
	    <?php
	}
	 ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php
		if ( have_posts() ) : ?>

			<header class="page-header">
				<h2 class="page-title">
					<?php
						if ( is_category() ) :
							single_cat_title();

						elseif ( is_tag() ) :
							single_tag_title();

						elseif ( is_author() ) :
							printf( esc_html__( 'Author: %s', 'wp-generic' ), '<span class="vcard">' . get_the_author() . '</span>' );

						elseif ( is_day() ) : 
							printf( esc_html__( 'Day: %s', 'wp-generic' ), '<span>' . esc_html( get_the_date() ) . '</span>' );

						elseif ( is_month() ) :
							printf( esc_html__( 'Month: %s', 'wp-generic' ), '<span>' . esc_html( get_the_date( _x( 'F Y', 'monthly archives date format', 'wp-generic' ) ) ). '</span>' );

						elseif ( is_year() ) :
							printf( esc_html__( 'Year: %s', 'wp-generic' ), '<span>' . esc_html( get_the_date( _x( 'Y', 'yearly archives date format', 'wp-generic' ) ) ). '</span>' );

						elseif ( is_tax( 'post_format', 'post-format-aside' ) ) :
							esc_html_e( 'Asides', 'wp-generic' );

						elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) :
							esc_html_e( 'Galleries', 'wp-generic' );

						elseif ( is_tax( 'post_format', 'post-format-image' ) ) :
							esc_html_e( 'Images', 'wp-generic' );

						elseif ( is_tax( 'post_format', 'post-format-video' ) ) :
							esc_html_e( 'Videos', 'wp-generic' );

						elseif ( is_tax( 'post_format', 'post-format-quote' ) ) :
							esc_html_e( 'Quotes', 'wp-generic' );

						elseif ( is_tax( 'post_format', 'post-format-link' ) ) :
							esc_html_e( 'Links', 'wp-generic' );

						elseif ( is_tax( 'post_format', 'post-format-status' ) ) :
							esc_html_e( 'Statuses', 'wp-generic' );

						elseif ( is_tax( 'post_format', 'post-format-audio' ) ) :
							esc_html_e( 'Audios', 'wp-generic' );

						elseif ( is_tax( 'post_format', 'post-format-chat' ) ) :
							esc_html_e( 'Chats', 'wp-generic' );
						else :					
							the_archive_title( '<h2 class="page-title">', '</h2>' );
						endif;
					?>
				</h2>
			</header><!-- .page-header -->
			<div class="archive <?php echo esc_attr($archive);?> <?php echo esc_attr($post_layout);?>">
				<?php
				/* Start the Loop */
				while ( have_posts() ) : the_post();

					/*
					 * Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'template-parts/content', get_post_format() );

				endwhile;

				the_posts_navigation();

				else :

					get_template_part( 'template-parts/content', 'none' );

				endif; ?>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

	<?php 
	if($sidebar=='left-sidebar' || $sidebar=='both-sidebar'){
		get_sidebar('left');
	}
	if($sidebar=='both-sidebar'){
	    ?>
	        </div>
	    <?php
	}
	if($sidebar=='right-sidebar' || $sidebar=='both-sidebar'){
	 get_sidebar('right');
	}
	?>
</div>
<?php
get_footer();
