/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className: 'wp-block-toggles',
	} );

	return (
		<details { ...blockProps }>
			<RichText.Content tagName="summary" value={ attributes.summary } />
			<div className="wp-block-toggles__content">
				<InnerBlocks.Content />
			</div>
		</details>
	);
}
