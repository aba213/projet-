import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div>

  <div class="sidebar">

      <ul class="nav-links">
        <li>
          <a href="/Dashboard/Posts">
            <i class='bx bx-box' ></i>
            <span class="links_name">Posts</span>
          </a>
        </li>
        <li>
          <a href="/Dashboard/Cours">
            <i class='bx bx-box' ></i>
            <span class="links_name">Cours</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Messages</span>
          </a>
</li>

        <li class="log_out">
          <a href="#">
            <i class='bx bx-log-out'></i>
            <span class="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>

 



        </div>
    )
};

export default Dashboard