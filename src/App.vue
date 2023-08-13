<template>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/font.css";

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