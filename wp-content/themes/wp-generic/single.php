<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WP_Generic
 */

get_header(); ?>
<div class="ed-container">
	<?php 
	global $post;
	$sidebar = get_post_meta($post->ID, 'wp_generic_sidebar_layout', true);
	if(empty($sidebar)){
	    	$sidebar= 'right-sidebar';
	    }
	if($sidebar=='both-sidebar'){
	    ?>
	        <div class="left-sidebar-right">
	    <?php
	}
	 ?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<header class="page-header">
				<?php the_title( '<h2 class="page-title">', '</h2>' ); ?>
			</header><!-- .page-header -->

		<?php
		while ( have_posts() ) : the_post();

			get_template_part( 'template-parts/content', get_post_format() );

			the_post_navigation();

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

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
