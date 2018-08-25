<?php
/**
 * 
 *
 * @package WP_Generic
 */
/**
 * Adds WP_Generic Progress Bar Widgets.
 */
add_action('widgets_init', 'wp_generic_register_progress_bar_widget');

function wp_generic_register_progress_bar_widget() {
    register_widget('wp_generic_progress_bar');
}

class WP_Generic_Progress_Bar extends WP_Widget {

    /**
     * Register widget with WordPress.
     */
    public function __construct() {
        parent::__construct(
        'wp_generic_progress_bar', 'WP_Generic : Progress Bar', array(
        'description' => esc_html__('A widget that shows Progress bar', 'wp-generic')
            )
        );
    }

    /**
     * Helper function that holds widget fields
     * Array is used in update and form functions
     */
    private function widget_fields() {
        $fields = array(
            // This widget has no title
            // Other fields
            'progress_bar_percentage' => array(
                'wp_generic_widgets_name' => 'progress_bar_percentage',
                'wp_generic_widgets_title' => esc_html__('Progress Bar Percentage', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'number',
            ),
            'progress_bar_title' => array(
                'wp_generic_widgets_name' => 'progress_bar_title',
                'wp_generic_widgets_title' => esc_html__('Progress Bar Title', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            )
        );

        return $fields;
    }

    /**
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget($args , $instance) {
        extract($args);
        if($instance!= null) {
           $progress_bar_percentage = $instance['progress_bar_percentage'];
           $progress_bar_title = $instance['progress_bar_title'];
        }
        echo wp_kses_post($before_widget);
        if(isset($progress_bar_title) || isset($progress_bar_percentage)):
        ?>

            <div class="ed-progress-bar-wrap">
                <h5><?php echo esc_html($progress_bar_title); ?></h5>
                <?php if (isset($progress_bar_percentage)): ?>
                    <div class="ed-progress-bar">
                        <span class="ed-progress-bar-percentage" data-value="<?php echo esc_attr($progress_bar_percentage); ?>">
                            <i class="widget-percent"><?php echo intval($progress_bar_percentage); ?>%</i>
                        </span>
                    </div>
                <?php endif; ?>
            </div>
        <?php
        endif;
        echo wp_kses_post($after_widget);
        }

        /**
         * Sanitize widget form values as they are saved.
         *
         * @see WP_Widget::update()
         *
         * @param	array	$new_instance	Values just sent to be saved.
         * @param	array	$old_instance	Previously saved values from database.
         *
         * @uses	wp_generic_widgets_updated_field_value()		defined widgets-functions.php
         *
         * @return	array Updated safe values to be saved.
         */
        public function update($new_instance, $old_instance) {
            $instance = $old_instance;

            $widget_fields = $this->widget_fields();

            // Loop through fields
            foreach ($widget_fields as $widget_field) {

                extract($widget_field);

                // Use helper function to get updated field values
                $instance[$wp_generic_widgets_name] = wp_generic_widgets_updated_field_value($widget_field, $new_instance[$wp_generic_widgets_name]);
            }

            return $instance;
        }

        /**
         * Back-end widget form.
         *
         * @see WP_Widget::form()
         *
         * @param	array $instance Previously saved values from database.
         *
         * @uses	wp_generic_widgets_show_widget_field()		defined widgets-functions.php
         */
        public function form($instance) {
            $widget_fields = $this->widget_fields();

            // Loop through fields
            foreach ($widget_fields as $widget_field) {

                // Make array elements available as variables
                extract($widget_field);
                $wp_generic_widgets_field_value = isset($instance[$wp_generic_widgets_name]) ? esc_attr($instance[$wp_generic_widgets_name]) : '';
                wp_generic_widgets_show_widget_field($this, $widget_field, $wp_generic_widgets_field_value);
            }
        }

    }
    