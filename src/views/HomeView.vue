<template>
  <NavMenu title="홈" />
  <div class="d-flex flex-nowrap">
    <div class="if-desktop">
      <SideMenu />
    </div>
    <div class="rounded-3 content">
      f
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import SideMenu from "@/components/SideMenu.vue";

export default {
  components: {SideMenu, NavMenu},
  mounted() {
  }
}
</script>

<style>
.content {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 83rem;
  background-color: var(--content-background-color);
}

[data-theme="light"] {
  --content-background-color: #e9ecef;
}

[data-theme="dark"] {
  --content-background-color: #495057;
}
</style>