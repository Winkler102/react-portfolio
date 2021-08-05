import React from 'react';

function Footer() {
    return (
        <footer className="flex-row px-1 space-between">
            <p></p>
            <ul className="flex-row">
                <li className="mx-1">
                    <a rel="noreferrer" target="_blank" href={'https://github.com/Winkler102'}>GitHub</a>
                </li>
                <li className="mx-1">
                    <a rel="noreferrer" target="_blank" href={'https://www.linkedin.com/in/benjamin-winkler-b48a1977/'}>LinkedIn </a>
                </li>
                <li className="mx-1 small">
                    Email: benjaminawinkler@gmail.com
                    <br />
                    Phone number: 1 (512) 966-5797
                </li>
            </ul>
        </footer>
    );
}

export default Footer;