export const { registerBlockType } = wp.blocks

export const { __ } = wp.i18n

export const {
	withState,
	PanelColor,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	Dashicon,
	IconButton,
	Button,
	Toolbar,
} = wp.components

export const {
	InspectorControls,
	BlockControls,
	ColorPalette,
	AlignmentToolbar,
	RichText,
	UrlInput,
	MediaUpload,
} = wp.editor.InspectorControls ? wp.editor : wp.blocks
