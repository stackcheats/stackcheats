import React from 'react'
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'
import { rhythm } from '../utils/typography'

import {
  Github,
  Twitter,
  Medium,
  Linkedin,
} from '@icons-pack/react-simple-icons'

class Layout extends React.Component {
  render() {
    const { location, title, presentFooter = true, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    let header
    let footer

    if (location.pathname === rootPath) {
      header = (
        <h1
          className="stackcheats-header display-4 font-weight-normal"
          style={{
            marginBottom: rhythm(1.5),
            marginTop: rhythm(1.5),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {/* {title} */}
            Stack
            <span className="font-weight-lighter">Cheats</span>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          className="stackcheats-header font-weight-normal"
          style={{
            marginBottom: rhythm(1.5),
            marginTop: rhythm(1.5),
          }}
        >
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
        </h3>
      )
    }

    if (presentFooter) {
      footer = (
        <footer>
          <a className="mr-3" href="https://github.com/athiththan11">
            <img
              className="mb-0"
              alt="Athiththan Kathirgamasegaran"
              src="https://avatars3.githubusercontent.com/u/29927177?s=460&amp;v=4"
              style={{ width: 28, height: 28, borderRadius: 40 }}
            />
            {/* <span className="pl-2 font-weight-normal">
              Athiththan Kathirgamasegaran
            </span> */}
          </a>
          <a className="mr-3" href="https://github.com/athiththan11">
            {/* #181717 */}
            <Github aria-label="Github" color="#424242" size={24} />
          </a>
          <a className="mr-3" href="https://twitter.com/athiththan11">
            {/* #1DA1F2 */}
            <Twitter aria-label="Twiiter" color="#424242" size={24} />
          </a>
          <a className="mr-3" href="https://medium.com/@athiththan11">
            {/* #12100E */}
            <Medium aria-label="Medium" color="#424242" size={24} />
          </a>
          <a
            className="mr-3"
            href="https://www.linkedin.com/in/athiththan-kathirgamasegaran/"
          >
            {/* #0077B5 */}
            <Linkedin aria-label="LinkedIn" color="#424242" size={24} />
          </a>
        </footer>
      )
    }

    return (
      <div
        className="container"
        style={{
          padding: `${rhythm(1.5)} ${rhythm(1.5)}`,
        }}
      >
        {header}
        {children}
        {footer}
      </div>
    )
  }
}

export default Layout
