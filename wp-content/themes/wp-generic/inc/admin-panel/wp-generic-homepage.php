<?php 

// Add Homepage setting Panel
$wp_customize->add_panel(
'wp_generic_homepage',array(
    'priority'      => 40,
    'capability'    =>  'edit_theme_options',
    'description'   =>  esc_html__( 'Homepage Settings of the theme','wp-generic' ),
    'theme_supports'=>  '',
    'title'         =>  esc_html__( 'Homepage Sections','wp-generic' ),
    )
);


    //Slider on homepage
    $wp_customize->add_section(
        'wp_generic_homepage_slider',
        array(
            'priority'        => 0,
            'title' => esc_html__( 'Slider Section', 'wp-generic' ),
            'capability' => 'edit_theme_options',
            'description' => esc_html__( 'Setup the slider settings for header', 'wp-generic' ),
            'panel' => 'wp_generic_homepage'
            )
        );

        $wp_customize->add_setting(
            'wp_generic_homepage_slider_option',
            array(
                'default' => 0,
                'sanitize_callback' => 'wp_generic_sanitize_integer'
                )
            );

        $wp_customize->add_control(
            new WP_Generic_WP_Customize_Switch_Control(
                $wp_customize,
                'wp_generic_homepage_slider_option',
                array(
                    'type' => 'switch',
                    'label' => esc_html__('Enable Slider', 'wp-generic'),
                    'description' => esc_html__('Select Yes to show slider on homepage.', 'wp-generic'),
                    'section' => 'wp_generic_homepage_slider',
                    )
                )
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_slider_caption',
            array(
                'default' => '0',
                'sanitize_callback' => 'wp_generic_sanitize_integer'
                )
            );

        $wp_customize->add_control(
            new WP_Generic_WP_Customize_Switch_Control(
                $wp_customize,
                'wp_generic_homepage_slider_caption',
                array(
                    'type' => 'switch',
                    'label' => esc_html__('Slider Caption', 'wp-generic'),
                    'description' => esc_html__('Select Yes to show titles and description over Slider', 'wp-generic'),
                    'section' => 'wp_generic_homepage_slider',
                    )
                )
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_slider_pager',
            array(
                'default' => '0',
                'sanitize_callback' => 'wp_generic_sanitize_integer'
                )
            );

        $wp_customize->add_control(
            new WP_Generic_WP_Customize_Switch_Control(
                $wp_customize,
                'wp_generic_homepage_slider_pager',
                array(
                    'type' => 'switch',
                    'label' => esc_html__('Slider Pager', 'wp-generic'),
                    'section' => 'wp_generic_homepage_slider',
                    )
                )
            );
        
        $wp_customize->add_setting(
            'wp_generic_homepage_slider_controls',
            array(
                'default' => '0',
                'sanitize_callback' => 'wp_generic_sanitize_integer'
                )
            );

        $wp_customize->add_control(
            new WP_Generic_WP_Customize_Switch_Control(
                $wp_customize,
                'wp_generic_homepage_slider_controls',
                array(
                    'type' => 'switch',
                    'label' => esc_html__('Slider Controls', 'wp-generic'),
                    'section' => 'wp_generic_homepage_slider',
                    )
                )
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_slider_transition_auto',
            array(
                'default' => '0',
                'sanitize_callback' => 'wp_generic_sanitize_integer'
                )
            );

        $wp_customize->add_control(
            new WP_Generic_WP_Customize_Switch_Control(
                $wp_customize,
                'wp_generic_homepage_slider_transition_auto',
                array(
                    'type' => 'switch',
                    'label' => esc_html__('Auto Transition', 'wp-generic'),
                    'section' => 'wp_generic_homepage_slider',
                    )
                )
            );

        //transition type
        $wp_customize->add_setting(
            'wp_generic_homepage_slider_transition_type', 
            array(
                'default' => 'horizontal',
                'capability' => 'edit_theme_options',
                'sanitize_callback' => 'wp_generic_radio_sanitize_transition'
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_slider_transition_type', 
            array(
                'type' => 'select',
                'label' => esc_html__('Transition Type(Slide/Fade)', 'wp-generic'),
                'section' => 'wp_generic_homepage_slider',
                'choices' => array(
                    'fade' => esc_html__('Fade', 'wp-generic'),
                    'horizontal' => esc_html__('Slide Horizontal', 'wp-generic'),
                    'vertical' => esc_html__('Slide Vertical', 'wp-generic'),
                    )
                )
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_slider_transition_speed',
            array(
                'default'       =>      '3500',
                'sanitize_callback' => 'wp_generic_sanitize_integer'
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_slider_transition_speed',
            array(
                'type' => 'number',
                'label' => esc_html__('Transition Speed', 'wp-generic'),
                'section' => 'wp_generic_homepage_slider',
                )
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_slider_transition_pause',
            array(
                'default'       =>      '3500',
                'sanitize_callback' => 'wp_generic_sanitize_integer'
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_slider_transition_pause',
            array(
                'type' => 'number',
                'label' => esc_html__('Transition Pause', 'wp-generic'),
                'section' => 'wp_generic_homepage_slider',
                )
            );

    ///////////////////////////////////////////////////////////////////////////////////////////   
    // Service section
    ///////////////////////////////////////////////////////////////////////////////////////////

    $wp_customize->add_section(
        'wp_generic_homepage_service',
        array(
            'title'         =>  esc_html__( 'Service Section','wp-generic' ),
            'description'   =>  esc_html__( 'Settings of the Service Section. Go to Theme Setup -> Category Setup and Select category in Service category to show posts in Service Section.','wp-generic' ),
            'priority'      =>  10,
            'panel'         =>  'wp_generic_homepage'        
            )
        );

        $wp_customize->add_setting(
            'wp_generic_homepage_service_option',
            array(
                'default'           =>  0,
                'sanitize_callback' =>  'wp_generic_sanitize_switch',
                'transport'         =>  'postMessage',
                )
            );

        $wp_customize->add_control(
            new WP_Generic_WP_Customize_Switch_Control(
                $wp_customize,
                'wp_generic_homepage_service_option',
                array(
                    'label'   =>  esc_html__('Enable Section','wp-generic'),
                    'section'       =>  'wp_generic_homepage_service',
                    'setting'       =>  'wp_generic_homepage_service_option',
                    'priority'      =>  10,
                    'type'          =>  'switch',
                    )
                )                   
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_service_page',
            array(
                'default'           =>  '0',
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_service_page',
            array(
                'priority'=>    25,
                'label'   =>    esc_html__('Select Page','wp-generic'),
                'description' => esc_html__('Choose page to display section title and description in service section.','wp-generic'),
                'section' =>    'wp_generic_homepage_service',
                'setting' =>    'wp_generic_homepage_service_page',
                'type'    =>    'dropdown-pages',
                )                                     
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_service_post_num',
            array(
                'default'           =>  '4',
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_service_post_num',
            array(
                'priority'      =>  30,
                'label'         =>  esc_html__('Total Post','wp-generic'),
                'section'       =>  'wp_generic_homepage_service',
                'setting'       =>  'wp_generic_homepage_service_post_num',
                'type'          =>  'number',  
                )                                     
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_service_readmore',
            array(
                'default'           =>  esc_html__('Readmore','wp-generic'),
                'sanitize_callback' =>  'sanitize_text_field',
                'transport'         =>  'postMessage',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_service_readmore',
            array(
                'priority'      =>  30,
                'label'         =>  esc_html__('Readmore Button','wp-generic'),
                'section'       =>  'wp_generic_homepage_service',
                'setting'       =>  'wp_generic_homepage_service_readmore',
                'type'          =>  'text',  
                )                                     
            );


    //Add skill section and their controls

    $wp_customize->add_section(
        'wp_generic_homepage_skill',
        array(
            'title'         =>  esc_html__( 'Skill Section','wp-generic' ),
            'description'   =>  esc_html__( 'Settings of the Skill Section. Go to Dashboard -> Appearance -> Widgets -> add progress bar widgets.','wp-generic' ),
            'priority'      =>  20,
            'panel'         =>  'wp_generic_homepage'        
            )
        );

        $wp_customize->add_setting(
            'wp_generic_homepage_skill_option',
            array(
                'default'           =>  0,
                'sanitize_callback' =>  'wp_generic_sanitize_switch',
                )
            );

        $wp_customize->add_control(
        	new WP_Generic_WP_Customize_Switch_Control(
	        	$wp_customize,
                'wp_generic_homepage_skill_option',
                array(
                    'label'   =>  esc_html__( 'Enable Section','wp-generic' ),
                    'section'       =>  'wp_generic_homepage_skill',
                    'setting'       =>  'wp_generic_homepage_skill_option',
                    'priority'      =>  10,
                    'type'          =>  'switch',
                    )
                )                   
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_skill_page',
            array(
                'default'           =>  '0',
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_skill_page',
            array(
                'priority'=>    25,
                'label'   =>    esc_html__('Select Page','wp-generic'),
                'description' => esc_html__('Choose page to display section title and description in skill section.','wp-generic'),
                'section' =>    'wp_generic_homepage_skill',
                'setting' =>    'wp_generic_homepage_skill_page',
                'type'    =>    'dropdown-pages',
                )                                     
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_skill_readmore',
            array(
                'default'           =>  esc_html__('Register','wp-generic'),
                'sanitize_callback' =>  'sanitize_text_field',
                'transport'			=>	'postMessage',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_skill_readmore',
            array(
                'priority'      =>  30,
                'label'         =>  esc_html__('Readmore Button','wp-generic'),
                'section'       =>  'wp_generic_homepage_skill',
                'setting'       =>  'wp_generic_homepage_skill_readmore',
                'type'          =>  'text',  
                )                                     
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_skill_readmore_link',
            array(
                'default'           =>  '#',
                'sanitize_callback' =>  'esc_url_raw',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_skill_readmore_link',
            array(
                'priority'      =>  30,
                'label'         =>  esc_html__('Readmore Button Link','wp-generic'),
                'section'       =>  'wp_generic_homepage_skill',
                'setting'       =>  'wp_generic_homepage_skill_readmore_link',
                'type'          =>  'text',  
                )                                     
            );

    //Add Team section and their controls

    $wp_customize->add_section(
        'wp_generic_homepage_team',
        array(
            'title'         =>  esc_html__( 'Team Section','wp-generic' ),
            'description'   =>  esc_html__( 'Settings of the Team Section. Go to Theme Setup -> Category Setup and Select category in Team category to show posts in Team Section.','wp-generic' ),
            'priority'      =>  30,
            'panel'         =>  'wp_generic_homepage'        
            )
        );

        $wp_customize->add_setting(
            'wp_generic_homepage_team_option',
            array(
                'default'           =>  0,
                'sanitize_callback' =>  'wp_generic_sanitize_switch',
                )
            );

        $wp_customize->add_control(
            new WP_Generic_WP_Customize_Switch_Control(
                $wp_customize,
                'wp_generic_homepage_team_option',
                array(
                    'label'   =>  esc_html__( 'Enable Section','wp-generic' ),
                    'section'       =>  'wp_generic_homepage_team',
                    'setting'       =>  'wp_generic_homepage_team_option',
                    'priority'      =>  10,
                    'type'          =>  'switch',
                    )
                )                   
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_team_page',
            array(
                'default'           =>  '0',
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_team_page',
            array(
                'priority'=>    25,
                'label'   =>    esc_html__('Select Page','wp-generic'),
                'description' => esc_html__('Choose page to display section title and description in team section.','wp-generic'),
                'section' =>    'wp_generic_homepage_team',
                'setting' =>    'wp_generic_homepage_team_page',
                'type'    =>    'dropdown-pages',
                )                                     
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_team_post',
            array(
                'default'           =>  3,
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_team_post',
            array(
                'priority'=>    25,
                'label'   =>    esc_html__('No. of post','wp-generic'),
                'description' => esc_html__(' Enter no. of posts to display in team section.','wp-generic'),
                'section' =>    'wp_generic_homepage_team',
                'setting' =>    'wp_generic_homepage_team_post',
                'type'    =>    'number',
                )                                     
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_team_readmore',
            array(
                'default'           =>  esc_html__('Read More','wp-generic'),
                'sanitize_callback' =>  'sanitize_text_field',
                'transport'         =>  'postMessage',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_team_readmore',
            array(
                'priority'=>    30,
                'label'   =>    esc_html__('Readmore Button','wp-generic'),
                'section' =>    'wp_generic_homepage_team',
                'setting' =>    'wp_generic_homepage_team_readmore',
                'type'    =>    'text',         
                )                                     
            );
        
    //////////////////////////////////////////////////////////////////////////////////////////////
    //Add Portfolio section and their controls
    /////////////////////////////////////////////////////////////////////////////////////////////

    $wp_customize->add_section(
        'wp_generic_homepage_portfolio',
        array(
            'title'         =>  esc_html__('Portfolio Section','wp-generic'),
            'description'   =>  esc_html__('Settings of the Portfolio Section. Go to Theme Setup -> Category Setup and Select category in Portfolio category to show posts in Portfolio Section.','wp-generic'),
            'priority'      =>  40,
            'panel'         =>  'wp_generic_homepage'        
            )
        );

        $wp_customize->add_setting(
            'wp_generic_homepage_portfolio_option',
            array(
                'default'           =>  0,
                'sanitize_callback' =>  'wp_generic_sanitize_switch',
                )
            );

        $wp_customize->add_control(
        	new WP_Generic_WP_Customize_Switch_Control(
	        	$wp_customize,
                'wp_generic_homepage_portfolio_option',
                array(
                    'label'   =>  esc_html__('Enable Section','wp-generic'),
                    'section'       =>  'wp_generic_homepage_portfolio',
                    'setting'       =>  'wp_generic_homepage_portfolio_option',
                    'priority'      =>  10,
                    'type'          =>  'switch',
                    )
                )                   
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_portfolio_page',
            array(
                'default'           =>  0,
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_portfolio_page',
            array(
                'priority'=>    25,
                'label'   =>    esc_html__('Select Page','wp-generic'),
                'description' => esc_html__('Choose page to display section title and description in portfolio section.','wp-generic'),
                'section' =>    'wp_generic_homepage_portfolio',
                'setting' =>    'wp_generic_homepage_portfolio_page',
                'type'    =>    'dropdown-pages',
                )                                     
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_portfolio_post',
            array(
                'default'           =>  8,
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_portfolio_post',
            array(
                'priority'=>    60,
                'label'   =>    esc_html__('No. of Post','wp-generic'),
                'section' =>    'wp_generic_homepage_portfolio',
                'setting' =>    'wp_generic_homepage_portfolio_post',
                'type'    =>    'number',         
                )                                     
            );


        
    //////////////////////////////////////////////////////////////////////////////////////////////
    //Add Blog section and their controls
    /////////////////////////////////////////////////////////////////////////////////////////////

    $wp_customize->add_section(
        'wp_generic_homepage_blog',
        array(
            'title'         =>  esc_html__('Blog Section','wp-generic'),
            'description'   =>  esc_html__('Settings of the Blog Section. Go to Theme Setup -> Category Setup and Select category in Blog category to show posts in Blog Section.','wp-generic'),
            'priority'      =>  50,
            'panel'         =>  'wp_generic_homepage'        
            )
        );

        $wp_customize->add_setting(
            'wp_generic_homepage_blog_option',
            array(
                'default'           =>  0,
                'sanitize_callback' =>  'wp_generic_sanitize_switch',
                )
            );

        $wp_customize->add_control(
        	new WP_Generic_WP_Customize_Switch_Control(
	        	$wp_customize,
                'wp_generic_homepage_blog_option',
                array(
                    'label'   =>  esc_html__('Enable Section','wp-generic'),
                    'section'       =>  'wp_generic_homepage_blog',
                    'setting'       =>  'wp_generic_homepage_blog_option',
                    'priority'      =>  10,
                    'type'          =>  'switch',
                    )
                )                   
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_blog_page',
            array(
                'default'           =>  '0',
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_blog_page',
            array(
                'priority'=>    25,
                'label'   =>    esc_html__('Select Page','wp-generic'),
                'description' => esc_html__('Choose page to display section title and description in blog section.','wp-generic'),
                'section' =>    'wp_generic_homepage_blog',
                'setting' =>    'wp_generic_homepage_blog_page',
                'type'    =>    'dropdown-pages',
                )                                     
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_blog_post_num',
            array(
                'default'           =>  '3',
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_blog_post_num',
            array(
                'priority'      =>  30,
                'label'         =>  esc_html__('Total Post','wp-generic'),
                'section'       =>  'wp_generic_homepage_blog',
                'setting'       =>  'wp_generic_homepage_blog_post_num',
                'type'          =>  'number',  
                )                                     
            );


        $wp_customize->add_setting(
            'wp_generic_homepage_blog_readmore',
            array(
                'default'           =>  esc_html__('Read More','wp-generic'),
                'sanitize_callback' =>  'sanitize_text_field',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_blog_readmore',
            array(
                'priority'=>    80,
                'label'   =>    esc_html__('Readmore Button','wp-generic'),
                'section' =>    'wp_generic_homepage_blog',
                'setting' =>    'wp_generic_homepage_blog_readmore',
                'type'    =>    'text',         
                )                                     
            );

        
    //////////////////////////////////////////////////////////////////////////////////////////////
    //Add CTA section and their controls
    /////////////////////////////////////////////////////////////////////////////////////////////

    $wp_customize->add_section(
        'wp_generic_homepage_cta',
        array(
            'title'         =>  esc_html__('Call To Action Section','wp-generic'),
            'priority'      =>  60,
            'panel'         =>  'wp_generic_homepage'        
            )
        );

        $wp_customize->add_setting(
            'wp_generic_homepage_cta_option',
            array(
                'default'           =>  0,
                'sanitize_callback' =>  'wp_generic_sanitize_switch',
                )
            );

        $wp_customize->add_control(
        	new WP_Generic_WP_Customize_Switch_Control(
	        	$wp_customize,
                'wp_generic_homepage_cta_option',
                array(
                    'label'   =>  esc_html__('Enable Section','wp-generic'),
                    'section'       =>  'wp_generic_homepage_cta',
                    'setting'       =>  'wp_generic_homepage_cta_option',
                    'priority'      =>  10,
                    'type'          =>  'switch',
                    )
                )                   
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_cta_page',
            array(
                'default'           =>  '0',
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_cta_page',
            array(
                'priority'=>    25,
                'label'   =>    esc_html__('Select Page','wp-generic'),
                'description' => esc_html__('Choose page to display section title and description in cta section.','wp-generic'),
                'section' =>    'wp_generic_homepage_cta',
                'setting' =>    'wp_generic_homepage_cta_page',
                'type'    =>    'dropdown-pages',
                )                                     
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_cta_readmore',
            array(
                'default'           =>  esc_html__('Contact Us','wp-generic'),
                'sanitize_callback' =>  'sanitize_text_field',
                'transport'         =>  'postMessage',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_cta_readmore',
            array(
                'priority'=>    80,
                'label'   =>    esc_html__('Readmore Button','wp-generic'),
                'section' =>    'wp_generic_homepage_cta',
                'setting' =>    'wp_generic_homepage_cta_readmore',
                'type'    =>    'text',         
                )                                     
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_cta_readmore_link',
            array(
                'default'           =>  '#',
                'sanitize_callback' =>  'sanitize_text_field',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_cta_readmore_link',
            array(
                'priority'=>    80,
                'label'   =>    esc_html__('Readmore Button Link','wp-generic'),
                'section' =>    'wp_generic_homepage_cta',
                'setting' =>    'wp_generic_homepage_cta_readmore_link',
                'type'    =>    'text',         
                )                                     
            );


        
    //////////////////////////////////////////////////////////////////////////////////////////////
    //Add Pricing section and their controls
    /////////////////////////////////////////////////////////////////////////////////////////////

    $wp_customize->add_section(
        'wp_generic_homepage_pricing',
        array(
            'title'         =>  esc_html__('Pricing Section','wp-generic'),
            'description'   =>  esc_html__('Settings of the Pricing Section. Go to Dashboard -> Appearance -> Widgets -> add pricing widgets.','wp-generic'),
            'priority'      =>  70,
            'panel'         =>  'wp_generic_homepage'        
            )
        );

        $wp_customize->add_setting(
            'wp_generic_homepage_pricing_option',
            array(
                'default'           =>  0,
                'sanitize_callback' =>  'wp_generic_sanitize_switch',
                )
            );

        $wp_customize->add_control(
        	new WP_Generic_WP_Customize_Switch_Control(
	        	$wp_customize,
                'wp_generic_homepage_pricing_option',
                array(
                    'label'   =>  esc_html__('Enable Section','wp-generic'),
                    'section'       =>  'wp_generic_homepage_pricing',
                    'setting'       =>  'wp_generic_homepage_pricing_option',
                    'priority'      =>  10,
                    'type'          =>  'switch',
                    )
                )                   
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_pricing_page',
            array(
                'default'           =>  '0',
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_pricing_page',
            array(
                'priority'=>    25,
                'label'   =>    esc_html__('Select Page','wp-generic'),
                'description' => esc_html__('Choose page to display section title and description in pricing section.','wp-generic'),
                'section' =>    'wp_generic_homepage_pricing',
                'setting' =>    'wp_generic_homepage_pricing_page',
                'type'    =>    'dropdown-pages',
                )                                     
            );
        
    //////////////////////////////////////////////////////////////////////////////////////////////
    //Add Testimonial section and their controls
    /////////////////////////////////////////////////////////////////////////////////////////////

    $wp_customize->add_section(
        'wp_generic_homepage_testimonial',
        array(
            'title'         =>  esc_html__('Testimonial Section','wp-generic'),
            'description'   =>  esc_html__('Setup Testimonial Section. Go to Theme Setup -> Category Setup and Select category in Testimonial category to show posts in Testimonial Section.','wp-generic'),
            'priority'      =>  80,
            'panel'         =>  'wp_generic_homepage'        
            )
        );

        $wp_customize->add_setting(
            'wp_generic_homepage_testimonial_option',
            array(
                'default'           =>  0,
                'sanitize_callback' =>  'wp_generic_sanitize_switch',
                )
            );

        $wp_customize->add_control(
        	new WP_Generic_WP_Customize_Switch_Control(
	        	$wp_customize,
                'wp_generic_homepage_testimonial_option',
                array(
                    'label'   =>  esc_html__('Enable Section','wp-generic'),
                    'section'       =>  'wp_generic_homepage_testimonial',
                    'setting'       =>  'wp_generic_homepage_testimonial_option',
                    'priority'      =>  10,
                    'type'          =>  'switch',
                    )
                )                   
            );

        $wp_customize->add_setting(
            'wp_generic_homepage_testimonial_page',
            array(
                'default'           =>  '0',
                'sanitize_callback' =>  'wp_generic_sanitize_integer',
                )
            );

        $wp_customize->add_control(
            'wp_generic_homepage_testimonial_page',
            array(
                'priority'=>    25,
                'label'   =>    esc_html__('Select Page','wp-generic'),
                'description' => esc_html__('Choose page to display section title and description in testimonial section.','wp-generic'),
                'section' =>    'wp_generic_homepage_testimonial',
                'setting' =>    'wp_generic_homepage_testimonial_page',
                'type'    =>    'dropdown-pages',
                )                                     
            );


    //////////////////////////////////////////////////////////////////////
    /////////////////Add Client section and their controls////////////////
    //////////////////////////////////////////////////////////////////////

    $wp_customize->add_section(
        'wp_generic_homepage_client',
        array(
            'title'         =>  esc_html__( 'Client Section','wp-generic' ),
            'description'   =>  esc_html__( 'Settings of the Client Section. Go to Theme Setup -> Category Setup and Select category in Client category to show posts in Client Section.','wp-generic' ),
            'priority'      =>  90,
            'panel'         =>  'wp_generic_homepage'        
            )
        );

        $wp_customize->add_setting(
            'wp_generic_homepage_client_option',
            array(
                'default'           =>  0,
                'sanitize_callback' =>  'wp_generic_sanitize_switch',
                )
            );

        $wp_customize->add_control(
            new WP_Generic_WP_Customize_Switch_Control(
                $wp_customize,
                'wp_generic_homepage_client_option',
                array(
                    'label'   =>  esc_html__( 'Enable Section','wp-generic' ),
                    'section'       =>  'wp_generic_homepage_client',
                    'setting'       =>  'wp_generic_homepage_client_option',
                    'priority'      =>  10,
                    'type'          =>  'switch',
                    )
                )                   
            );