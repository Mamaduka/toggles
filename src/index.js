/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './index.scss';
import icon from './icon';
import edit from './edit';
import save from './save';

registerBlockType( 'mamaduka/toggles', {
	title: __( 'Toggles', 'toggles' ),
	description: __( 'An easy way to hide and reveal content.', 'toggles' ),
	category: [ 'common' ],
	icon,
	keywords: [ 'accordion', 'details', 'faq' ],
	edit,
	save,
} );
