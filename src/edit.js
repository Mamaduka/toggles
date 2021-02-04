/**
 * WordPress dependencies
 */
import {
	BlockControls,
	InnerBlocks,
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { SPACE } from '@wordpress/keycodes';

export default function TogglesEdit( {
	attributes,
	clientId,
	isSelected,
	setAttributes,
} ) {
	const isInnerBlockSelected = useSelect(
		( select ) =>
			select( 'core/block-editor' ).hasSelectedInnerBlock( clientId ),
		[ clientId ]
	);

	const blockProps = useBlockProps( {
		className: 'wp-block-toggles',
		open: isSelected || isInnerBlockSelected,
	} );

	// Don't toggle open value on space.
	function keyUpListener( event ) {
		if ( event.keyCode === SPACE ) {
			event.preventDefault();
		}
	}

	// Don't toggle open value on click.
	function clickListeer( event ) {
		event.preventDefault();
	}

	return (
		<>
			<BlockControls />

			<details { ...blockProps }>
				<summary onKeyUp={ keyUpListener } onClick={ clickListeer }>
					<RichText
						tagName="span"
						value={ attributes.summary }
						onChange={ ( summary ) => setAttributes( { summary } ) }
						placeholder="Toggle title"
						keepPlaceholderOnFocus
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
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
