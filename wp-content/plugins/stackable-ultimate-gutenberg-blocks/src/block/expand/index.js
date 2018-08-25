/**
 * BLOCK: Notification
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { ExpandIcon } from '../../icons'

import {
	registerBlockType,
	__,
	withState,
	RichText,
	BlockControls,
} from '../../wp-imports'

const toRichTextMultilineValue = value => {
	if ( value.map ) {
		return value.map( ( subValue => subValue.children ) );
	}
	return ''
}

const fromRichTextMultilineValue = value => {
	if ( value.map ) {
		return value.map( ( subValue ) => ( {
			children: subValue,
		} ) );
	}
	return ''
}


export const edit = ( props ) => {

	const {
		focus,
		setFocus,
		editable,
		setAttributes,
		setState,
		className,
		isSelected,
	} = props

	const onSetActiveEditable = ( newEditable ) => () => {
		setState( { editable: newEditable } );
	};

	const {
		text,
		moreLabel,
		moreText,
		lessLabel,
	} = props.attributes

	return [
		isSelected && (
			<BlockControls key="controls"/>
		),
		<div key='expand' className={ className }>
			{ isSelected && <label className="ugb-editor-label">Less text</label> }
			<RichText
				multiline='p'
				placeholder={ props.attributes.text.default }
				value={ toRichTextMultilineValue( text ) }
				onChange={ (text) => setAttributes( { text: fromRichTextMultilineValue( text ) } ) }
				isSelected={ isSelected && editable === 'text' }
				onFocus={ onSetActiveEditable( 'text' ) }
				className={`ugb-expand-less-text`}
				placeholder={ __( 'Some short text that can be expanded to show more details.' ) }
			/>
			<RichText
				tagName='a'
				placeholder={ props.attributes.moreLabel.default }
				value={ moreLabel }
				isSelected={ isSelected && editable === 'moreLabel' }
				onFocus={ onSetActiveEditable( 'moreLabel' ) }
				onChange={ (text) => setAttributes( { moreLabel: text } ) }
				formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
				className={`ugb-expand-more`}
				placeholder={ __( 'Show more' ) }
			/>
			{ isSelected && <label className="ugb-editor-label">More text</label> }
			{
				isSelected &&
				<RichText
					multiline='p'
					placeholder={ props.attributes.moreText.default }
					value={ toRichTextMultilineValue( moreText ) }
					isSelected={ isSelected && editable === 'moreText' }
					onFocus={ onSetActiveEditable( 'moreText' ) }
					onChange={ (text) => setAttributes( { moreText: fromRichTextMultilineValue( text ) } ) }
					className={`ugb-expand-more-text`}
					placeholder={ __( 'Some short text that can be expanded to show more details. Some additional text that can only be seen when expanded.' ) }
				/>
			}
			{ isSelected &&
				<RichText
					tagName='a'
					placeholder={ props.attributes.lessLabel.default }
					value={ lessLabel }
					isSelected={ isSelected && editable === 'lessLabel' }
					onFocus={ onSetActiveEditable( 'lessLabel' ) }
					onChange={ (text) => setAttributes( { lessLabel: text } ) }
					formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
					className={`ugb-expand-less`}
					placeholder={ __( 'Show less' ) }
				/>
			}
		</div>
	]
}

export const save = ( props ) => {

	const {
		text,
		moreLabel,
		moreText,
		lessLabel,
	} = props.attributes

	return (
		<div>
			<div className='ugb-expand-less-text'>
				{ text.map && text.map( ( paragraph, i ) => (
					<p key={ i }>{ paragraph.children && paragraph.children.props.children }</p>
				) ) }
			</div>
			<div className='ugb-expand-more-text' style={{ display: 'none' }}>
				{ moreText.map && moreText.map( ( paragraph, i ) => (
					<p key={ i }>{ paragraph.children && paragraph.children.props.children }</p>
				) ) }
			</div>
			<a className='ugb-expand-button' href="#">
				<span className='ugb-expand-more'>{ moreLabel }</span>
				<span className='ugb-expand-less' style={{ display: 'none' }}>{ lessLabel }</span>
			</a>
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
registerBlockType( 'ugb/expand', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Expand / Show More' ), // Block title.
	icon: ExpandIcon, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'formatting', // Block category — Group blocks together based on common traits E.g. common, formatting, layout, widgets, embed.
	keywords: [
		__( 'Expand' ),
		__( 'Show more/less' ),
		__( 'Stackable' ),
	],
	attributes: {

		// Multilines.
		text: {
			type: 'array',
			source: 'query',
			selector: '.ugb-expand-less-text > p',
			query: {
				children: {
					source: 'node',
				},
			},
			default: [],
		},
		moreText: {
			type: 'array',
			source: 'query',
			selector: '.ugb-expand-more-text > p',
			query: {
				children: {
					source: 'node',
				},
			},
			default: [],
		},

		// Single lines.
		moreLabel: {
			type: 'array',
			source: 'children',
			selector: '.ugb-expand-more',
			default: __( 'Show more' ),
		},
		lessLabel: {
			type: 'array',
			source: 'children',
			selector: '.ugb-expand-less',
			default: __( 'Show less' ),
		},
	},

	// The "edit" property must be a valid function.
	edit: withState( { editable: 'text', } )( edit ),

	// The "save" property must be specified and must be a valid function.
	save: save,
} );
