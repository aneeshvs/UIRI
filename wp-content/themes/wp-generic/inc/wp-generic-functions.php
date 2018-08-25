<?php

function wp_generic_category_lists(){
	$category 	=	get_categories();
	$cat_list 	=	array();
	$cat_list[0]=	__('Select Category','wp-generic');
	foreach ($category as $cat) {
		$cat_list[$cat->term_id]	=	$cat->name;
	}
	return $cat_list;
}

// count footer
function wp_generic_footer_count(){
	$count = 0;
	if(is_active_sidebar('wp-generic-footer-one'))
		$count++;

	if(is_active_sidebar('wp-generic-footer-two'))
		$count++;

	if(is_active_sidebar('wp-generic-footer-three'))
		$count++;

	return $count;
}


	// Function for using Slider
	function wp_generic_slider_section_cb(){
		$slider_option = get_theme_mod('wp_generic_homepage_slider_option',0);
		$slider_category = get_theme_mod('wp_generic_theme_category_slider',0);
		$show_pager = esc_attr((get_theme_mod('wp_generic_homepage_slider_pager',0) == "1") ? "true" : "false");
		$show_controls = esc_attr((get_theme_mod('wp_generic_homepage_slider_controls',0) == "1") ? "true" : "false");
		$auto_transition = esc_attr((get_theme_mod('wp_generic_homepage_slider_transition_auto',0) == "1") ? "true" : "false");
		$slider_transition = esc_attr(get_theme_mod('wp_generic_homepage_slider_transition_type','horizontal'));
		$slider_speed = get_theme_mod('wp_generic_homepage_slider_transition_speed', '3500');
		$slider_pause = get_theme_mod('wp_generic_homepage_slider_transition_pause', '3500');
		$show_caption = esc_attr(get_theme_mod('wp_generic_homepage_slider_caption',0));   
		if($slider_option):
?>			<div id="slider" class="slider-section">
				<script type="text/javascript">
					jQuery(function($){
						$('#ed-slider').bxSlider({							
							pager: <?php echo esc_attr($show_pager); ?>,
							controls: <?php echo esc_attr($show_controls); ?>,
							mode: '<?php echo esc_attr($slider_transition); ?>',
							pause: <?php echo esc_attr($slider_speed); ?>,
							speed: <?php echo esc_attr($slider_speed); ?>,
							auto : <?php echo esc_attr($auto_transition); ?>
						});

					});
				</script>
				<?php
				$query = new WP_Query(array(
					'cat' => $slider_category,
					'posts_per_page' => -1    
					));?>
				<div id="ed-slider">
					<?php
					if($query->have_posts()) : 
						while($query->have_posts()) : 
							$query-> the_post();
							if(has_post_thumbnail()):
								$image = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'wp-generic-slider', false );
								?>
								<div class="slides">
									<img src="<?php echo esc_url($image[0]);?>" alt = "<?php the_title_attribute();?>" >
									<?php if($show_caption == '1'){?>
									<div class="caption-wrapper">
										<div class="slider-caption">
											<div class="slider-title" data-depth="1.00"> <?php the_title(); ?></div>
											<div class = "slider-content"  data-depth="1.5"><?php the_excerpt();?></div>
											
										</div>
									</div>
									<?php  }?>
								</div>
						<?php 
							endif;
						endwhile;
						wp_reset_postdata();
					endif;?>	

				</div>  		
			</div>
		<?php
		endif;
}
add_action('wp_generic_slider','wp_generic_slider_section_cb', 10); //slider settings without condition





function wp_generic_social_setting_cb(){
    $facebooklink = get_theme_mod('wp_generic_social_facebook','#');
    $twitterlink = get_theme_mod('wp_generic_social_twitter','#');
    $google_pluslink = get_theme_mod('wp_generic_social_googleplus','#');
    $youtubelink = get_theme_mod('wp_generic_social_youtube','#');
    $pinterestlink = get_theme_mod('wp_generic_social_pinterest');
    $linkedinlink = get_theme_mod('wp_generic_social_linkedin');
    $flickrlink = get_theme_mod('wp_generic_social_flicker');
    $vimeolink = get_theme_mod('wp_generic_social_vimeo');
    $stumbleuponlink = get_theme_mod('wp_generic_social_stumbleupon');
    $instagramlink = get_theme_mod('wp_generic_social_instagram');
    $soundcloudlink = get_theme_mod('wp_generic_social_soundcloud');
    $githublink = get_theme_mod('wp_generic_social_github');
    $tumblrlink = get_theme_mod('wp_generic_social_tumbler');
    $skypelink = get_theme_mod('wp_generic_social_skype');
    $rsslink = get_theme_mod('wp_generic_social_rss'); 
    ?>
    <div class="social-icons ">
        <?php if(!empty($facebooklink)){ ?>
        <a href="<?php echo esc_url($facebooklink); ?>" class="facebook" data-title="<?php esc_attr_e('Facebook','wp-generic')?>" target="_blank"><i class="fa fa-facebook"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($twitterlink)){ ?>
        <a href="<?php echo esc_url($twitterlink); ?>" class="twitter" data-title="<?php esc_attr_e('Twitter','wp-generic')?>" target="_blank"><i class="fa fa-twitter"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($google_pluslink)){ ?>
        <a href="<?php echo esc_url($google_pluslink); ?>" class="gplus" data-title="<?php esc_attr_e('Google Plus','wp-generic')?>" target="_blank"><i class="fa fa-google-plus"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($youtubelink)){ ?>
        <a href="<?php echo esc_url($youtubelink); ?>" class="youtube" data-title="<?php esc_attr_e('Youtube','wp-generic')?>" target="_blank"><i class="fa fa-youtube"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($pinterestlink)){ ?>
        <a href="<?php echo esc_url($pinterestlink); ?>" class="pinterest" data-title="<?php esc_attr_e('Facebook','wp-generic')?>Pinterest" target="_blank"><i class="fa fa-pinterest"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($linkedinlink)){ ?>
        <a href="<?php echo esc_url($linkedinlink); ?>" class="linkedin" data-title="<?php esc_attr_e('Linkedin','wp-generic')?>" target="_blank"><i class="fa fa-linkedin"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($flickrlink)){ ?>
        <a href="<?php echo esc_url($flickrlink); ?>" class="flickr" data-title="<?php esc_attr_e('Flickr','wp-generic')?>" target="_blank"><i class="fa fa-flickr"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($vimeolink)){ ?>
        <a href="<?php echo esc_url($vimeolink); ?>" class="vimeo" data-title="<?php esc_attr_e('Vimeo','wp-generic')?>" target="_blank"><i class="fa fa-vimeo-square"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($instagramlink)){ ?>
        <a href="<?php echo esc_url($instagramlink); ?>" class="instagram" data-title="<?php esc_attr_e('Instagram','wp-generic')?>" target="_blank"><i class="fa fa-instagram"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($tumblrlink)){ ?>
        <a href="<?php echo esc_url($tumblrlink); ?>" class="tumblr" data-title="<?php esc_attr_e('Tumblr','wp-generic')?>" target="_blank"><i class="fa fa-tumblr"></i><span></span></a>
        <?php } ?>
        
        <?php if(!empty($soundcloudlink)){ ?>
        <a href="<?php echo esc_url($soundcloudlink); ?>" class="delicious" data-title="<?php esc_attr_e('Delicious','wp-generic')?>" target="_blank"><i class="fa fa-delicious"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($rsslink)){ ?>
        <a href="<?php echo esc_url($rsslink); ?>" class="rss" data-title="<?php esc_attr_e('Rss','wp-generic')?>" target="_blank"><i class="fa fa-rss"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($githublink)){ ?>
        <a href="<?php echo esc_url($githublink); ?>" class="github" data-title="<?php esc_attr_e('Github','wp-generic')?>" target="_blank"><i class="fa fa-github"></i><span></span></a>
        <?php } ?>

        <?php if(!empty($stumbleuponlink)){ ?>
        <a href="<?php echo esc_url($stumbleuponlink); ?>" class="stumbleupon" data-title="<?php esc_attr_e('Stumbleupon','wp-generic')?>" target="_blank"><i class="fa fa-stumbleupon"></i><span></span></a>
        <?php } ?>
        
        <?php if(!empty($skypelink)){ ?>
        <a href="<?php echo esc_attr__('Skype:', 'wp-generic') . esc_attr($skypelink); ?>" class="skype" data-title="<?php esc_attr_e('Skype','wp-generic')?>"><i class="fa fa-skype"></i><span></span></a>
        <?php } ?>
    </div>
<?php
}
add_action('wp_generic_social','wp_generic_social_setting_cb', 10);



/** Plugin Install ***/
function wp_generic_required_plugins() {

/**
* Array of plugin arrays. Required keys are name and slug.
* If the source is NOT from the .org repo, then source is also required.
*/
$plugins = array(
    array(
        'name'      => 'Ultimate Form Builder Lite',
        'slug'      => 'ultimate-form-builder-lite',
        'required'  => false,
        'force_activation'   => false,
        'force_deactivation' => true,
        ),
    array(
        'name'      => '8 Degree Coming Soon Page',
        'slug'      => '8-degree-coming-soon-page',
        'required'  => false,
        'force_activation'   => false,
        'force_deactivation' => true,
        ),
    );

    /**
    * Array of configuration settings. Amend each line as needed.
    * If you want the default strings to be available under your own theme domain,
    * leave the strings uncommented.
    * Some of the strings are added into a sprintf, so see the comments at the
    * end of each line for what each argument will be.
    */
    $config = array(
        'default_path' => '',
        'menu'         => 'wp-generic-install-plugins',
        'has_notices'  => true,
        'dismissable'  => true,
        'dismiss_msg'  => '',
        'is_automatic' => true,
        'message'      => '',
        'strings'      => array(
            'page_title'                      => __( 'Install Required Plugins', 'wp-generic' ),
            'menu_title'                      => __( 'Install Plugins', 'wp-generic' ),
            'installing'                      => __( 'Installing Plugin: %s', 'wp-generic' ),
            'oops'                            => __( 'Something went wrong with the plugin API.', 'wp-generic' ),
            'notice_can_install_required'     => _n_noop( 'This theme requires the following plugin: %1$s.', 'This theme requires the following plugins: %1$s.','wp-generic' ),
            'notice_can_install_recommended'  => _n_noop( 'This theme recommends the following plugin: %1$s.', 'This theme recommends the following plugins: %1$s.','wp-generic' ),
            'notice_cannot_install'           => _n_noop( 'Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s plugins. Contact the administrator of this site for help on getting the plugins installed.','wp-generic' ),
            'notice_can_activate_required'    => _n_noop( 'The following required plugin is currently inactive: %1$s.', 'The following required plugins are currently inactive: %1$s.','wp-generic' ),
            'notice_can_activate_recommended' => _n_noop( 'The following recommended plugin is currently inactive: %1$s.', 'The following recommended plugins are currently inactive: %1$s.','wp-generic' ),
            'notice_cannot_activate'          => _n_noop( 'Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s plugins. Contact the administrator of this site for help on getting the plugins activated.','wp-generic' ),
            'notice_ask_to_update'            => _n_noop( 'The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.','wp-generic' ),
            'notice_cannot_update'            => _n_noop( 'Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s plugins. Contact the administrator of this site for help on getting the plugins updated.','wp-generic' ),
            'install_link'                    => _n_noop( 'Begin installing plugin', 'Begin installing plugins','wp-generic' ),
            'activate_link'                   => _n_noop( 'Begin activating plugin', 'Begin activating plugins','wp-generic' ),
            'return'                          => __( 'Return to Required Plugins Installer', 'wp-generic' ),
            'plugin_activated'                => __( 'Plugin activated successfully.', 'wp-generic' ),
            'complete'                        => __( 'All plugins installed and activated successfully. %s', 'wp-generic' ),
            'nag_type'                        => 'updated'
            )
);

tgmpa( $plugins, $config );

}
add_action( 'tgmpa_register', 'wp_generic_required_plugins' );

/** rgb from hex color code */
    /* Convert hexdec color string to rgb(a) string */ 
    function wp_generic_hex2rgba($color, $opacity = false) {
        
        $default = 'rgb(0,0,0)';
        
     //Return default if no color provided
        if(empty($color))
            return $default; 
        
            //Sanitize $color if "#" is provided 
        if ($color[0] == '#' ) {
            $color = substr( $color, 1 );
        }
        
            //Check if color has 6 or 3 characters and get values
        if (strlen($color) == 6) {
            $hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
        } elseif ( strlen( $color ) == 3 ) {
            $hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
        } else {
            return $default;
        }
        
            //Convert hexadec to rgb
        $rgb =  array_map('hexdec', $hex);
        
            //Check if opacity is set(rgba or rgb)
        if($opacity){
            if(abs($opacity) > 1)
                $opacity = 1.0;
            $output = 'rgba('.implode(",",$rgb).','.$opacity.')';
        } else {
            $output = 'rgb('.implode(",",$rgb).')';
        }
        
            //Return rgb(a) color string
        return $output;
    }