/**
 * BLOCK: Header Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import classnames from 'classnames';

//  Import CSS.
import './style.scss';
import './editor.scss';
import { HeaderIcon } from '../../icons'

import {
	registerBlockType,
	__,
	IconButton,
	PanelColor,
	Dashicon,
	RangeControl,
	SelectControl,
	Toolbar,
	Button,
	withState,
	RichText,
	AlignmentToolbar,
	MediaUpload,
	BlockControls,
	InspectorControls,
	ColorPalette,
	UrlInput
} from '../../wp-imports'

export const edit = ( props ) => {

	const {
		className,
		setAttributes,
		isSelected,
		editable,
		setState
	} = props

	const {
		url,
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		cornerButtonRadius,
		size,
		title,
		titleColor,
		subtitle,
		subtitleColor,
		contentAlign,
		id,
		backgroundColor,
		opacity,
	} = props.attributes

	const style = url ? { backgroundImage: `url(${ url })` } : undefined

	const imageClass = url ? 'has-image' : ''

	const opacityClass = classnames(
						opacityToClass( opacity ),
						{
							'overlay-opacity': opacity !== 0,
						}
					);

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } )
	}

	const buttonSizes = [
		{ value: 'small', label: __( 'Small' ) },
		{ value: 'normal', label: __( 'Normal' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'large', label: __( 'Large' ) },
	];

	return [
		isSelected  && (
			<BlockControls key='controls'>
				<AlignmentToolbar
					value={ contentAlign }
					onChange={ ( newAlign ) => setAttributes( { contentAlign: newAlign } ) }
				/>
				<Toolbar>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { url: media.url, id: media.id } ) }
						type="image"
						value={ id }
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
					title={ __( 'Subtitle Color' ) }
					colorValue={ subtitleColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ subtitleColor }
						onChange={ ( colorValue ) => setAttributes( { subtitleColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Heading Background Color' ) }
					colorValue={ backgroundColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ backgroundColor }
						onChange={ ( colorValue ) => setAttributes( { backgroundColor: colorValue } ) }
					/>
				</PanelColor>
				<RangeControl
					label={ __( 'Background Opacity' ) }
					value={ opacity }
					min={ 0 }
					max={ 10 }
					step={ 1 }
					onChange={ ( ratio ) => setAttributes( { opacity: ratio } ) }
				/>
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
		<div key={'editable'}
			className={ `ugb-header ${imageClass} ` }
		>
			<div className={ `ugb-header-overlay ${opacityClass}` }
				style={ {
					backgroundColor: backgroundColor,
				} }
			>
			</div>
			<MediaUpload
				onSelect={ ( media ) => setAttributes( { url: media.url, id: media.id } ) }
				type={'image'}
				value={id}
				render={ function( obj ) {
					return [
						! url && (
							<Button
								className={ id ? '' : 'button button-large' }
								onClick={ obj.open }
							>
								{__('Upload Image')}
							</Button>
						)
					]
				} }
			/>
			<section
				key="preview"
				data-url={ url }
				style={ style }
				className={ 'ugb-header-section' }
			>
				<RichText
					tagName="h2"
					className={ 'ugb-header-title' }
					placeholder={ title.default }
					value={ title }
					onChange={ ( value ) => setAttributes( { title: value } ) }
					isSelected={ isSelected && editable === 'title' }
					onFocus={ onSetActiveEditable( 'title' ) }
					style={ {
						textAlign: contentAlign,
						color: titleColor
					} }
				/>
				<RichText
					tagName="p"
					className={ 'ugb-header-subtitle' }
					placeholder={ subtitle.default }
					value={ subtitle }
					onChange={ ( value ) => setAttributes( { subtitle: value } ) }
					isSelected={ isSelected && editable === 'subtitle' }
					onFocus={ onSetActiveEditable( 'subtitle' ) }
					style={ {
						textAlign: contentAlign,
						color: subtitleColor
					} }
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

			</section>
		</div>,
		isSelected && (
		   <form
			   key={ 'form-link' }
			   onSubmit={ ( event ) => event.preventDefault() }
			   className={ `blocks-button__inline-link ugb-button-${contentAlign}`}>
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
		url,
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		cornerButtonRadius,
		size,
		title,
		titleColor,
		subtitle,
		subtitleColor,
		contentAlign,
		id,
		backgroundColor,
		opacity
	} = props.attributes

	const buttonStyle = {
		backgroundColor: buttonColor,
		color: buttonTextColor,
		borderRadius: cornerButtonRadius + 'px',
	}

	const style = url ? { backgroundImage: `url(${ url })` } : undefined

	const imageClass = url ? 'has-image' : ''

	const opacityClass = classnames(
						opacityToClass( opacity ),
						{
							'overlay-opacity': opacity !== 0,
						}
					);

	const displayNone = ( ! title.length && ! subtitle.length && ! buttonText.length ) ? 'has-no-content' : 'has-content'

	return (
		<div className={ `ugb-header ${imageClass} ${displayNone}` }>
			<div className={ `ugb-header-overlay ${opacityClass}` }
				style={ { backgroundColor: backgroundColor } }>
			</div>
			<section
				key="preview"
				data-url={ url }
				style={ style }
				className={ 'ugb-header-section' }>
				{ title && !! title.length && (
					<h2 className={ 'ugb-header-title' } style={ { color: titleColor } }>
						{ title }
					</h2>
				) }
				{ subtitle && !! subtitle.length && (
					<p className={ 'ugb-header-subtitle' } style={ { color: subtitleColor } }>
						{ subtitle }
					</p>
				) }
				{ buttonText && !! buttonText.length && (
					<a
						href={ buttonURL }
						className={ `wp-ugb-button ugb-button-${size}` }
						style={ buttonStyle }>
						{ buttonText }
					</a>
				) }
			</section>
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
registerBlockType( 'ugb/header', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Header' ), // Block title.
	icon: HeaderIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Header' ),
		__( 'Stackable' ),
	],
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2',
			default: __( 'Heading Title' )
		},
		subtitle: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tincidunt nisit ut pretium. Duis blandit, tortor et suscipit tincidunt, dolor metus mattis neque, ac varius magna nibh ac tortor.' )
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-header .ugb-header-section',
			attribute: 'data-url',
		},
		buttonURL: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		titleColor: {
			type: 'string',
			default: '#ffffff',
		},
		subtitleColor: {
			type: 'string',
			default: '#ffffff',
		},
		buttonText: {
			type: 'array',
			source: 'children',
			selector: '.ugb-header a.wp-ugb-button',
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
			default: 'center',
		},
		id: {
			type: 'number',
		},
		backgroundColor: {
			type: 'string',
			default: '#000000',
		},
		opacity: {
			type: 'number',
			default: 5,
		},
	},

	// The "edit" property must be a valid function.
	edit: withState( { editable: 'content', } )( edit ),

	// The "save" property must be specified and must be a valid function.
	save: save,
} );

function opacityToClass( ratio ) {
	return ( ratio === 0 ) ?
		null :
		'overlay-opacity-' + ( 1 * Math.round( ratio / 1 ) );
}
