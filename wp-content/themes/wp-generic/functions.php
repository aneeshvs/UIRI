<?php
/**
 * WP Generic functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WP_Generic
 */

if ( ! function_exists( 'wp_generic_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function wp_generic_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on WP Generic, use a find and replace
	 * to change 'wp-generic' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'wp-generic', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	add_editor_style();
	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );
	add_image_size('wp-generic-square', 540, 540, true);
	add_image_size('wp-generic-full', 1170, 800, true);
	add_image_size('wp-generic-slider', 1920, 700, true);

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'menu-1' => esc_html__( 'Primary', 'wp-generic' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'wp_generic_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );


	add_theme_support( 'custom-logo' , array(
	 	'header-text' => array( 'site-title', 'site-description' ),
	 	));
	
	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	add_theme_support('woocommerce');

	if(is_admin()):
		//load js to control function of switch
	function wp_generic_custom_admin_style($hook){
        if ( 'customize.php' == $hook || 'widgets.php' == $hook ) {

			wp_enqueue_style( 'wp-generic-custom-control-admin-css', get_template_directory_uri() . '/inc/css/admin-control.css');
			wp_enqueue_script( 'wp-generic-custom-control-admin-js', get_template_directory_uri().'/inc/js/admin-control.js', array( 'jquery' ), '20170109', true );
		}
	}
	add_action( 'admin_enqueue_scripts', 'wp_generic_custom_admin_style' );
	endif;
}
endif;
add_action( 'after_setup_theme', 'wp_generic_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function wp_generic_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'wp_generic_content_width', 640 );
}
add_action( 'after_setup_theme', 'wp_generic_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function wp_generic_widgets_init() {

	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'wp-generic' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'wp-generic' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Right Sidebar', 'wp-generic' ),
		'id'            => 'wp-generic-right',
		'description'   => esc_html__( 'Add widgets here.', 'wp-generic' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Left Sidebar', 'wp-generic' ),
		'id'            => 'wp-generic-left',
		'description'   => esc_html__( 'Add widgets here.', 'wp-generic' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Skill Widget Area', 'wp-generic' ),
		'id'            => 'wp-generic-skill',
		'description'   => esc_html__( 'Add skill widget here.', 'wp-generic' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Pricing Widget Area', 'wp-generic' ),
		'id'            => 'wp-generic-pricing',
		'description'   => esc_html__( 'Add pricing widget here.', 'wp-generic' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Footer One', 'wp-generic' ),
		'id'            => 'wp-generic-footer-one',
		'description'   => esc_html__( 'Add widgets here.', 'wp-generic' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Footer Two', 'wp-generic' ),
		'id'            => 'wp-generic-footer-two',
		'description'   => esc_html__( 'Add widgets here.', 'wp-generic' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Footer Three', 'wp-generic' ),
		'id'            => 'wp-generic-footer-three',
		'description'   => esc_html__( 'Add widgets here.', 'wp-generic' ),
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

}
add_action( 'widgets_init', 'wp_generic_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function wp_generic_scripts() {
	$query_args = array( 
	    'family' => 'Karla:400,400i,700,700i|Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Roboto:300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i'
	);
	
	wp_enqueue_style( 'wp-generic-google-fonts', add_query_arg( $query_args, "//fonts.googleapis.com/css" ) );

	wp_enqueue_style('font-awesome-css', get_template_directory_uri() . '/css/font-awesome.css' );

	wp_enqueue_style('bx-slider-css', get_template_directory_uri() . '/css/jquery.bxslider.css' );

	wp_enqueue_style( 'wp-generic-style', get_stylesheet_uri() );

	wp_enqueue_style('wp-generic-responsive-css', get_template_directory_uri() . '/css/responsive.css' );

	wp_enqueue_script( 'waypoint-js', get_template_directory_uri() . '/js/jquery.waypoints.js', array('jquery'), '2.0.3', true );

	wp_enqueue_script( 'bx-slider-js', get_template_directory_uri() . '/js/jquery.bxslider.js', array('jquery'), '1.3.3', true );

	wp_enqueue_script( 'wp-generic-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'wp-generic-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	wp_enqueue_script('wp-generic-custom-js',get_template_directory_uri().'/js/custom.js', array('jquery'), '',true);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'wp_generic_scripts' );

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Wp Generic Customizer additions.
 */
require get_template_directory() . '/inc/wp-generic-customizer.php';

/**
 * Wp Generic controls additions.
 */
require get_template_directory() . '/inc/controls/wp-generic-custom-switch.php';

/**
 * Wp Generic controls additions.
 */
require get_template_directory() . '/inc/controls/wp-generic-menu-dropdown.php';

/**
 * Wp Generic function additions.
 */
require get_template_directory() . '/inc/wp-generic-functions.php';

/**
 * Wp Generic Sanitization function additions.
 */
require get_template_directory() . '/inc/admin-panel/wp-generic-sanitize.php';

/**
 * Wp Generic widget  additions.
 */
require get_template_directory() . '/inc/wp-generic-widgets.php';

/**
 * Wp Generic metabox  additions.
 */
require get_template_directory() . '/inc/wp-generic-metabox.php';

/**
 * Wp Generic woocommerce compitablilty.
 */
require get_template_directory() . '/inc/wp-generic-woo.php';

/**
 * Wp Generic dynamic styles
 */
require get_template_directory() . '/css/wp-generic-dynamic-styles.php';

/**
 * Wp Generic Demo Import
 */
require get_template_directory() . '/welcome/wp_generic_about.php';