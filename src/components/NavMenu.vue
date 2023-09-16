<script>
export default {
  name: 'NavMenu',
  props: {
    title: String
  },
  methods: {
    changeTheme(newTheme) {
      document.documentElement.setAttribute('data-theme', newTheme)
    }
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
          <p class="theme-toggle rounded-3">
            <button class="btn" @click="changeTheme('light')">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="theme-toggle-icon bi bi-sun"
                   viewBox="0 0 16 16">
                <path
                    d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
              </svg>
            </button>
            <button class="btn" @click="changeTheme('dark')">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="theme-toggle-icon bi bi-moon"
                   viewBox="0 0 16 16">
                <path
                    d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
              </svg>
            </button>
          </p>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
[data-theme="light"] {
  --theme-toggle-icon-color: #000000;
  --offcanvas-background-color: #fff4e6;
}

[data-theme="dark"] {
  --theme-toggle-icon-color: #FFFFFF;
  --offcanvas-background-color: #212529;
}

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

.offcanvas {
  background-color: var(--offcanvas-background-color);
}

.offcanvas-title {
  font-family: NanumSquareNeo-Variable;
}

.theme-toggle {
  margin: 1rem;
}

.theme-toggle-icon {
  fill: var(--theme-toggle-icon-color);
}
</style>