import React from 'react';

function Footer() {
    return (
        <footer className="flex-row px-1 space-between">
            <p>Benjamin Winkler</p>
            <ul className="flex-row">
                <li className="mx-1">GitHub</li>
                <li className="mx-1">LinkedIn</li>
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