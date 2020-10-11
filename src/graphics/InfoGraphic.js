/** @jsx jsx */
import { jsx } from 'theme-ui'

function InfoGraphic(props) {
  const { src, alt } = props.children.props.children.props

  return (
    <div className="graphic-contianer pt-5 pb-3">
      <a href={src} target="_blank">
        <img src={src} alt={alt} className="img-fluid" />
      </a>
    </div>
  )
}

export default InfoGraphic
