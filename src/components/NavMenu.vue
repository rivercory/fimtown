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
}
}
</script>

<template>
  <nav class="navbar navbar-expand-lg border-bottom">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">엔써타운</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style lang="scss">
:root.lightmode {
}

:root.darkmode {
}

.navbar-brand {
  font-family: Pretendard-Regular;
  font-size: 1.5rem;
  color: #AA3291;
}
</style>