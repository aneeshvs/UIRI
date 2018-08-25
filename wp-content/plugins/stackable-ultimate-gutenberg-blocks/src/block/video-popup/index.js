/**
 * BLOCK: Video Popup Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { VideoPopupIcon } from '../../icons'

import {
	registerBlockType,
	__,
	IconButton,
	PanelColor,
	Button,
	SelectControl,
	Dashicon,
	Toolbar,
	MediaUpload,
	InspectorControls,
	ColorPalette,
	BlockControls,
	UrlInput,
} from '../../wp-imports'

const playButton = {
	normal: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 320"><path d="M0 0v320l256-160L0 0z"/></svg>,
	circle: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 40 40"><path d="M16 29l12-9-12-9v18zm4-29C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm0 36c-8.82 0-16-7.18-16-16S11.18 4 20 4s16 7.18 16 16-7.18 16-16 16z"/></svg>,
	outline: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 34 34"><path d="M17 34C7.6 34 0 26.4 0 17S7.6 0 17 0s17 7.6 17 17-7.6 17-17 17zm0-32C8.7 2 2 8.7 2 17s6.7 15 15 15 15-6.7 15-15S25.3 2 17 2z"/><path d="M12 25.7V8.3L27 17l-15 8.7zm2-14v10.5l9-5.3-9-5.2z"/></svg>
}

export const edit = ( props ) => {
	const {
		className,
		setAttributes,
		isSelected,
	} = props
	const {
		videoLink,
		mediaLink,
		overlayColor,
		playButtonType,
		mediaID
	} = props.attributes
	const playButtonTypes = [
		{ value: 'normal', label: __( 'Normal Play Button' ) },
		{ value: 'circle', label: __( 'Play Button with Circle' ) },
		{ value: 'outline', label: __( 'Outline Play Button' ) }
	];

	return [
		isSelected  && (
			<BlockControls key='controls'>
				{ mediaLink && (
					<Toolbar>
						<MediaUpload
							onSelect={ ( media ) => setAttributes( { mediaLink: media.url, mediaID: media.id } ) }
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
				)}
			</BlockControls>
		),
		isSelected && (
			<InspectorControls key={ 'inspector' }>

				<SelectControl
					label={ __( 'Play Button Style' ) }
					value={ playButtonType }
					options={ playButtonTypes.map( ({ value, label }) => ( {
						value: value,
						label: label,
					} ) ) }
					onChange={ ( newSize ) => { setAttributes( { playButtonType: newSize } ) } }
				/>
				<PanelColor
					title={ __( 'Background/Overlay Color' ) }
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
		<div className='ugb-video-popup'
			data-video={ videoLink }
			style={ { backgroundColor: overlayColor } }>
			<div className='ugb-video-preview'
				style={ { backgroundImage: `url(${mediaLink})` } }>
			</div>
			<div className='ugb-video-wrapper' >
				<MediaUpload
					onSelect={ ( media ) => setAttributes( { mediaLink: media.url, mediaID: media.id } ) }
					type={'image'}
					value={ mediaID }
					render={ function( obj ) {
						return [
							! mediaLink && (
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
				<div className='ugb-video-overlay' style={ { backgroundColor: overlayColor } } />
				<span className="ugb-play-button">
					{ playButton[ playButtonType ] }
				</span>
			</div>
		</div>,
		isSelected && (
			<form
				key={ 'form-link' }
				onSubmit={ ( event ) => event.preventDefault() }
				className='ugb-video-popup-link blocks-button__inline-link'>
				<Dashicon icon={ 'admin-links' } />
				<UrlInput
					value={ videoLink }
					onChange={ ( value ) => setAttributes( { videoLink: value } ) }
				/>
				<IconButton
					icon={ 'editor-break' }
					label={ __( 'Apply' ) }
					type={ 'submit' }
				/>
				<p><i>Youtube/Vimeo ID only</i></p>
			</form>
		)
	];
}

export const save = ( props ) => {
	const {
		videoLink,
		mediaLink,
		overlayColor,
		playButtonType,
		mediaID
	} = props.attributes

	return (
		<div className='ugb-video-popup'
			data-video={ videoLink }
			style={ { backgroundColor: overlayColor } }>
			<div className='ugb-video-preview'
				style={ { backgroundImage: `url(${mediaLink})` } }
				data-url={ mediaLink }>
			</div>
			<div className='ugb-video-wrapper' >
				<a href="#" style={ { backgroundColor: overlayColor } } />
				<span className='ugb-play-button'>
					{ playButton[ playButtonType ] }
				</span>
			</div>
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
registerBlockType( 'ugb/video-popup', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Video Popup' ), // Block title.
	icon: VideoPopupIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Video Popup' ),
		__( 'Stackable' ),
	],
	attributes: {
		videoLink: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-video-popup',
			attribute: 'data-video',
		},
		mediaLink: {
			type: 'string',
			source: 'attribute',
			selector: '.ugb-video-preview',
			attribute: 'data-url',
		},
		mediaID: {
			type: 'number',
		},
		overlayColor: {
			type: 'string',
			default: '#000000',
		},
		playButtonType: {
			type: 'string',
			default: 'normal'
		}
	},

	// The "edit" property must be a valid function.
	edit: edit,
	// The "save" property must be specified and must be a valid function.
	save: save,
} );
