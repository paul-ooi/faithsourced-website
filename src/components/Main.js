import React from 'react'
import PropTypes from 'prop-types'

import logo_explained from '../images/faithsourced-logo-explained.png'

import icon_fullstackfaith from '../images/icon-fullstackfaith.png'
import icon_mentorship from '../images/icon-mentorship.png'
import icon_faithhacking from '../images/icon-faithhacking.png'
import icon_resourced from '../images/icon-resourced.png'
import icon_faithsites from '../images/icon-faithsites.png'
import icon_founderchurch from '../images/icon-founderchurch.png'

import banner_fullstackfaith from '../images/banner-fullstackfaith.jpg'
import banner_mentorship from '../images/banner-mentorship.jpg'
import banner_faithhacking from '../images/banner-faithhacking.jpg'
import banner_resourced from '../images/banner-resourced.jpg'
import banner_founderchurch from '../images/banner-founderchurch.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
			<h2 className="major">About Us</h2>
				<p>Faith Sourced is a community of software developers using our skills for Jesus. We call it &ldquo;Software as a Service&rdquo; where Christ is the center of all we are and do.</p>
			<span className="image main"><img src={logo_explained} alt="Faith Sourced logo explained" /></span>
			<p>But this isn&rsquo;t just for developers. Professionals from across the digital spectrum are essential to our community driven projects, including those in strategy, project management, design, development, infrastructure, support and communications. As such, the Faith Sourced project is also a platform for coordinating this collective expertise.</p>

			<p>Each participant in the Faith Sourced project has seen what we can do as individuals, with all its limitations. We&rsquo;ve witnessed the duplication of effort at church after church, when we each try to accomplish the same goal, from our independent silos. The Faith Sourced project brings us together, with a common purpose, and a strength in numbers.</p>

			<p>Faith Sourced is our contribution to the cause of Christ, and His church. Faith Sourced is our chance to use our uniquely technical skills for purposes that are eternal, united under one banner: the gospel of Jesus Christ. The software we build is freely available to the body of Christ, for His glory.</p>

			<p>As a community, we gather to grow our faith and invest in each other professionally and spiritually. These meetups are designed to produce well roundedness, and are aptly named &ldquo;Full Stack Faith meetups&rdquo;.</p>

			{close}
        </article>

        <article id="faith" className={`${this.props.article === 'faith' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
			<h2 className="major">The Qualities of Our Faith</h2>
			<p>The faith that fuels our contributions to the Faith Sourced project has the following qualities :</p>
			<ol>
			<li><b>Gospel <span className="font-custom">Faith</span></b> - an unshakable conviction that Christ is the centre of all we are and all we do. His death on the cross is where we exchange our sins for his perfection. His resurrection from the grave certifies his perfection and validates that our sins have been paid for in their entirety. He is glorified as we build software to share this good news with the world.</li>
			<li><b>Dependent <span className="font-custom">Faith</span></b> - a resolve to wholeheartedly depend on God for anything of lasting value to flow from this project, as He is the source, object and hope of our Faith.</li>
			<li><b>Traditional <span className="font-custom">Faith</span></b> - a recognition that technology does not replace people. Our Faith is not in technology. God has chosen people to be agents of the Gospel. To that end, we do not propose or build solutions that reduce human agency. Our goal is to facilitate more human engagement that is better organized with greater efficiency. Our goal is not clicks, page views, or bounce rates.</li>
			<li><b>Edifying <span className="font-custom">Faith</span></b> -&nbsp; a commitment to discipleship/mentorship within the community for the growth and maturity of our Faith.</li>
			<li><b>Encouraging <span className="font-custom">Faith</span></b> - an attitude to strengthening one another in our Faith, as we work, have meetings, and gather for events, meetups and conferences.</li>
			<li><b>Prioritized <span className="font-custom">Faith</span></b> - a platform for meaningful contributions of tech expertise that otherwise would remain solely in the secular domain.</li>
			<li><b>Collaborative <span className="font-custom">Faith</span></b> - the pursuit of a distributed effort that depends on manageable contributions from the many instead of unsustainable contributions from the few.</li>
			<li><b>Generous <span className="font-custom">Faith</span></b> - a heart to share the fruits of our labour so that as many churches as possible can benefit. This includes shared expertise, shared best practices, shared code, shard bug fixes, shared support resources. There is no room for the &ldquo;keep this to ourselves&rdquo; practice that occurs when churches are independent silos on these matters.</li>
			<li><b>Efficient <span className="font-custom">Faith</span></b> - the recognition that projects/tasks must be strategically well defined and clear in order to be conducive to individual contribution and large scale collaboration.</li>
			<li><b>Gracious <span className="font-custom">Faith</span></b>&nbsp; - Our collective aknowledgement that&nbsp;we are all at different levels of our expertise and Fait, so there is&nbsp;no room for pride or arrogance. A commitment to gracious <span className="font-custom">faith</span> has a positive impact on: receiving and giving feedback; reviewing proposals; offering suggestions; responding helpfully and in a timely manner; growing others and serving diligently.</li>
		</ol>

			{close}
        </article>

        <article id="fullstackfaith" className={`${this.props.article === 'fullstackfaith' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
			<div className="logo"><img src={icon_fullstackfaith} alt="" /></div>
			<span className="banner image"><img src={banner_fullstackfaith} alt="" /></span>
			<h2 className="major">Full Stack <span className="font-custom">Faith</span> Meetups</h2>
			<p>The term "full stack" is used to describe the well rounded developer. Full Stack <span className="font-custom">faith</span> is a <strong>FREE</strong> monthly meetup where faith lessons + developer talk + pancakes = growth that is personal,  professional,  practical and delicious.</p>
			<p>Full Stack <span className="font-custom">faith</span> is a community to <strong>GROW</strong> together, being well rounded in both our faith and professional development.</p>
			<a href="https://www.facebook.com/events/725232831211604/" target="_blank" className="button float-right">Register for May 5 meetup</a>
			<p>Join us for : </p>
			<ol>
				<li>developer tutorials</li>
				<li>technology discussions</li>
				<li>Faith Sourced project planning</li>
				<li>personal testimonies</li>
				<li>study of God's Word</li>
				<li>a stack or two of pancakes!</li>
			</ol>
			<p>The Faith Sourced project is an initiative so ambitious we could worry there are not enough pancakes in the world. Thankfully our <span className="font-custom">faith</span> is not in pancakes.</p>
			{close}
        </article>
        
        <article id="mentorship" className={`${this.props.article === 'mentorship' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
			<div className="logo"><img src={icon_mentorship} alt="" /></div>
			<span className="banner image"><img src={banner_mentorship} alt="" /></span>
			<h2 className="major">Mentorship Program</h2>
			<p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
			{close}
        </article>
        
        <article id="faithhacking" className={`${this.props.article === 'faithhacking' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
			<div className="logo"><img src={icon_faithhacking} alt="" /></div>
			<span className="banner image"><img src={banner_faithhacking} alt="" /></span>
			<h2 className="major"><span className="font-custom">Faith</span> Hacking Days</h2>
			<p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
			{close}
        </article>
        
        <article id="resourced" className={`${this.props.article === 'resourced' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
			<div className="logo"><img src={icon_resourced} alt="" /></div>
			<span className="banner image"><img src={banner_resourced} alt="" /></span>
			<h2 className="major">Re+Sourced Program</h2>
			<p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
			{close}
        </article>
        
        <article id="faithsites" className={`${this.props.article === 'faithsites' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
			<div className="logo"><img src={icon_faithsites} alt="" /></div>
			<span className="banner image"><img src={banner_fullstackfaith} alt="" /></span>
			<h2 className="major"><span className="font-custom">Faith</span> Sites Program</h2>
			<p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
			{close}
        </article>
        
        <article id="founderchurch" className={`${this.props.article === 'founderchurch' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
			<div className="logo"><img src={icon_founderchurch} alt="" /></div>
			<span className="banner image"><img src={banner_founderchurch} alt="" /></span>
			<h2 className="major">Founder Church Program</h2>
			<p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
			{close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
			<h2 className="major">Contact</h2>
			<form method="post" action="#">
			  <div className="field half first">
			    <label htmlFor="name">Name</label>
			    <input type="text" name="name" id="name" />
			  </div>
			  <div className="field half">
			    <label htmlFor="email">Email</label>
			    <input type="text" name="email" id="email" />
			  </div>
			  <div className="field">
			    <label htmlFor="message">Message</label>
			    <textarea name="message" id="message" rows="4"></textarea>
			  </div>
			  <ul className="actions">
			    <li><input type="reset" value="Cancel" onClick={() => {this.props.onCloseArticle()}} /></li>
			    <li><input type="submit" value="Send Message" className="special" /></li>
			  </ul>
			</form>
			<ul className="icons">
			  <li><a href="https://twitter.com/faithsourced" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
			  <li><a href="https://facebook.com/faithsourced" target="_blank" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
			<li><a href="https://youtube.com/faithsourced" target="_blank" className="icon fa-youtube"><span className="label">YouTube</span></a></li>
			  <li><a href="https://instagram.com/faithsourced" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
			  <li><a href="https://github.com/faithsourced" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
			</ul>
			{close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main