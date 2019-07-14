import React from 'react'
import { Link } from 'gatsby'
const _ = require('lodash')

export function TagsList({ tags, ...props }) {
	if (!tags || tags.length == 0) {
		return null
	}

	return (
		<div {...props}>
			<div className="col">
				{tags.map(tag => (
					<Link
						key={tag}
						to={`/tags/${_.kebabCase(tag)}/`}
						className="badge badge-primary"
					>
						{tag}
					</Link>
				))}
			</div>
		</div>
	)
}
