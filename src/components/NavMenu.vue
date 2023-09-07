<script>
export default {
  name: 'NavMenu',
  props: {
    title: String
  }
}
</script>

<template>
  <nav class="navbar rounded-3" aria-label="Light offcanvas navbar">
    <a class="navbar-brand" href="#">
      {{ title }}
    </a>
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight"
            aria-controls="offcanvasNavbarLight" aria-label="Toggle navigation">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFFFFF" class="bi bi-list"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbarLight"
         aria-labelledby="offcanvasNavbarLightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">엔써타운</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link class="nav-link" to="/">홈</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="about">소개</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  background-color: #AA3291;
}

.navbar-brand {
  font-family: Pretendard-Regular;
  font-size: 1.5rem;
  margin-left: 1rem;
  color: #FFFFFF;
}

.navbar-toggler {
  border: 0;
}

.offcanvas-title {
  font-family: NanumSquareNeo-Variable;
}
</style>