/**
 * BLOCK: Spacer Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { SpacerIcon } from '../../icons'

import {
	registerBlockType,
	__,
	InspectorControls,
	RangeControl,
	TextControl
} from '../../wp-imports'

export const save = ( props ) => {

	const { height } = props.attributes

	return (
		<div style={{height:height + 'px'}}></div>
	);
}

export const edit = ( props ) => {

	const { isSelected } = props;

	const { height } = props.attributes;

	return [
		!! isSelected && (
			<InspectorControls key='inspector'>
				<RangeControl
					label={__('Height')}
					value={height}
					min='30'
					max='200'
					onChange={function( height ) {
						props.setAttributes( { height: height } );
					}}
				/>
			</InspectorControls>
		),
		<div className={ props.className } style={{height:height + 'px'}}></div>
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
registerBlockType( 'ugb/spacer', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Spacer' ), // Block title.
	icon: SpacerIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Spacer' ),
		__( 'Stackable' ),
	],
	attributes: {
		height: {
			default: 50,
			type: 'number',
		},
	},

	edit: edit,

	save: save,
} );
