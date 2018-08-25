/**
 * BLOCK: Number Box Block.
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
	SelectControl,
	InspectorControls,
	RichText,
	ColorPalette,
	MediaUpload,
	BlockControls,
	AlignmentToolbar,
	BlockAlignmentToolbar,
} from '../../wp-imports'

export const edit = ( props ) => {

	const {
		className,
		setAttributes,
		isSelected,
		editable,
		setState
	} = props;

	const {
		numberBox,
		numberBoxTwo,
		numberBoxThree,
		body,
		bodyTwo,
		bodyThree,
		name,
		nameTwo,
		nameThree,
		columns,
		numberBoxColor,
		nameColor,
		bodyTextColor,
		numberBGColor
	} = props.attributes;

	const column = [
		{ value: '1', label: __( 'One Column' ) },
		{ value: '2', label: __( 'Two Column' ) },
		{ value: '3', label: __( 'Three Column' ) },
	];

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } )
	}

	return [
		isSelected && (
			<BlockControls key="controls"/>
		),
		isSelected && (
			<InspectorControls key={ 'inspector' }>
				<SelectControl
					label={ __( 'Column Number' ) }
					value={ columns }
					options={ column.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( newColumns ) => { setAttributes( { columns: newColumns } ) } }
				/>
				<PanelColor
					title={ __( 'Number Color' ) }
					colorValue={ numberBoxColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ numberBoxColor }
						onChange={ ( colorValue ) => setAttributes( { numberBoxColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Number Background Color' ) }
					colorValue={ numberBGColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ numberBGColor }
						onChange={ ( colorValue ) => setAttributes( { numberBGColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Name Color' ) }
					colorValue={ nameColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ nameColor }
						onChange={ ( colorValue ) => setAttributes( { nameColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Body Text Color' ) }
					colorValue={ bodyTextColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ bodyTextColor }
						onChange={ ( colorValue ) => setAttributes( { bodyTextColor: colorValue } ) }
					/>
				</PanelColor>
			</InspectorControls>
		),
		<div key={'editable'} className={ `ugb-number-box column-${columns}` }>
			<div className={ 'ugb-number-box-column-one' }>
				<RichText
					tagName={ 'span' }
					placeholder={ numberBox ? numberBox.default : '' }
					value={ numberBox }
					onChange={ (text) => setAttributes( { numberBox: text } ) }
					isSelected={ isSelected && editable === 'numberBox' }
					onFocus={ onSetActiveEditable( 'numberBox' ) }
					style={ {
						color: numberBoxColor,
						backgroundColor: numberBGColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'h4'}
					value={ name }
					className={ 'ugb-number-box-name' }
					onChange={ (text) => setAttributes( { name: text } ) }
					isSelected={ isSelected && editable === 'name' }
					onFocus={ onSetActiveEditable( 'name' ) }
					placeholder={ __( 'Add name…' ) }
					style={ {
						color: nameColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ body }
					className={ 'ugb-number-box-body' }
					onChange={ (text) => setAttributes( { body: text } ) }
					isSelected={ isSelected && editable === 'body' }
					onFocus={ onSetActiveEditable( 'body' ) }
					placeholder={ __( 'Add body…' ) }
					style={ {
						color: bodyTextColor
					} }
					keepPlaceholderOnFocus
				/>
			</div>
			<div className={ 'ugb-number-box-column-two' }>
				<RichText
					tagName={ 'span' }
					placeholder={ numberBoxTwo ? numberBoxTwo.default : '' }
					value={ numberBoxTwo }
					onChange={ (text) => setAttributes( { numberBoxTwo: text } ) }
					isSelected={ isSelected && editable === 'numberBoxTwo' }
					onFocus={ onSetActiveEditable( 'numberBoxTwo' ) }
					style={ {
						color: numberBoxColor,
						backgroundColor: numberBGColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'h4'}
					value={ nameTwo }
					className={ 'ugb-number-box-name-two' }
					onChange={ (text) => setAttributes( { nameTwo: text } ) }
					isSelected={ isSelected && editable === 'nameTwo' }
					onFocus={ onSetActiveEditable( 'nameTwo' ) }
					placeholder={ __( 'Add name…' ) }
					style={ {
						color: nameColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ bodyTwo }
					className={ 'ugb-number-box-body-two' }
					onChange={ (text) => setAttributes( { bodyTwo: text } ) }
					isSelected={ isSelected && editable === 'bodyTwo' }
					onFocus={ onSetActiveEditable( 'bodyTwo' ) }
					placeholder={ __( 'Add body…' ) }
					style={ {
						color: bodyTextColor
					} }
					keepPlaceholderOnFocus
				/>
			</div>
			<div className={ 'ugb-number-box-column-three' }>
				<RichText
					tagName={ 'span' }
					placeholder={ numberBoxThree ? numberBoxThree.default : '' }
					value={ numberBoxThree }
					onChange={ (text) => setAttributes( { numberBoxThree: text } ) }
					isSelected={ isSelected && editable === 'numberBoxThree' }
					onFocus={ onSetActiveEditable( 'numberBoxThree' ) }
					style={ {
						color: numberBoxColor,
						backgroundColor: numberBGColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'h4'}
					value={ nameThree }
					className={ 'ugb-number-box-name-three' }
					onChange={ (text) => setAttributes( { nameThree: text } ) }
					isSelected={ isSelected && editable === 'nameThree' }
					onFocus={ onSetActiveEditable( 'nameThree' ) }
					placeholder={ __( 'Add name…' ) }
					style={ {
						color: nameColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ bodyThree }
					className={ 'ugb-number-box-body-three' }
					onChange={ (text) => setAttributes( { bodyThree: text } ) }
					isSelected={ isSelected && editable === 'bodyThree' }
					onFocus={ onSetActiveEditable( 'bodyThree' ) }
					placeholder={ __( 'Add body…' ) }
					style={ {
						color: bodyTextColor
					} }
					keepPlaceholderOnFocus
				/>
			</div>
		</div>
	];
}

export const save = ( props ) => {
	const {
		numberBox,
		numberBoxTwo,
		numberBoxThree,
		body,
		bodyTwo,
		bodyThree,
		name,
		nameTwo,
		nameThree,
		numberBoxColor,
		nameColor,
		bodyTextColor,
		numberBGColor,
		columns
	} = props.attributes;

	return (
		<div className={ `ugb-number-box column-${columns}` }>
			<div className={ 'ugb-number-box-column-one' }>
				{ numberBox && !! numberBox.length && (
					<span style={ { color: numberBoxColor, backgroundColor: numberBGColor } }>
						{ numberBox }
					</span>
				) }
				{ name && !! name.length && (
					<h4 className={ 'ugb-number-box-name' } style={ { color: nameColor } }>
						{ name }
					</h4>
				) }
				{ body && !! body.length && (
					<p className={ 'ugb-number-box-body' } style={ { color: bodyTextColor } }>
						{ body }
					</p>
				) }
			</div>
			{ columns > 1 && (
				<div className={ 'ugb-number-box-column-two' }>
					{ numberBoxTwo && !! numberBoxTwo.length && (
						<span style={ { color: numberBoxColor, backgroundColor: numberBGColor } }>
							{ numberBoxTwo }
						</span>
					) }
					{ nameTwo && !! nameTwo.length && (
						<h4 className={ 'ugb-number-box-name-two' } style={ { color: nameColor } }>
							{ nameTwo }
						</h4>
					) }
					{ bodyTwo && !! bodyTwo.length && (
						<p className={ 'ugb-number-box-body-two' } style={ { color: bodyTextColor } }>
							{ bodyTwo }
						</p>
					) }
				</div>
			) }
			{ columns > 2 && (
				<div className={ 'ugb-number-box-column-three' }>
					{ numberBoxThree && !! numberBoxThree.length && (
						<span style={ { color: numberBoxColor, backgroundColor: numberBGColor } }>
							{ numberBoxThree }
						</span>
					) }
					{ nameThree && !! nameThree.length && (
						<h4 className={ 'ugb-number-box-name-three' } style={ { color: nameColor } }>
							{ nameThree }
						</h4>
					) }
					{ bodyThree && !! bodyThree.length && (
						<p className={ 'ugb-number-box-body-three' } style={ { color: bodyTextColor } }>
							{ bodyThree }
						</p>
					) }
				</div>
			) }
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
registerBlockType( 'ugb/number-box', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Number Box' ), // Block title.
	icon: NumberBoxIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Number Box' ),
		__( 'Stackable' ),
	],
	attributes: {
		numberBox: {
			type: 'array',
			source: 'children',
			selector: '.ugb-number-box-column-one span',
			default: __( '01' ),
		},
		numberBoxTwo: {
			type: 'array',
			source: 'children',
			selector: '.ugb-number-box-column-two span',
			default: __( '02' ),
		},
		numberBoxThree: {
			type: 'array',
			source: 'children',
			selector: '.ugb-number-box-column-three span',
			default: __( '03' ),
		},
		name: {
			type: 'array',
			source: 'children',
			selector: '.ugb-number-box-name',
			default: __( 'Registration' ),
		},
		nameTwo: {
			type: 'array',
			source: 'children',
			selector: '.ugb-number-box-name-two',
			default: __( 'Waiting Period' ),
		},
		nameThree: {
			type: 'array',
			source: 'children',
			selector: '.ugb-number-box-name-three',
			default: __( 'Delivery' ),
		},
		body: {
			type: 'array',
			source: 'children',
			selector: '.ugb-number-box-body',
			default: __( 'This is just a sample write-up, but you can check out more info on Gutenberg on the WP repository.' ),
		},
		bodyTwo: {
			type: 'array',
			source: 'children',
			selector: '.ugb-number-box-body-two',
			default: __( 'This is just a sample write-up, but you can check out more info on Gutenberg on the WP repository.' ),
		},
		bodyThree: {
			type: 'array',
			source: 'children',
			selector: '.ugb-number-box-body-three',
			default: __( 'This is just a sample write-up, but you can check out more info on Gutenberg on the WP repository.' ),
		},
		numberBoxColor: {
			type: 'string',
		},
		nameColor: {
			type: 'string',
		},
		bodyTextColor: {
			type: 'string',
		},
		numberBGColor: {
			type: 'string',
		},
		columns: {
			type: 'select',
			default: '1'
		}
	},

	// The "edit" property must be a valid function.
	edit: withState( { editable: 'content', } )( edit ),

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
