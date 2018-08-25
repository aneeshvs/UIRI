<?php 

// Add Innerpage setting Panel
$wp_customize->add_panel(
'wp_generic_innerpage',array(
    'priority'      => 50,
    'capability'    =>  'edit_theme_options',
    'description'   =>  esc_html__( 'Innerpage Settings of the theme','wp-generic' ),
    'theme_supports'=>  '',
    'title'         =>  esc_html__( 'Innerpage Settings','wp-generic' ),
    )
);


    // Blog Page Setting
    $wp_customize->add_section(
        'wp_generic_innerpage_blog',
        array(
            'title'         =>  esc_html__('Blog Page Setting','wp-generic'),
            'description'   =>  esc_html__( 'Setup Blog Page of the theme. Before setup Go to Apperance-> Customize -> Theme Setup -> Category setup and choose blog category.','wp-generic' ),
            'capability'    =>  'edit_theme_options',
            'priority'      =>  10,            
            'panel'         =>  'wp_generic_innerpage',
            )
        );

        $wp_customize->add_setting(
            'wp_generic_innerpage_blog_layout',
            array(
                'default'=>'right-sidebar',
                'sanitize_callback' => 'wp_generic_sanitize_sidebar'                
                )
            );

        $wp_customize->add_control(
            'wp_generic_innerpage_blog_layout',
            array(
                'type' => 'radio',
                'label' => esc_html__('Page Layout', 'wp-generic'),
                'description' => esc_html__('Choose layout for Blog page', 'wp-generic'),
                'section' => 'wp_generic_innerpage_blog',
                'choices' => array(
                    'left-sidebar' =>  esc_html__('Left Sidebar','wp-generic'),
                    'right-sidebar' =>  esc_html__('Right Sidebar','wp-generic'),
                    'both-sidebar' =>  esc_html__('Both Sidebar','wp-generic'),
                    'no-sidebar' =>  esc_html__('No Sidebar','wp-generic'),
                    )
                )
            );

        $wp_customize->add_setting(
            'wp_generic_innerpage_blog_post_layout',
            array(
                'default'           =>  'large-image',
                'sanitize_callback' =>  'wp_generic_sanitize_blog_layout',
                )
            );

        $wp_customize->add_control(
            'wp_generic_innerpage_blog_post_layout',
            array(
                'priority'      =>  10,  
                'type'          =>  'radio',
                'label'         =>  esc_html__('Post Layout','wp-generic'),
                'description'   =>  esc_html__('Choose Blog Post Layout','wp-generic'),
                'section'       =>  'wp_generic_innerpage_blog',
                'choices'        =>  array(
                    'large-image' => esc_html__('Posts with Large Image', 'wp-generic'),
                    'grid' => esc_html__('Posts with Grid View', 'wp-generic'),
                    )    
                )               
            );

        $wp_customize->add_setting(
            'wp_generic_innerpage_blog_readmore',
            array(
                'default'           =>  esc_html__('Read More','wp-generic'),
                'sanitize_callback' =>  'sanitize_text_field',
                )
            );

        $wp_customize->add_control(
            'wp_generic_innerpage_blog_readmore',
            array(
                'priority'      =>  20,
                'label'         =>  esc_html__('Read more text','wp-generic'),
                'section'       =>  'wp_generic_innerpage_blog',
                'setting'       =>  'wp_generic_innerpage_blog_readmore',
                'type'          =>  'text',  
                )                                     
            );
    
    // Portfolio Page Setting
    $wp_customize->add_section(
        'wp_generic_innerpage_portfolio',
        array(
            'title'         =>  esc_html__('Portfolio Page Setting','wp-generic'),
            'capability'    =>  'edit_theme_options',
            'priority'      =>  10,            
            'panel'         =>  'wp_generic_innerpage',
            )
        );

        $wp_customize->add_setting(
         'wp_generic_innerpage_portfolio_layout',
         array(
             'default'=>'right-sidebar',
             'sanitize_callback' => 'wp_generic_sanitize_sidebar'                
             )
         );

        $wp_customize->add_control(
         'wp_generic_innerpage_portfolio_layout',
         array(
             'type' => 'radio',
             'label' => esc_html__('Page Layout', 'wp-generic'),
             'description' => esc_html__('Choose layout for Portfolio page', 'wp-generic'),
             'section' => 'wp_generic_innerpage_portfolio',
             'choices' => array(
                     'left-sidebar' =>  esc_html__('Left Sidebar','wp-generic'),
                     'right-sidebar' =>  esc_html__('Right Sidebar','wp-generic'),
                     'both-sidebar' =>  esc_html__('Both Sidebar','wp-generic'),
                     'no-sidebar' =>  esc_html__('No Sidebar','wp-generic'),
                     )
             )
         );

    //Archive Pages
    $wp_customize->add_section(
        'wp_generic_innerpage_archive',
        array(
            'title' => esc_html__('Archive Pages Settings', 'wp-generic'),
            'priority' => '60',
            'panel' => 'wp_generic_innerpage'
            )
        );


        //archive pages layout
        $wp_customize->add_setting(
            'wp_generic_innerpage_archive_layout',
            array(
                'default' => 'right-sidebar',
                'sanitize_callback' => 'wp_generic_sanitize_sidebar'
                )
            );
        
        $wp_customize->add_control(
            'wp_generic_innerpage_archive_layout',array(
                'type' => 'radio',
                'label' => esc_html__('Archive Page Layout', 'wp-generic'),
                'description' => esc_html__('Choose layout for archive pages landing webpage', 'wp-generic'),
                'section' => 'wp_generic_innerpage_archive',
                'choices' => array(
                    'left-sidebar' =>  esc_html__('Left Sidebar','wp-generic'),
                    'right-sidebar' =>  esc_html__('Right Sidebar','wp-generic'),
                    'both-sidebar' =>  esc_html__('Both Sidebar','wp-generic'),
                    'no-sidebar' =>  esc_html__('No Sidebar','wp-generic'),
                    )

                )
            );

        $wp_customize->add_setting(
            'wp_generic_innerpage_archive_post_layout',
            array(
                'default'           =>  'large-image',
                'sanitize_callback' =>  'wp_generic_sanitize_blog_layout',
                )
            );

        $wp_customize->add_control(
            'wp_generic_innerpage_archive_post_layout',
            array(
                'priority'      =>  10,  
                'type'          =>  'radio',
                'label'         =>  esc_html__('Post Layout','wp-generic'),
                'description'   =>  esc_html__('Choose Archive Post Layout','wp-generic'),
                'section'       =>  'wp_generic_innerpage_archive',
                'choices'        =>  array(
                    'large-image' => esc_html__('Posts with Large Image', 'wp-generic'),
                    'grid' => esc_html__('Posts with Grid View', 'wp-generic'),
                    )
                )                   
            );

        $wp_customize->add_setting(
            'wp_generic_innerpage_archive_readmore',
            array(
                'default'           =>  esc_html__('Read More','wp-generic'),
                'sanitize_callback' =>  'sanitize_text_field',
                )
            );

        $wp_customize->add_control(
            'wp_generic_innerpage_archive_readmore',
            array(
                'label'         =>  esc_html__('Read more text','wp-generic'),
                'section'       =>  'wp_generic_innerpage_archive',
                'setting'       =>  'wp_generic_innerpage_archive_readmore',
                'type'          =>  'text',  
                )                                     
            );

    //Team Page
    $wp_customize->add_section(
        'wp_generic_innerpage_team',
        array(
            'title' => esc_html__('Team Page Settings', 'wp-generic'),
            'priority' => '40',
            'panel' => 'wp_generic_innerpage'
            )
        );


        //team pages layout
        $wp_customize->add_setting(
            'wp_generic_innerpage_team_layout',
            array(
                'default' => 'right-sidebar',
                'sanitize_callback' => 'wp_generic_sanitize_sidebar'
                )
            );
        
        $wp_customize->add_control(
            'wp_generic_innerpage_team_layout',
            array(
                'type' => 'radio',
                'label' => esc_html__('Team Page Layout', 'wp-generic'),
                'description' => esc_html__('Choose layout for team pages landing webpage', 'wp-generic'),
                'section' => 'wp_generic_innerpage_team',
                'choices' => array(
                    'left-sidebar' =>  esc_html__('Left Sidebar','wp-generic'),
                    'right-sidebar' =>  esc_html__('Right Sidebar','wp-generic'),
                    'both-sidebar' =>  esc_html__('Both Sidebar','wp-generic'),
                    'no-sidebar' =>  esc_html__('No Sidebar','wp-generic'),
                    )

                )
            );

        $wp_customize->add_setting(
            'wp_generic_innerpage_team_post_layout',
            array(
                'default'           =>  'list',
                'sanitize_callback' =>  'wp_generic_sanitize_list_grid',
                )
            );

        $wp_customize->add_control(
            'wp_generic_innerpage_team_post_layout',
            array(
                'priority'      =>  10,  
                'type'          =>  'radio',
                'label'         =>  esc_html__('Post Layout','wp-generic'),
                'description'   =>  esc_html__('Choose Team Post Layout','wp-generic'),
                'section'       =>  'wp_generic_innerpage_team',
                'choices'        =>  array(
                    'list' => esc_html__('List View', 'wp-generic'),
                    'grid' => esc_html__('Grid View', 'wp-generic'),                      
                    )
                )                   
            );


        $wp_customize->add_setting(
            'wp_generic_innerpage_team_readmore',
            array(
                'default'           =>  esc_html__('Read More','wp-generic'),
                'sanitize_callback' =>  'sanitize_text_field',
                )
            );

        $wp_customize->add_control(
            'wp_generic_innerpage_team_readmore',
            array(
                'label'         =>  esc_html__('Read more text','wp-generic'),
                'section'       =>  'wp_generic_innerpage_team',
                'setting'       =>  'wp_generic_innerpage_team_readmore',
                'type'          =>  'text',  
                )                                     
            );

    //Testimonial Page
    $wp_customize->add_section(
        'wp_generic_innerpage_testimonial',
        array(
            'title' => esc_html__('Testimonial Page Settings', 'wp-generic'),
            'priority' => '50',
            'panel' => 'wp_generic_innerpage'
            )
        );


        //testimonial pages layout
        $wp_customize->add_setting(
            'wp_generic_innerpage_testimonial_layout',
            array(
                'default' => 'right-sidebar',
                'sanitize_callback' => 'wp_generic_sanitize_sidebar'
                )
            );
        
        $wp_customize->add_control(
            'wp_generic_innerpage_testimonial_layout',
            array(
                'type' => 'radio',
                'label' => esc_html__('Testimonial Page Layout', 'wp-generic'),
                'description' => esc_html__('Choose layout for testimonial pages landing webpage', 'wp-generic'),
                'section' => 'wp_generic_innerpage_testimonial',
                'choices' => array(
                    'left-sidebar' =>  esc_html__('Left Sidebar','wp-generic'),
                    'right-sidebar' =>  esc_html__('Right Sidebar','wp-generic'),
                    'both-sidebar' =>  esc_html__('Both Sidebar','wp-generic'),
                    'no-sidebar' =>  esc_html__('No Sidebar','wp-generic'),
                    )
                )
            );

        $wp_customize->add_setting(
            'wp_generic_innerpage_testimonial_post_layout',
            array(
                'default'           =>  'list',
                'sanitize_callback' =>  'wp_generic_sanitize_list_grid',
                )
            );

        $wp_customize->add_control(
            'wp_generic_innerpage_testimonial_post_layout',
            array(
                'priority'      =>  10,  
                'type'          =>  'radio',
                'label'         =>  esc_html__('Post Layout','wp-generic'),
                'description'   =>  esc_html__('Choose Testimonial Post Layout','wp-generic'),
                'section'       =>  'wp_generic_innerpage_testimonial',
                'choices'        =>  array(
                    'list' => esc_html__('List View', 'wp-generic'),
                    'grid' => esc_html__('Grid View', 'wp-generic'),                      
                    )
                )                   
            );