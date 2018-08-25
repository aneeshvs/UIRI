/**
 * BLOCK: Team Member Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { TeamMemberIcon } from '../../icons'

import {
	registerBlockType,
	__,
	PanelColor,
	Button,
	SelectControl,
	TextControl,
	withState,
	InspectorControls,
	RichText,
	ColorPalette,
	MediaUpload,
	BlockControls,
	AlignmentToolbar
} from '../../wp-imports'

export const edit = ( props ) => {

	const {
		isSelected,
		editable,
		setState,
		className,
		setAttributes
	} = props;

	const {
		name,
		nameTwo,
		nameThree,
		des,
		desTwo,
		desThree,
		position,
		positionTwo,
		positionThree,
		href,
		hrefTwo,
		hrefThree,
		mediaID,
		mediaIDTwo,
		mediaIDThree,
		mediaURL,
		mediaURLTwo,
		mediaURLThree,
		columns,
		nameColor,
		posColor,
		desColor,
		iconColor,
		shapes
	} = props.attributes;

	const column = [
		{ value: '1', label: __( 'One Column' ) },
		{ value: '2', label: __( 'Two Column' ) },
		{ value: '3', label: __( 'Three Column' ) },
	];
	const shape = [
		{ value: 'square', label: __( 'Square' ) },
		{ value: 'circle', label: __( 'Circle' ) },
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
					label={ __( 'Image Shape' ) }
					value={ shapes }
					options={ shape.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( newShape ) => { setAttributes( { shapes: newShape } ) } }
				/>
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
					title={ __( 'Position Color' ) }
					colorValue={ posColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ posColor }
						onChange={ ( colorValue ) => setAttributes( { posColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Description Color' ) }
					colorValue={ desColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ desColor }
						onChange={ ( colorValue ) => setAttributes( { desColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Icon Color' ) }
					colorValue={ iconColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ iconColor }
						onChange={ ( colorValue ) => setAttributes( { iconColor: colorValue } ) }
					/>
				</PanelColor>
			</InspectorControls>
		),
		<div key={'editable'} className={ `ugb-team-member column-${columns} image-${ shapes }` }>
			<div className={ 'ugb-team-member-column-one' }>
				<div>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURL: media.url, mediaID: media.id } ) }
						type={'image'}
						value={mediaID}
						render={ function( obj ) {
							return <Button
										className={ mediaID ? '' : 'button button-large' }
										onClick={ obj.open } >
										{
											mediaID ? <div className="team-member-image" style={{ backgroundImage: `url(${mediaURL})` }}></div> : __( 'Upload Image' )
										}
									</Button>
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ name }
					onChange={ (text) => setAttributes( { name: text } ) }
					isSelected={ isSelected && editable === 'name' }
					onFocus={ onSetActiveEditable( 'name' ) }
					// placeholder={ name.default }
					style={ {
						color: nameColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ position }
					className={ 'ugb-team-member-position' }
					onChange={ (text) => setAttributes( { position: text } ) }
					isSelected={ isSelected && editable === 'position' }
					onFocus={ onSetActiveEditable( 'position' ) }
					// placeholder={ position.default }
					style={ {
						color: posColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ des }
					className={ 'ugb-team-member-des' }
					onChange={ (text) => setAttributes( { des: text } ) }
					isSelected={ isSelected && editable === 'des' }
					onFocus={ onSetActiveEditable( 'des' ) }
					// placeholder={ des.default }
					style={ {
						color: desColor
					} }
					keepPlaceholderOnFocus
				/>
			</div>
			<div className={ 'ugb-team-member-column-two' }>
				<div>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURLTwo: media.url, mediaIDTwo: media.id } ) }
						type={'image'}
						value={ mediaIDTwo }
						render={ function( obj ) {
							return <Button
										className={ mediaIDTwo ? '' : 'button button-large' }
										onClick={ obj.open } >
										{
											mediaIDTwo ? <div className="team-member-image" style={{ backgroundImage: `url(${mediaURLTwo})` }}></div> : __( 'Upload Image' )
										}
									</Button>
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ nameTwo }
					onChange={ (text) => setAttributes( { nameTwo: text } ) }
					isSelected={ isSelected && editable === 'nameTwo' }
					onFocus={ onSetActiveEditable( 'nameTwo' ) }
					// placeholder={ nameTwo.default }
					style={ {
						color: nameColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ positionTwo }
					className={ 'ugb-team-member-position' }
					onChange={ (text) => setAttributes( { positionTwo: text } ) }
					isSelected={ isSelected && editable === 'positionTwo' }
					onFocus={ onSetActiveEditable( 'positionTwo' ) }
					// placeholder={ positionTwo.default }
					style={ {
						color: posColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ desTwo }
					className={ 'ugb-team-member-des-two' }
					onChange={ (text) => setAttributes( { desTwo: text } ) }
					isSelected={ isSelected && editable === 'desTwo' }
					onFocus={ onSetActiveEditable( 'desTwo' ) }
					// placeholder={ desTwo.default }
					style={ {
						color: desColor
					} }
					keepPlaceholderOnFocus
				/>
			</div>
			<div className={ 'ugb-team-member-column-three' }>
				<div>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURLThree: media.url, mediaIDThree: media.id } ) }
						type={'image'}
						value={ mediaIDThree }
						render={ function( obj ) {
							return <Button
										className={ mediaIDThree ? '' : 'button button-large' }
										onClick={ obj.open } >
										{
											mediaIDThree ? <div className="team-member-image" style={{ backgroundImage: `url(${mediaURLThree})` }}></div> : __( 'Upload Image' )
										}
									</Button>
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ nameThree }
					onChange={ (text) => setAttributes( { nameThree: text } ) }
					isSelected={ isSelected && editable === 'nameThree' }
					onFocus={ onSetActiveEditable( 'nameThree' ) }
					// placeholder={ nameThree.default }
					style={ {
						color: nameColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ positionThree }
					className={ 'ugb-team-member-position' }
					onChange={ (text) => setAttributes( { positionThree: text } ) }
					isSelected={ isSelected && editable === 'positionThree' }
					onFocus={ onSetActiveEditable( 'positionThree' ) }
					// placeholder={ positionThree.default }
					style={ {
						color: posColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ desThree }
					className={ 'ugb-team-member-des-three' }
					onChange={ (text) => setAttributes( { desThree: text } ) }
					isSelected={ isSelected && editable === 'desThree' }
					onFocus={ onSetActiveEditable( 'desThree' ) }
					// placeholder={ desThree.default }
					style={ {
						color: desColor
					} }
					keepPlaceholderOnFocus
				/>
			</div>
		</div>
	];
}

export const save = ( props ) => {

	const {
		name,
		nameTwo,
		nameThree,
		shapes,
		des,
		desTwo,
		desThree,
		position,
		positionTwo,
		positionThree,
		mediaURL,
		mediaURLTwo,
		mediaURLThree,
		mediaID,
		mediaIDTwo,
		mediaIDThree,
		nameColor,
		posColor,
		desColor,
		iconColor,
		columns
	} = props.attributes;

	return (
		<div className={ `ugb-team-member column-${columns} image-${ shapes }` }>
			<div className={ 'ugb-team-member-column-one' }>
				{ mediaURL && <div className="team-member-image" style={{ backgroundImage: `url(${mediaURL})` }} data-src={mediaURL}></div> }
				{ name && !! name.length && (
					<h4 style={ { color: nameColor } }>
						{ name }
					</h4>
				) }
				{ position && !! position.length && (
					<p className={ 'ugb-team-member-position' } style={ { color: posColor } }>
						{ position }
					</p>
				) }
				{ des && !! des.length && (
					<p className={ 'ugb-team-member-des' } style={ { color: desColor } }>
						{ des }
					</p>
				) }
			</div>
			{ columns > 1 && (
				<div className={ 'ugb-team-member-column-two' }>
					{ mediaURLTwo && <div className="team-member-image" style={{ backgroundImage: `url(${mediaURLTwo})` }} data-src={mediaURLTwo}></div> }
					{ nameTwo && !! nameTwo.length && (
						<h4 style={ { color: nameColor } }>
							{ nameTwo }
						</h4>
					) }
					{ positionTwo && !! positionTwo.length && (
						<p className={ 'ugb-team-member-position' } style={ { color: posColor } }>
							{ positionTwo }
						</p>
					) }
					{ desTwo && !! desTwo.length && (
						<p className={ 'ugb-team-member-des-two' } style={ { color: desColor } }>
							{ desTwo }
						</p>
					) }
				</div>
			) }
			{ columns > 2 && (
				<div className={ 'ugb-team-member-column-three' }>
					{ mediaURLThree && <div className="team-member-image" style={{ backgroundImage: `url(${mediaURLThree})` }} data-src={mediaURLThree}></div> }
					{ nameThree && !! nameThree.length && (
						<h4 style={ { color: nameColor } }>
							{ nameThree }
						</h4>
					) }
					{ positionThree && !! positionThree.length && (
						<p className={ 'ugb-team-member-position' } style={ { color: posColor } }>
							{ positionThree }
						</p>
					) }
					{ desThree && !! desThree.length && (
						<p className={ 'ugb-team-member-des-three' } style={ { color: desColor } }>
							{ desThree }
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
registerBlockType( 'ugb/team-member', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Team Member' ), // Block title.
	icon: TeamMemberIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Team Member' ),
		__( 'Stackable' ),
	],
	attributes: {
		href: {
			type: 'url',
		},
		hrefTwo: {
			type: 'url',
		},
		hrefThree: {
			type: 'url',
		},
		mediaID: {
			type: 'number',
		},
		mediaIDTwo: {
			type: 'number',
		},
		mediaIDThree: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-team-member-column-one .team-member-image',
			attribute: 'data-src',
		},
		mediaURLTwo: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-team-member-column-two .team-member-image',
			attribute: 'data-src',
		},
		mediaURLThree: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-team-member-column-three .team-member-image',
			attribute: 'data-src',
		},
		name: {
			type: 'array',
			source: 'children',
			selector: '.ugb-team-member-column-one h4',
			default: __( 'Ben Adams' )
		},
		nameTwo: {
			type: 'array',
			source: 'children',
			selector: '.ugb-team-member-column-two h4',
			default: __( 'Alex Johnson' )
		},
		nameThree: {
			type: 'array',
			source: 'children',
			selector: '.ugb-team-member-column-three h4',
			default: __( 'Sammy Simpson' )
		},
		position: {
			type: 'array',
			source: 'children',
			selector: '.ugb-team-member-column-one .ugb-team-member-position',
			default: __( 'Founder' )
		},
		positionTwo: {
			type: 'array',
			source: 'children',
			selector: '.ugb-team-member-column-two .ugb-team-member-position',
			default: __( 'Editor' )
		},
		positionThree: {
			type: 'array',
			source: 'children',
			selector: '.ugb-team-member-column-three .ugb-team-member-position',
			default: __( 'Programmer' )
		},
		des: {
			type: 'array',
			source: 'children',
			selector: '.ugb-team-member-des',
			default: __( 'Ben is the head of our small team. He loves walking his dog, Walter, when he has some free time.' )
		},
		desTwo: {
			type: 'array',
			source: 'children',
			selector: '.ugb-team-member-des-two',
			default: __( 'Alex handles all written content. She enjoys painting and playing softball on the weekends.' )
		},
		desThree: {
			type: 'array',
			source: 'children',
			selector: '.ugb-team-member-des-three',
			default: __( 'Sammy is our programmer. You\'ll usually find her nose in a book. She has a cat named Skitty.' )
		},
		nameColor: {
			type: 'string',
		},
		posColor: {
			type: 'string',
		},
		desColor: {
			type: 'string',
		},
		iconColor: {
			type: 'string',
		},
		columns: {
			type: 'select',
			default: '1'
		},
		shapes: {
			type: 'select',
			default: 'square'
		}
	},

	// The "edit" property must be a valid function.
	edit: withState( { editable: 'content', } )( edit ),

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
