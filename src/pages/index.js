import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Home from '../components/Home'
import Footer from '../components/Footer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      scrolly: 0
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: 'loaded'});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {	
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article, loading: ''
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
        scrolly: window.pageYOffset
      })
      window.scrollTo(0, 0)
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
       window.scrollTo(0, this.state.scrolly)
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
        scrolly: 0
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }
  
  render() {
  	const postList = this.props.data.allMarkdownRemark;
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'blurred' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <div id="home" style={this.state.timeout ? {display: 'none'} : {}}>
            	<Home onOpenArticle={this.handleOpenArticle} />
            	{/**
            	<section id="blog-posts">
            	 {postList.edges.map(({ node }, i) => (
					<Link to={node.fields.slug} key={i} className="link" >
					  <div className="post-list">
						<h1>{node.frontmatter.title}</h1>
						<span>{node.frontmatter.date}</span>
						<p>{node.excerpt}</p>
					  </div>
					</Link>
				  ))}
            	</section>
            	**/}
            </div>
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
