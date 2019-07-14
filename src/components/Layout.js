import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import { Link } from 'gatsby'

class Layout extends React.Component {
	render() {
		const { location, title, children } = this.props
		const rootPath = `${__PATH_PREFIX__}/`
		let header

		if (location.pathname === rootPath) {
			header = <div className="container pt-5" />
		} else {
			header = (
				<h4 className="display-5 py-5 px-3 font-weight-light text-muted">
					<Link
						style={{
							boxShadow: `none`,
							textDecoration: `none`,
							color: `inherit`,
						}}
						to={`/`}
					>
						{title}
					</Link>
				</h4>
			)
		}

		return (
			<div className="container">
				{header}
				{children}
			</div>
		)
	}
}

export default Layout
