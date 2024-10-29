import React from 'react';
import './Sidebar.css'; // Импорт стилей (создадим позже)

const Sidebar = () => {
    return (
        <div class="sidebar">
        <h2>Menu</h2>
        <ul class="menu-list">
            <li><a href="/Menu/Drafts/Drafts.js">Drafts</a></li>
            <li><a href="/Menu/Settings/Settings.js">Settings</a>
                <ul class="submenu">
                    <li><a href="/Menu/Settings/Language/Language.js">Language</a></li>
                    <li><a href="/Menu/Settings/Currency/Currency.js">Currency</a></li>
                    <li><a href="/Menu/Settings/Format/Format.js">Format</a></li>
                    <li><a href="/Menu/Settings/Theme/Theme.js">Theme</a></li>
                </ul>
            </li>
            <li><a href="/Menu/Account/Account.js">Account</a></li>
            <li><a href="/Menu/Categories/Categories.js">Categories</a></li>
            <li><a href="/Menu/Transactions/Transactions.js">Transactions history</a></li>
            <li><a href="/Menu/Overview/Overview.js">Overview</a></li>
            <li><a href="/Menu/About/About.js">About</a>
                <ul class="submenu">
                    <li><a href="/Menu/About/Version/Version.js">Version</a></li>
                    <li><a href="/Menu/About/Support/Support.js">Support</a></li>
                    <li><a href="/Menu/About/Policy/Policy.js">Privacy policy</a></li>
                </ul>
            </li>
        </ul>
    </div>
    );
};

export default Sidebar;