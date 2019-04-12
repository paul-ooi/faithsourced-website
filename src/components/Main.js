import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
			<h2 className="major">About Us</h2>
			<span className="image main"><img src={pic01} alt="" /></span>
          	<p>The FaithSourced Project is for technology professionals who desire to use their expertise for Christ. All too often these skills go unused in churches, and tech professionals are left feeling like their skillset is outside the sphere of kingdom usefulness. For those who are able to use their skills, they tend to be in isolation with very little Christian community in this sphere of ministry.</p>
			<p>The FaithSourced Project aims to bring technology professionals together with a twofold purpose :</p>
			<ol>
				<li><b>Glorify God </b>together by Faith</li>
				<li><b>Grow</b> together in Faith</li>
			</ol>
          {close}
        </article>

        <article id="faith" className={`${this.props.article === 'faith' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Qualities of Our Faith</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>The Faith that fuels our pursuit for His Glory has the following qualities :</p>
          <ol>
			<li><b>Gospel Faith</b> - an unshakable conviction that Christ is the centre of all we are and all we do. His death on the cross is where we exchange our sins for his perfection. His resurrection from the grave certifies his perfection and validates that our sins have been paid for in their entirety. He is glorified as we build software to share this good news with the world.</li>
			<li><b>Dependent Faith</b> - a resolve to wholeheartedly depend on God for anything of lasting value to flow from this project, as He is the source, object and hope of our Faith.</li>
			<li><b>Traditional Faith</b> - a recognition that technology does not replace people. Our Faith is not in technology. God has chosen people to be agents of the Gospel. To that end, we do not propose or build solutions that reduce human agency. Our goal is to facilitate more human engagement that is better organized with greater efficiency. Our goal is not clicks, page views, or bounce rates.</li>
			<li><b>Edifying Faith</b> -&nbsp; a commitment to discipleship/mentorship within the community for the growth and maturity of our Faith.</li>
			<li><b>Encouraging Faith</b> - an attitude to strengthening one another in our Faith, as we work, have meetings, and gather for events, meetups and conferences.</li>
			<li><b>Prioritized Faith</b> - a platform for meaningful contributions of tech expertise that otherwise would remain solely in the secular domain.</li>
			<li><b>Collaborative Faith</b> - the pursuit of a distributed effort that depends on manageable contributions from the many instead of unsustainable contributions from the few.</li>
			<li><b>Generous Faith</b> - a heart to share the fruits of our labour so that as many churches as possible can benefit. This includes shared expertise, shared best practices, shared code, shard bug fixes, shared support resources. There is no room for the &ldquo;keep this to ourselves&rdquo; practice that occurs when churches are independent silos on these matters.</li>
			<li><b>Efficient Faith</b> - the recognition that projects/tasks must be strategically well defined and clear in order to be conducive to individual contribution and large scale collaboration.</li>
			<li><b>Gracious Faith</b>&nbsp; - Our collective aknowledgement that&nbsp;we are all at different levels of our expertise and Fait, so there is&nbsp;no room for pride or arrogance. A commitment to gracious faith has a positive impact on: receiving and giving feedback; reviewing proposals; offering suggestions; responding helpfully and in a timely manner; growing others and serving diligently.</li>
		</ol>

          {close}
        </article>

        <article id="community" className={`${this.props.article === 'community' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Our Community</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>
        
        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Our Projects</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
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