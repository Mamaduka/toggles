<?php
/**
 * Plugin Name:       Toggles
 * Plugin URI:        https://github.com/Mamaduka/toggles
 * Description:       A simple block to hide and reveal content.
 * Version:           1.0.0
 * Requires at least: 5.3
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
	$asset_filepath = __DIR__ . '/build/index.asset.php';
	$asset_file     = file_exists( $asset_filepath ) ? include $asset_filepath : [
		'dependencies' => [],
		'version'      => false,
	];

	wp_register_script(
		'toggles-editor',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'mamaduka/toggles', [
		'editor_script' => 'toggles-editor',
	] );
}
add_action( 'init', __NAMESPACE__ . '\\register_block' );
