/**
 * WordPress dependencies
 */
import {
	BlockControls,
	InnerBlocks,
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';

export default function TogglesEdit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps( {
		className: 'wp-block-toggles',
	} );

	// This is called onKeyUp on <details> and cancel default behavior.
	function cancelSpaceToggle( event ) {
		if ( event.keyCode === 32 ) {
			event.preventDefault();
		}
	}

	return (
		<>
			<BlockControls />

			{ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ }
			<details { ...blockProps } onKeyUp={ cancelSpaceToggle }>
				<summary>
					<RichText
						tagName="span"
						value={ attributes.summary }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						onChange={ ( summary ) => setAttributes( { summary } ) }
						placeholder="Toggle"
						keepPlaceholderOnFocus={ true }
					/>
				</summary>
				<div className="wp-block-toggles__content">
					<InnerBlocks
						renderAppender={ () => (
							<InnerBlocks.ButtonBlockAppender />
						) }
					/>
				</div>
			</details>
		</>
	);
}
