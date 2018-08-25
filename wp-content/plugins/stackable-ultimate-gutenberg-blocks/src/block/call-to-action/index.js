/**
 * BLOCK: CTA Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */


//  Import CSS.
import './style.scss';
import './editor.scss';
import { CTAIcon } from '../../icons'

import {
	registerBlockType,
	__,
	PanelColor,
	Dashicon,
	IconButton,
	withState,
	SelectControl,
	RangeControl,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	RichText,
	ColorPalette,
	UrlInput,
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
		url,
		buttonText,
		ctaTitle,
		bodyText,
		color,
		textColor,
		size,
		borderButtonRadius,
		bodyTextColor,
		titleColor,
		bgColor
	} = props.attributes;

	const linkOptions = [
		{ value: 'small', label: __( 'Small' ) },
		{ value: 'normal', label: __( 'Normal' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'large', label: __( 'Large' ) },
	];

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } )
	}

	return [
		<div key={'editable'} className={ 'ugb-cta' } style={ { backgroundColor: bgColor } }>
			<RichText
				className={ 'ugb-cta-title' }
				tagName={ 'h3' }
				placeholder={ __('Add Title') }
				value={ ctaTitle }
				onChange={ (text) => setAttributes( { ctaTitle: text } ) }
				isSelected={ isSelected && editable === 'ctaTitle' }
				onFocus={ onSetActiveEditable( 'ctaTitle' ) }
				keepPlaceholderOnFocus
				style={ {
					color: titleColor,
				} }
			/>
			<RichText
				tagName={'p'}
				value={ bodyText }
				className={ 'ugb-cta-bodyText' }
				onChange={ (text) => setAttributes( { bodyText: text } ) }
				isSelected={ isSelected && editable === 'bodyText' }
				onFocus={ onSetActiveEditable( 'bodyText' ) }
				placeholder={ __( 'Write body text…' ) }
				style={ {
					color: bodyTextColor,
				} }
			/>
			<span key={ 'button' }
				className={ `wp-block-button ugb-cta-button` }>
				<RichText
					tagName={ 'span' }
					placeholder={ __( 'Add Text' ) }
					value={ buttonText }
					onChange={ (text) => setAttributes( { buttonText: text } ) }
					isSelected={ isSelected && editable === 'buttonText' }
					onFocus={ onSetActiveEditable( 'buttonText' ) }
					className={`wp-ugb-button ugb-button-${size}`}
					style={ {
						backgroundColor: color,
						color: textColor,
						borderRadius: borderButtonRadius + 'px',
					} }
					keepPlaceholderOnFocus
				/>
				{
					isSelected &&
					<InspectorControls key={ 'inspector' }>
						<SelectControl
							label={ __( 'Button Size' ) }
							value={ size }
							options={ linkOptions.map( ({ value, label }) => ( {
								value: value,
								label: label,
							} ) ) }
							onChange={ ( newSize ) => { setAttributes( { size: newSize } ) } }
						/>
						<RangeControl
							label={ __( 'Button Border Radius' ) }
							value={ borderButtonRadius }
							min='1'
							max='50'
							onChange={ ( borderRad ) => setAttributes( { borderButtonRadius: borderRad } ) }
						/>
						<PanelColor
							title={ __( 'Title Color' ) }
							colorValue={ titleColor }
							initialOpen={ false }
						>
							<ColorPalette
								value={ color }
								onChange={ ( colorValue ) => setAttributes( { titleColor: colorValue } ) }
							/>
						</PanelColor>
						<PanelColor
							title={ __( 'Body Text Color' ) }
							colorValue={ bodyTextColor }
							initialOpen={ false }
						>
							<ColorPalette
								value={ color }
								onChange={ ( colorValue ) => setAttributes( { bodyTextColor: colorValue } ) }
							/>
						</PanelColor>
						<PanelColor
							title={ __( 'Button Background Color' ) }
							colorValue={ color }
							initialOpen={ false }
						>
							<ColorPalette
								value={ color }
								onChange={ ( colorValue ) => setAttributes( { color: colorValue } ) }
							/>
						</PanelColor>
						<PanelColor
							title={ __( 'Button Text Color' ) }
							colorValue={ textColor }
							initialOpen={ false }
						>
							<ColorPalette
								value={ textColor }
								onChange={ ( colorValue ) => setAttributes( { textColor: colorValue } ) }
							/>
						</PanelColor>
						<PanelColor
							title={ __( 'Background Color' ) }
							colorValue={ bgColor }
							initialOpen={ false }
						>
							<ColorPalette
								value={ bgColor }
								onChange={ ( colorValue ) => setAttributes( { bgColor: colorValue } ) }
							/>
						</PanelColor>
					</InspectorControls>
				}
			</span>
			{
				isSelected && (
					<form
						key={ 'form-link' }
						onSubmit={ ( event ) => event.preventDefault() }
						className={ `blocks-button__inline-link`}>
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
				)
			}
		</div>
	];
}

export const save = ( props ) => {

	const {
		url,
		buttonText,
		ctaTitle,
		bodyText,
		color,
		textColor,
		size,
		borderButtonRadius,
		bodyTextColor,
		titleColor,
		bgColor
	} = props.attributes;

	const buttonStyle = {
		backgroundColor: color,
		color: textColor,
		borderRadius: borderButtonRadius + 'px',
	}

	return (
		<div className={ `ugb-cta` } style={ { backgroundColor: bgColor } }>
			{ ctaTitle && !! ctaTitle.length && (
				<h3
					className={ 'ugb-cta-title' }
					style={ { color: titleColor } }>
					{ctaTitle}
				</h3>
			) }
			{ bodyText && !! bodyText.length && (
				<p
					className={ 'ugb-cta-bodyText' }
					style={ { color: bodyTextColor } }>
					{bodyText}
				</p>
			) }
			{ buttonText && !! buttonText.length && (
				<a
					href={ url }
					className={ `wp-ugb-button ugb-cta-button ugb-button-${size}` }
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
registerBlockType( 'ugb/cta', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Call to Action' ), // Block title.
	icon: CTAIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Call to Action' ),
		__( 'Stackable' ),
		__( 'CTA' ),
	],
	attributes: {
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		ctaTitle: {
			type: 'array',
			source: 'children',
			selector: 'h3',
			default: __( 'Get Started Today' )
		},
		bodyText: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: __( 'Get Stackable: Ultimate Gutenberg Blocks today.  Apart from adding new blocks, it gives Gutenberg users more options and settings to tinker with, expanding Gutenberg’s functionality.' )
		},
		buttonText: {
			type: 'array',
			source: 'children',
			selector: 'a',
		},
		color: {
			type: 'string',
			default: '#2091e1',
		},
		textColor: {
			type: 'string',
			default: '#ffffff',
		},
		titleColor: {
			type: 'string',
		},
		bodyTextColor: {
			type: 'string',
		},
		bgColor: {
			type: 'string',
		},
		size: {
			type: 'string',
			default: 'normal',
		},
		borderButtonRadius: {
			type: 'number',
			default: 4,
		}
	},

	// The "edit" property must be a valid function.
	edit: withState( { editable: 'content', } ) ( edit ),

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
