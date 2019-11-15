export default {
	default: {
		Wave: {
			width: ['100%', '960px'],
			marginTop: '40px',
			marginLeft: [0, 'calc(50% - 480px)'],
			marginBottom: '40px',
			position: 'relative',
			display: ['block', 'flex']
		},
		ScrollerContainer: {
			flex: 1,
			paddingLeft: [0, '50px'],
			paddingTop: ['50px', 0]
		},
		ScrollerStep: {
			position: 'relative',
			padding: [0, '0 10px'],
			minHeight: '200px',
			display: 'flex',
			alignItems: 'center'
		},
		ScrollerProgress: {
			position: 'absolute',
			left: ['-12px', '-3px']
		},
		StickerContainer: {
			width: ['100vw', '50%'],
			marginLeft: ['calc(50% - 50vw)', 0],
			position: ['sticky', 'static'],
			top: [0, 'auto'],
			zIndex: [1, 'auto'],
			height: ['50vh', 'auto']
		},
		Sticker: {
			position: ['static', 'sticky'],
			width: '100%',
			height: ['100%', '80vh'],
			top: ['auto', '10vh']
		},
		// this is used to select the active scroller step
		// 0.5 selects the step that is at half the screen height
		// 0.7 the step that is at 70% the screen height
        focus: [0.5, 0.7]
        // focus: [0.7, 0.75]
	}
}
