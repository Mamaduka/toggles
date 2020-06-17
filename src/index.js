/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import './index.scss';
import edit from './edit';
import save from './save';
import metadata from './block.json';

const { name, category, attributes } = metadata;

registerBlockType( name, {
	title: 'Toggles',
	description: 'A simple block to hide and reveal content.',
	keywords: [ 'toggle', 'accordion', 'faq' ],
	supports: {
		html: false,
	},
	icon: 'arrow-right-alt2',
	category,
	attributes,
	edit,
	save,
} );
