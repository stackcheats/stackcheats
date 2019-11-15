/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { CodeSurfer } from '@code-surfer/standalone'
import { readStepFromElement } from './StepReader'

function CodeSticker({ steps: stepElements, progress, variant, parsedSteps, ...rest }) {
	const steps = React.useMemo(
		() =>
			parsedSteps
				? undefined
				: stepElements.map((element, i) => {
						const parsedStep = readStepFromElement(element, rest.metastring, i)
						return parsedStep
				  }),
		[]
	)

	return (
		<div
			sx={{
				variant: `styles.waves.${variant}.StickerContainer`
            }}
        >
			<div
				style={{
					height: '100%',
					width: '100%'
				}}
			>
                <div sx={{ variant: `styles.waves.${variant}.Sticker` }}
                    style={{
                        top: (progress > 1 ? progress - 1 : 0) * 200 + 'px',
                        position: 'relative',
                        height: ((progress < 1) ? `40vh` : (((40 + (progress - 1) * 10) < 80 ? (40 + (progress - 1) * 10) : 80) + 'vh'))
                    }}
                >
					<CodeSurfer
						progress={progress}
						steps={steps}
                        parsedSteps={parsedSteps}
					/>
				</div>
			</div>
		</div>
	)
}

export default CodeSticker
