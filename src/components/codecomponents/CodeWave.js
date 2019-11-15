/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Wave from './Wave'
import BarScroller from './BarScroller'
import CodeSticker from './CodeSticker'

class CodeWave extends React.Component {
	render() {
		const { parsedSteps } = this.props
		const childrenToColumns = () => {
			const kids = React.Children.toArray(this.props.children)
			if (parsedSteps) {
				return [[], React.Children.toArray(this.props.children)]
			} else {
				const columnCount = 2
				return toColumns(kids, columnCount)
			}
		}
		return (
			<Wave
				columnComponents={[CodeSticker, BarScroller]}
				childrenToStepColumns={childrenToColumns}
				{...this.props}
			/>
		)
	}
}

function toColumns(items, columnCount) {
	const columns = Array(columnCount)
		.fill()
		.map(() => [])
	items.forEach((item, i) => {
		const isCode =
			item.props &&
			item.props.mdxType === 'div' &&
			item.props.children.props &&
			item.props.children.props.mdxType === 'pre'
		if (isCode) {
			columns[0].push(item)
			columns[1].push(React.createElement('div', {}, []))
		} else {
			const step = columns[0].length - 1
			columns[1][step].props.children.push(item)
		}
	})

	return columns
}

export default CodeWave
