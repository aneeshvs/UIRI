<?php 
add_action('wp_head','wp_generic_dynamic_styles');

function wp_generic_dynamic_styles(){
	$primary_light = get_theme_mod('wp_generic_theme_color_primary_light','#1c9cda');/*#00c8c8*/
	$primary_dark = get_theme_mod('wp_generic_theme_color_primary_dark','#0073aa');
	
	?>
	<style>
		a:hover, #main-header .main-navigation ul li a:hover, #main-header .main-navigation ul.nav-menu > li.current-menu-item > a, 
		#main-header .main-navigation ul.nav-menu > li.current_page_item > a, 
		.team-section .team-content-wrap .team-content.post-content .team-post-bttn.readmore-bttn:hover, 
		.portfolio-section .portfolio-content-wrap .portfolio-cursor:hover, .blog-section .blog-content .entry-meta a:hover, 
		.blog-section .bottom-comment .blog-post-bttn:hover, .cta-section .cta-post-bttn:hover, 
		.widget_wp_generic_pricing .ed-price .ed-currency, .widget_wp_generic_pricing .ed-price .ed-amount, .widget ul li .post-date, 
		.widget_recent_comments .recentcomments a:hover, .archive.list article .ed-bttn:hover {
			color: <?php echo esc_attr($primary_light);?>
		}

		#ed-slider .caption-wrapper .slider-caption .slider-viewmore.ed-bttn:hover, 
		#ed-slider .caption-wrapper .slider-caption .slider-viewmore.ed-bttn + .slider-viewmore.ed-bttn, 
		.bx-wrapper .bx-pager.bx-default-pager a:hover, .bx-wrapper .bx-pager.bx-default-pager a.active, 
		.team-section .team-content-wrap .team-post-title::before, .widget_wp_generic_progress_bar .ed-progress-bar-percentage, 
		.skill-section .skill-post-bttn:hover, .service-content-wrap figure, .service-section .service-post-bttn.readmore-bttn:hover, 
		.blog-section .blog-content .entry-meta span.cat-links::after, .cta-section, .bttn, .bottom-footer .footer-menu ul li a::after, 
		button, input[type="button"], input[type="reset"], input[type="submit"], .widget_tag_cloud a, .widget_calendar table thead tr th, 
		.widget_calendar table tbody tr td#today, .reply .comment-reply-link, .edit-link a, .ed-bttn, 
		#main-header .search-icon .ed-search .search-form .search-submit {
			background: <?php echo esc_attr($primary_light);?>
		}

		.skill-section .skill-post-bttn:hover, .service-section .service-post-bttn.readmore-bttn:hover {
			border-color: <?php echo esc_attr($primary_light);?>
		}

		#main-header .search-icon > .fa, .widget_calendar table tbody tr td a {
			color: <?php echo esc_attr($primary_dark);?>
		}

		#main-header .search-icon > .fa:hover, .bttn:hover, button:hover, input[type="button"]:hover, input[type="reset"]:hover, input[type="submit"]:hover, 
		button:focus, input[type="button"]:focus, input[type="reset"]:focus, input[type="submit"]:focus, button:active, input[type="button"]:active, 
		input[type="reset"]:active, input[type="submit"]:active, .widget_tag_cloud a:hover, .widget_calendar table caption, 
		.reply .comment-reply-link:hover, .edit-link a:hover, .ed-bttn:hover, #main-header .search-icon .ed-search .search-form .search-submit:hover {
			background: <?php echo esc_attr($primary_dark);?>	
		}

		.portfolio-section .portfolio-content.post-content, #back-to-top:hover, .portfolio article .entry-content, 
		.cta-section::after {
			background: <?php echo wp_generic_hex2rgba(esc_attr($primary_light), 0.85);?>
		}

	</style>

<?php
}