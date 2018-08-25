<?php
/**
 * 
 * @Package WP_Generic
 * Upload field in widgets
 * 
 */ 
 

function wp_generic_widgets_updated_field_value($widget_field, $new_field_value) {

    extract($widget_field);

    // Allow only integers in number fields
    if ($wp_generic_widgets_field_type == 'number') {
        return absint($new_field_value);

        // Allow some tags in textareas
    } elseif ($wp_generic_widgets_field_type == 'textarea') {
        // Check if field array specifed allowed tags
        if (!isset($wp_generic_widgets_allowed_tags)) {
            // If not, fallback to default tags
            $wp_generic_widgets_allowed_tags = '<p><strong><em><a><li>';
        }
        return strip_tags($new_field_value, $wp_generic_widgets_allowed_tags);

        // No allowed tags for all other fields
    } elseif ($wp_generic_widgets_field_type == 'url') {
        return esc_url_raw($new_field_value);
    } else {
        return strip_tags($new_field_value);
    }
}

function wp_generic_widgets_show_widget_field($instance = '', $widget_field = '', $athm_field_value = '') {
   

    extract($widget_field);

    switch ($wp_generic_widgets_field_type) {

        // Standard text field
        case 'text' :
            ?>
            <p>
                <label for="<?php echo esc_attr($instance->get_field_id($wp_generic_widgets_name)); ?>"><?php echo esc_html($wp_generic_widgets_title); ?>:</label>
                <input class="widefat" id="<?php echo esc_attr($instance->get_field_id($wp_generic_widgets_name)); ?>" name="<?php echo esc_attr($instance->get_field_name($wp_generic_widgets_name)); ?>" type="text" value="<?php echo esc_attr($athm_field_value); ?>" />

                <?php if (isset($wp_generic_widgets_description)) { ?>
                    <br />
                    <small><?php echo esc_html($wp_generic_widgets_description); ?></small>
                <?php } ?>
            </p>
            <?php
            break;

        // Textarea field
        case 'textarea' :
            ?>
            <p>
                <label for="<?php echo esc_attr($instance->get_field_id($wp_generic_widgets_name)); ?>"><?php echo esc_html($wp_generic_widgets_title); ?>:</label>
                <textarea class="widefat" rows="<?php echo esc_attr($wp_generic_widgets_row); ?>" id="<?php echo esc_attr($instance->get_field_id($wp_generic_widgets_name)); ?>" name="<?php echo esc_attr($instance->get_field_name($wp_generic_widgets_name)); ?>"><?php echo esc_textarea($athm_field_value); ?></textarea>
            </p>
            <?php if (isset($wp_generic_widgets_description)) { ?>
                    <small><?php echo esc_html($wp_generic_widgets_description); ?></small>
            <?php } ?>
            <?php
            break;

        case 'number' :
            ?>
            <p>
                <label for="<?php echo esc_attr($instance->get_field_id($wp_generic_widgets_name)); ?>"><?php echo esc_html($wp_generic_widgets_title); ?>:</label><br />
                <input name="<?php echo esc_attr($instance->get_field_name($wp_generic_widgets_name)); ?>" type="number" step="1" min="1" id="<?php echo esc_attr($instance->get_field_id($wp_generic_widgets_name)); ?>" value="<?php echo esc_attr($athm_field_value); ?>" class="small-text" />

                <?php if (isset($wp_generic_widgets_description)) { ?>
                    <br />
                    <small><?php echo esc_html($wp_generic_widgets_description); ?></small>
                <?php } ?>
            </p>
            <?php
            break;
        
        // Standard url field
        case 'url' :
            ?>
            <p>
                <label for="<?php echo $instance->get_field_id($wp_generic_widgets_name); ?>"><?php echo $wp_generic_widgets_title; ?>:</label>
                <input class="widefat" id="<?php echo $instance->get_field_id($wp_generic_widgets_name); ?>" name="<?php echo $instance->get_field_name($wp_generic_widgets_name); ?>" type="text" value="<?php echo $athm_field_value; ?>" />

                <?php if (isset($wp_generic_widgets_description)) { ?>
                    <br />
                    <small><?php echo $wp_generic_widgets_description; ?></small>
                <?php } ?>
            </p>
            <?php
            break;
    }
}