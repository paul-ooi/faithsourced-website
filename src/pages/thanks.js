import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Footer from '../components/Footer'

const SecondPage = () => (
	<Layout>
		<div>
			<div id="wrapper">
				<div id="main" style={{display:'flex'}}>
					<header id="header">
						<div className="logo" alt="Faith Sourced Logo"></div>
						<div className="content">
							<div className="inner">
								<h1>Thank you!</h1>
								<p className="align-center">We are excited to hear about your interest in the Faith Sourced project. Expect to hear back from us within 1-2 business days, if not sooner.</p>
								<p>While you're waiting, we would love it if you took a few moments to follow us on <a href="https://twitter.com/faithsourced/" target="_blank">Twitter</a>, like us on <a href="https://facebook.com/faithsourced/" target="_blank">Facebook</a>, and subscribe to our <a href="https://youtube.com/channel/faithsourced/" target="_blank">YouTube</a> channel.</p>
								<Link to="/">Home</Link>
							</div>
						</div>
					</header>
				</div>
				<Footer/>
			</div>
			<div id="bg"></div>
		</div>
	</Layout>
)

export default SecondPage
