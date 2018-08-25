<?php 
/**
* Template Name: Homepage
* 
* @package WP_Generic
*/

get_header();

	////////////////////////////////////////////////////////////////////////////
	///////// Slider
	///////////////////////////////////////////////////////////////////////////
		
	do_action( 'wp_generic_slider' );

	////////////////////////////////////////////////////////////////////////////
	////////// Service Section
	///////////////////////////////////////////////////////////////////////////
	$service_option = get_theme_mod( 'wp_generic_homepage_service_option',0 );
	$service_page 	= get_theme_mod( 'wp_generic_homepage_service_page',0 );
	$service_cat 	= get_theme_mod( 'wp_generic_theme_category_service',0);
	$service_nums 	= get_theme_mod( 'wp_generic_homepage_service_post_num',0 );
	if( ( $service_page != 0  ||  $service_cat != 0) && ( $service_option == 1 ) ):
		$service_data = get_post( $service_page );
		?>
		<div id='service' class="service-section home-section">
			<div class="ed-container">
				<?php if( $service_page != 0 ):?>
					<div class="section-desc">
						<h2 class="section-title"><?php echo esc_html($service_data->post_title);?></h2>
						<div class="section-content"><?php echo wp_kses_post($service_data->post_content);?></div>
					</div>
				<?php endif?>
				<?php if( $service_cat != 0 ):?>
					<div class="service-post-wrap clear">
					<?php			
					$service_readmore = get_theme_mod( 'wp_generic_homepage_service_readmore', __( 'Read More', 'wp-generic' ) );
					$args = array( 'cat' => $service_cat , 'post_per_page' => $service_nums, 'post_status' => 'publish' );
					$service_cat_data = new WP_Query( $args );
					while( $service_cat_data-> have_posts() ):
						$service_cat_data->the_post();
					?>
						<div class="service-content-wrap">
						<?php
							if( has_post_thumbnail() ):
								$img = wp_get_attachment_image_src(get_post_thumbnail_id(), 'thumbnail');
                                $img_link = $img[0];
								?>
							<figure>
								<img src="<?php echo esc_url($img_link);?>" title="<?php the_title_attribute();?>" alt="<?php the_title_attribute();?>">
							</figure>
						<?php endif;?>
							<div class="service-content post-content">
								<h4 class="service-post-title"><a href="<?php the_permalink();?>"><?php the_title();?></a></h4>
								<div class="service-post-content"><?php the_excerpt();?></div>
								<?php if(!empty($service_readmore)):?>
									<a class = "service-post-bttn readmore-bttn" href= "<?php the_permalink();?>"><?php echo esc_html($service_readmore);?></a>
								<?php
								endif;?>
							</div>
						</div>
					<?php 
					endwhile;
					wp_reset_postdata();?>
					</div>	
				<?php
				endif?>
			</div>
		</div>
	<?php 
	endif;

	////////////////////////////////////////////////////////////////////////////
	////////// Skill Section
	///////////////////////////////////////////////////////////////////////////
	$skill_option 	= get_theme_mod( 'wp_generic_homepage_skill_option',0 );
	$skill_page 	=	get_theme_mod( 'wp_generic_homepage_skill_page',0 );
	if( ( $skill_page != 0 ) && ( $skill_option == 1 )  ):
		$skill_readmore = get_theme_mod( 'wp_generic_homepage_skill_readmore', __( 'Register', 'wp-generic' ) );
		$skill_readmore_link = get_theme_mod( 'wp_generic_homepage_skill_readmore_link','#');
		$skill_data = get_post( $skill_page );
		?>
		<div id='skill' class="skill-section home-section">
			<div class="ed-container">
				<?php if( $skill_page != 0 ):?>
					<div class="section-desc">
						<h2 class="section-title"><?php echo esc_html($skill_data->post_title);?></h2>
						<div class="section-content"><?php echo wp_kses_post($skill_data->post_content);?></div>
							<?php if(!empty($skill_readmore)):?>
							<a class = "skill-post-bttn readmore-bttn" href="<?php echo esc_url($skill_readmore_link);?>"><?php echo esc_html($skill_readmore);?></a>
							<?php
							endif;?>
					</div>
				<?php endif?>
				<?php if( is_active_sidebar( 'wp-generic-skill' ) ):
				?>
					<div class= "skill-widget">
						<?php dynamic_sidebar( 'wp-generic-skill' );?>
					</div>
				<?php
				endif?>
			</div>
		</div>
	<?php 
	endif;

	////////////////////////////////////////////////////////////////////////////
	////////// Team Section
	///////////////////////////////////////////////////////////////////////////
	$team_option = get_theme_mod( 'wp_generic_homepage_team_option',0 );
	$team_page 	= get_theme_mod( 'wp_generic_homepage_team_page',0 );
	$team_cat 	= get_theme_mod( 'wp_generic_theme_category_team',0);
	if( ( ( $team_page != 0 || $team_cat != 0) ) && ( $team_option == 1 ) ):
		$team_readmore = get_theme_mod( 'wp_generic_homepage_team_readmore', __( 'Read More', 'wp-generic' ) );
		$team_data = get_post( $team_page );
		?>
		<div id='team' class="team-section home-section">
			<div class="ed-container">
				<?php if( $team_page != 0 ):?>
					<div class="section-desc">
						<h2 class="section-title"><?php echo esc_html($team_data->post_title);?></h2>
						<div class="section-content"><?php echo wp_kses_post($team_data->post_content);?></div>
					</div>
				<?php endif?>
				<?php if( $team_cat != 0 ):?>
					<div class="team-post-wrap clear">
						<?php
						$team_page 	= get_theme_mod( 'wp_generic_homepage_team_post','3' );
						$args = array( 'cat' => $team_cat , 'post_per_page' => $team_page, 'post_status' => 'publish' );
						$team_cat_data = new WP_Query( $args );
						while( $team_cat_data-> have_posts() ):
							$team_cat_data->the_post();
						?>
							<div class="team-content-wrap">
							<?php
								if( has_post_thumbnail() ):
									$img = wp_get_attachment_image_src(get_post_thumbnail_id(), 'wp-generic-full');
	                                $img_link = $img[0];
									?>
								<figure>
									<img src="<?php echo esc_url($img_link);?>" title="<?php the_title_attribute();?>" alt="<?php the_title_attribute();?>">
								</figure>
							<?php endif;?>
								<div class="team-content post-content">
									<h4 class="team-post-title"><a href="<?php the_permalink();?>"><?php the_title();?></a></h4>
									<div class="team-post-content"><?php the_excerpt();?></div>
									<a class = " team-post-bttn readmore-bttn" href="<?php the_permalink();?>"><?php echo esc_html($team_readmore);?></a>
								</div>
							</div>
							<?php 
						endwhile;
						wp_reset_postdata();?>
					</div>
				<?php
				endif;?>
			</div>
		</div>
	<?php 
	endif;

	////////////////////////////////////////////////////////////////////////////
	////////// Portfolio Section
	///////////////////////////////////////////////////////////////////////////
	$portfolio_option = get_theme_mod( 'wp_generic_homepage_portfolio_option',0 );
	$portfolio_page 	= get_theme_mod( 'wp_generic_homepage_portfolio_page',0 );
	$portfolio_cat 	= get_theme_mod( 'wp_generic_theme_category_portfolio',0);
	if( ( $portfolio_page != 0 || $portfolio_cat != 0) && ( $portfolio_option == 1 ) ):
		$portfolio_data = get_post( $portfolio_page );
		?>
		<div id='portfolio' class="portfolio-section home-section">
			<?php if( $portfolio_page != 0 ):?>
				<div class="section-desc">
					<div class="ed-container">
						<h2 class="section-title"><?php echo esc_html($portfolio_data->post_title);?></h2>
						<div class="section-content"><?php echo wp_kses_post($portfolio_data->post_content);?></div>
					</div>

				</div>
			<?php endif?>
			<?php if( $portfolio_cat != 0 ):?>
				<div class="portfolio-post-wrap clear">
					<?php 
					$args = array( 'cat' => $portfolio_cat , 'post_per_page' => 8, 'post_status' => 'publish' );
					$portfolio_cat_data = new WP_Query( $args );
					while( $portfolio_cat_data-> have_posts() ):
						$portfolio_cat_data->the_post();
					?>
						<div class="portfolio-content-wrap">
						<?php
							if( has_post_thumbnail() ):
								$img = wp_get_attachment_image_src(get_post_thumbnail_id(), 'wp-generic-full');
                                $img_link = $img[0];
								?>
							<figure>
								<img src="<?php echo esc_url($img_link);?>" title="<?php the_title_attribute();?>" alt="<?php the_title_attribute();?>">
							</figure>
						<?php endif;?>
							<div class="portfolio-content post-content">
								<div class="v-center">
									<h4 class="portfolio-post-title"><?php the_title();?></h4>
									<div class="portfolio-post-content"><?php the_excerpt();?></div>
								</div>
								<a class="portfolio-cursor" href="<?php the_permalink(); ?>"><i class="fa fa-arrows"></i></a>
							</div>
						</div>
					<?php 
					endwhile;
					wp_reset_postdata();?>
				</div>
			<?php
			endif?>
		</div>
	<?php 
	endif;

	////////////////////////////////////////////////////////////////////////////
	////////// Blog Section
	///////////////////////////////////////////////////////////////////////////
	$blog_option = get_theme_mod( 'wp_generic_homepage_blog_option',0 );
	$blog_page 	= get_theme_mod( 'wp_generic_homepage_blog_page',0 );
	$blog_cat 	= get_theme_mod( 'wp_generic_theme_category_blog',0);
	$blog_nums 	= get_theme_mod( 'wp_generic_homepage_blog_post_num',0 );
	if( ( $blog_page != 0 || $blog_cat != 0) && ( $blog_option == 1 ) ):
		$blog_readmore = get_theme_mod( 'wp_generic_homepage_blog_readmore', __( 'Read More', 'wp-generic' ) );
		$blog_data = get_post( $blog_page );
		?>
		<div id='blog' class="blog-section home-section">
			<div class="ed-container">
				<?php if( $blog_page != 0 ):?>
					<div class="section-desc">
						<h2 class="section-title"><?php echo esc_html($blog_data->post_title);?></h2>
						<div class="section-content"><?php echo wp_kses_post($blog_data->post_content);?></div>
					</div>
				<?php endif?>
				<?php if( $blog_cat != 0 ):?>
					<div class="blog-post-wrap clear">
						<?php 
						$args = array( 'cat' => $blog_cat , 'post_per_page' => $blog_nums, 'post_status' => 'publish' );
						$blog_cat_data = new WP_Query( $args );
						while( $blog_cat_data-> have_posts() ):
							$blog_cat_data->the_post();
						?>
							<div class="blog-content-wrap">
							<?php
								if( has_post_thumbnail() ):
									$img = wp_get_attachment_image_src(get_post_thumbnail_id(), 'wp-generic-full');
	                                $img_link = $img[0];
									?>
								<figure>
									<img src="<?php echo esc_url($img_link);?>" title="<?php the_title_attribute();?>" alt="<?php the_title_attribute();?>">
								</figure>
							<?php endif;?>
								<div class="blog-content post-content">
									<?php
									if ( 'post' === get_post_type() ) : ?>
									<div class="entry-meta">
										<?php 
										$categories_list = get_the_category_list( esc_html__( ', ', 'wp-generic' ) );
										if ( $categories_list && wp_generic_categorized_blog() ) {
											printf( '<span class="cat-links">' . esc_html( '%1$s' ) . '</span>', $categories_list ); // WPCS: XSS OK.
										} ?>
										<span class="blog-date"><?php the_time( get_option( 'date_format ' ) ); ?></span>
									</div><!-- .entry-meta -->
									<?php
									endif; ?>
									<h4 class="blog-post-title"><a href="<?php the_permalink();?>"><?php the_title();?></a></h4>
									<div class="blog-post-content"><?php the_excerpt();?></div>
									<div class="bottom-comment">
										<?php if(!empty($blog_readmore)):?>
										<a class = " blog-post-bttn readmore-bttn" href="<?php the_permalink();?>"><?php echo esc_html($blog_readmore);?></a>
										<?php
										endif;
										if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
											$comment_num = get_comments_number();
											echo '<span class="blog-comments"><i class="fa fa-commenting-o"></i> '.esc_attr($comment_num).' </span>';
										}
										?>								
									</div>
								</div>
							</div>
						<?php 
						endwhile;
						wp_reset_postdata();
						?>
					</div>
				<?php
				endif?>
			</div>
		</div>
	<?php 
	endif;

	////////////////////////////////////////////////////////////////////////////
	////////// CTA Section
	///////////////////////////////////////////////////////////////////////////
	$cta_option = get_theme_mod( 'wp_generic_homepage_cta_option',0 );
	$cta_page 	= get_theme_mod( 'wp_generic_homepage_cta_page',0 );
	if( ( $cta_page != 0 ) && ( $cta_option == 1 ) ):
		if( $cta_page != 0 ):
		$cta_readmore = get_theme_mod( 'wp_generic_homepage_cta_readmore', esc_html__( 'Contact Us', 'wp-generic' ) );
		$cta_readmore_link = get_theme_mod( 'wp_generic_homepage_cta_readmore_link', '#' );
		$cta_data = get_post( $cta_page );
        $cta_bg_image = get_the_post_thumbnail_url( $cta_page, 'full' ); 
		?>
		<div id='cta' class="cta-section home-section" style="background-image: url('<?php echo esc_url($cta_bg_image);?>');">
			<div class="ed-container">
					<div class="section-desc">
						<h2 class="section-title"><?php echo esc_html($cta_data->post_title);?></h2>
						<div class="section-content"><?php echo wp_kses_post($cta_data->post_content);?></div>
						<?php if(!empty($cta_readmore)):?>
							<a class = " cta-post-bttn readmore-bttn" href="<?php echo esc_url($cta_readmore_link);?>"><?php echo esc_html($cta_readmore);?></a>
						<?php endif;?>
					</div>
			</div>
		</div>
		<?php endif;
	endif;

	////////////////////////////////////////////////////////////////////////////
	////////// Pricing Section
	///////////////////////////////////////////////////////////////////////////
	$pricing_option = get_theme_mod( 'wp_generic_homepage_pricing_option',0 );
	$pricing_page 	= get_theme_mod( 'wp_generic_homepage_pricing_page',0 );
	if( ( $pricing_page != 0 ) && ( $pricing_option == 1 ) ):
		$pricing_data = get_post( $pricing_page );
		?>
		<div id='pricing' class="pricing-section home-section">
			<div class="ed-container">
				<?php if( $pricing_page != 0 ):?>
					<div class="section-desc">
						<h2 class="section-title"><?php echo esc_html($pricing_data->post_title);?></h2>
						<div class="section-content"><?php echo wp_kses_post($pricing_data->post_content);?></div>
					</div>
				<?php endif?>
				<?php if( is_active_sidebar( 'wp-generic-pricing' ) ): ?>
					<div class= "pricing-widget">
						<?php dynamic_sidebar( 'wp-generic-pricing' );?>
					</div>
				<?php
				endif?>
			</div>
		</div>
	<?php 
	endif;


	////////////////////////////////////////////////////////////////////////////
	////////// Testimonial Section
	///////////////////////////////////////////////////////////////////////////
	$testimonial_option = get_theme_mod( 'wp_generic_homepage_testimonial_option',0 );
	$testimonial_page 	= get_theme_mod( 'wp_generic_homepage_testimonial_page',0 );
	$testimonial_cat 	= get_theme_mod( 'wp_generic_theme_category_testimonial',0);
	if( ( $testimonial_page != 0 || $testimonial_cat != 0) && ( $testimonial_option == 1 ) ):
		$testimonial_data = get_post( $testimonial_page );
		?>
		<div id='testimonial' class="testimonial-section home-section">
			<div class="ed-container">
				<?php if( $testimonial_page != 0 ):?>
					<div class="section-desc">
						<h2 class="section-title"><?php echo esc_html($testimonial_data->post_title);?></h2>
						<div class="section-content"><?php echo wp_kses_post($testimonial_data->post_content);?></div>
					</div>
				<?php endif?>
				<?php if( $testimonial_cat != 0 ):
				?>
					<div class="testimonial-slider">
					<?php
						$args = array( 'cat' => $testimonial_cat , 'post_per_page' => -1, 'post_status' => 'publish' );
						$testimonial_cat_data = new WP_Query( $args );
						while( $testimonial_cat_data-> have_posts() ):
							$testimonial_cat_data->the_post();
						?>
							<div class="testimonial-content-wrap">
							<?php
								if( has_post_thumbnail() ):
									$img = wp_get_attachment_image_src(get_post_thumbnail_id(), 'thumbnail');
	                                $img_link = $img[0];
									?>
								<figure>
									<img src="<?php echo esc_url($img_link);?>" title="<?php the_title_attribute();?>" alt="<?php the_title_attribute();?>">
								</figure>
							<?php endif;?>
								<div class="testimonial-content post-content">
									<div class="testimonial-post-content"><?php the_excerpt();?></div>
									<h4 class="testimonial-post-title"><?php the_title();?></h4>
								</div>
							</div>
						<?php 
						endwhile;
						wp_reset_postdata();
						?>
					</div>
				<?php
				endif?>
			</div>
		</div>
	<?php 
	endif;

	////////////////////////////////////////////////////////////////////////////
	////////// Client Section
	///////////////////////////////////////////////////////////////////////////
	$client_option = get_theme_mod( 'wp_generic_homepage_client_option',0 );
	$client_cat 	= get_theme_mod( 'wp_generic_theme_category_client',0);
	if( ($client_cat != 0) && ( $client_option == 1 ) ):
		?>
		<div id='client' class="client-section home-section">
			<div class="ed-container">
				<div class="client-slider">
				<?php
					$args = array( 'cat' => $client_cat , 'post_per_page' => 5, 'post_status' => 'publish' );
					$client_cat_data = new WP_Query( $args );
					while( $client_cat_data-> have_posts() ):
						$client_cat_data->the_post();
					?>
						<?php
							if( has_post_thumbnail() ):
								$img = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
                                $img_link = $img[0];
								?>
								<figure>
									<img src="<?php echo esc_url($img_link);?>" title="<?php the_title_attribute();?>" alt="<?php the_title_attribute();?>">
								</figure>
						<?php endif;?>
					<?php 
					endwhile;
					wp_reset_postdata();
					?>
				</div>
			</div>
		</div>
	<?php 
	endif;

get_footer();