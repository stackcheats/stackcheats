/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import BarScroller from './BarScroller'
import SVGSticker from './SVGSticker'
import Wave from './Wave'

/**
 * <SVGWave align="left|right">
 *
 * ![SVG Image](./path/to/svg)
 *
 * paragraph contents
 *
 * </SVGWave>
 */

function SVGWave(props) {
  const { parsedSteps, align } = props

  const childrenToColumns = children => {
    const kids = React.Children.toArray(children)
    if (parsedSteps) {
      return [[], React.Children.toArray(children)]
    } else {
      const columnCount = 2
      return toColumns(kids, columnCount, align)
    }
  }

  let components
  if (align === 'right') {
    components = [BarScroller, SVGSticker]
  } else {
    components = [SVGSticker, BarScroller]
  }

  return (
    <Wave
      columnComponents={components}
      childrenToStepColumns={childrenToColumns}
      {...props}
    />
  )
}

function toColumns(items, count, align = 'left') {
  const columns = Array(count)
    .fill()
    .map(() => [])

  items.forEach((item, i) => {
    const isSVG =
      item.props &&
      item.props.mdxType === 'p' &&
      item.props.children &&
      item.props.children.props &&
      item.props.children.props.mdxType === 'img'
    if (isSVG) {
      if (align === 'right') {
        columns[1].push(item)
        columns[0].push(React.createElement('div', {}, []))
      } else {
        columns[0].push(item)
        columns[1].push(React.createElement('div', {}, []))
      }
    } else {
      if (align === 'right') {
        const step = columns[1].length - 1
        columns[0][step].props.children.push(item)
      } else {
        const step = columns[0].length - 1
        columns[1][step].props.children.push(item)
      }
    }
  })
  return columns
}

export default SVGWave
