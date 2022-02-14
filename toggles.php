<?php
/**
 * Plugin Name:       Toggles
 * Plugin URI:        https://github.com/Mamaduka/toggles
 * Description:       An easy way to hide and reveal content.
 * Version:           1.0.0
 * Requires at least: 5.8
 * Requires PHP:      5.6
 * Author:            George Mamadashvili
 * Author URI:        https://mamaduka.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Mamaduka\Toggles;

/**
 * Register block type and required assets.
 *
 * @return void
 */
function register_block() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', __NAMESPACE__ . '\\register_block' );
