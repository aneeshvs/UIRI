/**
 * BLOCK: Notification
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import md5 from 'md5'
import { NotificationIcon } from '../../icons'

import {
	registerBlockType,
	__,
	withState,
	SelectControl,
	PanelColor,
	ToggleControl,
	InspectorControls,
	RichText,
	ColorPalette,
	BlockControls,
} from '../../wp-imports'

export const edit = ( props ) => {

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } );
	};

	const notifAlert = [
		{ value: 'success', label: __( 'Success' ) },
		{ value: 'error', label: __( 'Error' ) },
		{ value: 'warning', label: __( 'Warning' ) },
		{ value: 'info', label: __( 'Information' ) },
	];

	const {
		isSelected,
		editable,
		setState,
		setAttributes,
		className
	} = props

	const {
		text,
		color,
		textColor,
		notifType,
		dismissible
	} = props.attributes

	return [
		isSelected && (
			<BlockControls key="controls"/>
		), (
		<div key={ 'editable' } className={ `ugb-notification type-${notifType} dismissible-${dismissible}` }>
			{
				dismissible && (
					<span key='button' className={ 'close-button' }>
						<svg viewBox="0 0 28.3 28.3" style={ { fill: textColor } }>
							<path d="M52.4-166.2c3.2,0,3.2-5,0-5C49.2-171.2,49.2-166.2,52.4-166.2L52.4-166.2z"/>
							<path d="M16.8,13.9L26.9,3.8c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L14.7,11.8L4.6,1.7C4,1.1,3.1,1.1,2.5,1.7s-0.6,1.5,0,2.1l10.1,10.1L2.5,24c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4L14.7,16l10.1,10.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L16.8,13.9z"/>
						</svg>
					</span>
				)
			}
			<RichText
				tagName='p'
				placeholder={ props.attributes.text.default }
				value={ text }
				isSelected={ isSelected && editable === 'content' }
				onFocus={ onSetActiveEditable( 'content' ) }
				onChange={ (text) => setAttributes( { text: text } ) }
				className={`wp-ugb-notif notif-${notifType}`}
				style={ {
					backgroundColor: color,
					color: textColor,
				} }
			/>
			{
				isSelected &&
				<InspectorControls key={ 'inspector' }>
					<ToggleControl
						label={ __( 'Dismissible' ) }
						checked={ dismissible }
						onChange={ () => setAttributes( { dismissible: ! dismissible } ) }
					/>
					<SelectControl
						label={ __( 'Notification Type' ) }
						value={ notifType }
						options={ notifAlert.map( ({ value, label }) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ ( newSize ) => { setAttributes( { notifType: newSize } ) } }
					/>

					<PanelColor
						title={ __( 'Background Color' ) }
						colorValue={ color }
						initialOpen={ false }
					>
						<ColorPalette
							value={ color }
							onChange={ ( colorValue ) => setAttributes( { color: colorValue } ) }
						/>
					</PanelColor>
					<PanelColor
						title={ __( 'Text Color' ) }
						colorValue={ textColor }
						initialOpen={ false }
					>
						<ColorPalette
							value={ textColor }
							onChange={ ( colorValue ) => setAttributes( { textColor: colorValue } ) }
						/>
					</PanelColor>

				</InspectorControls>
			}
		</div>
	) ]
}

export const save = ( props ) => {

	const {
		text,
		color,
		textColor,
		notifType,
		dismissible
	} = props.attributes

	const buttonStyle = {
		backgroundColor: color,
		color: textColor,
	}

	// UID is a unique string depending on the contents and is used for
	// remembering whether the notification was closed in the frontend.
	const uid = md5( text + notifType ).substr( 0, 6 )

	return (
		<div className={ `ugb-notification type-${notifType} dismissible-${dismissible}` } data-uid={uid}>
			{
				dismissible && (
					<span key='button' className={ 'close-button' }>
						<svg viewBox="0 0 28.3 28.3" style={ { fill: textColor } }>
							<path d="M52.4-166.2c3.2,0,3.2-5,0-5C49.2-171.2,49.2-166.2,52.4-166.2L52.4-166.2z"/>
							<path d="M16.8,13.9L26.9,3.8c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L14.7,11.8L4.6,1.7C4,1.1,3.1,1.1,2.5,1.7s-0.6,1.5,0,2.1l10.1,10.1L2.5,24c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4L14.7,16l10.1,10.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L16.8,13.9z"/>
						</svg>
					</span>
				)
			}
			<p className={ `wp-ugb-notif notif-${notifType}` } style={ buttonStyle }>
				{ text }
			</p>
		</div>
	)
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
registerBlockType( 'ugb/notification', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Notification' ), // Block title.
	icon: NotificationIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout, widgets, embed.
	keywords: [
		__( 'Notification' ),
		__( 'Stackable' ),
	],
	attributes: {
		text: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: __( 'This is an informational alert, usually used for successful subscriptions, promo announcements, and the like.' ),
		},
		color: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
		notifType: {
			type: 'string',
			default: 'success',
		},
		dismissible: {
			type: 'boolean',
			default: false
		},
	},


	// The "edit" property must be a valid function.
	edit: withState( { editable: 'content', } )( edit ),

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
