<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'uiri');

/** MySQL database username */
define('DB_USER', 'mysqldbuser@uiri-mysqldbserver');

/** MySQL database password */
define('DB_PASSWORD', 'letmelogin2#');

/** MySQL hostname */
define('DB_HOST', 'uiri-mysqldbserver.mysql.database.azure.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'eH?k{QpYYGoC^t$ed4m=+E xo+6?rY3_YJ>sYe: 5>I(i-uG!@u@d!5^z55#ZFxO');
define('SECURE_AUTH_KEY',  '[wiWc,1~e-Iz|g7rMa nCo|08V#V.H:Vt$fIT<Jmgox=_SnXF$b~J^0)Gm%IE*F[');
define('LOGGED_IN_KEY',    'V{g1Rd[%B65z!5]%PhcogDR+jRw252yrX~Qn9c#,<Oiy[u`6?Jn 3qn7;wa+VJ`e');
define('NONCE_KEY',        'A>r*IS>014Ih:vJ_#{6B59)S9^N a3|NK.F!XOGEgOqzoxa9,S}b,Cg(gY{rB>)E');
define('AUTH_SALT',        'R>ay#H>k,[zMTRry6`o)2C9uBe~C,&{.o`C$&Wuk~|DR4pa$ux>r(@/hGNxd4O]Y');
define('SECURE_AUTH_SALT', ']u;#H&VFepZ[_Xh5^D/sdG[D3mD/6GJN[@WL2 ,@.gP+<3;!8MjWk9rW%5X^6s)(');
define('LOGGED_IN_SALT',   'tU1OLL.rkMF+tC7QwT@a{!mc:>?-EL7)9H[I}T@TLWMgSl`Od,`=$j=v<eHk~rC;');
define('NONCE_SALT',       '_I%77h>ohKTTn%8n* A=O+ye^Gcou- 6%2z2~pU8Wv)JyF&{4wvg<,`7k2]pFHDl');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
