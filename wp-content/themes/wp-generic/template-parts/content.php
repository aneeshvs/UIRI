<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WP_Generic
 */


$blog_cat = get_theme_mod('wp_generic_theme_category_blog',0);
$portfolio_cat = get_theme_mod('wp_generic_theme_category_portfolio',0);
$team_cat = get_theme_mod('wp_generic_theme_category_team',0);
$testimonial_cat = get_theme_mod('wp_generic_theme_category_testimonial',0);

if(!is_archive()):
	?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<header class="entry-header">
		<?php
		if ( !is_single() ) {				
			the_title( '<h4 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h4>' );
		}
		if ( 'post' === get_post_type() ) : ?>
		<div class="entry-meta">
			<?php wp_generic_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php
		endif; 
		?>

	</header><!-- .entry-header -->

	<div class="entry-content">		
		<?php
		if(has_post_thumbnail()):
			$image = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()),'wp-generic-full',true);
		?>
		<figure>
			<img src="<?php echo esc_url($image[0]);?>" alt="<?php the_title_attribute();?>" title="<?php the_title_attribute();?>"/>
		</figure>
		<?php
		endif;
		the_content( sprintf(
			/* translators: %s: Name of current post. */
			wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'wp-generic' ), array( 'span' => array( 'class' => array() ) ) ),
			the_title( '<span class="screen-reader-text">"', '"</span>', false )
			) );

		wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'wp-generic' ),
			'after'  => '</div>',
			) );
			?>
		</div><!-- .entry-content -->
		<?php 
		if ( 'post' === get_post_type() ) : ?>
		<footer class="entry-footer">
			<?php wp_generic_entry_footer(); ?>
		</footer><!-- .entry-footer -->
	<?php endif;?>
</article><!-- #post-## -->

<?php
elseif ( !empty( $testimonial_cat ) && is_category( $testimonial_cat ) && ( $testimonial_cat != 0 ) ) :
	?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php

		if(has_post_thumbnail()):				
			$image = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()),'wp-generic-square',true);
		?>
		<figure>
			<img src="<?php echo esc_url($image[0]);?>" alt="<?php the_title_attribute();?>" title="<?php the_title_attribute();?>" />
		</figure>
		<?php
		endif;
		
		the_title( '<h4 class="entry-title">', '</h4>' );
		
		?>
	</header><!-- .entry-header -->
	<div class="entry-content">	
		<?php the_content(); ?>				
	</div><!-- .entry-content -->
</article><!-- #post-## -->
<?php
elseif( !empty( $team_cat ) && is_category( $team_cat ) && ( $team_cat != 0 ) ): 
	?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php

	$readmore = get_theme_mod('wp_generic_innerpage_team_readmore',__('Read More', 'wp-generic'));
	if( has_post_thumbnail() ):
		$size = 'wp-generic-full';
	$image = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()),$size,true);
	?>
	<figure>
		<a href="<?php the_permalink();?>"><img src="<?php echo esc_url($image[0]);?>" alt="<?php the_title_attribute();?>" title="<?php the_title_attribute();?>" /></a>
	</figure>
	<?php
	endif;
	?>
	<div class="entry-content">	
		<header class="entry-header">
			<?php		
			the_title( '<h4 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h4>' );

			?>
		</header><!-- .entry-header -->
		<div class="content-text">
			<?php the_excerpt(); ?>
			<a class="archive-readmore ed-bttn" href="<?php the_permalink();?>"><?php echo esc_html($readmore);?></a>
		</div>
	</div><!-- .entry-content -->
</article><!-- #post-## -->

<?php
elseif( !empty( $portfolio_cat ) && is_category( $portfolio_cat ) && ( $portfolio_cat != 0 ) ): 
	?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
	if( has_post_thumbnail() ):
		$size = 'wp-generic-square';
	$image = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()),$size,true);
	?>
	<figure>
		<a href="<?php the_permalink();?>"><img src="<?php echo esc_url($image[0]);?>" alt="<?php the_title_attribute();?>" title="<?php the_title_attribute();?>" /></a>
	</figure>
	<?php
	endif;
	?>
	<div class="entry-content">		
		<div class="v-center">
			<header class="entry-header">
				<?php		
				the_title( '<h4 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h4>' );
				?>
			</header><!-- .entry-header -->
			<div class="content-text">
				<?php the_excerpt(); ?>
			</div>
		</div>
	</div><!-- .entry-content -->
</article><!-- #post-## -->

<?php
elseif( !empty( $blog_cat ) && is_category( $blog_cat ) && ( $blog_cat != 0 ) ): 

	$post_layout = get_theme_mod('wp_generic_innerpage_blog_post_layout','large-image');
	$readmore = get_theme_mod('wp_generic_innerpage_blog_readmore',__('Read More', 'wp-generic'));

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		if ( !is_single() ) :				
			the_title( '<h4 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h4>' );
		endif;
		if ( 'post' === get_post_type() ) : ?>
		<div class="entry-meta">
			<?php wp_generic_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php
		endif; 
		?>
	</header><!-- .entry-header -->

	<div class="entry-content">		
		<?php
		if(has_post_thumbnail()):	
			$size = 'wp-generic-full';					
			$image = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()),$size,true);
			?>
			<figure>
				<a href="<?php the_permalink();?>"><img src="<?php echo esc_url($image[0]);?>" alt="<?php the_title_attribute();?>" title="<?php the_title_attribute();?>" /></a>
			</figure>
			<?php
			endif;
			?>
			<div class="content-text">
				<?php the_excerpt(); ?>
				<a class="archive-readmore ed-bttn" href="<?php the_permalink();?>"><?php echo esc_html($readmore);?></a>
			</div>
		</div><!-- .entry-content -->
		<footer class="entry-footer">
			<?php wp_generic_entry_footer(); ?>
		</footer><!-- .entry-footer -->
	</article><!-- #post-## -->
	<?php

	else: 

		?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<header class="entry-header">
			<?php
			if ( !is_single() ) {				
				the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
			}
			if ( 'post' === get_post_type() ) : ?>
			<div class="entry-meta">
				<?php wp_generic_posted_on(); ?>
			</div><!-- .entry-meta -->
			<?php
			endif; 
			?>
		</header><!-- .entry-header -->

		<div class="entry-content">		
			<?php
			$readmore = get_theme_mod('wp_generic_innerpage_archive_readmore',__('Read More', 'wp-generic'));
			if(has_post_thumbnail()):	
				$post_layout = get_theme_mod('wp_generic_innerpage_archive_post_layout','large-image');
				$size = 'wp-generic-full';					
				$image = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()),$size,true);
				?>
				<figure>
					<a href="<?php the_permalink();?>"><img src="<?php echo esc_url($image[0]);?>" alt="<?php the_title_attribute();?>" title="<?php the_title_attribute();?>" /></a>
				</figure>
			<?php
			endif;
			?>
			<div class="content-text">
				<?php the_excerpt(); ?>
				<a class="archive-readmore ed-bttn" href="<?php the_permalink();?>"><?php echo esc_html($readmore);?></a>
			</div>
		</div><!-- .entry-content -->
		<footer class="entry-footer">
			<?php wp_generic_entry_footer(); ?>
		</footer><!-- .entry-footer -->
	</article><!-- #post-## -->
	<?php
	endif;?>

