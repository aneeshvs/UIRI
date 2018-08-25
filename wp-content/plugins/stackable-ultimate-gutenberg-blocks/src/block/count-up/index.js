/**
 * BLOCK: Count Up
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { NumberBoxIcon } from '../../icons'

import {
	registerBlockType,
	__,
	PanelColor,
	withState,
	RangeControl,
	InspectorControls,
	RichText,
	ColorPalette
} from '../../wp-imports'

export const edit = ( props ) => {

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } )
	}

	const { isSelected, editable, setState, setAttributes, className } = props

	const { color, headingColor, desColor, title, counter, des, fontSize } = props.attributes

	return [
		<div className={ 'ugb-countup' }>
			<RichText
				tagName={ 'h4' }
				value={ title }
				onChange={ ( nextValue ) => setAttributes( { title: nextValue } ) }
				isSelected={ isSelected && editable === 'title' }
				onFocus={ onSetActiveEditable( 'title' ) }
				style={{ color: headingColor }}
			/>
			<RichText
				tagName={ 'div' }
				className={ 'ugb-counter' }
				placeholder={ counter.default }
				data-duration="1000"
				data-delay="16"
				value={ counter }
				onChange={ ( nextValue ) => setAttributes( { counter: nextValue } ) }
				isSelected={ isSelected && editable === 'counter' }
				onFocus={ onSetActiveEditable( 'counter' ) }
				style={ {
					color: color,
					fontSize: fontSize + 'px'
				} }
			/>
			<RichText
				tagName={ 'p' }
				className={ 'ugb-counter-des' }
				value={ des }
				onChange={ ( nextValue ) => setAttributes( { des: nextValue } ) }
				isSelected={ isSelected && editable === 'des' }
				onFocus={ onSetActiveEditable( 'des' ) }
				style={{ color: desColor }}
			/>
		</div>,
		isSelected && (
			<InspectorControls key='inspector'>
				<PanelColor
					title={ __( 'Heading Color' ) }
					colorValue={ headingColor }
					initialOpen={ false }>
					<ColorPalette
						value={ headingColor }
						onChange={ ( colorValue ) => setAttributes( { headingColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Count Up Text Color' ) }
					colorValue={ color }
					initialOpen={ false }>
					<ColorPalette
						value={ color }
						onChange={ ( colorValue ) => setAttributes( { color: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Description Color' ) }
					colorValue={ desColor }
					initialOpen={ false }>
					<ColorPalette
						value={ desColor }
						onChange={ ( colorValue ) => setAttributes( { desColor: colorValue } ) }
					/>
				</PanelColor>
				<RangeControl
					label={ __( 'Counter Text Font Size' ) }
					max="100"
					min="10"
					value={ fontSize }
					onChange={ ( newFontSize ) => setAttributes( { fontSize: newFontSize } ) }
				>
				</RangeControl>
			</InspectorControls>
		)
	];
}

export const save = ( props ) => {

	const { color, headingColor, desColor, title, counter, des, fontSize } = props.attributes

	return (
		<div className={ 'ugb-countup' }>
			<h4 style={{ color: headingColor }}> { title } </h4>
			<div
				className={ 'ugb-counter' }
				style={ { color: color, fontSize: fontSize + 'px' } }
				data-duration="1000"
				data-delay="16"
			>
					{ counter }
			</div>
			<p style={{ color: desColor }}> { des } </p>
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
registerBlockType( 'ugb/count-up', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Count Up' ), // Block title.
	icon: NumberBoxIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Count Up' ),
		__( 'Stackable' ),
	],
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h4',
			default: __( 'Happy Customers' )
		},
		counter: {
			type: 'array',
			source: 'children',
			selector: '.ugb-counter',
			default: '12,345'
		},
		des: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: __( 'and counting' )
		},
		fontSize: {
			type: 'number',
			default: '60',
		},
		headingColor: {
			type: 'string',
		},
		desColor: {
			type: 'string',
		},
		color: {
			type: 'string',
		},

	},

	// The "edit" property must be a valid function.
	edit: withState( { editable: 'content', } )( edit ),

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
