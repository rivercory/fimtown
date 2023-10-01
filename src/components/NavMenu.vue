<script>
export default {
    name: 'NavMenu',
    props: {
        title: String
    },
    mounted() {
        if (window && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add("darkmode");
        } else {
            document.documentElement.classList.add("lightmode");
        }
},
methods: {
    onToggleDarkMode()
    {
        if (window) {
            console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);

            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                if (document.documentElement.classList.contains('darkmode')) {
                    document.documentElement.classList.remove("darkmode");
                    document.documentElement.classList.add("lightmode");
                } else {
                    document.documentElement.classList.remove("lightmode");
                    document.documentElement.classList.add("darkmode");
                }
            } else {
                if (document.documentElement.classList.contains('lightmode')) {
                    document.documentElement.classList.remove("lightmode");
                    document.documentElement.classList.add("darkmode");
                } else {
                    document.documentElement.classList.remove("darkmode");
                    document.documentElement.classList.add("lightmode");
                }
            }

        }
    }
,
}
}
</script>

<template>
  <div class="bg-body-tertiary">
  <nav class="navbar" aria-label="Light offcanvas navbar">
    <a class="navbar-brand" href="#">
      {{ title }}
    </a>
    <button
      class="btn"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbarLight"
      aria-controls="offcanvasNavbarLight"
      aria-label="Toggle navigation"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="#000000"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbarLight"
      aria-labelledby="offcanvasNavbarLightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">엔써타운</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          style="background-color: var(--offcanvas-close-button-background-color);"
        ></button>
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
            <button class="btn" @click="onToggleDarkMode">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                class="theme-toggle-icon bi bi-sun"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                />
              </svg>
            </button>
          </p>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>

<style lang="scss">
:root.lightmode {
  --theme-toggle-icon-color: #000000;
  --offcanvas-background-color: #ffffff;
  --offcanvas-foreground-color: #000000;
  --offcanvas-close-button-background-color: #ffffff;
}

:root.darkmode {
  --theme-toggle-icon-color: #ffffff;
  --offcanvas-background-color: #212529;
  --offcanvas-foreground-color: #FFFFFF;
  --offcanvas-close-button-background-color: #ced4da;
}

.nav-link {
  color: var(--offcanvas-foreground-color);
}

.nav-link:hover {
  color: var(--offcanvas-foreground-color);
}

.navbar {
  margin-left: 5rem;
  margin-right: 5rem;
}

.navbar-brand {
  font-family: Pretendard-Regular;
  font-size: 1.5rem;
  margin-left: 1rem;
  color: #000000;
}

.navbar-toggler {
  border: 0;
}

.offcanvas {
  background-color: var(--offcanvas-background-color);
}

.offcanvas-title {
  font-family: NanumSquareNeo-Variable;
  color: var(--offcanvas-foreground-color);
}

.theme-toggle-icon {
  fill: var(--theme-toggle-icon-color);
}

@media screen and (max-width: 1400px) {
  .navbar {
    margin: 0;
  }
}
</style>