<?php

$wp_customize->add_panel(
	'wp_generic_theme',
	array(
		'priority' => '20',
		'capability' => 'edit_theme_options',
		'theme_supports' => '',
		'title' => esc_html__( 'Theme Setup', 'wp-generic' ),
		'description' => esc_html__( 'Setup theme setting of the site.', 'wp-generic' ),
		)
	);

	$wp_customize->add_section(
		'wp_generic_theme_color',
		array(
			'priority'        => 10,
			'title' => esc_html__( 'Theme Color', 'wp-generic' ),
			'capability' => 'edit_theme_options',
			'description' => esc_html__( 'Choose light and dark color to change their respective colors in whole site.', 'wp-generic' ),
			'panel' => 'wp_generic_theme'
			)
		);
	
		$wp_customize->add_setting(
			'wp_generic_theme_color_primary_light',
			array(
				'default' => '#1c9cda',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'sanitize_hex_color'
				)
			);

		$wp_customize->add_control(
            new WP_Customize_Color_Control(
                $wp_customize,
                'wp_generic_theme_color_primary_light',
                array(
                    'priority'      =>  10,
                    'label'         =>  __('Primary Light color','wp-generic'),
                    'section'       =>  'wp_generic_theme_color',
                    'setting'       =>  'wp_generic_theme_color_primary_light',
                    )                                   
                )
            );
	
		$wp_customize->add_setting(
			'wp_generic_theme_color_primary_dark',
			array(
				'default' => '#0073aa',
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'sanitize_hex_color'
				)
			);

		$wp_customize->add_control(
            new WP_Customize_Color_Control(
                $wp_customize,
                'wp_generic_theme_color_primary_dark',
                array(
                    'priority'      =>  20,
                    'label'         =>  __('Primary Dark color','wp-generic'),
                    'section'       =>  'wp_generic_theme_color',
                    'setting'       =>  'wp_generic_theme_color_primary_dark',
                    )                                   
                )
            );

	//Slider Baisc setup sections
	$wp_customize->add_section(
		'wp_generic_theme_category',
		array(
			'priority'        => 10,
			'title' => esc_html__( 'Category Setup', 'wp-generic' ),
			'capability' => 'edit_theme_options',
			'description' => esc_html__( 'Select a category to define as respective Category. The post of the selected category will be shown their respective Section & Page.', 'wp-generic' ),
			'panel' => 'wp_generic_theme'
			)
		);
	
		//select category for slider
		$wp_customize->add_setting(
			'wp_generic_theme_category_slider',
			array(
				'default' => 0,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'wp_generic_sanitize_integer'
				)
			);

		$wp_customize->add_control( 
			'wp_generic_theme_category_slider', 
			array(
				'type'	=>	'select',
				'label'	=> 	__('Slider Category','wp-generic'),
				'section' => 'wp_generic_theme_category',
				'choices' => wp_generic_category_lists(),
				)
			);
	
		//select category for blog
		$wp_customize->add_setting(
			'wp_generic_theme_category_blog',
			array(
				'default' => 0,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'wp_generic_sanitize_integer'
				)
			);

		$wp_customize->add_control( 
			'wp_generic_theme_category_blog', 
			array(
				'type'	=>	'select',
				'label'	=> 	__('Blog Category','wp-generic'),				
				'section' => 'wp_generic_theme_category',
				'choices' => wp_generic_category_lists(),
				)
			);
	
		//select category for portfolio
		$wp_customize->add_setting(
			'wp_generic_theme_category_portfolio',
			array(
				'default' => 0,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'wp_generic_sanitize_integer'
				)
			);

		$wp_customize->add_control( 
			'wp_generic_theme_category_portfolio', 
			array(
				'type'	=>	'select',
				'label'	=> 	__('Portfolio Category','wp-generic'),
				'section' => 'wp_generic_theme_category',
				'choices' => wp_generic_category_lists(),
				)
			);
	
		//select category for services
		$wp_customize->add_setting(
			'wp_generic_theme_category_service',
			array(
				'default' => 0,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'wp_generic_sanitize_integer'
				)
			);

		$wp_customize->add_control( 
			'wp_generic_theme_category_service', 
			array(
				'type'	=>	'select',
				'label'	=> 	__('Service Category','wp-generic'),
				'section' => 'wp_generic_theme_category',
				'choices' => wp_generic_category_lists(),
				)
			);
	
		//select category for team
		$wp_customize->add_setting(
			'wp_generic_theme_category_team',
			array(
				'default' => 0,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'wp_generic_sanitize_integer'
				)
			);

		$wp_customize->add_control( 
			'wp_generic_theme_category_team', 
			array(
				'type'	=>	'select',
				'label'	=> 	__('Team Category','wp-generic'),
				'section' => 'wp_generic_theme_category',
				'choices' => wp_generic_category_lists(),
				)
			);
	
		//select category for testimonial
		$wp_customize->add_setting(
			'wp_generic_theme_category_testimonial',
			array(
				'default' => 0,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'wp_generic_sanitize_integer'
				)
			);

		$wp_customize->add_control( 
			'wp_generic_theme_category_testimonial', 
			array(
				'type'	=>	'select',
				'label'	=> 	__('Testimonial Category','wp-generic'),
				'section' => 'wp_generic_theme_category',
				'choices' => wp_generic_category_lists(),
				)
			);
	
		//select category for client
		$wp_customize->add_setting(
			'wp_generic_theme_category_client',
			array(
				'default' => 0,
				'capability' => 'edit_theme_options',
				'sanitize_callback' => 'wp_generic_sanitize_integer'
				)
			);

		$wp_customize->add_control( 
			'wp_generic_theme_category_client', 
			array(
				'type'	=>	'select',
				'label'	=> 	__('Client Category','wp-generic'),
				'section' => 'wp_generic_theme_category',
				'choices' => wp_generic_category_lists(),
				)
			);

	//social Settings section
   	$wp_customize->add_section(
	   	'wp_generic_theme_social', 
	   	array(
	       	'priority' 	=>	20,
	       	'panel'		=>	'wp_generic_theme',
			'capability' => 'edit_theme_options',
	       	'title' => esc_html__('Social Link Setup', 'wp-generic'),
	       	'description' => esc_html__('Add your link of the respective site.','wp-generic'),
			)
		);	
	   
	   //social facebook link
	   	$wp_customize->add_setting(
		   	'wp_generic_social_facebook', 
		   	array(
				'default' => '#',
		        'sanitize_callback' => 'esc_url_raw',
				)
		   	);
	    
	    $wp_customize->add_control(
	    	'wp_generic_social_facebook',
	    	array(
		        'type' => 'text',
		        'label' => esc_html__('Facebook','wp-generic'),
		        'section' => 'wp_generic_theme_social',
		        'setting' => 'wp_generic_social_facebook'
		    	)
	    	);
	    
	    //social twitter link
	   	$wp_customize->add_setting(
	   		'wp_generic_social_twitter', 
	   		array(
				'default' => '#',
		        'sanitize_callback' => 'esc_url_raw',
				)
	   		);
	    
	    $wp_customize->add_control(
	    	'wp_generic_social_twitter',
	    	array(
		        'type' => 'text',
		        'label' => esc_html__('Twitter','wp-generic'),
		        'section' => 'wp_generic_theme_social',
		        'setting' => 'wp_generic_social_twitter'
	    		)
	    	);
	    
	    //social googleplus link
	   	$wp_customize->add_setting(
		   	'wp_generic_social_googleplus', 
		   	array(
				'default' => '#',
		        'sanitize_callback' => 'esc_url_raw',
				)
		   	);
	    
	    $wp_customize->add_control(
	    	'wp_generic_social_googleplus',
	    	array(
		        'type' => 'text',
		        'label' => esc_html__('Google Plus','wp-generic'),
		        'section' => 'wp_generic_theme_social',
		        'setting' => 'wp_generic_social_googleplus'
		    	)
	    	);
	    
	     //social youtube link
	   	$wp_customize->add_setting(
	   		'wp_generic_social_youtube', 
	   		array(
				'default' => '#',
		        'sanitize_callback' => 'esc_url_raw',
				)
	   		);
	    
	    $wp_customize->add_control(
	    	'wp_generic_social_youtube',
	    	array(
		        'type' => 'text',
		        'label' => esc_html__('YouTube','wp-generic'),
		        'section' => 'wp_generic_theme_social',
		        'setting' => 'wp_generic_social_youtube'
		    	)
	    	);
	    
	     //social pinterest link
	   	$wp_customize->add_setting(
		   	'wp_generic_social_pinterest', 
		   	array(
				'default' => '',
		        'sanitize_callback' => 'esc_url_raw',
				)
		   	);
	    
	    $wp_customize->add_control(
	    	'wp_generic_social_pinterest',
	    	array(
		        'type' => 'text',
		        'label' => esc_html__('Pinterest','wp-generic'),
		        'section' => 'wp_generic_theme_social',
		        'setting' => 'wp_generic_social_pinterest'
		    	)
	    	);
	    
	    //social linkedin link
	   	$wp_customize->add_setting(
	   		'wp_generic_social_linkedin', 
	   		array(
				'default' => '',
		        'sanitize_callback' => 'esc_url_raw',
				)
	   		);
	    
	    $wp_customize->add_control(
	    	'wp_generic_social_linkedin',
	    	array(
		        'type' => 'text',
		        'label' => esc_html__('Linkedin','wp-generic'),
		        'section' => 'wp_generic_theme_social',
		        'setting' => 'wp_generic_social_linkedin'
	    		)
	    	);
	    
	    
	    //social vimeo link
	   	$wp_customize->add_setting(
	   		'wp_generic_social_vimeo', 
	   		array(
				'default' => '',
		        'sanitize_callback' => 'esc_url_raw',
				)
	   		);
	    
	    $wp_customize->add_control(
	    	'wp_generic_social_vimeo',
	    	array(
		        'type' => 'text',
		        'label' => esc_html__('Vimeo','wp-generic'),
		        'section' => 'wp_generic_theme_social',
		        'setting' => 'wp_generic_social_vimeo'
	    		)
	    	);
	    
	    //social instagram link
	   	$wp_customize->add_setting(
	   		'wp_generic_social_instagram', 
	   		array(
				'default' => '',
		        'sanitize_callback' => 'esc_url_raw',
				)
	   		);
	    
	    $wp_customize->add_control(
	    	'wp_generic_social_instagram',
	    	array(
		        'type' => 'text',
		        'label' => esc_html__('Instagram','wp-generic'),
		        'section' => 'wp_generic_theme_social',
		        'setting' => 'wp_generic_social_instagram'
		    	)
	    	);

	    //social skype link
	   	$wp_customize->add_setting(
	   		'wp_generic_social_skype', 
	   		array(
				'default' => '',
		        'sanitize_callback' => 'sanitize_text_field',
				)
	   		);
	    
	    $wp_customize->add_control(
	    	'wp_generic_social_skype',
	    	array(
		        'type' => 'text',
		        'label' => esc_html__('Skype','wp-generic'),
		        'section' => 'wp_generic_theme_social',
		        'setting' => 'wp_generic_social_skype'
		    	)
	    	);