<?php
/**
 * Pricing widget
 *
 * @package WP_Generic
 */
/**
 * Adds eight-sec pro Priceing Widgets.
 */
add_action('widgets_init', 'register_pricing_widget');

function register_pricing_widget() {
    register_widget('wp_generic_pricing');
}

class wp_generic_Pricing extends WP_Widget {

    /**
     * Register widget with WordPress.
     */
    public function __construct() {
        parent::__construct(
        'wp_generic_pricing', 'WP_Generic : Pricing Table', array(
        'description' => esc_html__('A widget that shows Pricing Table', 'wp-generic')
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
            'pricing_plan' => array(
                'wp_generic_widgets_name' => 'pricing_plan',
                'wp_generic_widgets_title' => esc_html__('Plan Name', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_plan_tag_text' => array(
                'wp_generic_widgets_name' => 'pricing_plan_tag_text',
                'wp_generic_widgets_title' => esc_html__('Pricing Tag', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_currency' => array(
                'wp_generic_widgets_name' => 'pricing_currency',
                'wp_generic_widgets_title' => esc_html__('Currency Symbol', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_price' => array(
                'wp_generic_widgets_name' => 'pricing_price',
                'wp_generic_widgets_title' => esc_html__('Price', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_price_per' => array(
                'wp_generic_widgets_name' => 'pricing_price_per',
                'wp_generic_widgets_title' => esc_html__('Price Per', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_feature1' => array(
                'wp_generic_widgets_name' => 'pricing_feature1',
                'wp_generic_widgets_title' => esc_html__('Feature 1', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_feature2' => array(
                'wp_generic_widgets_name' => 'pricing_feature2',
                'wp_generic_widgets_title' => esc_html__('Feature 2', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_feature3' => array(
                'wp_generic_widgets_name' => 'pricing_feature3',
                'wp_generic_widgets_title' => esc_html__('Feature 3', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_feature4' => array(
                'wp_generic_widgets_name' => 'pricing_feature4',
                'wp_generic_widgets_title' => esc_html__('Feature 4', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_feature5' => array(
                'wp_generic_widgets_name' => 'pricing_feature5',
                'wp_generic_widgets_title' => esc_html__('Feature 5', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_feature6' => array(
                'wp_generic_widgets_name' => 'pricing_feature6',
                'wp_generic_widgets_title' => esc_html__('Feature 6', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_feature7' => array(
                'wp_generic_widgets_name' => 'pricing_feature7',
                'wp_generic_widgets_title' => esc_html__('Feature7', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_feature8' => array(
                'wp_generic_widgets_name' => 'pricing_feature8',
                'wp_generic_widgets_title' => esc_html__('Feature 8', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_button_text' => array(
                'wp_generic_widgets_name' => 'pricing_button_text',
                'wp_generic_widgets_title' => esc_html__('Button Text', 'wp-generic'),
                'wp_generic_widgets_desc' => esc_html__('Leave Empty not to show', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'text',
            ),
            'pricing_button_link' => array(
                'wp_generic_widgets_name' => 'pricing_button_link',
                'wp_generic_widgets_title' => esc_html__('Button Link', 'wp-generic'),
                'wp_generic_widgets_field_type' => 'url',
            ),
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
    public function widget($args, $instance) {
        extract($args);
        if($instance != null):
            $pricing_plan = $instance['pricing_plan'];
            $pricing_plan_tag_text = $instance['pricing_plan_tag_text'];
            $pricing_currency = $instance['pricing_currency'];
            $pricing_price = $instance['pricing_price'];
            if(!empty($pricing_price)){
                list($whole, $decimal) = explode('.', $pricing_price);
            }else{
                $whole='0'; $decimal='0';
            }
            $pricing_price_per = $instance['pricing_price_per'];
            $pricing_feature1 = $instance['pricing_feature1'];
            $pricing_feature2 = $instance['pricing_feature2'];
            $pricing_feature3 = $instance['pricing_feature3'];
            $pricing_feature4 = $instance['pricing_feature4'];
            $pricing_feature5 = $instance['pricing_feature5'];
            $pricing_feature6 = $instance['pricing_feature6'];
            $pricing_feature7 = $instance['pricing_feature7'];
            $pricing_feature8 = $instance['pricing_feature8'];
            $pricing_button_text = $instance['pricing_button_text'];
            $pricing_button_link = $instance['pricing_button_link'];

            echo wp_kses_post($before_widget);
            ?>
            <div class="ed-pricing-table <?php if(!empty($pricing_plan_tag_text)) echo esc_attr("pricing-tag"); ?>">
                <?php if (!empty($pricing_plan_tag_text)): ?>
                    <div class="ed-pricing-plan-tag-text"><?php echo esc_html($pricing_plan_tag_text); ?></div>
                <?php endif; ?>
                <div class="ed-pricing-head">
                    <?php if (!empty($pricing_plan)): ?>
                            <?php echo wp_kses_post($before_title) . esc_html($pricing_plan) . wp_kses_post($after_title); ?>
                    <?php endif; ?>
                    <div class="ed-price-box">
                        <?php if (!empty($pricing_price)): ?>
                            <div class="ed-price">
                            <?php if (!empty($pricing_currency)): ?>
                                    <sup class="ed-currency"><?php echo esc_html($pricing_currency); ?></sup>
                            <?php endif; ?>
                                <span class="ed-amount"><?php echo intval($whole); ?>.<span class="amount-decimal"><?php echo esc_html($decimal);?></span></span>
                                <span class="ed-per"><?php echo esc_html($pricing_price_per); ?></span>
                            </div>                            
                        <?php endif; ?>
                    </div>
                </div>

                <div class="ed-pricing-features">
                    <ul class="ed-pricing-features-inner">
                        <?php if (!empty($pricing_feature1)): ?>
                            <li><?php echo esc_html($pricing_feature1); ?></li>
                        <?php endif; ?>
                        <?php if (!empty($pricing_feature2)): ?>
                            <li><?php echo esc_html($pricing_feature2); ?></li>
                        <?php endif; ?>
                        <?php if (!empty($pricing_feature3)): ?>
                            <li><?php echo esc_html($pricing_feature3); ?></li>
                        <?php endif; ?>
                        <?php if (!empty($pricing_feature4)): ?>
                            <li><?php echo esc_html($pricing_feature4); ?></li>
                        <?php endif; ?>
                        <?php if (!empty($pricing_feature5)): ?>
                            <li><?php echo esc_html($pricing_feature5); ?></li>
                        <?php endif; ?>
                        <?php if (!empty($pricing_feature6)): ?>
                            <li><?php echo esc_html($pricing_feature6); ?></li>
                        <?php endif; ?>
                        <?php if (!empty($pricing_feature7)): ?>
                            <li><?php echo esc_html($pricing_feature7); ?></li>
                        <?php endif; ?>
                        <?php if (!empty($pricing_feature8)): ?>
                            <li><?php echo esc_html($pricing_feature8); ?></li>
                        <?php endif; ?>
                    </ul>
                </div>

                <?php if (!empty($pricing_button_text)): ?>
                    <div class="ed-pricing-readmore"><a class="bttn" href="<?php echo esc_url($pricing_button_link); ?>"><?php echo esc_html($pricing_button_text); ?></a></div>
                <?php endif; ?>
            </div>
            <?php
            echo wp_kses_post($after_widget);
        endif;
        }

            /**
             * Sanitize widget form values as they are saved.
             *
             * @see WP_Widget::update()
             *
             * @param	array	$new_instance	Values just sent to be saved.
             * @param	array	$old_instance	Previously saved values from database.
             *
             * @uses	wp_generic_widgets_updated_field_value()		defined in widget-fields.php
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
             * @uses	wp_generic_widgets_show_widget_field()		defined in widget-fields.php
             */
            public function form($instance) {
                $widget_fields = $this->widget_fields();

                // Loop through fields
                foreach ($widget_fields as $widget_field) {

                    // Make array elements available as variables
                    extract($widget_field);
                    $wp_generic_widgets_field_value = !empty($instance[$wp_generic_widgets_name]) ? esc_attr($instance[$wp_generic_widgets_name]) : '';
                    wp_generic_widgets_show_widget_field($this, $widget_field, $wp_generic_widgets_field_value);
                }
            }

        }
        