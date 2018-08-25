/**
 * BLOCK: Card Block.
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
	IconButton,
	Dashicon,
	withState,
	SelectControl,
	RangeControl,
	Toolbar,
	InspectorControls,
	RichText,
	ColorPalette,
	MediaUpload,
	BlockControls,
	UrlInput,
	AlignmentToolbar,
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
		heading,
		tagline,
		des,
		mediaID,
		mediaURL,
		headingColor,
		taglineColor,
		desColor,
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		size,
		cornerButtonRadius,
		contentAlign
	} = props.attributes;

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } )
	}

	const imageClass = mediaURL ? 'has-image' : ''

	const buttonSizes = [
		{ value: 'small', label: __( 'Small' ) },
		{ value: 'normal', label: __( 'Normal' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'large', label: __( 'Large' ) },
	];

	return [
		isSelected && (
			<BlockControls key='controls'>
				<AlignmentToolbar
					value={ contentAlign }
					onChange={ ( newAlign ) => setAttributes( { contentAlign: newAlign } ) }
				/>
				<Toolbar>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { mediaURL: media.url, mediaID: media.id } ) }
						type="image"
						value={ mediaID }
						render={ ( { open } ) => (
							<IconButton
								className="components-toolbar__control"
								label={ __( 'Edit image' ) }
								icon="edit"
								onClick={ open }
							/>
						) }
					/>
				</Toolbar>
			</BlockControls>
		),
		isSelected && (
			<InspectorControls key={ 'inspector' }>
				<PanelColor
					title={ __( 'Heading Color' ) }
					colorValue={ headingColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ headingColor }
						onChange={ ( colorValue ) => setAttributes( { headingColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Tagline Color' ) }
					colorValue={ taglineColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ taglineColor }
						onChange={ ( colorValue ) => setAttributes( { taglineColor: colorValue } ) }
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
				<h2>Button Settings</h2>
				<SelectControl
					label={ __( 'Button Size' ) }
					value={ size }
					options={ buttonSizes.map( ({ value, label }) => ( {
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
					title={ __( 'Button Color' ) }
					colorValue={ buttonColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ buttonColor }
						onChange={ ( colorValue ) => setAttributes( { buttonColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Button Text Color' ) }
					colorValue={ buttonTextColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ buttonTextColor }
						onChange={ ( colorValue ) => setAttributes( { buttonTextColor: colorValue } ) }
					/>
				</PanelColor>
			</InspectorControls>
		),
		<div key={'editable'} className={ `ugb-card ${imageClass}` }>
			<div className='ugb-card-image-container' style={{ backgroundImage: `url(${mediaURL})`, textAlign: contentAlign }}>
				<MediaUpload
					onSelect={ ( media ) => setAttributes( { mediaURL: media.url, mediaID: media.id } ) }
					type={'image'}
					value={mediaID}
					render={ function( obj ) {
						return [
							! mediaURL && (
								<Button
									className={ mediaID ? '' : 'button button-large' }
									onClick={ obj.open }
								>
									{__('Upload Image')}
								</Button>
							)
						]
					} }
				/>
			</div>
			<RichText
				tagName={ 'h4' }
				value={ heading }
				className={ 'ugb-card-heading' }
				onChange={ (text) => setAttributes( { heading: text } ) }
				isSelected={ isSelected && editable === 'heading' }
				onFocus={ onSetActiveEditable( 'heading' ) }
				style={ {
					color: headingColor,
					textAlign: contentAlign
				} }
				keepPlaceholderOnFocus
			/>
			<RichText
				tagName={'p'}
				value={ tagline }
				className={ 'ugb-tagline' }
				onChange={ (text) => setAttributes( { tagline: text } ) }
				isSelected={ isSelected && editable === 'tagline' }
				onFocus={ onSetActiveEditable( 'tagline' ) }
				style={ {
					color: taglineColor,
					textAlign: contentAlign
				} }
				keepPlaceholderOnFocus
			/>
			<RichText
				tagName={'p'}
				value={ des }
				className={ 'ugb-card-des' }
				onChange={ (text) => setAttributes( { des: text } ) }
				isSelected={ isSelected && editable === 'des' }
				onFocus={ onSetActiveEditable( 'des' ) }
				style={ {
					color: desColor,
					textAlign: contentAlign
				} }
				keepPlaceholderOnFocus
			/>
			<span key={ 'button' }
				className={ `wp-block-button ugb-button-${contentAlign}` }>
				<RichText
					tagName={ 'span' }
					placeholder={ buttonText.default }
					value={ buttonText }
					onChange={ (text) => setAttributes( { buttonText: text } ) }
					className={`wp-ugb-button ugb-button-${size}`}
					style={ {
						backgroundColor: buttonColor,
						color: buttonTextColor,
						borderRadius: cornerButtonRadius + 'px',
					} }
					isSelected={ isSelected && editable === 'buttonText' }
					onFocus={ onSetActiveEditable( 'buttonText' ) }
					keepPlaceholderOnFocus
				/>
			</span>
		</div>,
		isSelected && (
		   <form
			   key={ 'form-link' }
			   onSubmit={ ( event ) => event.preventDefault() }
			   className={ `blocks-button__inline-link ugb-button-${contentAlign}` }
			   style={{ marginTop: 10 }}
			   >
			   <Dashicon icon={ 'admin-links' } />
			   <UrlInput
				   value={ buttonURL }
				   onChange={ ( value ) => setAttributes( { buttonURL: value } ) }
			   />
			   <IconButton
				   icon={ 'editor-break' }
				   label={ __( 'Apply' ) }
				   type={ 'submit' }
			   />
		   </form>
	   )
	];
}

export const save = ( props ) => {

	const {
		heading,
		tagline,
		des,
		mediaURL,
		mediaID,
		headingColor,
		taglineColor,
		desColor,
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		size,
		cornerButtonRadius,
		contentAlign
	} = props.attributes;

	const buttonStyle = {
		backgroundColor: buttonColor,
		color: buttonTextColor,
		borderRadius: cornerButtonRadius + 'px',
	}

	const imageClass = mediaURL ? 'has-image' : ''

	const displayNone = ( ! heading.length && ! tagline.length && ! des.length && ! buttonText.length ) ? 'has-no-content' : 'has-content'

	return (
		<div className={ `ugb-card ${imageClass} ${displayNone}` }>
			{ mediaURL && <div className="ugb-card-image-container" style={{ backgroundImage: `url(${mediaURL})`, textAlign: contentAlign }} data-src={mediaURL}></div> }
			{ heading && !! heading.length && (
				<h4 style={ { color: headingColor, textAlign: contentAlign } }>
					{ heading }
				</h4>
			) }
			{ tagline && !! tagline.length && (
				<p className={ 'ugb-tagline' } style={ { color: taglineColor, textAlign: contentAlign } }>
					{ tagline }
				</p>
			) }
			{ des && !! des.length && (
				<p className={ 'ugb-card-des' } style={ { color: desColor, textAlign: contentAlign } }>
					{ des }
				</p>
			) }
			{ buttonText && !! buttonText.length && (
				<a
					href={ buttonURL }
					className={ `wp-ugb-button wp-block-button ugb-button-${size} ugb-button-${contentAlign}` }
					style={ buttonStyle }>
					{ buttonText }
				</a>
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
registerBlockType( 'ugb/card', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Card' ), // Block title.
	icon: TeamMemberIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Card' ),
		__( 'Stackable' ),
	],
	attributes: {
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-card-image-container',
			attribute: 'data-src',
		},
		heading: {
			type: 'array',
			source: 'children',
			selector: '.ugb-card h4',
			default: __( 'Ben Adams' )
		},
		tagline: {
			type: 'array',
			source: 'children',
			selector: '.ugb-tagline',
			default: __( 'Ben is the head of our small team' )
		},
		des: {
			type: 'array',
			source: 'children',
			selector: '.ugb-card-des',
			default: __( 'Ben is the head of our small team. He loves walking his dog, Walter, when he has some free time.' )
		},
		headingColor: {
			type: 'string',
		},
		taglineColor: {
			type: 'string',
		},
		desColor: {
			type: 'string',
		},
		buttonURL: {
			type: 'string',
			source: 'attribute',
			selector: '.wp-ugb-button',
			attribute: 'href',
		},
		buttonText: {
			type: 'array',
			source: 'children',
			selector: '.wp-block-button',
			default: __( 'Button' )
		},
		buttonColor: {
			type: 'string',
			default: '#2091e1',
		},
		buttonTextColor: {
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
		},
		contentAlign: {
			type: 'string',
			default: 'left',
		},
	},

	// The "edit" property must be a valid function.
	edit: withState( { editable: 'content', } )( edit ),

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
