<template>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/font.css";

html, body {
  background-color: var(--background-color);
}

[data-theme="light"] {
  --background-color: #fff4e6;
}

[data-theme="dark"] {
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