import React from "react";
// import Button from "react-bootstrap/Button";
const Header = () => {
  return (
    <div className="heading-style">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">DART</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">DASHBOARD</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">RULES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">AUDIT</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
};

export default Header;
