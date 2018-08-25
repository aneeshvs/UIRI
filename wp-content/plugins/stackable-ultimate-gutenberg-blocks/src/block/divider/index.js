/**
 * BLOCK: Divider Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

// Import CSS.
import './style.scss';
import './editor.scss';
import { DividerIcon } from '../../icons';

import {
	registerBlockType,
	__,
	InspectorControls,
	ColorPalette,
	BlockControls,
	AlignmentToolbar,
	PanelColor,
	RangeControl,
} from '../../wp-imports'

export const save = ( props ) => {

	const { height, width, color, alignment } = props.attributes

	return (
		<div className={ 'ugb-divider' }><hr align={alignment} style={{backgroundColor:color, width:width + '%', height:height}} /></div>
	);
}

export const edit = ( props ) => {

	const { isSelected } = props;

	const { height, width, color, alignment } = props.attributes;

	return [
		isSelected && (
			<BlockControls key='controls'>
				<AlignmentToolbar
					value={alignment}
					onChange={function( alignment ) {
						props.setAttributes( { alignment: alignment } );
					}}
				/>
			</BlockControls>
		),
		isSelected && (
			<InspectorControls key='inspector'>
				<RangeControl
					label={__('Height')}
					value={height}
					min='1'
					max='10'
					onChange={function( height ) {
						props.setAttributes( { height: height } );
					}}
				/>
				<RangeControl
					label={__('Width')}
					value={width}
					min='10'
					max='100'
					step='0.1'
					onChange={function( width ) {
						props.setAttributes( { width: width } );
					}}
				/>
				<PanelColor title={ __( 'Divider Color' ) } colorValue={ color } initialOpen={ false }>
					<ColorPalette
						value={ color }
						onChange={ ( colorValue ) => props.setAttributes( { color: colorValue } ) }
					/>
				</PanelColor>
			</InspectorControls>

		),
		<div className={ 'ugb-divider' } style={{ paddingTop: 8, paddingBottom: 8 }}>
			<hr align={alignment} style={{marginTop: 0, marginBottom: 0, backgroundColor:color, width:width + '%', height:height}} />
		</div>
	]
}


/**
 * Register: aa Gutenberg Block.
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
registerBlockType( 'ugb/divider', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Divider' ), // Block title.
	icon: DividerIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Divider' ),
		__( 'Stackable' ),
	],
	attributes: {
		height: {
			default: 1,
			type: 'number',
		},
		width: {
			default: 50,
			type: 'number',
		},
		color: {
			type: 'string',
			default: '#dddddd',
		},
		alignment: {
			type: 'string',
			default: 'center',
		}
	},

	// The "edit" property must be a valid function.
	edit: edit,
	
	// The "save" property must be specified and must be a valid function.
	save: save,
} );
