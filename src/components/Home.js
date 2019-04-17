import React from 'react'
import PropTypes from 'prop-types'

import icon_fullstackfaith from '../images/icon-fullstackfaith.png'
import icon_mentorship from '../images/icon-mentorship.png'
import icon_faithhacking from '../images/icon-faithhacking.png'
import icon_resourced from '../images/icon-resourced.png'
import icon_faithcode from '../images/icon-faithcode.png'
import icon_founderchurch from '../images/icon-founderchurch.png'

const Home = (props) => (
    <div id="home" style={props.timeout ? {display: 'none'} : {}}>
		<section id="one" className="tiles">
			<article>
				<header className="major">
					<span className="image"><img src={icon_fullstackfaith} alt="" /></span>
					<h3>Full+Stack+Faith<br />Meetups</h3>
					<p>A community to <strong>GROW</strong> together, being well rounded in both our faith and professional development.</p>
				</header>
				<a className="link primary" href="javascript:;" onClick={() => {props.onOpenArticle('fullstackfaith')}}></a>
			</article>
			<article>
				<header className="major">
					<span className="image"><img src={icon_mentorship} alt="" /></span>
					<h3>Mentorship<br />Program</h3>
					<p>A community to <strong>TRAIN</strong> the next generation in both their faith and professional development.</p>
				</header>
				<a className="link primary" href="javascript:;" onClick={() => {props.onOpenArticle('mentorship')}}></a>
			</article>
			<article>
				<header className="major">
					<span className="image"><img src={icon_faithhacking} alt="" /></span>
					<h3>Faith+Hacking<br />Days</h3>
					<p>A day of <strong>HYPER-FOCUSED</strong> software and spiritual development.</p>
				</header>
				<a className="link primary" href="javascript:;" onClick={() => {props.onOpenArticle('faithhacking')}}></a>
			</article>
			<article>
				<header className="major">
					<span className="image"><img src={icon_resourced} alt="" /></span>
					<h3>Re+sourced<br />Program</h3>
					<p>A community to <strong>EQUIP</strong> churches with resources that aid their understanding of and engagement in the digital realm.</p>
				</header>
				<a className="link primary" href="javascript:;" onClick={() => {props.onOpenArticle('resourced')}}></a>
			</article>
			<article>
				<header className="major">
					<span className="image"><img src={icon_faithcode} alt="" /></span>
					<h3>Faith+Code<br />Program</h3>
					<p>An always <strong>FREE</strong> platform for churches, including ongoing support and maintenance.</p>
				</header>
				<a className="link primary" href="javascript:;" onClick={() => {props.onOpenArticle('faithcode')}}></a>
			</article>
			<article>
				<header className="major">
					<span className="image"><img src={icon_founderchurch} alt="" /></span>
					<h3>Founder+Church<br />Program</h3>
					<p>Faith Sourced projects are made possible by the <strong>GENEROUS</strong> support of churches everywhere.</p>
				</header>
				<a className="link primary" href="javascript:;" onClick={() => {props.onOpenArticle('founderchurch')}}></a>
			</article>
		</section>
	</div>
)

Home.propTypes = {
	onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Home
