/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText } from '@wordpress/block-editor';

export default function TogglesEdit( { attributes, setAttributes } ) {
	// This is called onKeyUp on <details> and cancel default behavior.
	function cancelSpaceToggle( event ) {
		if ( event.keyCode === 32 ) {
			event.preventDefault();
		}
	}

	return (
		<>
			{ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ }
			<details className="wp-block-toggles" onKeyUp={ cancelSpaceToggle }>
				<summary>
					<RichText
						tagName="span"
						value={ attributes.summary }
						allowedFormats={ [] }
						onChange={ ( summary ) => setAttributes( { summary } ) }
						placeholder="Toggle"
						keepPlaceholderOnFocus={ true }
					/>
				</summary>
				<div className="wp-block-toggles__content">
					<InnerBlocks
						renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
					/>
				</div>
			</details>
		</>
	);
}
