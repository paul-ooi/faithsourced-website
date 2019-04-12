import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo" alt="Faith Sourced Logo">
        </div>
        <div className="content">
            <div className="inner">
                <h1>Faith Sourced Software Foundation</h1>
                <p>Software as a Service</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About&nbsp;Us</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('faith')}}>Our&nbsp;Faith</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('community')}}>Community</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('projects')}}>Projects</a></li>
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
