import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo" alt="Faith Sourced Logo" style="background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzUwIDM1MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzUwIDM1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiMyQzM5M0Y7fS5zdDF7ZmlsbDojRkZGRkZGO30uc3Qye2ZpbGw6Izc0ODA4ODt9PC9zdHlsZT48Zz48cmVjdCB4PSIwLjMiIHk9IjAuMSIgY2xhc3M9InN0MCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSIzNTAiLz48cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE5My40LDE1Ni45IDE5My40LDEwOS42IDE1Ny4xLDEwOS42IDE1Ny4xLDE1Ni45IDEyMSwxNTYuOSAxMjEsMTU4LjYgMTIxLDE5MC44IDEyMSwxOTMuMyAxNTcuMSwxOTMuMyAxNTcuMSwyNDAuNiAxOTMuNCwyNDAuNiAxOTMuNCwxOTMuMyAyMjkuNiwxOTMuMyAyMjkuNiwxOTAuOCAyMjkuNiwxNTguNiAyMjkuNiwxNTYuOSAiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjEyMSwxNDIuOCA5NS4zLDExNy4xIDM3LjQsMTc1LjEgOTUuMywyMzMuMSAxMjEsMjA3LjQgODguNywxNzUuMSAiLz48cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjIyOS42LDE0Mi44IDI1NS4yLDExNy4xIDMxMy4yLDE3NS4xIDI1NS4yLDIzMy4xIDIyOS42LDIwNy40IDI2MS44LDE3NS4xICIvPjwvZz48L3N2Zz4=);">
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
