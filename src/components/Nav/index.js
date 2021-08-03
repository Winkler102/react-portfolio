import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        tabs = [],
        setCurrentTab,
        currentTab
    } = props;

    return (
        <header className="flex-row px-1 space-between">
            <h2>
                <a data-testid="link" href="/"> Benjamin Winkler </a>
            </h2>
            <nav className="space-between">
                <ul className="flex-row ">
                    {tabs.map((category) => (
                        <li
                            className={`mx-1 ${currentTab.name === category.name && 'navActive'
                                }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentTab(category);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;