/**
 * BLOCK: Ghost Button Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { GhostButtonIcon } from '../../icons'

import {
	registerBlockType,
	__,
	InspectorControls,
	BlockControls,
	RichText,
	AlignmentToolbar,
	ColorPalette,
	UrlInput,
	PanelColor,
	IconButton,
	Dashicon,
	SelectControl,
	RangeControl,
} from '../../wp-imports'

export const edit = ( props ) => {
	const {
		isSelected,
		setAttributes
	} = props

	const {
		url,
		text,
		color,
		size,
		textAlignment,
		cornerButtonRadius,
		borderThickness
	} = props.attributes

	const buttonSizes = [
		{ value: 'small', label: __( 'Small' ) },
		{ value: 'normal', label: __( 'Normal ' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'large', label: __( 'Large' ) },
	]

	return [
		isSelected && (
			<BlockControls key='controls'>
				<AlignmentToolbar
					value={textAlignment}
					onChange={ ( nextAlign ) =>  {
						setAttributes( { textAlignment: nextAlign } );
					} }
				/>
			</BlockControls>
		),
		<span key='button'
			className={ `wp-block-button ugb-button-${textAlignment}` }>
			<RichText
				tagName={ 'span' }
				placeholder={ __( 'Enter Text' ) }
				value={ text }
				onChange={ ( text ) => setAttributes( { text: text } ) }
				formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
				className={ `wp-ugb-button ugb-button-${size} ugb-ghost-button` }
				style = { {
					borderColor: color,
					color: color,
					borderRadius: cornerButtonRadius + 'px',
					borderWidth: borderThickness + 'px',
				} }
				isSelected={ isSelected }
				keepPlaceholderOnFocus
			/>
			{
				isSelected &&
				<InspectorControls key='inspector'>
					<SelectControl
						label={ __( 'Size' ) }
						value={ size }
						options={ buttonSizes.map( ( { value, label } ) => ( {
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
					<RangeControl
						label={ __( 'Border Thickness' ) }
						value={ borderThickness }
						min='1'
						max='10'
						onChange={ ( borderThick ) => setAttributes( { borderThickness: borderThick } ) }
					/>
					<PanelColor
						title={ __( 'Button Color' ) }
						colorValue={ color }
						initialOpen={ false }
					>
						<ColorPalette
							value={ color }
							onChange={ ( colorValue ) => setAttributes( { color: colorValue } ) }
						/>
					</PanelColor>
				</InspectorControls>
			}
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
	]
}

export const save = ( props ) => {

	const {
		url,
		text,
		textAlignment,
		color,
		size,
		cornerButtonRadius,
		borderThickness
	} = props.attributes;

	const buttonStyle = {
		borderColor: color,
		color: color,
		borderRadius: cornerButtonRadius + 'px',
		borderWidth: borderThickness + 'px',
	}

	return (
		<div className={ `ugb-button-${textAlignment}` }>
			<a href={ url } className={ `wp-ugb-button ugb-button-${size} ugb-ghost-button` } style={ buttonStyle }>
				{ text }
			</a>
		</div>
	);
}

// class UGBGhostButtonBlock extends Component {
//
// 	render() {
//
// 	}
// }

/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}  name     Block name.
 * @param  {Object}  settings Block setting.
 * @return {?WPBlock}		  The block, if it has been successfully
 *							  registered; otherwise `undefined`.
 */
registerBlockType( 'ugb/ghost-button', {
	// Block name. Block names must be string that contains namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Ghost Button' ), // Block title.
	icon: GhostButtonIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category - Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Ghost Button' ),
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
		},
		textColor: {
			type: 'string',
		},
		size: {
			type: 'string',
			default: 'normal',
		},
		cornerButtonRadius: {
			type: 'number',
			default: '4',
		},
		borderThickness: {
			type: 'number',
			default: '1',
		}
	},

	// The "edit" property must be a valid function.
	edit: edit,

	// The "save" property must be  valid function.
	save: save,
} )
