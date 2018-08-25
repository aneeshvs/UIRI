<?php
	/** WP Generic Woo Tweaks **/
/////////////////////// for all woo commerce pages///////////////////////////
	remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
	remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);
	remove_action('woocommerce_before_main_content','woocommerce_breadcrumb',20);
	remove_action('woocommerce_sidebar','woocommerce_get_sidebar');
	add_action('wp_generic_sidebar','woocommerce_get_sidebar',10); // for sidebar	
	add_action('wp_generic_breadcrumb','woocommerce_breadcrumb',10); //for breaddcrumb
	add_action('woocommerce_before_main_content', 'wp_generic_wrapper_start', 10);
	add_action('woocommerce_after_main_content', 'wp_generic_wrapper_end', 10);

//////////////// for all woocomerce pages ends////////////////


	add_action('woocommerce_before_shop_loop', 'wp_generic_primary', 0);	// page header of  archive woocommerce page
	add_action('woocommerce_before_single_product', 'wp_generic_primary', 0);// page header for single product
	
	add_filter( 'loop_shop_per_page', create_function( '$cols', 'return 12;' ), 20 );
	

	function wp_generic_wrapper_start(){
		$sidebar = get_theme_mod('wp_generic_innerpage_setting_archive_layout','right-sidebar');
		if( ( $sidebar == 'no-sidebar' ) && ( $sidebar == 'both-sidebar' ) ):
	    	$sidebar = '';				
	    endif;?>
	    <div class="ed-container">
	    <?php
		echo '<div id="primary" class="content-area"><main id="main" class="site-main" role="main"><header class="page-header"><div class="archive-page-title">';
	}

	// to add primary div after breadcrumb
	function wp_generic_primary(){	
		do_action('wp_generic_breadcrumb');
		echo '</div></header><div class="archive-product">';
	}

	function wp_generic_wrapper_end(){
		echo '</main></div>';
		do_action('wp_generic_sidebar');
		echo '</div></div>';

	}




	if ( class_exists('YITH_WCWL') ) {
		if (function_exists('YITH_WCWL')) {

			add_action('woocommerce_before_shop_loop_item_title', 'wp_generic_show_add_to_wishlist', 10 );
			function wp_generic_show_add_to_wishlist(){
				if(class_exists( 'YITH_WCQV_Frontend' )){
					echo "<div class='whislist-quickview'>";
				}
				echo do_shortcode('[yith_wcwl_add_to_wishlist]');
			}

			add_action('woocommerce_single_product_summary', 'wp_generic_add_to_wishlist_single_product', 35 );
			function wp_generic_add_to_wishlist_single_product(){
				echo do_shortcode('[yith_wcwl_add_to_wishlist]');	
			}

		}
	}



	if( class_exists( 'YITH_WCQV_Frontend' ) ){

		$quick_view = YITH_WCQV_Frontend();
		remove_action('woocommerce_after_shop_loop_item', array( $quick_view, 'yith_add_quick_view_button' ), 15 );
		add_action( 'woocommerce_before_shop_loop_item_title', array( $quick_view, 'yith_add_quick_view_button' ), 10 );

		add_action( 'woocommerce_before_shop_loop_item_title',  'wp_generic_div_after_yith_add_quick_view_button' , 10 );
		function wp_generic_div_after_yith_add_quick_view_button(){
			if(function_exists('YITH_WCWL') ){
				echo "</div>";
			}
		}

	}




	add_filter('loop_shop_columns', 'wp_generic_loop_columns');
	if (!function_exists('wp_generic_loop_columns')) {
		function wp_generic_loop_columns() {
				$xr = 4;
			return intval($xr); 
		}
	}