/**
 * BLOCK: Image Box Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { PictureIcon } from '../../icons'

import {
	registerBlockType,
	__,
	IconButton,
	PanelColor,
	Toolbar,
	Button,
	withState,
	RangeControl,
	SelectControl,
	ToggleControl,
	RichText,
	MediaUpload,
	BlockControls,
	InspectorControls,
	ColorPalette,
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
		title,
		titleColor,
		subtitle,
		subtitleColor,
		overlayColor,
		id,
		height,
		width,
		verticalAlign,
		horizontalAlign,
		full
	} = props.attributes

	const imageClass = url ? 'has-image' : ''

	const fullWidth = full ? 'full-width': ''

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } )
	}

	const vertical = [
		{ value: 'flex-start', label: __( 'Top' ) },
		{ value: 'center', label: __( 'Center' ) },
		{ value: 'flex-end', label: __( 'Bottom' ) }
	];

	const horizontal = [
		{ value: 'flex-start', label: __( 'Left' ) },
		{ value: 'center', label: __( 'Center' ) },
		{ value: 'flex-end', label: __( 'Right' ) },
	];

	return [
		isSelected  && (
			<BlockControls key='controls'>
				{ url && (
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
				)}
			</BlockControls>
		),
		isSelected && (
			<InspectorControls key={ 'inspector' }>
				<ToggleControl
					label='Full-Width'
					checked={ !! full }
					onChange={ () => setAttributes( { full: ! full } ) }
				/>
				<RangeControl
					label={ __( 'Height' ) }
					value={ height }
					min='135'
					max='700'
					onChange={ ( height ) => setAttributes( { height: height } ) }
				/>
				<RangeControl
					label={ __( 'Width' ) }
					value={ width }
					min='400'
					max='999'
					onChange={ ( width ) => setAttributes( { width: width } ) }
				/>
				<SelectControl
					label={ __( 'Vertical Alignment' ) }
					value={ verticalAlign }
					options={ vertical.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( newSize ) => { setAttributes( { verticalAlign: newSize } ) } }
				/>
				<SelectControl
					label={ __( 'Horizontal Alignment' ) }
					value={ horizontalAlign }
					options={ horizontal.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( newSize ) => { setAttributes( { horizontalAlign: newSize } ) } }
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
					title={ __( 'Overlay Color' ) }
					colorValue={ overlayColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ overlayColor }
						onChange={ ( colorValue ) => setAttributes( { overlayColor: colorValue } ) }
					/>
				</PanelColor>
			</InspectorControls>
		),
		<div key={'editable'}
			className={ `ugb-image-box ${imageClass} ${fullWidth}` }
			data-url={ url }
			style={ {
				width: width + 'px',
				height: height + 'px',
				backgroundImage: `url(${url})`,
				alignItems: horizontalAlign,
				justifyContent: verticalAlign
			} }
		>
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
			<a href="#" style={ { backgroundColor: overlayColor } } />
			<RichText
				tagName="h4"
				placeholder={ title.default }
				value={ title }
				onChange={ ( value ) => setAttributes( { title: value } ) }
				isSelected={ isSelected && editable === 'title' }
				onFocus={ onSetActiveEditable( 'title' ) }
				style={ {
					color: titleColor
				} }
			/>
			<RichText
				tagName="p"
				placeholder={ subtitle.default }
				value={ subtitle }
				onChange={ ( value ) => setAttributes( { subtitle: value } ) }
				isSelected={ isSelected && editable === 'subtitle' }
				onFocus={ onSetActiveEditable( 'subtitle' ) }
				style={ {
					color: subtitleColor
				} }
			/>
		</div>
	];
}

export const save = ( props ) => {
	const {
		url,
		title,
		titleColor,
		subtitle,
		subtitleColor,
		overlayColor,
		id,
		height,
		width,
		verticalAlign,
		horizontalAlign,
		full
	} = props.attributes

	const imageClass = url ? 'has-image' : ''

	const fullWidth = full ? 'full-width': ''

	const displayNone = ( ! title.length && ! subtitle.length ) ? 'has-no-content' : 'has-content'

	return (
		<div className={ `ugb-image-box ${imageClass} ${displayNone} ${fullWidth}` }
			data-url={ url }
			style={ {
				width: width + 'px',
				height: height + 'px',
				backgroundImage: `url(${url})`,
				alignItems: horizontalAlign,
				justifyContent: verticalAlign
			} }
		>
			<a href="#" style={ { backgroundColor: overlayColor } } />
			{ title && !! title.length && (
				<h4 style={ { color: titleColor } }>
					{ title }
				</h4>
			) }
			{ subtitle && !! subtitle.length && (
				<p style={ { color: subtitleColor } }>
					{ subtitle }
				</p>
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
registerBlockType( 'ugb/image-box', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Image Box' ), // Block title.
	icon: PictureIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Image Box' ),
		__( 'Stackable' ),
	],
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h4',
			default: __( 'Title' )
		},
		subtitle: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: __( 'Subtitle goes here' )
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-image-box',
			attribute: 'data-url',
		},
		titleColor: {
			type: 'string',
			default: '#ffffff',
		},
		subtitleColor: {
			type: 'string',
			default: '#ffffff',
		},
		overlayColor: {
			type: 'string',
			default: '#42b078'
		},
		id: {
			type: 'number',
		},
		width: {
			type: 'number',
			default: '400'
		},
		height: {
			type: 'number',
			default: '400'
		},
		verticalAlign: {
			type: 'string',
			default: 'center'
		},
		horizontalAlign: {
			type: 'string',
			default: 'center'
		},
		full: {
			type: 'boolean',
			default: false
		}
	},

	// The "edit" property must be a valid function.
	edit: withState( { editable: 'content', } )( edit ),

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
