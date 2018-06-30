import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import 'prismjs/themes/prism-solarizedlight.css'
import './themes/prism-mods/solarizedlight.css'

// import 'prism-themes/themes/prism-a11y-dark.css'
// import './themes/dracula-prism/css/dracula-prism.css'

// import 'prismjs/themes/prism-funky.css'
// import './themes/prism-mods/funky.css'

// import 'prism-themes/themes/prism-duotone-sea.css'
// import './themes/prism-mods/duotone-sea.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    let headerContents = ( size ) => {
      return (
        <React.Fragment>
          <h1 style={ {
            fontSize: ( size === 'small' ? rhythm(0.9) : undefined ),
            marginTop: 0
          } }>
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
                backgroundImage: 'none'
              }}
              to={'/'}
            >
              HVML
            </Link>
          </h1>
          <h2 style={ {
            fontSize: ( size === 'small' ? rhythm(0.7) : undefined ),
            marginTop: rhythm(0)
          } }>Hypervideo Markup Language</h2>
        </React.Fragment>
      )
    }

    header = (
      <hgroup style={ {
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      } }>
        { ( location.pathname === rootPath ) ? headerContents() : headerContents( 'small' ) }
      </hgroup>
    )

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          // maxWidth: rhythm(24.68355),
          maxWidth: '39rem',
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
