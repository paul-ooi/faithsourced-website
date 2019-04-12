import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo" alt="Faith Sourced Logo" style="background-image: url(\"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 350 350' style='enable-background:new 0 0 350 350;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%232C393F;%7D .st1%7Bfill:%23FFFFFF;%7D .st2%7Bfill:%23748088;%7D%0A%3C/style%3E%3Cg%3E%3Crect x='0.3' y='0.1' class='st0' width='350' height='350'/%3E%3Cpolygon class='st1' points='193.4,156.9 193.4,109.6 157.1,109.6 157.1,156.9 121,156.9 121,158.6 121,190.8 121,193.3 157.1,193.3 157.1,240.6 193.4,240.6 193.4,193.3 229.6,193.3 229.6,190.8 229.6,158.6 229.6,156.9 '/%3E%3Cpolygon class='st2' points='121,142.8 95.3,117.1 37.4,175.1 95.3,233.1 121,207.4 88.7,175.1 '/%3E%3Cpolygon class='st2' points='229.6,142.8 255.2,117.1 313.2,175.1 255.2,233.1 229.6,207.4 261.8,175.1 '/%3E%3C/g%3E%3C/svg%3E\"); background-size: contain;">
        </div>
        <div className="content">
            <div className="inner">
                <h1>Dimension</h1>
                <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
