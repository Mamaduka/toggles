/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import './index.scss';
import icon from './icon';
import edit from './edit';
import save from './save';

registerBlockType( 'mamaduka/toggles', {
	title: 'Toggles',
	description: 'A simple block to hide and reveal content.',
	category: [ 'common' ],
	icon,
	keywords: [ 'toggle', 'accordion', 'faq' ],
	edit,
	save,
} );
