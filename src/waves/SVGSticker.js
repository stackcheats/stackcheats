/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

function SVGStiker({ steps: stepElements, variant, currentStep, parsedSteps }) {
  const steps = React.useMemo(
    () =>
      parsedSteps
        ? undefined
        : stepElements.map(element => {
            return element.props.children
          }),
    []
  )

  return (
    <div
      sx={{
        variant: `styles.waves.${variant}.StickerContainer`,
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <div
          sx={{ variant: `styles.waves.${variant}.Sticker` }}
          className="svg-sticker"
        >
          {steps[currentStep]}
        </div>
      </div>
    </div>
  )
}

export default SVGStiker
