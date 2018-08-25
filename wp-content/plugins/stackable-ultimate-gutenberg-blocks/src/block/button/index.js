/**
 * BLOCK: Button Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { ButtonIcon } from '../../icons'

import {
	registerBlockType, // Import registerBlockType() from wp.blocks
	__,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	RichText,
	ColorPalette,
	UrlInput,
	PanelColor,
	Dashicon,
	IconButton,
	SelectControl,
	RangeControl,
} from '../../wp-imports'

export const edit = ( props ) => {

	const { isSelected, className, setAttributes } = props;

	const { url, text, color, textColor, size, textAlignment, cornerButtonRadius } = props.attributes;

	const linkOptions = [
		{ value: 'small', label: __( 'Small' ) },
		{ value: 'normal', label: __( 'Normal' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'large', label: __( 'Large' ) },
	];

	return [
		isSelected && (
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlignment: nextAlign } );
					} }
				/>
			</BlockControls>
		),
		isSelected && (
			<InspectorControls key={ 'inspector' }>
				<SelectControl
					label={ __( 'Size' ) }
					value={ size }
					options={ linkOptions.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( newSize ) => { setAttributes( { size: newSize } ) } }
				/>
				<RangeControl
					label={ __( 'Corner Radius' ) }
					value={ cornerButtonRadius }
					min='1'
					max='50'
					onChange={ ( cornerRad ) => setAttributes( { cornerButtonRadius: cornerRad } ) }
				/>
				<PanelColor
					title={ __( 'Background Color' ) }
					colorValue={ color }
				>
					<ColorPalette
						value={ color }
						onChange={ ( colorValue ) => setAttributes( { color: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Text Color' ) }
					colorValue={ textColor }
				>
					<ColorPalette
						value={ textColor }
						onChange={ ( colorValue ) => setAttributes( { textColor: colorValue } ) }
					/>
				</PanelColor>
			</InspectorControls>
		),
		<span key={ 'button' }
			className={ `wp-block-button ugb-button-${textAlignment}` }>
			<RichText
				tagName={ 'span' }
				placeholder={ __( 'Enter Text' ) }
				value={ text }
				onChange={ (text) => setAttributes( { text: text } ) }
				formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
				className={`wp-ugb-button ugb-button-${size}`}
				style={ {
					backgroundColor: color,
					color: textColor,
					borderRadius: cornerButtonRadius + 'px',
				} }
				isSelected={ isSelected }
				keepPlaceholderOnFocus
			/>
		</span>,
		isSelected && (
			<form
				key={ 'form-link' }
				onSubmit={ ( event ) => event.preventDefault() }
				className={ `blocks-button__inline-link ugb-button-${textAlignment}`}>
				<Dashicon icon={ 'admin-links' } />
				<UrlInput
					value={ url }
					onChange={ ( value ) => setAttributes( { url: value } ) }
				/>
				<IconButton
					icon={ 'editor-break' }
					label={ __( 'Apply' ) }
					type={ 'submit' }
				/>
			</form>
		),
	];
}

export const save = ( props ) => {

	const { url, text, textAlignment, color, textColor, size, cornerButtonRadius } = props.attributes;

	const buttonStyle = {
		backgroundColor: color,
		color: textColor,
		borderRadius: cornerButtonRadius + 'px',
	}

	return (
		<div className={ `ugb-button-${textAlignment}` }>
			<a href={ url } className={ `wp-ugb-button ugb-button-${size}` } style={ buttonStyle }>
				{ text }
			</a>
		</div>
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
registerBlockType( 'ugb/button', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Button' ), // Block title.
	icon: ButtonIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Button' ),
		__( 'Stackable' ),
	],
	attributes: {
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		text: {
			type: 'array',
			source: 'children',
			selector: 'a',
		},
		textAlignment: {
			type: 'string',
			default: 'center',
		},
		color: {
			type: 'string',
			default: '#2091e1',
		},
		textColor: {
			type: 'string',
			default: '#ffffff',
		},
		size: {
			type: 'string',
			default: 'normal',
		},
		cornerButtonRadius: {
			type: 'number',
			default: 4,
		}
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be specified and must be a valid function.
	save: save
} );
