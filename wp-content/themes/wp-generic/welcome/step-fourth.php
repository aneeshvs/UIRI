<?php
/**
 * Changelog
 */

$bloog_lite = wp_get_theme( 'wp-generic' );
?>
<div class="featured-section changelog">
<?php
	WP_Filesystem();
	global $wp_filesystem;
	$wp_genericchangelog       = $wp_filesystem->get_contents( get_template_directory() . '/readme.txt' );
	$changelog_start = strpos($wp_genericchangelog,'== Changelog ==');
	$wp_genericchangelog_before = substr($wp_genericchangelog,0,($changelog_start+15));
	$wp_genericchangelog = str_replace($wp_genericchangelog_before,'',$wp_genericchangelog);
	$wp_genericchangelog = str_replace('**','<br/>**',$wp_genericchangelog);
	$wp_genericchangelog = str_replace('= 1.0','<br/><br/>= 1.0',$wp_genericchangelog);
	echo $wp_genericchangelog;
	echo '<hr />';
	?>
</div>