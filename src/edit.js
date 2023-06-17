/**
 * WordPress dependencies
 */
import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
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
			select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, /* deep */ true ),
		[ clientId ]
	);

	const blockProps = useBlockProps( {
		className: 'wp-block-toggles',
		open: attributes.defaultOpen || isSelected || isInnerBlockSelected,
	} );

	// Don't toggle open value on space.
	function catchKeyUpEvent( event ) {
		if ( event.keyCode === SPACE ) {
			event.preventDefault();
		}
	}

	// Don't toggle open value on click.
	function catchClickEvent( event ) {
		event.preventDefault();
	}

	return (
		<>
			<BlockControls />
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'toggles' ) }>
					<ToggleControl
						label={ __( 'Open by default', 'toggles' ) }
						onChange={ ( defaultOpen ) =>
							setAttributes( { defaultOpen } )
						}
						checked={ attributes.defaultOpen }
					/>
				</PanelBody>
			</InspectorControls>

			<details { ...blockProps }>
				{ /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */ }
				<summary
					onKeyUp={ catchKeyUpEvent }
					onClick={ catchClickEvent }
				>
					<RichText
						tagName="span"
						value={ attributes.summary }
						onChange={ ( summary ) => setAttributes( { summary } ) }
						placeholder={ __( 'Write a title…', 'toggles' ) }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						aria-label={ __( 'Toggle title', 'toggles' ) }
					/>
				</summary>
				<div className="wp-block-toggles__content">
					<InnerBlocks
						renderAppender={ InnerBlocks.ButtonBlockAppender }
					/>
				</div>
			</details>
		</>
	);
}
