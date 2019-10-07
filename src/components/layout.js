import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

import Footer from './Footer'

const Layout = ({ children, location, meta_title }) => {

  let content;
  
  if (location) {  
	  if (location.pathname === '/') {
		content = (
		  <>
			{children}
		  </>
		)
	  }
	  else if (location.pathname === '/blog' || location.pathname === '/blog/' || location.pathname === '/news/' || location.pathname === '/blog') {
		content = (
		  <>
			{children}
		  </>
		)
	  } else {
		content = (
			<div id="page" className="body blurred">
				<div id="wrapper">
					<div id="main" style={{display:'flex'}}>
						<article className="active timeout">
							{children}
						</article>
					</div>
					<Footer/>
				</div>
				<div id="bg"></div>
			</div>
		)
	  }
  }
  
  return (
    <StaticQuery
      query={graphql`
        query layoutPrefsQuery {
          allThirdPartyPreferences {
			edges {
			  node {
				site_name
				site_title
				email_address
				meta_keywords
				meta_description
				logo_wordmark_img
				logo_glyph_img
				logo_slogan
				site_bg_img
			  }
			}
		  }
        }
      `}
      render={data => (
		<>
			<Helmet
				title={!meta_title ? (data.allThirdPartyPreferences.edges[0].node.site_title):(data.allThirdPartyPreferences.edges[0].node.site_title + ' | ' + meta_title)}
				meta={[
					{ name: 'description', content: data.allThirdPartyPreferences.edges[0].node.meta_description },
					{ name: 'keywords', content: data.allThirdPartyPreferences.edges[0].node.meta_keywords },
					{ property: 'og:url', content: location.hostname + location.pathname},
					{ property: 'og:type', content: 'website' },
					{ property: 'og:title', content: !meta_title ? (data.allThirdPartyPreferences.edges[0].node.site_title):(data.allThirdPartyPreferences.edges[0].node.site_title + ' | ' + meta_title) },
					{ property: 'og:image', content: '' },
					{ property: 'og:description', content: data.allThirdPartyPreferences.edges[0].node.meta_description },
				]}
			  >
				<html lang="en" />
			</Helmet>
			{content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
