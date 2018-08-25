<?php
    /**
     * SANITIZATION
     */
         
    function wp_generic_sanitize_textarea($input){
        return sanitize_textarea_field( force_balance_tags( $input ) );
    }
    
    function wp_generic_sanitize_url($input){
        return esc_url_raw($input);
    }
    
    function wp_generic_sanitize_checkbox($input){
        if($input == 1){
            return 1;
        }else{
            return '';
        }
    }
    
    function wp_generic_sanitize_category_select($input){
        $wp_generic_category_lists = wp_generic_category_lists();
        if(array_key_exists($input,$wp_generic_category_lists)){
            return $input;
        }else{
            return '';
        }
    }

    function wp_generic_sanitize_alignment($input){
        $bg_repeat = array(
            'left' => esc_html__('Left', 'wp-generic'),
            'center' => esc_html__('Center', 'wp-generic'),
            'right' => esc_html__('Right', 'wp-generic'),
        );
        
        if(array_key_exists($input,$bg_repeat)){
            return $input;
        }else{
            return '';
        }
    }

    function wp_generic_sanitize_weblayout($input){
            $bg_repeat = array(
                'fullwidth' => esc_html('Fullwidth Layout', 'wp-generic'),
                'boxed'     => esc_html('Boxed Layout', 'wp-generic')
            );
            
            if(array_key_exists($input,$bg_repeat)){
                return $input;
            }else{
                return '';
            }
        }

    function wp_generic_sanitize_sidebar($input){
        $bg_repeat = array(
            'left-sidebar' =>  esc_html__('Left Sidebar','wp-generic'),
            'right-sidebar' =>  esc_html__('Right Sidebar','wp-generic'),
            'both-sidebar' =>  esc_html__('Both Sidebar','wp-generic'),
            'no-sidebar' =>  esc_html__('No Sidebar','wp-generic'),
        );
        
        if(array_key_exists($input,$bg_repeat)){
            return $input;
        }else{
            return '';
        }
    }

    function wp_generic_sanitize_blog_layout($input){
        $bg_repeat = array(
            'large-image' => esc_html__('Posts with Large Image', 'wp-generic'),
            'medium-image' => esc_html__('Posts with Medium Image', 'wp-generic'),
            'alternate-image' => esc_html__('Post with Alternate Image', 'wp-generic'),
        );
        
        if(array_key_exists($input,$bg_repeat)){
            return $input;
        }else{
            return '';
        }
    }

    function wp_generic_sanitize_grid($input){
        $bg_repeat = array(
            2 => esc_html__('2 Columns', 'wp-generic'),
            3 => esc_html__('3 Columns', 'wp-generic'),
            4 => esc_html__('4 Columns', 'wp-generic'),
        );
        
        if(array_key_exists($input,$bg_repeat)){
            return $input;
        }else{
            return '';
        }
    }

    function wp_generic_sanitize_content_type($input){
        $bg_repeat = array(
            'hover' => esc_html__('On Hover ', 'wp-generic'),
            'below' => esc_html__('Below Content', 'wp-generic'),
        );
        
        if(array_key_exists($input,$bg_repeat)){
            return $input;
        }else{
            return '';
        }
    }
    
    function wp_generic_sanitize_content($input){
        $bg_repeat = array(
            'custom-excerpt' => esc_html__('Custom Excerpt', 'wp-generic'),
            'default-excerpt' => esc_html__('Default Excerpt', 'wp-generic'),
            'full-content' => esc_html__('Full Content', 'wp-generic'),
        );
        
        if(array_key_exists($input,$bg_repeat)){
            return $input;
        }else{
            return '';
        }
    }

    function wp_generic_sanitize_switch($input){
        if($input == 1){
            return 1;
        }else{
            return '';
        }
    }
    function wp_generic_radio_sanitize_transition($input){
        $option = array(
            'fade' => esc_html__('Fade', 'wp-generic'),
            'horizontal' => esc_html__('Slide Horizontal', 'wp-generic'),
            'vertical' => esc_html__('Slide Vertical', 'wp-generic'),
            );
        if(array_key_exists($input, $option)){
            return $input;
        }
        else
            return '';
    }

    function wp_generic_sanitize_list_grid($input){
        $option = array(
                'grid'      => esc_html__('Grid View','wp-generic'),
                'list'  => esc_html__('List view','wp-generic'),

            );
        if(array_key_exists($input, $option)){
            return $input;
        }
        else
            return '';
    }

    function wp_generic_sanitize_header_type($input){
        $option = array(
                'transparent'=>__('Transparent', 'wp-generic'),
                'classic'=>__('Classic', 'wp-generic'),
            );
        if(array_key_exists($input, $option)){
            return $input;
        }
        else
            return '';
    }

    function wp_generic_sanitize_integer($input){
        return intval($input);
    }

    
?>