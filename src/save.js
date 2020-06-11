/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<details className="wp-block-toggles">
			<RichText.Content tagName="summary" value={ attributes.summary } />
			<div className="wp-block-toggles__content">
				<InnerBlocks.Content />
			</div>
		</details>
	);
}
