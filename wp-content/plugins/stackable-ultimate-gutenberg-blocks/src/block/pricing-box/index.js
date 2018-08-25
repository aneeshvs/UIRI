/**
 * BLOCK: Pricing Box Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { PricingIcon } from '../../icons'

import {
	registerBlockType,
	__,
	PanelColor,
	SelectControl,
	withState,
	Dashicon,
	IconButton,
	RangeControl,
	InspectorControls,
	RichText,
	ColorPalette,
	BlockControls,
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
		url2,
		url3,
		pricingBoxTitle,
		pricingBoxTitle2,
		pricingBoxTitle3,
		price,
		price2,
		price3,
		perMonthLabel,
		perMonthLabel2,
		perMonthLabel3,
		buttonText,
		buttonText2,
		buttonText3,
		featureList,
		featureList2,
		featureList3,
		pricingBoxColor,
		priceColor,
		perMonthLabelColor,
		buttonColor,
		buttonTextColor,
		featureListColor,
		columns,
		size,
		cornerButtonRadius
	} = props.attributes;

	const column = [
		{ value: '1', label: __( 'One Column' ) },
		{ value: '2', label: __( 'Two Column' ) },
		{ value: '3', label: __( 'Three Column' ) },
	];

	const buttonSizes = [
		{ value: 'small', label: __( 'Small' ) },
		{ value: 'normal', label: __( 'Normal' ) },
		{ value: 'medium', label: __( 'Medium' ) },
		{ value: 'large', label: __( 'Large' ) },
	];

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } )
	}

	return [
		isSelected && <BlockControls key="controls"/>,
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
				<RangeControl
					label={ __( 'Corner Radius' ) }
					value={ cornerButtonRadius }
					min='1'
					max='50'
					onChange={ ( cornerRad ) => setAttributes( { cornerButtonRadius: cornerRad } ) }
				/>
				<PanelColor
					title={ __( 'Pricing Title Color' ) }
					colorValue={ pricingBoxColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ pricingBoxColor }
						onChange={ ( colorValue ) => setAttributes( { pricingBoxColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Price Color' ) }
					colorValue={ priceColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ priceColor }
						onChange={ ( colorValue ) => setAttributes( { priceColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Per Month Label Color' ) }
					colorValue={ perMonthLabelColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ perMonthLabelColor }
						onChange={ ( colorValue ) => setAttributes( { perMonthLabelColor: colorValue } ) }
					/>
				</PanelColor>
				<PanelColor
					title={ __( 'Feature List Color' ) }
					colorValue={ featureListColor }
					initialOpen={ false }
				>
					<ColorPalette
						value={ featureListColor }
						onChange={ ( colorValue ) => setAttributes( { featureListColor: colorValue } ) }
					/>
				</PanelColor>
				<SelectControl
					label={ __( 'Button Size' ) }
					value={ size }
					options={ buttonSizes.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( newSize ) => { setAttributes( { size: newSize } ) } }
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
		<div key={'editable'} className={ `ugb-pricing-box column-${columns}` }>
			<div className={ 'ugb-pricing-box-column-one' }>
				<RichText
					tagName={ 'h3' }
					// placeholder={ pricingBoxTitle.default }
					value={ pricingBoxTitle }
					onChange={ (text) => setAttributes( { pricingBoxTitle: text } ) }
					isSelected={ isSelected && editable === 'pricingBoxTitle' }
					onFocus={ onSetActiveEditable( 'pricingBoxTitle' ) }
					style={ {
						color: pricingBoxColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					// placeholder={ price.default }
					value={ price }
					className={ 'ugb-pricing-box-pricing' }
					onChange={ (text) => setAttributes( { price: text } ) }
					isSelected={ isSelected && editable === 'price' }
					onFocus={ onSetActiveEditable( 'price' ) }
					style={ {
						color: priceColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					// placeholder={ perMonthLabel.default }
					value={ perMonthLabel }
					className={ 'ugb-pricing-box-per-month-label' }
					onChange={ (text) => setAttributes( { perMonthLabel: text } ) }
					focus={ isSelected && editable === 'perMonthLabel' }
					onFocus={ onSetActiveEditable( 'perMonthLabel' ) }
					style={ {
						color: perMonthLabelColor
					} }
					keepPlaceholderOnFocus
				/>
				<span key={ 'button' }
					// title={ title }
					className={ 'wp-block-button' }>
					<RichText
						tagName={ 'span' }
						// placeholder={ buttonText.default }
						value={ buttonText }
						onChange={ (text) => setAttributes( { buttonText: text } ) }
						className={`wp-ugb-button ugb-button-${size}`}
						isSelected={ isSelected && editable === 'buttonText' }
						onFocus={ onSetActiveEditable( 'buttonText' ) }
						style={ {
							backgroundColor: buttonColor,
							color: buttonTextColor,
							borderRadius: cornerButtonRadius + 'px',
						} }
						keepPlaceholderOnFocus
					/>
				</span>
				<RichText
					tagName={'p'}
					// placeholder={ featureList.default }
					value={ featureList }
					className={ 'ugb-pricing-box-feature-list' }
					onChange={ (text) => setAttributes( { featureList: text } ) }
					focus={ isSelected && editable === 'featureList' }
					onFocus={ onSetActiveEditable( 'featureList' ) }
					style={ {
						color: featureListColor
					} }
					keepPlaceholderOnFocus
				/>
				{
					isSelected && (
						<form
							key={ 'form-link' }
							onSubmit={ ( event ) => event.preventDefault() }
							className={ `blocks-button__inline-link pricing-box`}>
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
			<div className={ 'ugb-pricing-box-column-two' }>
				<RichText
					tagName={ 'h3' }
					// placeholder={ pricingBoxTitle2.default }
					value={ pricingBoxTitle2 }
					onChange={ (text) => setAttributes( { pricingBoxTitle2: text } ) }
					isSelected={ isSelected && editable === 'pricingBoxTitle2' }
					onFocus={ onSetActiveEditable( 'pricingBoxTitle2' ) }
					style={ {
						color: pricingBoxColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					// placeholder={ price2.default }
					value={ price2 }
					className={ 'ugb-pricing-box-pricing' }
					onChange={ (text) => setAttributes( { price2: text } ) }
					isSelected={ isSelected && editable === 'price2' }
					onFocus={ onSetActiveEditable( 'price2' ) }
					style={ {
						color: priceColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					// placeholder={ perMonthLabel2.default }
					value={ perMonthLabel2 }
					className={ 'ugb-pricing-box-per-month-label' }
					onChange={ (text) => setAttributes( { perMonthLabel2: text } ) }
					focus={ isSelected && editable === 'perMonthLabel2' }
					onFocus={ onSetActiveEditable( 'perMonthLabel2' ) }
					style={ {
						color: perMonthLabelColor
					} }
					keepPlaceholderOnFocus
				/>
				<span key={ 'button' }
					// title={ title }
					className={ 'wp-block-button' }>
					<RichText
						tagName={ 'span' }
						// placeholder={ buttonText2.default }
						value={ buttonText2 }
						onChange={ (text) => setAttributes( { buttonText2: text } ) }
						className={`wp-ugb-button ugb-button-${size}`}
						isSelected={ isSelected && editable === 'buttonText2' }
						onFocus={ onSetActiveEditable( 'buttonText2' ) }
						style={ {
							backgroundColor: buttonColor,
							color: buttonTextColor,
							borderRadius: cornerButtonRadius + 'px',
						} }
						keepPlaceholderOnFocus
					/>
				</span>
				<RichText
					tagName={'p'}
					// placeholder={ featureList2.default }
					value={ featureList2 }
					className={ 'ugb-pricing-box-feature-list' }
					onChange={ (text) => setAttributes( { featureList2: text } ) }
					focus={ isSelected && editable === 'featureList2' }
					onFocus={ onSetActiveEditable( 'featureList2' ) }
					style={ {
						color: featureListColor
					} }
					keepPlaceholderOnFocus
				/>
				{
					isSelected && (
						<form
							key={ 'form-link' }
							onSubmit={ ( event ) => event.preventDefault() }
							className={ `blocks-button__inline-link pricing-box`}>
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
			<div className={ 'ugb-pricing-box-column-three' }>
				<RichText
					tagName={ 'h3' }
					// placeholder={ pricingBoxTitle3.default }
					value={ pricingBoxTitle3 }
					onChange={ (text) => setAttributes( { pricingBoxTitle3: text } ) }
					isSelected={ isSelected && editable === 'pricingBoxTitle3' }
					onFocus={ onSetActiveEditable( 'pricingBoxTitle3' ) }
					style={ {
						color: pricingBoxColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					// placeholder={ price3.default }
					value={ price3 }
					className={ 'ugb-pricing-box-pricing' }
					onChange={ (text) => setAttributes( { price3: text } ) }
					isSelected={ isSelected && editable === 'price3' }
					onFocus={ onSetActiveEditable( 'price3' ) }
					style={ {
						color: priceColor
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName={'p'}
					// placeholder={ perMonthLabel3.default }
					value={ perMonthLabel3 }
					className={ 'ugb-pricing-box-per-month-label' }
					onChange={ (text) => setAttributes( { perMonthLabel3: text } ) }
					focus={ isSelected && editable === 'perMonthLabel3' }
					onFocus={ onSetActiveEditable( 'perMonthLabel3' ) }
					style={ {
						color: perMonthLabelColor
					} }
					keepPlaceholderOnFocus
				/>
				<span key={ 'button' }
					// title={ title }
					className={ 'wp-block-button' }>
					<RichText
						tagName={ 'span' }
						// placeholder={ buttonText3.default }
						value={ buttonText3 }
						onChange={ (text) => setAttributes( { buttonText3: text } ) }
						className={`wp-ugb-button ugb-button-${size}`}
						isSelected={ isSelected && editable === 'buttonText3' }
						onFocus={ onSetActiveEditable( 'buttonText3' ) }
						style={ {
							backgroundColor: buttonColor,
							color: buttonTextColor,
							borderRadius: cornerButtonRadius + 'px',
						} }
						keepPlaceholderOnFocus
					/>
				</span>
				<RichText
					tagName={'p'}
					// placeholder={ featureList3.default }
					value={ featureList3 }
					className={ 'ugb-pricing-box-feature-list' }
					onChange={ (text) => setAttributes( { featureList3: text } ) }
					focus={ isSelected && editable === 'featureList3' }
					onFocus={ onSetActiveEditable( 'featureList3' ) }
					style={ {
						color: featureListColor
					} }
					keepPlaceholderOnFocus
				/>
				{
					isSelected && (
						<form
							key={ 'form-link' }
							onSubmit={ ( event ) => event.preventDefault() }
							className={ `blocks-button__inline-link pricing-box`}>
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
		</div>
	];
}

export const save = ( props ) => {
	const {
		url,
		url2,
		url3,
		pricingBoxTitle,
		pricingBoxTitle2,
		pricingBoxTitle3,
		price,
		price2,
		price3,
		perMonthLabel,
		perMonthLabel2,
		perMonthLabel3,
		buttonText,
		buttonText2,
		buttonText3,
		featureList,
		featureList2,
		featureList3,
		pricingBoxColor,
		priceColor,
		perMonthLabelColor,
		buttonColor,
		buttonTextColor,
		featureListColor,
		columns,
		size,
		cornerButtonRadius
	} = props.attributes;

	const buttonStyle = {
		backgroundColor: buttonColor,
		color: buttonTextColor,
		borderRadius: cornerButtonRadius + 'px',
	}

	return (
		<div className={ `ugb-pricing-box column-${columns}` }>
			<div className={ 'ugb-pricing-box-column-one' }>
				{ pricingBoxTitle && !! pricingBoxTitle.length && (
					<h3 style={ { color: pricingBoxColor } }>
						{ pricingBoxTitle }
					</h3>
				) }
				{ price && !! price.length && (
					<p className={ 'ugb-pricing-box-pricing' } style={ { color: priceColor } }>
						{ price }
					</p>
				) }
				{ perMonthLabel && !! perMonthLabel.length && (
					<p className={ 'ugb-pricing-box-per-month-label' } style={ { color: perMonthLabelColor } }>
						{ perMonthLabel }
					</p>
				) }
				{ buttonText && !! buttonText.length && (
					<a
						href={ url }
						className={ `wp-ugb-button ugb-button-${size}` }
						style={ buttonStyle }>
						{ buttonText }
					</a>
				) }
				{ featureList && !! featureList.length && (
					<p className={ 'ugb-pricing-box-feature-list' } style={ { color: featureListColor } }>
						{ featureList }
					</p>
				) }
			</div>
			{ columns > 1 && (
				<div className={ 'ugb-pricing-box-column-two' }>
					{ pricingBoxTitle2 && !! pricingBoxTitle2.length && (
						<h3 style={ { color: pricingBoxColor } }>
							{ pricingBoxTitle2 }
						</h3>
					) }
					{ price2 && !! price2.length && (
						<p className={ 'ugb-pricing-box-pricing' } style={ { color: priceColor } }>
							{ price2 }
						</p>
					) }
					{ perMonthLabel2 && !! perMonthLabel2.length && (
						<p className={ 'ugb-pricing-box-per-month-label' } style={ { color: perMonthLabelColor } }>
							{ perMonthLabel2 }
						</p>
					) }
					{ buttonText2 && !! buttonText2.length && (
						<a
							href={ url2 }
							className={ `wp-ugb-button ugb-button-${size}` }
							style={ buttonStyle }>
							{ buttonText2 }
						</a>
					) }
					{ featureList2 && !! featureList2.length && (
						<p className={ 'ugb-pricing-box-feature-list' } style={ { color: featureListColor } }>
							{ featureList2 }
						</p>
					) }
				</div>
			) }
			{ columns > 2 && (
				<div className={ 'ugb-pricing-box-column-three' }>
					{ pricingBoxTitle3 && !! pricingBoxTitle3.length && (
						<h3 style={ { color: pricingBoxColor } }>
							{ pricingBoxTitle3 }
						</h3>
					) }
					{ price3 && !! price3.length && (
						<p className={ 'ugb-pricing-box-pricing' } style={ { color: priceColor } }>
							{ price3 }
						</p>
					) }
					{ perMonthLabel3 && !! perMonthLabel3.length && (
						<p className={ 'ugb-pricing-box-per-month-label' } style={ { color: perMonthLabelColor } }>
							{ perMonthLabel3 }
						</p>
					) }
					{ buttonText3 && !! buttonText3.length && (
						<a
							href={ url3 }
							className={ `wp-ugb-button ugb-button-${size}` }
							style={ buttonStyle }>
							{ buttonText3 }
						</a>
					) }
					{ featureList3 && !! featureList3.length && (
						<p className={ 'ugb-pricing-box-feature-list' } style={ { color: featureListColor } }>
							{ featureList3 }
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
registerBlockType( 'ugb/pricing-box', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Pricing Box' ), // Block title.
	icon: PricingIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Pricing Box' ),
		__( 'Stackable' ),
	],
	attributes: {
		url: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-pricing-box-column-one a',
			attribute: 'href',
		},
		url2: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-pricing-box-column-two a',
			attribute: 'href',
		},
		url3: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-pricing-box-column-three a',
			attribute: 'href',
		},
		pricingBoxTitle: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-one h3',
			default: __( 'Basic' ),
		},
		pricingBoxTitle2: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-two h3',
			default: __( 'Basic' ),
		},
		pricingBoxTitle3: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-three h3',
			default: __( 'Basic' ),
		},
		price: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-one .ugb-pricing-box-pricing',
			default: __( '$9' ),
		},
		price2: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-two .ugb-pricing-box-pricing',
			default: __( '$9' ),
		},
		price3: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-three .ugb-pricing-box-pricing',
			default: __( '$9' ),
		},
		perMonthLabel: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-one .ugb-pricing-box-per-month-label',
			default: __( 'per month' ),
		},
		perMonthLabel2: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-two .ugb-pricing-box-per-month-label',
			default: __( 'per month' ),
		},
		perMonthLabel3: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-three .ugb-pricing-box-per-month-label',
			default: __( 'per month' ),
		},
		buttonText: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-one a',
			default: __( 'Buy Now'),
		},
		buttonText2: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-two a',
			default: __( 'Buy Now'),
		},
		buttonText3: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-three a',
			default: __( 'Buy Now'),
		},
		featureList: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-one .ugb-pricing-box-feature-list',
			default: __( 'Consectetur adipiscing elit Suspendisse at pretium tortor Vestibulum ante ipsum primis In faucibus orci luctus et Ultrices posuere cubilia cura Aenean consectetur nec' ),
		},
		featureList2: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-two .ugb-pricing-box-feature-list',
			default: __( 'Consectetur adipiscing elit Suspendisse at pretium tortor Vestibulum ante ipsum primis In faucibus orci luctus et Ultrices posuere cubilia cura Aenean consectetur nec' ),
		},
		featureList3: {
			type: 'array',
			source: 'children',
			selector: '.ugb-pricing-box-column-three .ugb-pricing-box-feature-list',
			default: __( 'Consectetur adipiscing elit Suspendisse at pretium tortor Vestibulum ante ipsum primis In faucibus orci luctus et Ultrices posuere cubilia cura Aenean consectetur nec' ),
		},
		pricingBoxColor: {
			type: 'string',
		},
		priceColor: {
			type: 'string',
		},
		perMonthLabelColor: {
			type: 'string',
		},
		buttonColor: {
			type: 'string',
		},
		buttonTextColor: {
			type: 'string',
		},
		featureListColor: {
			type: 'string',
		},
		columns: {
			type: 'select',
			default: '1'
		},
		size: {
			type: 'string',
			default: 'normal',
		},
		cornerButtonRadius: {
			type: 'number',
			default: 4,
		}
	},

	// The "edit" property must be a valid function.
	edit: withState({ editable: 'content', })( edit ),

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
