/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText } from '@wordpress/block-editor';

export default function TogglesEdit( { attributes, setAttributes } ) {
	return (
		<details className="wp-block-toggles">
			<RichText
				tagName="summary"
				value={ attributes.summary }
				allowedFormats={ [] }
				onChange={ ( summary ) => setAttributes( { summary } ) }
				placeholder="Toggle"
				keepPlaceholderOnFocus={ true }
			/>
			<div className="wp-block-toggles__content">
				<InnerBlocks />
			</div>
		</details>
	);
}
