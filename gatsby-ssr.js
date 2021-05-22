import React from 'react'
import { withPrefix } from 'gatsby'
import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapRootElement = wrap

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script key="reveal.js" src={withPrefix('reveal.js')} />,
    <script key="reveal.esm.js" src={withPrefix('reveal.esm.js')} />,
  ])
}
