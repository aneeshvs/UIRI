<?php
/**
 * Plugin Name: Stackable - Ultimate Gutenberg Blocks
 * Plugin URI: http://wordpress.org/plugins/stackable
 * Description: Essential Gutenberg blocks in one plugin. Simple, flexible, and customizable.
 * Author: Gambit Technologies, Inc
 * Author URI: http://gambit.ph
 * Version: 0.5
 *
 * @package Stackable
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once( plugin_dir_path( __FILE__ ) . 'src/init.php' );
require_once( plugin_dir_path( __FILE__ ) . 'freemius.php' );
