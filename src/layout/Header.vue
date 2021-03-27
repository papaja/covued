<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-body rounded" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">CO<img src="../assets/logo.png" width="30" />D</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 col-md-2 offset-md-5">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">Table</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chart" class="nav-link" active-class="active">Chart</router-link>
          </li>
        </ul>
      </div>      
    </div>
  </nav>
</header>
</template>