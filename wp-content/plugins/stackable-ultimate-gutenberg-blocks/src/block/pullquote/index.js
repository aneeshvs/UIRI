/**
 * BLOCK: Pullquote
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { QuoteIcon } from '../../icons'

import {
	registerBlockType,
	__,
	PanelColor,
	withState,
	InspectorControls,
	RichText,
	ColorPalette,
} from '../../wp-imports'

export const edit = ( props ) => {
	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } )
	}

	const { isSelected, setAttributes, className } = props

	const { color, text, borderColor } = props.attributes


	return [
		<blockquote
			key={ 'quote' }
			className={ 'ugb-pullquote' }
			style={ {
				borderTopColor: borderColor,
				borderBottomColor: borderColor
			 } }>
			<RichText
				tagName={ 'p' }
				className={ 'ugb-pullquote-text' }
				value={ text }
				onChange={ ( nextValue ) => setAttributes( { text: nextValue } ) }
				placeholder={ __( 'Write quote…' ) }
				formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
				isSelected={ isSelected }
				keepPlaceholderOnFocus
				style={ {
					color: color
				} }
			/>
		</blockquote>,
		isSelected && (
			<InspectorControls key='inspector'>
				<PanelColor
					title={ __( 'Text Color' ) }
					colorValue={ color }
					initialOpen={ false }>
					<ColorPalette
						value={ color }
						onChange={ ( colorValue ) => setAttributes( { color: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Border Color' ) }
					colorValue={ borderColor }
					initialOpen={ false }>
					<ColorPalette
						value={ borderColor }
						onChange={ ( colorValue ) => setAttributes( { borderColor: colorValue } ) }
					/>
				</PanelColor>
			</InspectorControls>
		)
	];
}

export const save = ( props ) => {

	const { color, text, borderColor } = props.attributes

	return (
		<blockquote
			className={ 'ugb-pullquote' }
			style={ {
				borderTopColor: borderColor,
				borderBottomColor: borderColor,
			} }>
			<p style={ { color: color } }>{ text }</p>
		</blockquote>
	);
}


/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'ugb/pullquote', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Pullquote' ), // Block title.
	icon: QuoteIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'formatting', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Pullquote' ),
		__( 'Stackable' ),
	],
	attributes: {
		text: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: __( 'It\'s okay to acknowledge that life can get complicated, but we musn\'t forget the beauty in its simplicity, too. From the multitude of stars above, to freshly mowed grass in the morning, life is simply wonderful.' )
		},
		color: {
			type: 'string',
			default: '#2091e1',
		},
		borderColor: {
			type: 'string',
			default: '#2091e1',
		}
	},

	// The "edit" property must be a valid function.
	edit: withState( { editable: 'content', } )( edit ),

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
