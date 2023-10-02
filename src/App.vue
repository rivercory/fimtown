<template>
  <router-view/>
</template>

<style lang="scss">
@import "assets/font.css";

html, body {
  background-color: var(--background-color);
}

:root.lightmode {
  --background-color: #ffffff;
}

:root.darkmode {
  --background-color: #212529;
}

.if-mobile {
  display: none;
}

.if-desktop {
  display: block;
}

@media screen and (max-width: 1400px) {
  .if-mobile {
    display: block;
  }

  .if-desktop {
    display: none;
  }
}
</style>