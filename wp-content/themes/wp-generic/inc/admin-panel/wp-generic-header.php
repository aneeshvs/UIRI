<?php

$wp_customize->add_panel(
	'wp_generic_header',
	array(
		'priority' => '20',
		'capability' => 'edit_theme_options',
		'theme_supports' => '',
		'title' => esc_html__( 'Header Settings', 'wp-generic' ),
		'description' => esc_html__( 'Setup header of the site.', 'wp-generic' ),
		)
	);
		    
    $wp_customize->add_section(
    	'wp_generic_header_topheader',
    	array(
			'title' => esc_html__('Top Header','wp-generic'),
			'priority' => '10',
			'panel' => 'wp_generic_header'
			)
    	);

		$wp_customize->add_setting(
			'wp_generic_header_topheader_text',
			array(
				'default' => esc_html__('Have any questions?','wp-generic'),
				'sanitize_callback' => 'sanitize_text_field',
				)
			);
		
		$wp_customize->add_control(
			'wp_generic_header_topheader_text',
			array(
				'type' => 'text',
				'label' => esc_html__('Contact Title','wp-generic'),
				'description' => esc_html__('Enter text to show as Contact title.','wp-generic'),
				'section' => 'wp_generic_header_topheader'
				)
			);

		$wp_customize->add_setting(
			'wp_generic_header_topheader_call',
			array(
				'default' => '+977-01-4276760',
				'sanitize_callback' => 'sanitize_text_field',
				)
			);
		
		$wp_customize->add_control(
			'wp_generic_header_topheader_call',
			array(
				'type' => 'text',
				'label' => esc_html__('Contact Number','wp-generic'),
				'description' => esc_html__('Enter no. to show your contact no. in header.','wp-generic'),
				'section' => 'wp_generic_header_topheader'
				)
			);	

		$wp_customize->add_setting(
			'wp_generic_header_topheader_mail',
			array(
				'default' => 'info@8degreethemes.com',
				'sanitize_callback' => 'sanitize_email',
				)
			);
		
		$wp_customize->add_control(
			'wp_generic_header_topheader_mail',
			array(
				'type' => 'text',
				'label' => esc_html__('Contact Email','wp-generic'),
				'description' => esc_html__('Enter email to show your contact email in header.','wp-generic'),
				'section' => 'wp_generic_header_topheader'
				)
			);
	    
	    //social setting in header
	    $wp_customize->add_setting(
	    	'wp_generic_header_topheader_social_option',
	    	 array(
		      	'default' => '0',
		      	'capability' => 'edit_theme_options',
		      	'sanitize_callback' => 'wp_generic_sanitize_integer',
			   	)
		   	);

	   	$wp_customize->add_control(
	   		new Wp_Generic_WP_Customize_Switch_Control(
	   			$wp_customize,
			   	'wp_generic_header_topheader_social_option', 
			   	array(
			      	'type' => 'switch',
			      	'label' => esc_html__('Show Social Icons in Header', 'wp-generic'),
			      	'description'	=> esc_html__('To add social links, go to Theme Setup -> Social Link Setup and add the links to shown on social links sections.','wp-generic'),
			      	'section' => 'wp_generic_header_topheader',
			      	'setting' => 'wp_generic_header_topheader_social_option',		
			      	)		      	
			   	)
		   	);

	    //logo Alignment
	   	$wp_customize->add_section(
	   		'wp_generic_header_logo', 
	   		array(
		       	'priority' => 25,
		       	'title' => esc_html__('Logo Alignment', 'wp-generic'),
		       	'panel' => 'wp_generic_header'
				)
	   		);

		    $wp_customize->add_setting(
		    	'wp_generic_header_logo_alignment', 
		    	array(
				    'default' => 'left',
				    'capability' => 'edit_theme_options',
				    'sanitize_callback' => 'wp_generic_sanitize_alignment',
		   			)
		    	);

		   	$wp_customize->add_control(
			   	'wp_generic_header_logo_alignment', 
			   	array(
			      	'type' => 'radio',
			      	'label' => esc_html__('Choose the layout that you want', 'wp-generic'),
			      	'section' => 'wp_generic_header_logo',
			      	'setting' => 'wp_generic_header_logo_alignment',
			      	'choices' => array(
				        'left'=>__('Left', 'wp-generic'),
				        'center'=>__('Center', 'wp-generic'),
				        'right'=>__('Right', 'wp-generic')
			      		)
			   		)
			   	);
		
	// Header Search option
	$wp_customize->add_section(
		'wp_generic_header_search',
		array(
			'title' => esc_html__('Header Search Setting','wp-generic'),
			'priority' => '30',
			'panel' => 'wp_generic_header'
			)
		);
		$wp_customize->add_setting(
			'wp_generic_header_search_option',
			array(
				'default' => '0',
				'sanitize_callback' => 'wp_generic_sanitize_integer'
				)
			);
		$wp_customize->add_control(
			new WP_Generic_WP_Customize_Switch_Control(
				$wp_customize,
				'wp_generic_header_search_option',
				array(
					'type' => 'switch',
					'label' => esc_html__('Show Search in Header','wp-generic'),
					'section' => 'wp_generic_header_search'
					)
				)
			);

		//Search Box Placeholder
   	    $wp_customize->add_setting(
	    	'wp_generic_header_search_placeholder', 
	    	array(
				'default' => esc_html__('Search...','wp-generic'),
	        	'sanitize_callback' => 'sanitize_text_field',
	        	'transport' => 'postMessage',
				)
	    	);
	    
	    $wp_customize->add_control(
	    	'wp_generic_header_search_placeholder',
	    	array(
	    		'label' 	=>	__('Enter Search Placeholder','wp-generic'),
		        'type' => 'text',
		        'section' => 'wp_generic_header_search',
		        'setting' => 'wp_generic_header_search_placeholder',
		    	)
	    	);

		//Search Box Button text
   	    $wp_customize->add_setting(
	    	'wp_generic_header_search_text', 
	    	array(
				'default' => esc_html__('Search','wp-generic'),
	        	'sanitize_callback' => 'sanitize_text_field',
	        	'transport' => 'postMessage',
				)
	    	);
	    
	    $wp_customize->add_control(
	    	'wp_generic_header_search_text',
	    	array(
	    		'label' 	=>	__('Enter Search Button text','wp-generic'),
		        'type' => 'text',
		        'section' => 'wp_generic_header_search',
		        'setting' => 'wp_generic_header_search_text',
		    	)
	    	);