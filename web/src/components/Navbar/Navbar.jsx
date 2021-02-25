import React from "react";

import "./Navbar.css";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">MediTree</div>
        <nav>
          <ul>
            <li>
              <a href="/leaderboard">LeaderBoard</a>
            </li>
            <li>
              <a href="/streak">Streak</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}