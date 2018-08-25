<?php 
function wp_generic_customizer( $wp_customize ) {
	$wp_customize->add_panel(
		'wp_generic_default',
		array(
			'title'			=>	__( 'Default Setting', 'wp-generic' ),
			'priority'		=>	10,
			'description'	=>	__( 'Setup the theme default setting.', 'wp-generic' ),

			)
		);

	$wp_customize->get_section( 'title_tagline' )		->panel 	= 'wp_generic_default';
	$wp_customize->get_section( 'colors' )				->panel 	= 'wp_generic_default';
	$wp_customize->get_section( 'static_front_page' )	->panel 	= 'wp_generic_default';
	$wp_customize->get_section( 'background_image' )	->panel 	= 'wp_generic_default';

	$wp_customize->add_section(
		'wp_generic_weblayout',
		array(
			'title' => esc_html('Web Layout', 'wp-generic'),
			'description' => esc_html('Choose Web Layout of your site.','wp-generic'),
			'panel' 	=>	'wp_generic_default',
			)
		);
		$wp_customize->add_setting(
			'wp_generic_weblayout_option',
			array(
				'default'	=> 'fullwidth',
				'sanitize_callback' => 'wp_generic_sanitize_weblayout'
				)
			);
		$wp_customize->add_control(
			'wp_generic_weblayout_option',
			array(
				'title'		=>	esc_html('Choose Webpage Layout','wp-generic'),
				'section'	=> 	'wp_generic_weblayout',
				'type'		=>	'radio',
				'choices' 	=> 	array(
						'fullwidth'	=> esc_html('Fullwidth Layout', 'wp-generic'),
						'boxed'		=> esc_html('Boxed Layout', 'wp-generic')
					)
				)
			);

    require get_template_directory() . '/inc/admin-panel/wp-generic-theme.php';
    require get_template_directory() . '/inc/admin-panel/wp-generic-header.php';
    require get_template_directory() . '/inc/admin-panel/wp-generic-homepage.php';
    require get_template_directory() . '/inc/admin-panel/wp-generic-footer.php';
    require get_template_directory() . '/inc/admin-panel/wp-generic-innerpage.php';
}
add_action( 'customize_register', 'wp_generic_customizer' );