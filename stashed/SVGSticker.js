/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

function SVGStiker({
  steps: stepElements,
  variant,
  currentStep,
  parsedSteps,
  progress,
}) {
  const steps = React.useMemo(
    () =>
      parsedSteps
        ? undefined
        : stepElements.map(element => {
            return element.props.children
          }),
    []
  )

  console.log(progress)
  const prevIndex = Math.floor(progress)
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
          sx={{ variant: `styles.waves.${variant}.SVGSticker` }}
          className="svg-sticker"
        >
          <div
            style={{
              // transform: `translateY(${(prevIndex - progress) * 100}%)`,
              height: '100%',
              width: '100%',
              marginTop: 'auto',
              marginBottom: 'auto',
            }}
          >
            {steps[currentStep]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SVGStiker
