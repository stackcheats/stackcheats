/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useSpring } from 'use-spring'

function Scroller({ steps, currentStep, progress, variant, align }) {
  const [fasterProgress] = useSpring(currentStep, {
    decimals: 3,
    stiffness: 52,
    damping: 14,
    mass: 0.1,
  })

  const startBorder = Math.min(fasterProgress, progress)
  const endBorder = Math.max(fasterProgress, progress)

  const progressStyles = steps.map((_, i) => {
    const from = Math.max(startBorder - i, 0)
    const to = Math.min(endBorder + 1 - i, 1)

    if (to <= from) {
      return { top: '0%', bottom: '100%' }
    } else {
      const width = 3 / (1 + endBorder - startBorder)
      if (align === 'right') {
        return {
          top: from * 100 + '%',
          bottom: 100 - to * 100 + '%',
          width,
          borderRight: '2px solid orange',
        }
      }
      return {
        top: from * 100 + '%',
        bottom: 100 - to * 100 + '%',
        width,
        borderLeft: '2px solid orange',
      }
    }
  })

  return (
    <div
      sx={{
        variant: `styles.waves.${variant}.${
          align === 'right' ? 'ScrollerContainerRight' : 'ScrollerContainer'
        }`,
      }}
      className="scroller"
    >
      {steps.map((step, i) => (
        <div
          sx={{
            variant: `styles.waves.${variant}.ScrollerStep`,
          }}
          key={i}
        >
          <div
            sx={{
              variant: `styles.waves.${variant}.${
                align === 'right' ? 'ScrollerProgressRight' : 'ScrollerProgress'
              }`,
            }}
            style={progressStyles[i]}
          />
          {step}
        </div>
      ))}
    </div>
  )
}

export default Scroller
