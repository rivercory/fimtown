<template>
  <NavMenu title="홈" />
  <div class="d-flex flex-nowrap">
    <div class="if-desktop">
      <SideMenu />
    </div>
    <div class="rounded-3 border" style="margin-left: 1rem; margin-right: 1rem; margin-top: 1rem; padding: 1rem; margin-bottom: 1rem; width: 83rem;">
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