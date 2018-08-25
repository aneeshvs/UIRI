<?php
if ( ! class_exists( 'WP_Customize_Control' ) )
    return NULL;

/**
 * Class to create a custom menu control
 */
class WP_Generic_WP_Customize_Menu_Dropdown extends WP_Customize_Control
{
    private $menus = false;

    public function __construct($manager, $id, $args = array(), $options = array())
    {
        $this->menus = wp_get_nav_menus($options);

        parent::__construct( $manager, $id, $args );
    }

    /**
     * Render the content on the theme customizer page
    */
    public function render_content()
    {
        ?>
            <label>
                <span class="customize-menu-dropdown"><h3><?php echo esc_html( $this->label ); ?></h3></span>
                <select data-customize-setting-link="<?php echo esc_attr($this->id); ?>" name="<?php echo esc_attr($this->id); ?>" id="<?php echo esc_attr($this->id); ?>">
                    <?php echo '<option value = "0" selected = "selected">'.esc_html__('Select Menu','wp-generic').'</option>' ?>
                <?php
                     if(!empty($this->menus))
                     {   
                        foreach ( $this->menus as $menu )
                        {
                            printf('<option value="%s" %s>%s</option>', esc_attr($menu->term_id), selected($this->value(), $menu->term_id, false), esc_html($menu->name));
                        }
                     }
                ?>
                </select>
                <br />
                <span class="description"><?php echo esc_html($this->description); ?></span>
            </label>
            <?php
    }
}

