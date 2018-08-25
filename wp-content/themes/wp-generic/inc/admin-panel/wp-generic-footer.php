<?php

$wp_customize->add_panel(
	'wp_generic_footer',
	array(
		'priority' => 45,
		'capability' => 'edit_theme_options',
		'theme_supports' => '',
		'title' => esc_html__( 'Footer Settings', 'wp-generic' ),
		'description' => esc_html__( 'Setup footer of the site.', 'wp-generic' ),
		)
	);
		    
    $wp_customize->add_section(
    	'wp_generic_footer_copyright',
    	array(
			'title' => esc_html__('Copyright','wp-generic'),
			'priority' => '10',
			'panel' => 'wp_generic_footer'
			)
    	);

		$wp_customize->add_setting(
			'wp_generic_footer_copyright_text',
			array(
				'default' => '',
				'sanitize_callback' => 'sanitize_text_field',
				)
			);
		
		$wp_customize->add_control(
			'wp_generic_footer_copyright_text',
			array(
				'type' => 'text',
				'label' => esc_html__('Copyright text','wp-generic'),
				'description' => esc_html__('Enter Copyright text to shown on footer.','wp-generic'),
				'section' => 'wp_generic_footer_copyright'
				)
			);	
	    
		
	// Footer Social Links
	$wp_customize->add_section(
		'wp_generic_footer_social',
		array(
			'title' => esc_html__('Footer Social Links','wp-generic'),
			'priority' => '20',
			'panel' => 'wp_generic_footer'
			)
		);
	    //social setting in footer
	    $wp_customize->add_setting(
	    	'wp_generic_footer_social_option',
	    	 array(
		      	'default' => '0',
		      	'capability' => 'edit_theme_options',
		      	'sanitize_callback' => 'wp_generic_sanitize_integer',
			   	)
		   	);

	   	$wp_customize->add_control(
	   		new Wp_Generic_WP_Customize_Switch_Control(
	   			$wp_customize,
			   	'wp_generic_footer_social_option', 
			   	array(
			      	'type' => 'switch',
			      	'label' => esc_html__('Show Social Icons in Footer', 'wp-generic'),
			      	'description'	=> esc_html__('To add social links, go to Theme Setup -> Social Link Setup and add the links to shown on social links sections.','wp-generic'),
			      	'section' => 'wp_generic_footer_social',
			      	'setting' => 'wp_generic_footer_social_option',		
			      	)		      	
			   	)
		   	);

		
	// Footer Menu
	$wp_customize->add_section(
		'wp_generic_footer_menu',
		array(
			'title' => esc_html__('Footer Menu Setting','wp-generic'),
			'priority' => '30',
			'panel' => 'wp_generic_footer'
			)
		);
		$wp_customize->add_setting(
			'wp_generic_footer_menu_option',
			array(
				'default' => 0,
				'sanitize_callback' => 'wp_generic_sanitize_integer'
				)
			);
		$wp_customize->add_control(
			new WP_Generic_WP_Customize_Switch_Control(
				$wp_customize,
				'wp_generic_footer_menu_option',
				array(
					'type' => 'switch',
					'label' => esc_html__('Show Menu in Footer','wp-generic'),
					'section' => 'wp_generic_footer_menu'
					)
				)
			);

		$wp_customize->add_setting(
			'wp_generic_footer_menu_select',
			array(
				'default' => '',
				'sanitize_callback' => 'wp_generic_sanitize_integer'
				)
			);

		$wp_customize->add_control( 
			new WP_Generic_WP_Customize_Menu_Dropdown(
				$wp_customize,
	            'wp_generic_footer_menu_select',
	            array(
	                'section' => 'wp_generic_footer_menu',
	                'settings' => 'wp_generic_footer_menu_select',
	                'label'		=> esc_html__('Choose Menu','wp-generic'),
	                'description'		=> esc_html__('Select menu to show in footer.','wp-generic'),
	                )
	            )        			
			);