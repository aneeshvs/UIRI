/**
 * BLOCK: Testimonial Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { TestimonialIcon } from '../../icons'

import {
	registerBlockType,
	__,
	PanelColor,
	Button,
	withState,
	SelectControl,
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
		testimonialTitle,
		testimonialTitleTwo,
		testimonialTitleThree,
		body,
		bodyTwo,
		bodyThree,
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
		titleColor,
		posColor,
		bodyTextColor,
		iconColor
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
			<BlockControls/>
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
					title={ __( 'Title Color' ) }
					colorValue={ titleColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ titleColor }
						onChange={ ( colorValue ) => setAttributes( { titleColor: colorValue } ) }
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
					title={ __( 'Body Text Color' ) }
					colorValue={ bodyTextColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ bodyTextColor }
						onChange={ ( colorValue ) => setAttributes( { bodyTextColor: colorValue } ) }
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
		<div key={'editable'} className={ `ugb-testimonial column-${columns}` }>
			<div className={ 'ugb-testimonial-column-one' }>
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
											mediaID ? <div className="testimonial-image" style={{ backgroundImage: `url(${mediaURL})` }}></div> : __( 'Upload Image' )
										}
									</Button>
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ testimonialTitle }
					onChange={ (text) => setAttributes( { testimonialTitle: text } ) }
					isSelected={ isSelected && editable === 'testimonialTitle' }
					onFocus={ onSetActiveEditable( 'testimonialTitle' ) }
					style={ {
						color: titleColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ position }
					className={ 'ugb-testimonial-position' }
					onChange={ (text) => setAttributes( { position: text } ) }
					isSelected={ isSelected && editable === 'position' }
					onFocus={ onSetActiveEditable( 'position' ) }
					style={ {
						color: posColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ body }
					className={ 'ugb-testimonial-body' }
					onChange={ (text) => setAttributes( { body: text } ) }
					isSelected={ isSelected && editable === 'body' }
					onFocus={ onSetActiveEditable( 'body' ) }
					style={ {
						color: bodyTextColor
					} }
					keepPlaceholderOnFocus
				/>
			</div>
			<div className={ 'ugb-testimonial-column-two' }>
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
											mediaIDTwo ? <div className="testimonial-image" style={{ backgroundImage: `url(${mediaURLTwo})` }}></div> : __( 'Upload Image' )
										}
									</Button>
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ testimonialTitleTwo }
					onChange={ (text) => setAttributes( { testimonialTitleTwo: text } ) }
					isSelected={ isSelected && editable === 'testimonialTitleTwo' }
					onFocus={ onSetActiveEditable( 'testimonialTitleTwo' ) }
					style={ {
						color: titleColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ positionTwo }
					className={ 'ugb-testimonial-position-two' }
					onChange={ (text) => setAttributes( { positionTwo: text } ) }
					isSelected={ isSelected && editable === 'positionTwo' }
					onFocus={ onSetActiveEditable( 'positionTwo' ) }
					style={ {
						color: posColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ bodyTwo }
					className={ 'ugb-testimonial-body-two' }
					onChange={ (text) => setAttributes( { bodyTwo: text } ) }
					isSelected={ isSelected && editable === 'bodyTwo' }
					onFocus={ onSetActiveEditable( 'bodyTwo' ) }
					style={ {
						color: bodyTextColor
					} }
					keepPlaceholderOnFocus
				/>
			</div>
			<div className={ 'ugb-testimonial-column-three' }>
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
											mediaIDThree ? <div className="testimonial-image" style={{ backgroundImage: `url(${mediaURLThree})` }}></div> : __( 'Upload Image' )
										}
									</Button>
						} }
					/>
				</div>
				<RichText
					tagName={ 'h4' }
					value={ testimonialTitleThree }
					onChange={ (text) => setAttributes( { testimonialTitleThree: text } ) }
					isSelected={ isSelected && editable === 'testimonialTitleThree' }
					onFocus={ onSetActiveEditable( 'testimonialTitleThree' ) }
					style={ {
						color: titleColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ positionThree }
					className={ 'ugb-testimonial-position-three' }
					onChange={ (text) => setAttributes( { positionThree: text } ) }
					isSelected={ isSelected && editable === 'positionThree' }
					onFocus={ onSetActiveEditable( 'positionThree' ) }
					style={ {
						color: posColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					value={ bodyThree }
					className={ 'ugb-testimonial-body-three' }
					onChange={ (text) => setAttributes( { bodyThree: text } ) }
					isSelected={ isSelected && editable === 'bodyThree' }
					onFocus={ onSetActiveEditable( 'bodyThree' ) }
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
		testimonialTitle,
		testimonialTitleTwo,
		testimonialTitleThree,
		body,
		bodyTwo,
		bodyThree,
		position,
		positionTwo,
		positionThree,
		mediaURL,
		mediaURLTwo,
		mediaURLThree,
		mediaID,
		mediaIDTwo,
		mediaIDThree,
		titleColor,
		posColor,
		bodyTextColor,
		iconColor,
		columns
	} = props.attributes;

	const tesitimonialIcon = (
		<div key='button' className={ 'quote-icon' }>
			<svg viewBox="0 0 246 187.5" style={ { fill: iconColor } }>
				<path d="M98.5,0h-93C2.5,0,0,2.5,0,5.5v93c0,3,2.5,5.5,5.5,5.5h39c-1.7,15.5-8.8,50-39,50c-3,0-5.5,2.5-5.5,5.5V182c0,3,2.5,5.5,5.5,5.5c5.2,0,98.5-4.5,98.5-89v-93C104,2.5,101.5,0,98.5,0z"/>
				<path d="M240.5,0h-93c-3,0-5.5,2.5-5.5,5.5v93c0,3,2.5,5.5,5.5,5.5h39c-1.7,15.5-8.8,50-39,50c-3,0-5.5,2.5-5.5,5.5V182c0,3,2.5,5.5,5.5,5.5c5.2,0,98.5-4.5,98.5-89v-93C246,2.5,243.5,0,240.5,0z"/>
				<path d="M161.3-86.3c3.2,0,3.2-5,0-5C158.1-91.3,158.1-86.3,161.3-86.3L161.3-86.3z"/>
			</svg>
		</div>
	)

	return (
		<div className={ `ugb-testimonial column-${columns}` }>
			<div className={ 'ugb-testimonial-column-one' }>
				{ mediaURL ? <div className="testimonial-image" style={{ backgroundImage: `url(${mediaURL})` }} data-src={mediaURL}></div> : tesitimonialIcon }
				{ testimonialTitle && !! testimonialTitle.length && (
					<h4 style={ { color: titleColor } }>
						{ testimonialTitle }
					</h4>
				) }
				{ position && !! position.length && (
					<p className={ 'ugb-testimonial-position' } style={ { color: posColor } }>
						{ position }
					</p>
				) }
				{ body && !! body.length && (
					<p className={ 'ugb-testimonial-body' } style={ { color: bodyTextColor } }>
						{ body }
					</p>
				) }
			</div>
			{ columns > 1 && (
				<div className={ 'ugb-testimonial-column-two' }>
					{ mediaURLTwo ? <div className="testimonial-image" style={{ backgroundImage: `url(${mediaURLTwo})` }} data-src={mediaURLTwo}></div> : tesitimonialIcon }
					{ testimonialTitleTwo && !! testimonialTitleTwo.length && (
						<h4 style={ { color: titleColor } }>
							{ testimonialTitleTwo }
						</h4>
					) }
					{ positionTwo && !! positionTwo.length && (
						<p className={ 'ugb-testimonial-position-two' } style={ { color: posColor } }>
							{ positionTwo }
						</p>
					) }
					{ bodyTwo && !! bodyTwo.length && (
						<p className={ 'ugb-testimonial-body-two' } style={ { color: bodyTextColor } }>
							{ bodyTwo }
						</p>
					) }
				</div>
			) }
			{ columns > 2 && (
				<div className={ 'ugb-testimonial-column-three' }>
					{ mediaURLThree ? <div className="testimonial-image" style={{ backgroundImage: `url(${mediaURLThree})` }} data-src={mediaURLThree}></div> : tesitimonialIcon }
					{ testimonialTitleThree && !! testimonialTitleThree.length && (
						<h4 style={ { color: titleColor } }>
							{ testimonialTitleThree }
						</h4>
					) }
					{ positionThree && !! positionThree.length && (
						<p className={ 'ugb-testimonial-position-three' } style={ { color: posColor } }>
							{ positionThree }
						</p>
					) }
					{ bodyThree && !! bodyThree.length && (
						<p className={ 'ugb-testimonial-body-three' } style={ { color: bodyTextColor } }>
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
registerBlockType( 'ugb/testimonial', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Testimonial' ), // Block title.
	icon: TestimonialIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Testimonial' ),
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
			selector: '.ugb-testimonial-column-one .testimonial-image',
			attribute: 'data-src',
		},
		mediaURLTwo: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-testimonial-column-two .testimonial-image',
			attribute: 'data-src',
		},
		mediaURLThree: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-testimonial-column-three .testimonial-image',
			attribute: 'data-src',
		},
		testimonialTitle: {
			type: 'array',
			source: 'children',
			selector: '.ugb-testimonial-column-one h4',
			default: __( 'Ben Adams' ),
		},
		testimonialTitleTwo: {
			type: 'array',
			source: 'children',
			selector: '.ugb-testimonial-column-two h4',
			default: __( 'Alex Johnson' ),
		},
		testimonialTitleThree: {
			type: 'array',
			source: 'children',
			selector: '.ugb-testimonial-column-three h4',
			default: __( 'Sammy Simpson' ),
		},
		position: {
			type: 'array',
			source: 'children',
			selector: '.ugb-testimonial-position',
			default: __( 'Founder' ),
		},
		positionTwo: {
			type: 'array',
			source: 'children',
			selector: '.ugb-testimonial-position-two',
			default: __( 'Editor' ),
		},
		positionThree: {
			type: 'array',
			source: 'children',
			selector: '.ugb-testimonial-position-three',
			default: __( 'Programmer' ),
		},
		body: {
			type: 'array',
			source: 'children',
			selector: '.ugb-testimonial-body',
			default: __( 'Stackable: Ultimate Blocks from Gutenberg has all the blocks I need to make a great webpage.' ),
		},
		bodyTwo: {
			type: 'array',
			source: 'children',
			selector: '.ugb-testimonial-body-two',
			default: __( 'Stackable: Ultimate Blocks from Gutenberg has all the blocks I need to make a great webpage.' ),
		},
		bodyThree: {
			type: 'array',
			source: 'children',
			selector: '.ugb-testimonial-body-three',
			default: __( 'Stackable: Ultimate Blocks from Gutenberg has all the blocks I need to make a great webpage.' ),
		},
		titleColor: {
			type: 'string',
		},
		posColor: {
			type: 'string',
		},
		bodyTextColor: {
			type: 'string',
		},
		iconColor: {
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
