import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../../assets/scss/init.scss'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { title },
        },
      }) => (
        <div className="layout">
          <Helmet defaultTitle="{title}" />
          {children}
        </div>
      )}
    />
  )
}

export default Layout
